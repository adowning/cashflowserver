import type { PrismaUserProfile, PrismaJackpotType } from './prisma'

/**
 * Jackpot Types and Interfaces
 * All amounts are in coins (100 coins = $1.00)
 */

// Re-export the Prisma-generated JackpotType enum to avoid conflicts
export type JackpotType = PrismaJackpotType

// Create enum-like object for runtime usage
export const JackpotType = {
  MINOR: 'MINOR' as const,
  MAJOR: 'MAJOR' as const,
  GRAND: 'GRAND' as const,
} as const

export interface Jackpot {
  id: string
  type: JackpotType
  currentAmountCoins: number // Amount in coins (100 coins = $1)
  seedAmountCoins: number // Base amount when reset
  minimumBetCoins: number // Minimum bet to be eligible
  contributionRateBasisPoints: number // Rate in basis points (10000 = 100%)
  probabilityPerMillion: number // Probability per million spins
  minimumTimeBetweenWinsMinutes: number // Minimum time between wins
  lastWonAt: Date | null
  lastWonBy: string | null // UserProfile ID
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  lastWinner?: PrismaUserProfile
}

export interface JackpotContribution {
  id: string
  jackpotId: string
  gameSpinId: string
  contributionAmountCoins: number // Amount in coins contributed to this jackpot
  createdAt: Date
}

export interface JackpotWin {
  id: string
  jackpotId: string
  winnerId: string
  winAmountCoins: number // Amount won in coins
  gameSpinId: string
  transactionId: string | null
  createdAt: Date
  jackpot?: Jackpot
  winner?: PrismaUserProfile
}

/**
 * Jackpot Configuration Constants
 */
export const JACKPOT_CONFIG = {
  MINOR: {
    type: JackpotType.MINOR,
    seedAmountCoins: 100, // $1.00
    minimumBetCoins: 1, // $0.01
    contributionRateBasisPoints: 10, // 0.1%
    probabilityPerMillion: 1000, // 0.1% chance per spin
    minimumTimeBetweenWinsMinutes: 5, // 5 minutes
  },
  MAJOR: {
    type: JackpotType.MAJOR,
    seedAmountCoins: 1000, // $10.00
    minimumBetCoins: 100, // $1.00
    contributionRateBasisPoints: 5, // 0.05%
    probabilityPerMillion: 100, // 0.01% chance per spin
    minimumTimeBetweenWinsMinutes: 30, // 30 minutes
  },
  GRAND: {
    type: JackpotType.GRAND,
    seedAmountCoins: 10000, // $100.00
    minimumBetCoins: 400, // $4.00
    contributionRateBasisPoints: 2.5, // 0.025%
    probabilityPerMillion: 10, // 0.001% chance per spin
    minimumTimeBetweenWinsMinutes: 120, // 2 hours
  },
} as const


/**
 * DTOs for API responses
 */
export interface JackpotDisplayDto {
  id: string
  type: JackpotType
  currentAmountDollars: number // Converted to dollars for display
  lastWonAt: Date | null
  lastWinnerUsername: string | null
}

export interface JackpotContributionDto {
  jackpotType: JackpotType
  contributionAmountCoins: number
  contributionAmountDollars: number
}

export interface JackpotWinDto {
  id: string
  jackpotType: JackpotType
  winAmountCoins: number
  winAmountDollars: number
  winnerUsername: string
  gameSpinId: string
  createdAt: Date
}

/**
 * Request/Response types for jackpot operations
 */
export interface GetJackpotsResponse {
  jackpots: JackpotDisplayDto[]
}

export interface ProcessJackpotContributionsRequest {
  gameSpinId: string
  wagerCoins: number
  gameCategory: string // Should be 'SLOTS' for jackpot eligibility
}

export interface ProcessJackpotContributionsResponse {
  contributions: JackpotContributionDto[]
  totalContributionCoins: number
  jackpotWin?: JackpotWinDto
}
