import type { PrismaGame as Game, PrismaUserProfile as UserProfile,  } from './prisma'
import type { PrismaTournamentParticipant } from './prisma'

// --- Basic Tournament Information ---

export interface TeamBasedTournament {
  id: number
  history_id: number
  historyId: number
  title: string
  slug: string
  image: string
  isActive: boolean
  currentTime: Date
  start: string
  end: string
  betMin: number
  betsMin: number
  duration: string
  isOpen: boolean
  startDate: Date
  startTime: string
  outplayAttempts: number
  mode: string
  winners: UserProfile[]
  isAutoSubscription: boolean
  betsOn: string
  betLimit: number
  minBetLimit: number
  maxBetLimitShort: string
  info: string
  isMajor: boolean
  prizeLimit: number
  prizeFund: string
  prize: string
  raceType: string
  prizes: { [key: string]: { coins: number } }[]
  prizeTotal: [coins: number, entries: number]
  additionalPrizes: any[]
  gamesIds: number[]
  games: Game[]
  gameSlug: string
  totalGamesCount: number
  isTeamBased: boolean
  // prizeTotal:         PrizeTotal;
  teams: Team[]
  images: Images
  isVipTournament: boolean
  isTournamentGame: boolean
  isSubscribed: boolean
}

export interface Images {
  imageBanner: string
  imagePrizeCard: string
  imageBannerMobile: string
  bannerDesktop: string
  bannerMobile: string
  retinaBannerDesktop: string
  retinaBannerMobile: string
}

export interface Team {
  id: number
  title: string
  totalPoints: number
  isPlayerTeam: boolean
}

export interface TournamentGameInfo {
  gameId: string
  name: string // From related PrismaGame
  pointMultiplier: number
  // Add any other relevant game details you want to show
  thumbnailUrl?: string // Example: if Game model has this
}

export interface TournamentRewardInfo {
  id: string
  rank: number
  description: string
  // currencyId?: string;
  // amount?: number;
  // itemId?: string;
  isClaimed: boolean
  winnerId?: string | null
  winnerUsername?: string | null // If you want to include this directly
}
export type TournamentParticipantType = PrismaTournamentParticipant & {
  user: UserProfile
}

export interface TournamentCore {
  prizeFund: any
  id: string
  name: string
  description?: string | null
  startTime: string // ISO Date string
  endTime?: string | null // ISO Date string
  targetScore?: number | null
  status: TournamentStatus
  participantCount?: number // Often useful for list views
}

// For detailed views of a tournament
export interface TournamentDetailed extends TournamentCore {
  eligibleGames: TournamentGameInfo[]
  rewards: TournamentRewardInfo[]
  participants?: TournamentParticipantInfo[] // Usually for a leaderboard snapshot
  createdBy?: {
    id: string
    username: string
  }
  createdAt: string // ISO Date string
  updatedAt: string // ISO Date string
}

// --- Tournament Participant & Leaderboard ---

export interface TournamentParticipantInfo {
  userId: string
  username: string
  avatarUrl?: string | null // From User's Profile
  score: number
  rank?: number | null
  joinedAt: string // ISO Date string
}

// --- API Request & Response Types (DTOs) ---

// GET /tournaments
export interface ListTournamentsRequestQuery {
  status?: TournamentStatus
  gameId?: string // CUID
  activeNow?: boolean
}
export type ListTournamentsResponse = TournamentCore[]

// GET /tournaments/:id
export type GetTournamentDetailsResponse = TournamentDetailed

// GET /tournaments/:id/leaderboard
export interface GetTournamentLeaderboardRequestQuery {
  limit?: number
  offset?: number // For pagination
}
export type GetTournamentLeaderboardResponse = TournamentParticipantInfo[]

// POST /tournaments/:id/join
export type JoinTournamentResponse = TournamentParticipantInfo // Or a success message

// --- Admin API Request & Response Types ---

// POST /admin/tournaments
export interface CreateTournamentAdminRequest {
  name: string
  description?: string
  startTime: string // ISO Date string for Zod compatibility on server
  endTime?: string // ISO Date string
  targetScore?: number
  eligibleGames?: Array<{
    gameId: string // CUID
    pointMultiplier?: number
  }>
  rewards?: Array<{
    rank: number
    description: string
    // currencyId?: string;
    // amount?: number;
  }>
}
export type CreateTournamentAdminResponse = TournamentDetailed

// PUT /admin/tournaments/:id
export interface UpdateTournamentAdminRequest {
  name?: string
  description?: string
  startTime?: string // ISO Date string
  endTime?: string // ISO Date string
  targetScore?: number
  status?: TournamentStatus
  // Note: Updating eligibleGames and rewards via PUT can be complex.
  // Consider if they should be managed by separate dedicated endpoints (e.g., POST/DELETE on /admin/tournaments/:id/games)
  // If included here, the DTO would be similar to CreateTournamentAdminRequest but with all fields optional.
  eligibleGames?: Array<{
    // This would likely replace all existing games if sent
    gameId: string // CUID
    pointMultiplier?: number
  }>
  rewards?: Array<{
    // This would likely replace all existing rewards
    rank: number
    description: string
  }>
}
export type UpdateTournamentAdminResponse = TournamentDetailed

// --- Event Payloads (for typedAppEventEmitter and WebSockets) ---
// These should align with what you define in '@/events' AppEvents

export interface TournamentCreatedPayload {
  tournamentId: string
  name: string
  startTime: string // ISO Date string
  // Add any other relevant fields for a "new tournament" notification
}

export interface TournamentStartedPayload {
  tournamentId: string
  name: string
  endTime?: string | null // ISO Date string
}

export interface TournamentEndedPayload {
  tournamentId: string
  name: string
  // Optionally include final top N results or a summary
  // results?: Pick<TournamentParticipantInfo, 'userId' | 'username' | 'score' | 'rank'>[];
}

export interface TournamentParticipantJoinedPayload {
  tournamentId: string
  userId: string
  username: string
  // newParticipantCount?: number; // Could be useful for client updates
}

export interface TournamentLeaderboardUpdatedPayload {
  tournamentId: string
  leaderboard: Array<
    Pick<TournamentParticipantInfo, 'userId' | 'username' | 'score' | 'rank' | 'avatarUrl'>
  >
}

// You might also want more granular event payloads, e.g., for individual score updates:
export interface TournamentScoreUpdatedPayload {
  tournamentId: string
  userId: string
  newScore: number
  newRank?: number // Optional, if rank changes frequently
  changeInScore: number // Helpful for animations/notifications
}
// export { Role, UserStatus /*, etc. */ } from '../prisma/interfaces' // Assuming shared is your Prisma client package
// Or define them manually if you don't want to expose Prisma directly
export enum TournamentStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
