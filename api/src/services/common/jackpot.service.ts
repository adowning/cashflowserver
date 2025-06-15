// ai/src/services/common/jackpot.service.ts
import { SQL } from 'bun'

import { CACHE_KEYS, cacheService } from './redis.service'
import { JACKPOT_CONFIG, type JackpotType } from '@/types'
import { TransactionStatus } from 'prisma/generated/enums'
import { JackpotUtils } from '@/utils/jackpot.utils'

const jackpotSql = new SQL(
  'postgresql://postgres.acqrudqzutnwrvmvlshc:acqrudqzutnwrvmvlshc@aws-0-us-east-2.pooler.supabase.com:5432/postgres',
  {
    // prepare: false, // Disable persisting named prepared statements on the server
  }
)

interface AsyncJackpotProcessingRequest {
  gameSpinId: string
  userId: string
  operatorId: string
  walletId: string
  wagerAmountCents: number
  gameCategory: string
  providerRoundId: string
  providerName: string
  gameId: string
}

interface JackpotProcessingResult {
  contributions: Array<{
    jackpotType: string
    contributionAmountCoins: number
    contributionAmountDollars: number
  }>
  jackpotWin?: {
    id: string
    jackpotType: string
    winAmountCoins: number
    winAmountDollars: number
    gameSpinId: string
  }
  jackpotWinTransactionId?: string
}

class JackpotService {
  async initializeJackpots(): Promise<void> {
    const [existingJackpots] = await jackpotSql`SELECT COUNT(*) as count FROM jackpots`

    if (existingJackpots.count === 0) {
      console.log('Initializing jackpots...')

      await jackpotSql.begin(async (tx) => {
        for (const [, config] of Object.entries(JACKPOT_CONFIG)) {
          await tx`
            INSERT INTO jackpots (
              id, type, "currentAmountCoins", "seedAmountCoins", "minimumBetCoins",
              "contributionRateBasisPoints", "probabilityPerMillion", "minimumTimeBetweenWinsMinutes",
              "isActive", "createdAt", "updatedAt"
            ) VALUES (
              public.generate_cuid(), ${config.type}, ${config.seedAmountCoins}, ${config.seedAmountCoins},
              ${config.minimumBetCoins}, ${config.contributionRateBasisPoints}, ${config.probabilityPerMillion},
              ${config.minimumTimeBetweenWinsMinutes}, true, NOW(), NOW()
            )
          `
        }
      })

      console.log('Jackpots initialized successfully')
    }
  }

  /**
   * Process jackpot contributions and wins asynchronously
   * This runs after the main spin transaction completes
   */
  async processJackpots(
    request: AsyncJackpotProcessingRequest
  ): Promise<JackpotProcessingResult> {
    const {
      gameSpinId,
      userId,
      operatorId,
      walletId,
      wagerAmountCents,
      gameCategory,
      providerRoundId,
      providerName,
      gameId,
    } = request

    console.log(`🎰 [ASYNC] Starting jackpot processing for spin ${gameSpinId}`)

    if (gameCategory !== 'SLOTS') {
      console.log(`🎰 [ASYNC] Game category ${gameCategory} not eligible for jackpots`)
      return { contributions: [] }
    }

    const eligibleJackpotTypes = JackpotUtils.getEligibleJackpots(wagerAmountCents)

    if (eligibleJackpotTypes.length === 0) {
      console.log(`🎰 [ASYNC] Wager ${wagerAmountCents} coins not eligible for any jackpots`)
      return { contributions: [] }
    }

    console.log(
      `🎰 [ASYNC] Processing ${eligibleJackpotTypes.length} eligible jackpot types: ${eligibleJackpotTypes.join(', ')}`
    )

    try {
      const activeJackpots = await this.getActiveJackpots(eligibleJackpotTypes)

      if (activeJackpots.length === 0) {
        console.log(
          `🎰 [ASYNC] No active jackpots found for types: ${eligibleJackpotTypes.join(', ')}`
        )
        return { contributions: [] }
      }

      const result = await jackpotSql.begin(async (tx) => {
        const contributions: any[] = []
        let jackpotWin: any = null
        let jackpotWinTransaction: any = null

        for (const jackpot of activeJackpots) {
          const config = JACKPOT_CONFIG[jackpot.type as keyof typeof JACKPOT_CONFIG]
          if (!config) {
            console.warn(`🎰 [ASYNC] Unknown jackpot type: ${jackpot.type}`)
            continue
          }

          const contributionAmount = JackpotUtils.calculateContribution(
            wagerAmountCents,
            config.contributionRateBasisPoints
          )

          if (contributionAmount > 0) {
            console.log(
              `🎰 [ASYNC] Contributing ${contributionAmount} coins to ${jackpot.type} jackpot`
            )

            await tx`
              INSERT INTO jackpot_contributions (id, "jackpotId", "gameSpinId", "contributionAmountCoins", "createdAt")
              VALUES (public.generate_cuid(), ${jackpot.id}, ${gameSpinId}, ${contributionAmount}, NOW())
            `

            await tx`
              UPDATE jackpots SET "currentAmountCoins" = "currentAmountCoins" + ${contributionAmount}
              WHERE id = ${jackpot.id}
            `

            contributions.push({
              jackpotType: jackpot.type,
              contributionAmountCoins: contributionAmount,
              contributionAmountDollars: JackpotUtils.coinsToDollars(contributionAmount),
            })

            if (!jackpotWin && this.shouldWinJackpot(jackpot)) {
              console.log(`🎰 [ASYNC] JACKPOT WIN! ${jackpot.type} jackpot triggered!`)

              const winAmount = jackpot.currentAmountCoins + contributionAmount

              const [jackpotWinRecord] = await tx`
                INSERT INTO jackpot_wins (id, "jackpotId", "winnerId", "winAmountCoins", "gameSpinId", "createdAt")
                VALUES (public.generate_cuid(), ${jackpot.id}, ${userId}, ${winAmount}, ${gameSpinId}, NOW())
                RETURNING id
              `

              const newSeedAmount = JackpotUtils.generateRandomSeedAmount(jackpot.seedAmountCoins)
              await tx`
                UPDATE jackpots SET "currentAmountCoins" = ${newSeedAmount}, "lastWonAt" = NOW(), "lastWonBy" = ${userId}
                WHERE id = ${jackpot.id}
              `

              const [jackpotTx] = await tx`
                INSERT INTO transactions (id, "userProfileId", "operatorId", "walletId", type, status, amount, "balanceBefore", "balanceAfter", description, provider, "providerTxId", "relatedGameId", "relatedRoundId", "createdAt", "updatedAt")
                VALUES (
                  public.generate_cuid(), ${userId}, ${operatorId}, ${walletId},
                  'JACKPOT_WIN', ${TransactionStatus.COMPLETED}, ${winAmount},
                  (SELECT balance * 100 FROM wallets WHERE id = ${walletId}),
                  (SELECT balance * 100 FROM wallets WHERE id = ${walletId}) + ${winAmount},
                  ${`${jackpot.type} Jackpot Win`}, ${providerName}, ${'jackpot-' + providerRoundId},
                  ${gameId}, ${providerRoundId}, NOW(), NOW()
                )
                RETURNING id, status
              `

              await tx`
                UPDATE wallets SET balance = balance + ${winAmount / 100} WHERE id = ${walletId}
              `

              jackpotWin = {
                id: jackpotWinRecord.id,
                jackpotType: jackpot.type,
                winAmountCoins: winAmount,
                winAmountDollars: JackpotUtils.coinsToDollars(winAmount),
                gameSpinId: gameSpinId,
              }
              jackpotWinTransaction = jackpotTx
            }
          }
        }

        return {
          contributions,
          jackpotWin,
          jackpotWinTransactionId: jackpotWinTransaction?.id || null,
        }
      })

      if (result.contributions.length > 0 || result.jackpotWin) {
        await this.invalidateJackpotCache()
        if (result.jackpotWin) {
          await cacheService.invalidateWallet(userId, operatorId)
        }
      }

      console.log(
        `🎰 [ASYNC] Jackpot processing completed: ${result.contributions.length} contributions, ${result.jackpotWin ? '1 win' : '0 wins'}`
      )

      return result
    } catch (error) {
      console.error(`🎰 [ASYNC] Jackpot processing failed for spin ${gameSpinId}:`, error)
      return { contributions: [] }
    }
  }

  async getRecentJackpotWins(limit: number = 10) {
    return jackpotSql`
      SELECT
        jw.id,
        j.type as "jackpotType",
        jw."winAmountCoins",
        up.username as "winnerUsername",
        up.avatar as "winnerAvatar",
        jw."gameSpinId",
        jw."createdAt"
      FROM jackpot_wins jw
      JOIN jackpots j ON jw."jackpotId" = j.id
      JOIN user_profiles up ON jw."winnerId" = up.id
      ORDER BY jw."createdAt" DESC
      LIMIT ${limit}
    `
  }

  public async getActiveJackpots(eligibleTypes: JackpotType[]): Promise<any[]> {
    const cacheKey = eligibleTypes.sort().join(',')
    const cached = await cacheService.get<any[]>(CACHE_KEYS.JACKPOTS, cacheKey)
    if (cached) {
      return cached
    }

    const allJackpots = await jackpotSql`
      SELECT
        j.id, j.type, j."currentAmountCoins", j."seedAmountCoins",
        j."minimumBetCoins", j."contributionRateBasisPoints",
        j."probabilityPerMillion", j."minimumTimeBetweenWinsMinutes",
        j."lastWonAt", j."lastWonBy", j."isActive",
        up.username as "lastWinnerUsername"
      FROM jackpots j
      LEFT JOIN user_profiles up ON j."lastWonBy" = up.id
      WHERE j."isActive" = true
    `

    const jackpots = allJackpots.filter((jackpot: any) => eligibleTypes.includes(jackpot.type))

    if (jackpots.length > 0) {
      await cacheService.set(CACHE_KEYS.JACKPOTS, cacheKey, jackpots, 300)
    }

    return jackpots
  }

  private shouldWinJackpot(jackpot: any): boolean {
    const config = JACKPOT_CONFIG[jackpot.type as keyof typeof JACKPOT_CONFIG]
    if (!config) {
      return false
    }

    if (!JackpotUtils.canWinJackpot(jackpot.lastWonAt, config.minimumTimeBetweenWinsMinutes)) {
      return false
    }

    return JackpotUtils.checkJackpotWin(config.probabilityPerMillion)
  }

  private async invalidateJackpotCache(): Promise<void> {
    const possibleKeys = [
      'MINOR', 'MAJOR', 'GRAND',
      'MAJOR,MINOR', 'GRAND,MAJOR', 'GRAND,MAJOR,MINOR',
      'GRAND,MINOR', 'MINOR,MAJOR',
    ]

    for (const key of possibleKeys) {
      await cacheService.delete(CACHE_KEYS.JACKPOTS, key)
    }
  }

  async getJackpotStats() {
    const eli: JackpotType[] = ['GRAND', 'MAJOR', 'MINOR']
    const jackpots = await this.getActiveJackpots(eli)

    const stats = {
      totalPoolCoins: jackpots.reduce((sum, j) => sum + j.currentAmountCoins, 0),
      totalPoolDollars: 0,
      jackpots: jackpots.map((j) => ({
        type: j.type,
        currentAmountCoins: j.currentAmountCoins,
        currentAmountDollars: JackpotUtils.coinsToDollars(j.currentAmountCoins),
        lastWonAt: j.lastWonAt,
        lastWinnerUsername: j.lastWinnerUsername || null,
      })),
    }

    stats.totalPoolDollars = JackpotUtils.coinsToDollars(stats.totalPoolCoins)
    return stats
  }

  async getUserJackpotContributions(userId: string, limit: number = 50) {
    return jackpotSql`
      SELECT
        jc.id, jc."contributionAmountCoins", jc."createdAt", jc."gameSpinId",
        j.type as "jackpotType"
      FROM jackpot_contributions jc
      JOIN jackpots j ON jc."jackpotId" = j.id
      JOIN game_spins gs ON jc."gameSpinId" = gs.id
      JOIN game_sessions sess ON gs."gameSessionId" = sess.id
      WHERE sess."userId" = ${userId}
      ORDER BY jc."createdAt" DESC
      LIMIT ${limit}
    `
  }

  async getUserJackpotWins(userId: string) {
    return jackpotSql`
      SELECT
        jw.id, jw."winAmountCoins", jw."createdAt", jw."gameSpinId", jw."transactionId",
        j.type as "jackpotType"
      FROM jackpot_wins jw
      JOIN jackpots j ON jw."jackpotId" = j.id
      WHERE jw."winnerId" = ${userId}
      ORDER BY jw."createdAt" DESC
    `
  }
}

export const jackpotService = new JackpotService()
export type { JackpotService }