import  { JackpotType, JACKPOT_CONFIG } from "@/types"

/**
 * Helper functions for jackpot calculations
 */
export const JackpotUtils = {
  /**
   * Convert coins to dollars for display
   */
  coinsToDollars: (coins: number): number => coins / 100,

  /**
   * Convert dollars to coins for storage
   */
  dollarsToCoins: (dollars: number): number => Math.round(dollars * 100),

  /**
   * Calculate contribution amount for a wager
   */
  calculateContribution: (wagerCoins: number, contributionRateBasisPoints: number): number => {
    return Math.floor((wagerCoins * contributionRateBasisPoints) / 10000)
  },

  /**
   * Check if a bet is eligible for a jackpot type
   */
  isEligibleForJackpot: (wagerCoins: number, jackpotType: JackpotType): boolean => {
    const config = JACKPOT_CONFIG[jackpotType]
    return wagerCoins >= config.minimumBetCoins
  },

  /**
   * Get eligible jackpot types for a wager amount
   */
  getEligibleJackpots: (wagerCoins: number): JackpotType[] => {
    const eligible: JackpotType[] = []

    if (wagerCoins >= JACKPOT_CONFIG.MINOR.minimumBetCoins) {
      eligible.push(JackpotType.MINOR)
    }
    if (wagerCoins >= JACKPOT_CONFIG.MAJOR.minimumBetCoins) {
      eligible.push(JackpotType.MAJOR)
    }
    if (wagerCoins >= JACKPOT_CONFIG.GRAND.minimumBetCoins) {
      eligible.push(JackpotType.GRAND)
    }

    return eligible
  },

  /**
   * Calculate total contribution for all eligible jackpots
   */
  calculateTotalContribution: (wagerCoins: number): number => {
    const eligibleJackpots = JackpotUtils.getEligibleJackpots(wagerCoins)

    return eligibleJackpots.reduce((total, jackpotType) => {
      const config = JACKPOT_CONFIG[jackpotType]
      return (
        total + JackpotUtils.calculateContribution(wagerCoins, config.contributionRateBasisPoints)
      )
    }, 0)
  },

  /**
   * Generate a random seed amount around the base seed (±10%)
   */
  generateRandomSeedAmount: (baseSeedCoins: number): number => {
    const variation = Math.floor(baseSeedCoins * 0.1) // 10% variation
    const randomOffset = Math.floor(Math.random() * (variation * 2 + 1)) - variation
    return baseSeedCoins + randomOffset
  },

  /**
   * Check if enough time has passed since last win
   */
  canWinJackpot: (lastWonAt: Date | null, minimumTimeBetweenWinsMinutes: number): boolean => {
    if (!lastWonAt) return true

    const now = new Date()
    const timeDiffMinutes = (now.getTime() - lastWonAt.getTime()) / (1000 * 60)
    return timeDiffMinutes >= minimumTimeBetweenWinsMinutes
  },

  /**
   * Determine if a spin wins a jackpot based on probability
   */
  checkJackpotWin: (probabilityPerMillion: number): boolean => {
    const randomNumber = Math.floor(Math.random() * 1000000)
    return randomNumber < probabilityPerMillion
  },
}
