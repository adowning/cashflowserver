// File: ai/src/routers/tournament.router.ts
import z from 'zod';
import { protectedProcedure, publicProcedure, o } from '../lib/orpc';
import { TournamentStatus, type JoinTournamentResponse, type TournamentCore, type TournamentDetailed, type TournamentParticipantInfo, type PrismaTournament, type PrismaTournamentParticipant, type PrismaTournamentReward } from '@/types';
import prisma from '../../prisma/';
import * as tournamentService from '../services/tournament.service';

// Zod Schemas
const ListTournamentsQuerySchema = z.object({
  status: z.nativeEnum(TournamentStatus).optional(),
  gameId: z.string().cuid().optional(),
  activeNow: z.boolean().optional(),
}).optional();

const TournamentIdSchema = z.object({
  tournamentId: z.string().min(1),
});

const GetLeaderboardQuerySchema = z.object({
  tournamentId: z.string().min(1),
  limit: z.number().int().min(1).max(100).optional().default(10),
  offset: z.number().int().min(0).optional().default(0),
});

// DTO Mapping Helper
const mapPrismaToTournamentCore = (
  tournament: PrismaTournament & {
    participants?: PrismaTournamentParticipant[];
    tournamentGames?: Array<{ games: { name: string; thumbnailUrl?: string | null } }>;
    rewards?: PrismaTournamentReward[];
    user?: { id: string; username: string } | null;
  }
): TournamentCore => {
  const startTime = new Date(tournament.startTime).toISOString();
  const endTime = tournament.endTime ? new Date(tournament.endTime).toISOString() : null;

  return {
    id: tournament.id,
    name: tournament.name,
    description: tournament.description || null,
    startTime,
    endTime,
    targetScore: tournament.targetScore || null,
    status: tournament.status as TournamentStatus,
    participantCount: tournament.participants?.length ?? 0,
    prizeFund: tournament.rewards?.reduce((acc, reward) => acc + (parseInt(reward.description) || 0), 0) || 'Dynamic',
  };
};

export const tournamentRouter = o.router({
  list: publicProcedure
    .input(ListTournamentsQuerySchema)
    .handler(async ({ input }): Promise<TournamentCore[]> => {
      const whereClause: any = {};
      if (input?.status) whereClause.status = input.status;
      if (input?.activeNow) {
        const now = new Date();
        whereClause.startTime = { lte: now };
        whereClause.endTime = { gte: now };
        whereClause.status = TournamentStatus.ACTIVE;
      }
      const tournaments = await prisma.tournament.findMany({
        where: whereClause,
        include: { participants: true, rewards: true },
        orderBy: { startTime: 'desc' },
      });
      return tournaments.map(mapPrismaToTournamentCore);
    }),

  getDetails: publicProcedure
    .input(TournamentIdSchema)
    .handler(async ({ input }): Promise<TournamentDetailed | null> => {
      const tournament = await prisma.tournament.findUnique({
        where: { id: input.tournamentId },
        include: {
          tournamentGames: { include: { games: true } },
          // FINAL FIX: Remove the 'select' on the winner relation
          rewards: { include: { winner: true } },
          participants: { include: { user: true }, orderBy: { score: 'desc' } },
          user: true,
        },
      });

      if (!tournament) return null;

      const participantsInfo: TournamentParticipantInfo[] = tournament.participants.map((p, index) => ({
        userId: p.userId,
        username: p.user?.username || 'Unknown User',
        avatarUrl: p.user?.avatar || null,
        score: p.score,
        rank: p.rank ?? index + 1,
        joinedAt: new Date(p.joinedAt).toISOString(),
      }));

      return {
        ...mapPrismaToTournamentCore(tournament),
        eligibleGames: tournament.tournamentGames?.map((tg) => ({ gameId: tg.A, name: tg.games.name, pointMultiplier: 1.0, thumbnailUrl: tg.games.thumbnailUrl ?? undefined })) || [],
        rewards: tournament.rewards?.map((r) => ({ id: r.id, rank: r.rank, description: r.description, isClaimed: r.isClaimed || false, winnerId: r.winnerId || null, winnerUsername: r.winner?.username || null })) || [],
        participants: participantsInfo,
        createdBy: tournament.user ? { id: tournament.user.id, username: tournament.user.username } : undefined,
        createdAt: new Date(tournament.createdAt).toISOString(),
        updatedAt: new Date(tournament.updatedAt).toISOString(),
      };
    }),

  getLeaderboard: publicProcedure
    .input(GetLeaderboardQuerySchema)
    .handler(async ({ input }): Promise<TournamentParticipantInfo[]> => {
      const participants = await tournamentService.getTournamentLeaderboard(input.tournamentId, input.limit);
      return participants.map((p, index) => ({
        userId: p.userId,
        username: p.user?.username ?? 'Unknown User',
        avatarUrl: p.user?.avatar,
        score: p.score,
        rank: input.offset + index + 1,
        joinedAt: new Date(p.joinedAt).toISOString(),
      }));
    }),

  join: protectedProcedure
    .input(TournamentIdSchema)
    .handler(async ({ context, input }): Promise<JoinTournamentResponse> => {
      const userId = context.session.user.id;
      const { tournamentId } = input;
      const tournament = await prisma.tournament.findUnique({ where: { id: tournamentId } });
      if (!tournament) throw new Error('Tournament not found.');
      if (tournament.status !== TournamentStatus.ACTIVE && tournament.status !== TournamentStatus.PENDING) throw new Error('Tournament is not active or upcoming.');
      if (tournament.endTime && tournament.endTime < new Date()) throw new Error('Tournament has already ended.');
      const existingParticipant = await prisma.tournamentParticipant.findUnique({ where: { tournamentId_userId: { tournamentId, userId } } });
      if (existingParticipant) throw new Error('User already joined this tournament.');
      const participant = await prisma.tournamentParticipant.create({ data: { tournamentId, userId, score: 0, joinedAt: new Date() }, include: { user: true } });
      return { userId: participant.userId, username: participant.user?.username ?? 'Unknown User', avatarUrl: participant.user?.avatar, score: participant.score, rank: null, joinedAt: participant.joinedAt.toISOString() };
    }),
});