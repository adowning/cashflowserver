import type {
  GameBigWinData as GameBigWinData,
  GameHistoryItem as GameHistoryItem,
  LaunchGameResponseDto,
  PaginatedGamesResponse,
  PrismaGameProviderName,
  PrismaGameProvider as SharedGameProvider,
  Game,
} from '../types'
import z from 'zod/v4'
import prisma from '../../prisma/'
import { Prisma, GameCategory as PrismaGameCategoryEnum } from '../../prisma/generated/client'
// import { protectedProcedure, publicProcedure, router } from '../lib/orpc'
import { o, protectedProcedure, publicProcedure } from '../lib/orpc'; // Import 'o'

// --- Zod Schemas for Input Validation ---
const GameIdSchema = z.object({
  id: z.string().cuid(), // Assuming game IDs are CUIDs
})

const GameEnterSchema = z.object({
  id: z.string(), // Can be CUID or external ID based on your logic
  demo: z.boolean().optional().default(false),
})

const GameHistoryQuerySchema = z
  .object({
    page: z.number().int().min(1).optional().default(1),
    limit: z.number().int().min(1).max(100).optional().default(10),
    // Add other filters like gameId, dateRange if needed
  })
  .optional()

const GameSearchQuerySchema = z
  .object({
    query: z.string().optional(),
    category: z.string().optional(),
    provider: z.string().optional(),
    page: z.number().int().min(1).optional().default(1),
    limit: z.number().int().min(1).max(100).optional().default(20),
    featured: z.boolean().optional(),
    isActive: z.boolean().optional().default(true),
    // Add more filters like tags, etc.
  })
  .optional()

const SetFavoriteGameSchema = z.object({
  gameId: z.string().cuid(),
  isFavorite: z.boolean(),
})

// Shared type for Game with provider info
type GameWithProvider = Game & {
  gameProvider?: SharedGameProvider | null;
};

// Helper to map PrismaGame to a client-friendly structure
const mapPrismaGameToSharedGame = (game: GameWithProvider): Game => {
  return {
    id: game.id,
    name: game.name,
    title: game.title,
    // description: game.description,
    // supportedProviders: game.supportedProviders,
    category: game.category,
    // tags: game.tags,
    isActive: game.isActive,
    thumbnailUrl: game.thumbnailUrl,
    // bannerUrl: game.bannerUrl,
    // meta: game.meta,
    createdAt: game.createdAt,
    updatedAt: game.updatedAt,
    // featured: game.featured,
    providerName: game.providerName,

    totalWagered: 0,
    totalWon: 0,

    activePlayers: [],
    goldsvetData: null,
    description: null,
    supportedProviders: [],
    tags: [],
    bannerUrl: null,
    meta: null,

    featured: false,
    gameProviderId: null,
    operatorId: null,
    tournamentDirectives: null,
    status: false,
    checked: false,
    targetRtp: null
  };
};

// Lucky bet info interface
// interface LuckyBetInfo {
//   id: string;
//   userId: string;
//   username: string;
//   avatar: string | null;
//   gameId: string | null;
//   gameName: string | null;
//   winAmount: number;
//   wagerAmount: number;
//   multiplier: number | null;
//   timestamp: Date;
// }

export const gameRouter = o.router({

  getGameCategories: publicProcedure
    // .output(z.array(z.nativeEnum(PrismaGameCategoryEnum))) // Assuming you just return enum values
    .handler(async () => {
      // This simply returns all possible enum values.
      // If you have a GameCategory model in Prisma, you'd query that instead.
      return Object.values(PrismaGameCategoryEnum)
    }),

  getGameProviders: publicProcedure
    .output(z.array(z.custom<SharedGameProvider>())) // Assuming PrismaGameProvider is your shared type
    .handler(async (): Promise<SharedGameProvider[]> => {
      const providers = await prisma.gameProvider.findMany({
        where: { isActive: true },
        orderBy: { name: 'asc' },
      })
      // Map to SharedGameProvider if necessary, or ensure PrismaGameProvider is compatible
      return providers.map((p) => ({
        ...p,
        configJson: p.configJson ?? null,
        meta: p.configJson ?? null,
      }))
    }),
  getAllGames: publicProcedure
    .input(GameSearchQuerySchema)
    .output(z.custom<PaginatedGamesResponse<Game>>())
    .handler(async ({ input }): Promise<PaginatedGamesResponse<Game>> => {
      const { page = 1, limit = 200 } = input ?? {}
      const totalGames = await prisma.game.count({ where: { isActive: true } })
      const gamesData = await prisma.game.findMany({
        where: { isActive: true },
        include: { gameProvider: true }, // Include provider info
        orderBy: [{ featured: 'desc' }, { name: 'asc' }],
        skip: (page - 1) * limit,
        take: limit,
      })
      // console.log(x[0])
      // console.log(x[1])
      // console.log(gamesData[0].totalWagered)
      // const items = gamesData.map((game) =>
      //     mapPrismaGameToSharedGame({
      //       ...game,
      //       providerName: game.providerName ?? undefined,
      //       category: game.category as unknown as Game['category'],
      //       thumbnailUrl: game.thumbnailUrl ?? undefined,
      //       // : game.bannerUrl ?? undefined,
      //     })
      // console.log(gamesData[1])/
      return {
        items: gamesData.map((game) =>
          mapPrismaGameToSharedGame({
            ...game,
            providerName: game.supportedProviders[0] ?? null,
            category: game.category as unknown as Game['category'],
            thumbnailUrl: game.thumbnailUrl ?? null,
            totalWagered: game.totalWagered ?? 0,
            totalWon: game.totalWon ?? 0,
            activePlayers: [],

            // : game.bannerUrl ?? undefined,
          })
        ),
        total: totalGames,
        page,
        limit,
        totalPages: Math.ceil(totalGames / limit),
      }
    }),
  searchGames: publicProcedure
    .input(GameSearchQuerySchema)
    .output(z.custom<PaginatedGamesResponse<Game>>())
    .handler(async ({ input }): Promise<PaginatedGamesResponse<Game>> => {
      const { page = 1, limit = 20, query, category, provider, featured, isActive } = input ?? {}

      const whereClause: Prisma.GameWhereInput = {}
      if (query) {
        whereClause.OR = [
          { name: { contains: query, mode: 'insensitive' } },
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ]
      }
      if (category) {
        whereClause.category = category as PrismaGameCategoryEnum
      }
      if (provider) {
        // Assuming provider name is stored on the Game model or via relation
        whereClause.gameProvider = { name: provider as PrismaGameProviderName }
      }
      if (featured !== undefined) {
        whereClause.featured = featured
      }
      if (isActive !== undefined) {
        whereClause.isActive = isActive
      }

      const totalGames = await prisma.game.count({ where: whereClause })
      const gamesData = await prisma.game.findMany({
        where: whereClause,
        include: { gameProvider: true }, // Include provider info
        orderBy: [{ featured: 'desc' }, { name: 'asc' }],
        skip: (page - 1) * limit,
        take: limit,
      })
      return {
        items: gamesData.map((game) =>
          mapPrismaGameToSharedGame({
            ...game,
            providerName: game.providerName ?? null,
            category: game.category as unknown as Game['category'],
            thumbnailUrl: game.thumbnailUrl ?? null,
            activePlayers: []
          })
        ),
        total: totalGames,
        page,
        limit,
        totalPages: Math.ceil(totalGames / limit),
      }
    }),

  getGameDetails: publicProcedure // Or protected if details are sensitive
    .input(GameIdSchema) // Assuming you fetch by CUID
    .output(z.custom<Game | null>())
    .handler(async ({ input }): Promise<Game | null> => {
      const game = await prisma.game.findUnique({
        where: { id: input.id },
        include: { gameProvider: true },
      })
      if (!game) return null;
      // Ensure providerName is undefined if null to match type
      const fixedGame = {
        ...game,
        providerName: game.providerName ?? null,
        category: game.category as unknown as Game['category'], // Ensure correct type
        thumbnailUrl: game.thumbnailUrl ?? null,
        bannerUrl: game.bannerUrl ?? null,
        activePlayers: [],
      };
      return mapPrismaGameToSharedGame(fixedGame);
    }),

  // This is a placeholder. Actual game launch involves more complex logic,
  // potentially interacting with game aggregators or specific provider APIs.
  launchGame: protectedProcedure
    .input(GameEnterSchema)
    .output(z.custom<LaunchGameResponseDto>())
    .handler(async ({ context, input }): Promise<LaunchGameResponseDto> => {
      const userId = context.session.user.id
      const game = await prisma.game.findUnique({ where: { id: input.id } }) // or other identifier

      if (!game) {
        throw new Error('Game not found')
      }
      if (!game.isActive) {
        throw new Error('Game is not active')
      }

      // TODO: Implement actual game launch logic.
      // This might involve:
      // 1. Checking user's balance/eligibility.
      // 2. Calling a game aggregator API to get a session URL.
      // 3. Creating a GameSession record in your database.
      // 4. Returning the launch URL and session ID.
      const gameSession = await prisma.gameSession.create({
        data: {
          userId: userId,
          gameId: game.id,
          isActive: true,
          // sessionData: {}, // Initial session data
          // rtgToken, rtgFingerPrint might be populated after provider call
        },
      })

      // For now, returning a mock response.
      return {
        launch_url: `https://example.com/launch/${game.id}?user=${userId}&session=${gameSession.id}&demo=${input.demo}`,
        game_session_id: gameSession.id, // Your internal game session ID
        launch_strategy: 'IFRAME', // Or 'REDIRECT', 'POPUP'
      }
    }),

  // Placeholder for RTG specific settings - requires actual RTG integration
  // rtgSettings: protectedProcedure
  //   .input(z.custom<RTGSettingsRequestDto>())
  //   .output(z.custom<RTGSettingsResponseDto>())
  //   .handler(async ({ input, context }): Promise<RTGSettingsResponseDto> => {
  //     // 1. Authenticate user (context.session.user.id)
  //     // 2. Prepare request for RTG /settings endpoint based on input
  //     //    (map your userId to RTG's expected format, etc.)
  //     // 3. Call the RTG provider's /settings API (proxy request)
  //     //    This would involve an HTTP call from the server to RTG.
  //     // 4. Create/update a GameSession in your DB with RTG session details.
  //     // 5. Map RTG's response to ProviderSettingsResponseData.
  //     // 6. Return RTGSettingsResponseDto.

  //     // console.log('RTG Settings Request:', input, 'User:', context.session.user.id)
  //     // Mock response - Replace with actual RTG integration logic
  //     const mockRtgSettingsData: ProviderSettingsResponseData = {
  //       user: {
  //         balance: { cash: '100.00' },
  //         canGamble: true,
  //         userId: context.session.user.id, // Or RTG's specific ID for the user
  //         sessionId: `rtg-session-${Date.now()}`,
  //         token: `rtg-token-${Date.now()}`,
  //         serverTime: new Date().toISOString(),
  //       },
  //       game: { version: '1.0', gameType: 'slot' },
  //     }
  //     // Example: Create a game session (simplified)
  //     await prisma.gameSession.upsert({
  //       where: { id: mockRtgSettingsData.user.sessionId }, // Or another unique constraint
  //       update: {
  //         isActive: true,
  //         sessionData: mockRtgSettingsData as any,
  //         rtgToken: mockRtgSettingsData.user.token,
  //       },
  //       create: {
  //         id: mockRtgSettingsData.user.sessionId,
  //         userId: context.session.user.id,
  //         gameId: input.gameId, // Ensure this gameId exists in your DB
  //         isActive: true,
  //         sessionData: mockRtgSettingsData as any,
  //         rtgToken: mockRtgSettingsData.user.token,
  //       },
  //     })
  //     return { success: true, result: mockRtgSettingsData }
  //   }),

  // Placeholder for RTG specific spin - requires actual RTG integration
  // rtgSpin: protectedProcedure
  //   .input(z.custom<RTGSpinRequestDto>())
  //   .output(z.custom<RTGSpinResponseDto>())
  //   .handler(async ({ input, context }): Promise<RTGSpinResponseDto> => {
  //     // 1. Validate user session and RTG game session token (input.sessionId, input.token)
  //     // 2. Debit user's balance for the stake (create a BET transaction)
  //     // 3. Call RTG /spin API (proxy request)
  //     // 4. Handle RTG's response:
  //     //    - If win, credit user's balance (create a WIN transaction)
  //     //    - Update GameSession with spin details, win/loss amounts.
  //     //    - Create GameSpin record.
  //     // 5. Map RTG's spin response to ProviderSpinResponseData.
  //     // 6. Return RTGSpinResponseDto.

  //     console.log('RTG Spin Request:', input, 'User:', context.session.user.id)
  //     // Mock response - Replace with actual RTG integration and platform game round handling logic
  //     const mockRtgSpinData: ProviderSpinResponseData = {
  //       transactions: { roundId: `round-${Date.now()}` },
  //       user: {
  //         balance: { cash: { atEnd: '99.00' } }, // Example: balance after R5 stake
  //         userId: context.session.user.id,
  //         sessionId: input.sessionId,
  //         token: input.token,
  //         serverTime: new Date().toISOString(),
  //       },
  //       game: {
  //         win: { total: '0.00' }, // Example: no win
  //         stake: input.stake.toString(),
  //       },
  //     }

  //     // 1. Your existing RTG API call logic here
  //     //   const originalRTGResponse = await callRTGSpinAPI(input)

  //     //   // 2. Add jackpot processing
  //     //   const rtgJackpotIntegration = new RTGJackpotIntegration(prisma)
  //     //   const enhancedResponse = await rtgJackpotIntegration.processRTGSpinWithJackpots(
  //     //     input,
  //     //     context.session.user.id,
  //     //     originalRTGResponse
  //     //   )

  //     //   return enhancedResponse
  //     // })
  //     // Example: Update game session (simplified)
  //     await prisma.gameSession.update({
  //       where: { id: input.sessionId },
  //       data: {
  //         // Update sessionData, totalWagered, totalWon based on spin
  //         // This is highly dependent on the full GamePlatformSpinResultDetails logic
  //       },
  //     })
  //     const rtgJackpotIntegration = new RTGJackpotIntegration()
  //     const enhancedResponse = await rtgJackpotIntegration.processRTGSpinWithJackpots(
  //       input,
  //       context.session.user.id,
  //       mockRtgSpinData
  //     )
  //     return enhancedResponse
  //     return { success: true, result: mockRtgSpinData }
  //   }),

  getGameHistory: protectedProcedure
    .input(GameHistoryQuerySchema)
    .output(z.custom<PaginatedGamesResponse<GameHistoryItem>>())
    .handler(async ({ context, input }): Promise<PaginatedGamesResponse<GameHistoryItem>> => {
      const userId = context.session.user.id
      const { page = 1, limit = 10 } = input ?? {}

      // This is a conceptual query. You'll need to decide what constitutes "game history".
      // It could be from GameSession, GameSpin, or Transaction records.
      // Assuming GameSpin records hold individual game round outcomes.
      const totalSpins = await prisma.gameSpin.count({
        where: { gameSession: { userId: userId } },
      })
      const spins = await prisma.gameSpin.findMany({
        where: { gameSession: { userId: userId } },
        include: {
          gameSession: { include: { game: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }) as any[]

      const records: GameHistoryItem[] = spins.map((spin) => {
        // You need to parse spin.spinData to get bet, win, multiplier etc.
        // This is highly dependent on the structure of your spinData JSON.
        const spinData = spin.spinData as any // Cast for now
        return {
          name: spin.gameSession?.game?.name ?? 'Unknown Game',
          created_at: spin.createdAt.getTime(),
          amount: spinData?.betAmount ?? spin.wagerAmount ?? 0, // Example access
          multiplier: spinData?.multiplier ?? 0, // Example access
          bet_id: spin.id,
          status: spinData?.status ?? 'completed', // Example access
          profit:
            (spinData?.winAmount ?? spin.grossWinAmount ?? 0) -
            (spinData?.betAmount ?? spin.wagerAmount ?? 0), // Example calculation
        }
      })

      return {
        items: records,
        total: totalSpins,
        page,
        limit,
        totalPages: Math.ceil(totalSpins / limit),
      }
    }),

  getGameBigWins: publicProcedure
    .output(z.custom<GameBigWinData>())
    .handler(async (): Promise<GameBigWinData> => {
      try {
        const now = new Date();
        const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const finalDisplayLimit = 30; // How many to show in the UI
        const initialFetchMultiplier = 3; // Fetch 3x more records initially for diversification
        const luckyBetsFetchLimit = finalDisplayLimit * initialFetchMultiplier;
        const highRollersFetchLimit = finalDisplayLimit * initialFetchMultiplier;

        // --- Fetch Lucky Bets (with increased limit for diversification) ---
        const rawLuckyBetsData = await prisma.gameSpin.findMany({
          where: {
            grossWinAmount: {
              gt: 0,
            },
            // timeStamp: {
            //   gte: twentyFourHoursAgo,
            // },
          },
          orderBy: {
            grossWinAmount: 'desc',
          },
          take: luckyBetsFetchLimit,
          include: {
            gameSession: {
              select: {
                userId: true,
                refferenceToUserProfile: {
                  select: {
                    username: true,
                    avatar: true,
                  },
                },
                game: {
                  select: {
                    id: true,
                    name: true,
                    title: true,
                    thumbnailUrl: true,
                  },
                },
              },
            },
          },
        }) as any[]
        console.log('rawluckybetsdata', rawLuckyBetsData)
        interface LuckyBetInfo {
          id: string;
          userId: string;
          username: string;
          avatar: string | null;
          gameId: string | null;
          gameName: string | null;
          winAmount: number;
          wagerAmount: number;
          multiplier: number | null;
          timestamp: Date;
        }
        const userBestSpins = new Map<string, LuckyBetInfo>();

        for (const spin of rawLuckyBetsData) {
          if (!spin.gameSession?.userId || !spin.gameSession.refferenceToUserProfile) {
            continue;
          }

          const userId = spin.gameSession.userId;
          const winAmount = spin.grossWinAmount;
          const wagerAmount = spin.wagerAmount;
          const multiplier = wagerAmount > 0 ? winAmount / wagerAmount : null;

          const existingBestSpin = userBestSpins.get(userId);

          // Keep only the best spin (highest multiplier) per user
          if (!existingBestSpin || (multiplier !== null && (!existingBestSpin.multiplier || multiplier > existingBestSpin.multiplier))) {
            userBestSpins.set(userId, {
              id: spin.id,
              userId: userId,
              username: spin.gameSession.refferenceToUserProfile.username,
              avatar: spin.gameSession.refferenceToUserProfile.avatar,
              gameId: spin.gameSession.game?.id ?? null,
              gameName: spin.gameSession.game?.name ?? null,
              winAmount: winAmount,
              wagerAmount: wagerAmount,
              multiplier: multiplier,
              timestamp: spin.createdAt,
            });
          }
        }

        // Convert map values to array and take the top N for display
        const luckyBets = Array.from(userBestSpins.values())
          .sort((a, b) => (b.multiplier ?? 0) - (a.multiplier ?? 0)) // Sort by multiplier descending
          .slice(0, finalDisplayLimit) as any[] // Take top N

        // --- Fetch High Rollers (users with highest total wagered in last 7 days) ---
        // This requires aggregating game session data per user.
        // Prisma doesn't directly support GROUP BY with aggregation in findMany,
        // so we might need a raw query or a more complex approach.
        // For simplicity and demonstration, let's fetch recent game sessions and aggregate in memory.
        // NOTE: For large datasets, a raw SQL query for aggregation is highly recommended for performance.

        const rawHighRollersData = await prisma.gameSession.findMany({
          where: {
            startTime: {
              gte: sevenDaysAgo,
            },
            totalWagered: {
              gt: 0,
            },
          },
          select: {
            userId: true,
            totalWagered: true,
            updatedAt: true, // Use last activity time
            refferenceToUserProfile: {
              select: {
                username: true,
                avatar: true,
              },
            },
          },
          orderBy: {
            totalWagered: 'desc', // Initial sort by total wagered
          },
          take: highRollersFetchLimit, // Fetch more initially
        }) as any[]

        const userTotalWagers = new Map<string, { totalWagered: number; lastActivity: Date; username: string | null; avatar: string | null }>();

        for (const session of rawHighRollersData) {
          if (!session.userId || !session.refferenceToUserProfile) {
            continue;
          }
          const userId = session.userId;
          const currentWager = userTotalWagers.get(userId);
          if (currentWager) {
            currentWager.totalWagered += session.totalWagered;
            if (session.updatedAt > currentWager.lastActivity) {
              currentWager.lastActivity = session.updatedAt;
            }
          } else {
            userTotalWagers.set(userId, {
              totalWagered: session.totalWagered,
              lastActivity: session.updatedAt,
              username: session.refferenceToUserProfile.username,
              avatar: session.refferenceToUserProfile.avatar,
            });
          }
        }

        // Convert map values to array, map to HighRollerInfo, and take the top N
        const highRollers = Array.from(userTotalWagers.entries())
          .map(([userId, data]) => ({
            userId: userId,
            username: data.username,
            avatar: data.avatar,
            totalWagered: data.totalWagered,
            lastActivity: data.lastActivity,
          }))
          .sort((a, b) => b.totalWagered - a.totalWagered) // Sort by total wagered descending
          .slice(0, finalDisplayLimit) as any[] // Take top N

        return {
          lucky_bets: luckyBets,
          high_rollers: highRollers,
        };
      } catch (error) {
        console.error('Failed to fetch game big wins', { error });
        // Return an empty result to satisfy the return type
        return {
          lucky_bets: [],
          high_rollers: [],
        }
      }
    }),
  getFavoriteGames: protectedProcedure
    .output(z.array(z.string()))
    .handler(async (): Promise<string[]> => {
      return [];
    }),

  setFavoriteGame: protectedProcedure
    .input(SetFavoriteGameSchema)
    .output(z.object({ success: z.boolean() }))
    .handler(async (): Promise<{ success: boolean }> => ({
      success: true,
    })),
  // });
}
)