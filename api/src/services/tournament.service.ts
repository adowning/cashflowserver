// File: ai/src/services/common/tournament.service.ts
import prisma from '../../prisma/'
import { AppEvents, typedAppEventEmitter } from "@/lib/events";
import { TournamentStatus, type UserProfile, type TournamentCreatedPayload, type TournamentParticipantType, type TournamentParticipantJoinedPayload, type TournamentLeaderboardUpdatedPayload, type TournamentStartedPayload, type TournamentEndedPayload } from "@/types";
import type { Tournament, Prisma } from "prisma/generated/client";

// It's better to define input/update types here or in a shared location
// to decouple the service from specific Zod schemas in the router.
export interface CreateTournamentInput {
  name: string;
  description?: string;
  startTime: Date;
  endTime?: Date;
  targetScore?: number;
  eligibleGames?: Array<{ gameId: string; pointMultiplier?: number }>;
  rewards?: Array<{ rank: number; description: string }>;
  createdByUserId?: string;
}

export interface UpdateTournamentInput {
  name?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  targetScore?: number;
  status?: TournamentStatus;
}

/**
 * Creates a new tournament.
 */
export async function createTournament(adminUser: UserProfile, input: CreateTournamentInput): Promise<Tournament> {
  // Authorization check
  if (adminUser.role !== 'ADMIN' && adminUser.role !== 'OWNER') {
    throw new Error('Unauthorized: Only admins or owners can create tournaments.');
  }

  const tournament = await prisma.tournament.create({
    data: {
      name: input.name,
      description: input.description,
      startTime: input.startTime,
      endTime: input.endTime,
      targetScore: input.targetScore,
      status: TournamentStatus.PENDING,
      createdByid: adminUser.id,
      rewards: input.rewards ? { create: input.rewards.map(r => ({ rank: r.rank, description: r.description })) } : undefined,
    },
    include: { rewards: true },
  });

  if (input.eligibleGames && input.eligibleGames.length > 0) {
    await prisma.tournamentGames.createMany({
      data: input.eligibleGames.map((g) => ({ A: g.gameId, B: tournament.id })),
    });
  }

  typedAppEventEmitter.emit(AppEvents.TOURNAMENT_CREATED, {
    tournamentId: tournament.id,
    name: tournament.name,
    startTime: tournament.startTime.toISOString(),
  } as TournamentCreatedPayload);

  return tournament;
}

/**
 * Records points for a user in active tournaments for a specific game.
 * This function is designed to be called within a transaction.
 */
export async function recordTournamentPoints(
  tx: Prisma.TransactionClient, // Expects a transaction client
  userId: string,
  gameId: string,
  pointsEarnedInGame: number,
  gamePlayIdentifier: string
): Promise<string[]> {
  const now = new Date();
  const tournamentIdsToUpdate: string[] = [];

  const activeParticipations = await tx.tournamentParticipant.findMany({
    where: {
      userId,
      tournament: {
        status: TournamentStatus.ACTIVE,
        startTime: { lte: now },
        OR: [{ endTime: { gte: now } }, { endTime: null }],
        tournamentGames: { some: { A: gameId } },
      },
    },
    include: {
      tournament: { include: { tournamentGames: true } },
    },
  });

  if (activeParticipations.length === 0) {
    return [];
  }

  for (const participation of activeParticipations) {
    // Assuming a default point multiplier of 1.0 for now.
    const pointsForTournament = Math.floor(pointsEarnedInGame * 1.0);
    if (pointsForTournament <= 0) continue;

    await tx.tournamentParticipant.update({
      where: { id: participation.id },
      data: { score: { increment: pointsForTournament } },
    });

    if (!tournamentIdsToUpdate.includes(participation.tournamentId)) {
      tournamentIdsToUpdate.push(participation.tournamentId);
    }
  }

  return tournamentIdsToUpdate;
}

/**
 * Gets the leaderboard for a tournament.
 */
export async function getTournamentLeaderboard(
  tournamentId: string,
  limit: number = 100
): Promise<TournamentParticipantType[]> {
  return prisma.tournamentParticipant.findMany({
    where: { tournamentId },
    orderBy: [{ score: 'desc' }, { joinedAt: 'asc' }],
    take: limit,
    include: {
      user: { select: { id: true, username: true, avatar: true } },
    },
  }) as unknown as TournamentParticipantType[];
}

/**
 * Publishes leaderboard updates via WebSocket.
 */
export async function publishLeaderboardUpdate(tournamentId: string) {
  const leaderboard = await getTournamentLeaderboard(tournamentId, 20);
  typedAppEventEmitter.emit(AppEvents.TOURNAMENT_LEADERBOARD_UPDATED, {
    tournamentId,
    leaderboard: leaderboard.map((p) => ({
      userId: p.userId,
      username: p.user.username || 'Player',
      score: p.score,
      rank: p.rank,
      avatarUrl: p.user.avatar,
    })),
  } as TournamentLeaderboardUpdatedPayload);
}

/**
 * Initializes a scheduler to automatically start and end tournaments.
 */
export function initTournamentScheduler() {
  console.log('Initializing Tournament Scheduler...');
  setInterval(async () => {
    // Logic to start pending tournaments and end active ones
  }, 60 * 1000); // Runs every minute
  console.log('Tournament scheduler initialized.');
}