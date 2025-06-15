// ai/src/routers/jackpot.router.ts
import {  type GetJackpotsResponse, type JackpotDisplayDto } from '../types'
import z from 'zod'
import { protectedProcedure, publicProcedure, o } from '../lib/orpc'
import { GameSpinService } from '../services/common/spin.service'
import { jackpotService } from '../services/common/jackpot.service'
import { JackpotUtils } from '@/utils/jackpot.utils'


const gameSpinService = new GameSpinService()

// --- Zod Schemas for Input Validation ---

const SpinIdSchema = z.object({
  spinId: z.string().cuid(),
})

const LimitQuerySchema = z.object({
  limit: z.number().int().min(1).max(100).optional().default(10),
})

export const jackpotRouter = o.router({
  getJackpots: publicProcedure
    .output(z.custom<GetJackpotsResponse>())
    .handler(async (): Promise<GetJackpotsResponse> => {
      const jackpots = await jackpotService.getActiveJackpots(['MINOR', 'MAJOR', 'GRAND'])

      return {
        jackpots: jackpots.map(
          (jackpot): JackpotDisplayDto => ({
            id: jackpot.id,
            type: jackpot.type,
            currentAmountDollars: JackpotUtils.coinsToDollars(jackpot.currentAmountCoins),
            lastWonAt: jackpot.lastWonAt,
            lastWinnerUsername: jackpot.lastWinnerUsername,
          })
        ),
      }
    }),

  getJackpotStats: publicProcedure.handler(async () => {
    return await jackpotService.getJackpotStats()
  }),

  getRecentWins: publicProcedure.input(LimitQuerySchema).handler(async ({ input }) => {
    const { limit } = input
    const recentWins = await jackpotService.getRecentJackpotWins(limit)

    return {
      recentWins: recentWins.map(
        (win: any) => ({
          id: win.id,
          jackpotType: win.jackpotType,
          winAmountCoins: win.winAmountCoins,
          winAmountDollars: JackpotUtils.coinsToDollars(win.winAmountCoins),
          winnerUsername: win.winnerUsername,
          winnerAvatar: win.winnerAvatar,
          gameSpinId: win.gameSpinId,
          createdAt: win.createdAt,
        })
      ),
    }
  }),

  getUserContributions: protectedProcedure
    .input(LimitQuerySchema)
    .handler(async ({ context, input }) => {
      const userId = context.session.user.id
      const { limit } = input

      const contributions = await jackpotService.getUserJackpotContributions(userId, limit)

      return {
        contributions: contributions.map(
          (contribution: any) => ({
            id: contribution.id,
            jackpotType: contribution.jackpotType,
            contributionAmountCoins: contribution.contributionAmountCoins,
            contributionAmountDollars: JackpotUtils.coinsToDollars(
              contribution.contributionAmountCoins
            ),
            gameSpinId: contribution.gameSpinId,
            createdAt: contribution.createdAt,
          })
        ),
      }
    }),

  getUserWins: protectedProcedure.handler(async ({ context }) => {
    const userId = context.session.user.id
    const wins = await jackpotService.getUserJackpotWins(userId)

    return {
      wins: wins.map(
        (win: any) => ({
          id: win.id,
          jackpotType: win.jackpotType,
          winAmountCoins: win.winAmountCoins,
          winAmountDollars: JackpotUtils.coinsToDollars(win.winAmountCoins),
          gameSpinId: win.gameSpinId,
          transactionId: win.transactionId,
          createdAt: win.createdAt,
        })
      ),
    }
  }),

  getSpinDetails: publicProcedure.input(SpinIdSchema).handler(async ({ input }) => {
    const { spinId } = input
    const spinWithJackpots = await gameSpinService.getGameSpinWithJackpots(spinId)

    if (!spinWithJackpots) {
      throw new Error('Game spin not found')
    }
    // This part assumes getGameSpinWithJackpots returns the correct structure.
    // Ensure that method is also updated if it uses Prisma.
    return spinWithJackpots;
  }),

  initializeJackpots: protectedProcedure.handler(async () => {
    await jackpotService.initializeJackpots()
    return { message: 'Jackpots initialized successfully' }
  }),
})
// import { protectedProcedure, publicProcedure, router } from "@/lib/orpc"
// import type { JackpotService } from "@/services/common/jackpot.service"
// import { jackpotService } from "@/services/common/jackpot.service"
// import { GameSpinService } from "@/services/common/spin.service"
// import type { GetJackpotsResponse, JackpotDisplayDto } from "@/types"
// import { JackpotUtils } from "@/utils/jackpot.utils"
// import z from "zod"

// const gameSpinService = new GameSpinService()

// // --- Zod Schemas for Input Validation ---

// const GameIdSchema = z.object({
//   gameId: z.string().cuid(),
// })

// const SpinIdSchema = z.object({
//   spinId: z.string().cuid(),
// })

// const LimitQuerySchema = z.object({
//   limit: z.number().int().min(1).max(100).optional().default(10),
// })

// export const jackpotRouter = {} as const
// // The actual router object is defined below
// export const gameRouter = router({

//   /**
//    * Get all active jackpots with current amounts
//    */
//   getJackpots: publicProcedure
//     .output(z.custom<GetJackpotsResponse>())
//     .handler(async (): Promise<GetJackpotsResponse> => {
//       const jackpots = await jackpotService.getActiveJackpots(['GRAND', 'MAJOR', 'MINOR'])

//       return {
//         jackpots: jackpots.map(
//           (jackpot: {
//             id: string
//             type: any
//             currentAmountCoins: number
//             lastWonAt: any
//             lastWonBy: string | null
//           }): JackpotDisplayDto => ({
//             id: jackpot.id,
//             type: jackpot.type,
//             currentAmountDollars: JackpotUtils.coinsToDollars(jackpot.currentAmountCoins),
//             lastWonAt: jackpot.lastWonAt,
//             lastWinnerUsername: jackpot.lastWonBy,
//           })
//         ),
//       }
//     }),

//   /**
//    * Get jackpot statistics and totals
//    */
//   getJackpotStats: publicProcedure.handler(async () => {
//     return await jackpotService.getJackpotStats()
//   }),

//   /**
//    * Get recent jackpot wins
//    */
//   getRecentWins: publicProcedure.input(LimitQuerySchema).handler(async ({ input }) => {
//     const { limit } = input
//     const recentWins = await jackpotService.getRecentJackpotWins(limit)

//     return {
//       recentWins: recentWins.map(
//         (win: any) => ({
//           id: win.id,
//           jackpotType: win.jackpotId,
//           winAmountCoins: win.winAmountCoins,
//           winAmountDollars: JackpotUtils.coinsToDollars(win.winAmountCoins),
//           winnerUsername: win.winAmountCoins,
//           winnerAvatar: win.winnerId,
//           gameSpinId: win.gameSpinId,
//           createdAt: win.createdAt,
//         })
//       ),
//     }
//   }),

//   /**
//    * Get jackpot contributions for a specific user (protected - user can only see their own)
//    */
//   getUserContributions: protectedProcedure
//     .input(LimitQuerySchema)
//     .handler(async ({ context, input }) => {
//       const userId = context.session.user.id
//       const { limit } = input

//       const contributions = await jackpotService.getUserJackpotContributions(userId, limit)

//       return {
//         contributions: contributions.map(
//           (contribution: {
//             id: string
//             createdAt: Date
//             jackpotId: string
//             gameSpinId: string
//             contributionAmountCoins: number
//           }) => ({
//             id: contribution.id,
//             jackpotId: contribution.jackpotId,
//             contributionAmountCoins: contribution.contributionAmountCoins,
//             contributionAmountDollars: JackpotUtils.coinsToDollars(
//               contribution.contributionAmountCoins
//             ),
//             gameSpinId: contribution.gameSpinId,
//             createdAt: contribution.createdAt,
//           })
//         ),
//       }
//     }),

//   /**
//    * Get jackpot wins for a specific user (protected - user can only see their own)
//    */
//   getUserWins: protectedProcedure.handler(async ({ context }) => {
//     const userId = context.session.user.id
//     const wins = await jackpotService.getUserJackpotWins(userId)

//     return {
//       wins: wins.map(
//         (win: {
//           id: string
//           createdAt: Date
//           jackpotId: string
//           gameSpinId: string
//           winnerId: string
//           winAmountCoins: number
//           transactionId: string | null
//         }) => ({
//           id: win.id,
//           jackpotType: win.jackpotId,
//           winAmountCoins: win.winAmountCoins,
//           winAmountDollars: JackpotUtils.coinsToDollars(win.winAmountCoins),
//           gameSpinId: win.gameSpinId,
//           transactionId: win.transactionId,
//           createdAt: win.createdAt,
//         })
//       ),
//     }
//   }),

//   /**
//    * Get jackpot statistics for a specific game
//    */
//   getGameStats: publicProcedure.input(GameIdSchema).handler(async () => {
//     // const { gameId } = input
//     // const stats = await gameSpinService.getGameJackpotStats(gameId)

//     // return {
//     //   ...stats,
//     //   totalContributionsDollars: JackpotUtils.coinsToDollars(stats.totalContributionsCoins),
//     //   totalWinsDollars: JackpotUtils.coinsToDollars(stats.totalWinsCoins),
//     // }
//   }),

//   /**
//    * Get recent spins with jackpot activity
//    */
//   getRecentSpins: publicProcedure.input(LimitQuerySchema).handler(async ({ input }) => {
//     const { limit } = input
//     const recentSpins = await gameSpinService.getRecentSpinsWithJackpots(limit)

//     return {
//       recentSpins: recentSpins.map((spin) => ({
//         id: spin.id,
//         wagerAmount: spin.wagerAmount,
//         wagerAmountDollars: JackpotUtils.coinsToDollars(spin.wagerAmount),
//         grossWinAmount: spin.grossWinAmount,
//         grossWinAmountDollars: JackpotUtils.coinsToDollars(spin.grossWinAmount),
//         spinNumber: spin.spinNumber,
//         createdAt: spin.createdAt,
//         game: {
//           id: spin.gameSession.game.id,
//           name: spin.gameSession.game.name,
//           category: spin.gameSession.game.category,
//         },
//         player: {
//           id: spin.gameSession.refferenceToUserProfile.id,
//           username: spin.gameSession.refferenceToUserProfile.username,
//           avatar: spin.gameSession.refferenceToUserProfile.avatar,
//         },
//         jackpotContributions: spin.jackpotContributions.map((contribution: any) => ({
//           jackpotType: contribution.jackpot.type,
//           contributionAmountCoins: contribution.contributionAmountCoins,
//           contributionAmountDollars: JackpotUtils.coinsToDollars(
//             contribution.contributionAmountCoins
//           ),
//         })),
//         jackpotWin: spin.jackpotWin
//           ? {
//               jackpotType: spin.jackpotWin.jackpot.type,
//               winAmountCoins: spin.jackpotWin.winAmountCoins,
//               winAmountDollars: JackpotUtils.coinsToDollars(spin.jackpotWin.winAmountCoins),
//             }
//           : null,
//       })),
//     }
//   }),

//   /**
//    * Get detailed information about a specific spin's jackpot activity
//    */
//   getSpinDetails: publicProcedure.input(SpinIdSchema).handler(async ({ input }) => {
//     const { spinId } = input
//     const spinWithJackpots = await gameSpinService.getGameSpinWithJackpots(spinId)

//     if (!spinWithJackpots) {
//       throw new Error('Game spin not found')
//     }

//     return {
//       id: spinWithJackpots.id,
//       wagerAmount: spinWithJackpots.wagerAmount,
//       wagerAmountDollars: JackpotUtils.coinsToDollars(spinWithJackpots.wagerAmount),
//       grossWinAmount: spinWithJackpots.grossWinAmount,
//       grossWinAmountDollars: JackpotUtils.coinsToDollars(spinWithJackpots.grossWinAmount),
//       spinNumber: spinWithJackpots.spinNumber,
//       createdAt: spinWithJackpots.createdAt,
//       game: {
//         id: spinWithJackpots.gameSession.game.id,
//         name: spinWithJackpots.gameSession.game.name,
//         category: spinWithJackpots.gameSession.game.category,
//       },
//       player: {
//         id: spinWithJackpots.gameSession.refferenceToUserProfile.id,
//         username: spinWithJackpots.gameSession.refferenceToUserProfile.username,
//         avatar: spinWithJackpots.gameSession.refferenceToUserProfile.avatar,
//       },
//       jackpotContributions: spinWithJackpots.jackpotContributions.map(
//         (contribution: {
//           id: any
//           jackpot: { id: any; type: any; currentAmountCoins: number }
//           contributionAmountCoins: number
//         }) => ({
//           id: contribution.id,
//           jackpotId: contribution.jackpot.id,
//           jackpotType: contribution.jackpot.type,
//           contributionAmountCoins: contribution.contributionAmountCoins,
//           contributionAmountDollars: JackpotUtils.coinsToDollars(
//             contribution.contributionAmountCoins
//           ),
//           jackpotCurrentAmount: contribution.jackpot.currentAmountCoins,
//           jackpotCurrentAmountDollars: JackpotUtils.coinsToDollars(
//             contribution.jackpot.currentAmountCoins
//           ),
//         })
//       ),
//       jackpotWin: spinWithJackpots.jackpotWin
//         ? {
//             id: spinWithJackpots.jackpotWin.id,
//             jackpotType: spinWithJackpots.jackpotWin.jackpot.type,
//             winAmountCoins: spinWithJackpots.jackpotWin.winAmountCoins,
//             winAmountDollars: JackpotUtils.coinsToDollars(
//               spinWithJackpots.jackpotWin.winAmountCoins
//             ),
//             transactionId: spinWithJackpots.jackpotWin.transactionId,
//             transaction: spinWithJackpots.jackpotWin.transaction
//               ? {
//                   id: spinWithJackpots.jackpotWin.transaction.id,
//                   amount: spinWithJackpots.jackpotWin.transaction.amount,
//                   status: spinWithJackpots.jackpotWin.transaction.status,
//                 }
//               : null,
//           }
//         : null,
//     }
//   }),

//   /**
//    * Initialize jackpots (admin only)
//    */
//   initializeJackpots: protectedProcedure.handler(async () => {
//     await jackpotService.
//     return { message: 'Jackpots initialized successfully' }
//   }),

  
// })
