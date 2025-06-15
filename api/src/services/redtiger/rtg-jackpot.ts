import { type RTGSpinRequestDto, type ProviderSpinResponseData, type RTGSpinResponseDto,  } from '@/types'
import prisma from 'prisma'

import { jackpotService } from '../common/jackpot.service'
import  { GameSpinService } from '../common/spin.service'
import { JackpotUtils } from '@/utils/jackpot.utils'
/**
 * Integration helper for adding jackpot processing to RTG spins
 */
export class RTGJackpotIntegration {
  private gameSpinService: GameSpinService
  prisma: typeof prisma

  constructor() {
    this.prisma = prisma
    this.gameSpinService = new GameSpinService()
  }

  /**
   * Enhanced RTG spin handler with jackpot processing
   * This should replace or be called from the existing rtgSpin handler
   */
  async processRTGSpinWithJackpots(
    input: RTGSpinRequestDto,
    userId: string,
    originalRTGResponse: ProviderSpinResponseData
  ): Promise<RTGSpinResponseDto> {
    try {
      // Extract spin data from RTG response
      const wagerAmount = this.parseStakeAmount(input.stake)
      const winAmount = this.parseWinAmount(originalRTGResponse.game?.win?.total || '0')
      const roundId = originalRTGResponse.transactions?.roundId || `round-${Date.now()}`

      // Find or create game session
      const gameSession = await this.findOrCreateGameSession(input.sessionId, userId, input.gameId)

      // Get current spin number for this session
      const currentSpinCount = await this.prisma.gameSpin.count({
        where: { gameSessionId: gameSession.id },
      })

      // Process the game spin with jackpot contributions
      const spinResult = await this.gameSpinService.processGameSpin({
        gameSessionId: gameSession.id,
        sessionId: input.sessionId,
        spinNumber: currentSpinCount + 1,
        wagerAmount,
        grossWinAmount: winAmount,
        currencyId: input.currency,
        spinData: {
          rtgRoundId: roundId,
          rtgResponse: originalRTGResponse,
          stake: input.stake,
          actions: input.actions,
        },
      })

      // Enhance the RTG response with jackpot information
      const enhancedResponse = await this.enhanceRTGResponseWithJackpots(
        originalRTGResponse,
        spinResult
      )

      return {
        success: true,
        result: enhancedResponse,
      }
    } catch (error) {
      console.error('Error processing RTG spin with jackpots:', error)

      // Return original RTG response if jackpot processing fails
      // This ensures game functionality continues even if jackpots have issues
      return {
        success: true,
        result: originalRTGResponse,
      }
    }
  }

  /**
   * Parse stake amount from various formats
   */
  private parseStakeAmount(stake: number | string): number {
    if (typeof stake === 'number') {
      return JackpotUtils.dollarsToCoins(stake)
    }

    const stakeFloat = parseFloat(stake)
    return JackpotUtils.dollarsToCoins(stakeFloat)
  }

  /**
   * Parse win amount from string format
   */
  private parseWinAmount(winTotal: string): number {
    const winFloat = parseFloat(winTotal)
    return JackpotUtils.dollarsToCoins(winFloat)
  }

  /**
   * Find existing game session or create a new one
   */
  private async findOrCreateGameSession(sessionId: string, userId: string, gameId: string) {
    let gameSession = await this.prisma.gameSession.findUnique({
      where: { id: sessionId },
      include: {
        game: {
          select: {
            id: true,
            category: true,
            name: true,
          },
        },
      },
    })

    if (!gameSession) {
      // Create new game session
      gameSession = await this.prisma.gameSession.create({
        data: {
          id: sessionId,
          gameId,
          userId,
          sessionData: {},
          totalWagered: 0,
          totalWon: 0,
          isActive: true,
        },
        include: {
          game: {
            select: {
              id: true,
              category: true,
              name: true,
            },
          },
        },
      })
    }

    return gameSession
  }

  /**
   * Enhance RTG response with jackpot information
   */
  private async enhanceRTGResponseWithJackpots(
    originalResponse: ProviderSpinResponseData,
    spinResult: any
  ): Promise<ProviderSpinResponseData> {
    const enhancedResponse = { ...originalResponse }

    // Add jackpot information to the response
    if (spinResult.jackpotContributions.contributions.length > 0) {
      enhancedResponse.jackpots = {
        contributions: spinResult.jackpotContributions.contributions.map((contrib: any) => ({
          type: contrib.jackpotType,
          amount: contrib.contributionAmountDollars,
          amountCoins: contrib.contributionAmountCoins,
        })),
        totalContribution: JackpotUtils.coinsToDollars(
          spinResult.jackpotContributions.totalContributionCoins
        ),
      }
    }

    // Add jackpot win information if there was a win
    if (spinResult.jackpotContributions.jackpotWin) {
      const jackpotWin = spinResult.jackpotContributions.jackpotWin

      enhancedResponse.jackpots = {
        type: jackpotWin.jackpotType,
        amount: jackpotWin.winAmountDollars,
        amountCoins: jackpotWin.winAmountCoins,
        winId: jackpotWin.id,
      }

      // Update the user's balance in the response to include jackpot win
      if (enhancedResponse.user?.balance?.cash?.atEnd) {
        const currentBalance = parseFloat(enhancedResponse.user.balance.cash.atEnd)
        const newBalance = currentBalance + jackpotWin.winAmountDollars
        enhancedResponse.user.balance.cash.atEnd = newBalance.toFixed(2)
      }

      // Update the total win amount to include jackpot
      if (enhancedResponse.game?.win?.total) {
        const currentWin = parseFloat(enhancedResponse.game.win.total)
        const newWin = currentWin + jackpotWin.winAmountDollars
        enhancedResponse.game.win.total = newWin.toFixed(2)
      }
    }

    // Add current jackpot amounts for display
    // const jackpotService = new (await import('../common/jackpot.service'))
    const eligibileTypes = ['MAJOR', 'MINOR', 'GRAND']
    const currentJackpots = await jackpotService.getActiveJackpots(eligibileTypes)

    // Add currentJackpots to the enhanced response
    const responseWithJackpots = enhancedResponse as any
    responseWithJackpots.currentJackpots = currentJackpots.map((jackpot: any) => ({
      type: jackpot.type,
      amount: JackpotUtils.coinsToDollars(jackpot.currentAmountCoins),
      amountCoins: jackpot.currentAmountCoins,
    }))

    return enhancedResponse
  }

  /**
   * Get jackpot eligibility for a wager amount
   */
  async getJackpotEligibility(wagerDollars: number): Promise<{
    eligible: boolean
    eligibleJackpots: string[]
    totalContributionDollars: number
  }> {
    const wagerCoins = JackpotUtils.dollarsToCoins(wagerDollars)
    const eligibleJackpots = JackpotUtils.getEligibleJackpots(wagerCoins)
    const totalContribution = JackpotUtils.calculateTotalContribution(wagerCoins)

    return {
      eligible: eligibleJackpots.length > 0,
      eligibleJackpots,
      totalContributionDollars: JackpotUtils.coinsToDollars(totalContribution),
    }
  }

  /**
   * Initialize jackpots on startup
   */
  async initialize(): Promise<void> {
    // await this.gameSpinService.initializeJackpots()
  }
}

/**
 * Example of how to integrate this into the existing RTG spin handler
 */
export async function integrateJackpotsIntoRTGSpin() {
  /*
  // In your existing rtgSpin handler (server/src/routers/game.router.ts):

  rtgSpin: protectedProcedure
    .input(z.custom<RTGSpinRequestDto>())
    .output(z.custom<RTGSpinResponseDto>())
    .handler(async ({ input, context }): Promise<RTGSpinResponseDto> => {

      // 1. Your existing RTG API call logic here
      const originalRTGResponse = await callRTGSpinAPI(input)

      // 2. Add jackpot processing
      const rtgJackpotIntegration = new RTGJackpotIntegration(prisma)
      const enhancedResponse = await rtgJackpotIntegration.processRTGSpinWithJackpots(
        input,
        context.session.user.id,
        originalRTGResponse
      )

      return enhancedResponse
    })
  */
}

// Export types for enhanced RTG responses
export interface EnhancedProviderSpinResponseData extends ProviderSpinResponseData {
  jackpots?: {
    contributions: Array<{
      type: string
      amount: number
      amountCoins: number
    }>
    totalContribution: number
  }
  jackpotWin?: {
    type: string
    amount: number
    amountCoins: number
    winId: string
  }
  currentJackpots?: Array<{
    type: string
    amount: number
    amountCoins: number
  }>
}
