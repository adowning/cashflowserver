import { o, publicProcedure } from '@/lib/orpc';
import z from 'zod';
import prisma from '../../prisma/';
import { type PhpGameStateData, type PhpApiResponse } from '@/types';
import { TransactionType, type Game, type GameBank, type Shop, type Wallet, type GameSession, type UserProfile } from '../../prisma/generated';
import type { CreateMyContextOptions } from '@/lib/context';

/**
 * Determines the desired outcome of a spin based on RTP and bank status.
 * THIS IS THE CORE RTP LOGIC.
 */
function determineWinType(
  game: { totalWagered: number; totalWon: number; },
  shop: { percent: number },
  gameBank: { bonus: number }
): 'bonus' | 'win' | 'none' {
  const totalWagered = game.totalWagered ?? 0;
  const totalWon = game.totalWon ?? 0;
  const currentRTP = totalWagered > 0 ? (totalWon / totalWagered) * 100 : 0;
  const targetRTP = shop.percent;
  const randomValue = Math.random() * 100;

  if (gameBank.bonus > 1000 && currentRTP < targetRTP && randomValue < 5) {
    return 'bonus';
  }
  const winChance = currentRTP < targetRTP ? 30 : 15;
  if (randomValue < winChance) {
    return 'win';
  }
  return 'none';
}

/**
 * Sends the fully assembled game state to the PHP logic engine.
 */
async function callPhpEngine(gameName: string, gameState: PhpGameStateData): Promise<PhpApiResponse> {
  const phpEngineUrl = `${process.env.PHP_ENGINE_URL}/game/${gameName}/spin`; // Point directly to the PHP entrypoint
  console.log(phpEngineUrl)
  try {
    const response = await fetch(phpEngineUrl, {
      method: 'POST',
      body: JSON.stringify(gameState),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`PHP engine error for ${gameName}: ${response.status}`, errorText);
      throw new Error(`Upstream PHP server responded with status: ${response.status}`);
    }
    // The PHP script might return text/plain or application/json. We must handle both.
    const responseText = await response.text();
    try {
        // Attempt to parse as JSON for spin results
        return JSON.parse(responseText) as PhpApiResponse;
    } catch(e) {
        // If it fails, assume it's the legacy string response for 'init'
        // and wrap it in our expected object structure.
        return { stringResponse: responseText } as unknown as PhpApiResponse;
    }
  } catch (error) {
    console.error('Failed to communicate with PHP engine:', error);
    throw new Error('Could not process game request due to an internal error.');
  }
}

// The router is now simpler and defines a standard procedure.
// export const phpRouter =  o
// //   .input(z.object({ gameName: z.string(), body: z.any() })) // Define input validation
// //   .output(z.object({ id: z.number() })) // Define output validation
//   .handler(async ({ input, context }) => { // Define execution logic
//     return { id: 1 }
//   })// FIX: Use .mutation() for procedures that change data
// console.log(input)
// console.log(context)
//         const { session } = context;
//         const { gameName, body,  } = input;
    
//         if (!session || !userProfile || !userProfile.phpId) {
//           throw new Error('User not authenticated or not configured for this game type.');
//         }
export async function handlePhpCall(context: CreateMyContextOptions){
        const { body, gameName, userProfile,queryParams } = context.context

        const action = body?.action || body?.action || 'spin';
        const postData = action === 'init' || action === 'paytable' ? queryParams : body;

        let [game, shop, gameBank, wallet, gameSession] = await Promise.all([
            prisma.game.findFirst({ where: { name: gameName, operatorId: userProfile.operatorId ?? undefined } }),
            prisma.shop.findUnique({ where: { id: userProfile.shopId ?? undefined } }),
            prisma.gameBank.findFirst({ where: { shop_id: userProfile.shopId ?? undefined } }),
            prisma.wallet.findFirst({ where: { userId: userProfile.id, operatorId: userProfile.operatorId ?? undefined } }),
            prisma.gameSession.findFirst({ where: { userId: userProfile.id, gameName, isActive: true } }),
        ]);
        if (gameSession == undefined) {
            if (!userProfile.id || !gameName) {
                throw new Error('userProfile.id and gameName must be defined to create a game session.');
            }
            gameSession = await prisma.gameSession.upsert({
                where:{ userId_gameName_isActive:{ userId: userProfile.id, gameName, isActive: true }},
                update: {},
                create: {
                    userId: userProfile.id as string,
                    gameName: gameName as string,
                    gameId: game?.id as string,
                    isActive: true,
                }
            });
        }
        console.log(game?.id, shop?.id, gameBank?.id, wallet?.id, gameSession?.id)
        if (!game || !shop || !gameBank || !wallet || !gameSession) {
            throw new Error('Required game, user, or session data not found.');
        }
    
        const betLevel = (postData as any)?.bet_betlevel || (postData as any)?.betLevel || 1;
        const denomination = (postData as any)?.bet_denomination || (postData as any)?.denomination || 0.01;
        const allBetInCoins = betLevel * 20;

        if (action === 'spin') {
            // Check funds before proceeding with the spin
            if (wallet.balance < allBetInCoins) {
                throw new Error('Insufficient funds.');
            }

            // Handle any pre-spin logic here (e.g., deducting bet, updating history)
            // The PHP side is now stateless for these operations
        }

        const desiredWinType = action === 'spin' ? determineWinType(game, shop, gameBank) : 'none';
        const goldsvetData = typeof game.goldsvetData === 'object' && game.goldsvetData !== null ? game.goldsvetData : {};

        // Prepare game state for PHP, excluding history and jackpot management
        const gameStateForPhp: PhpGameStateData = {
            action: action as any,
            desiredWinType: desiredWinType,
            postData: {
                ...postData,
                // Remove any history or jackpot related data from postData
                history: undefined,
                jackpots: undefined
            },
            playerId: userProfile.phpId as string,
            balance: wallet.balance,
            bank: gameBank.slots,
            gameData: {
                ...(gameSession.phpGameData as Record<string, any> ?? {}),
                // Ensure no history is passed to PHP
                history: undefined
            },
            user: { 
                operatorId: userProfile.operatorId, 
                balance: userProfile.balance,
                // Add any additional user data needed for the game
                id: userProfile.id
            },
            shop: { 
                percent: shop.percent, 
                maxWin: shop.maxWin,
                // Add any additional shop data needed for the game
                id: shop.id
            },
            game: { 
                name: game.name, 
                goldsvetData: goldsvetData,
                // Add any additional game data needed
                id: game.id
            },
        };
        // console.log(gameStateForPhp)
        const phpResult = await callPhpEngine(gameName as string, gameStateForPhp);

        if (action === 'spin') {
            // Process the spin result and update all necessary records in a transaction
            const [betTransaction, winTransaction, updatedWallet, updatedSession, updatedGame, updatedBank] = await prisma.$transaction([
                // Create bet transaction
                prisma.transaction.create({ 
                    data: { 
                        type: TransactionType.BET, 
                        amount: -allBetInCoins, 
                        userProfileId: userProfile.id, 
                        walletId: wallet.id, 
                        relatedGameId: game.id, 
                        description: `Bet on ${game.title}`, 
                        balanceBefore: wallet.balance, 
                        balanceAfter: wallet.balance - allBetInCoins 
                    } 
                }),
                
                // Create win transaction if there's a win
                ...(phpResult.totalWin > 0 ? [prisma.transaction.create({ 
                    data: { 
                        type: TransactionType.WIN, 
                        amount: phpResult.totalWin, 
                        userProfileId: userProfile.id, 
                        walletId: wallet.id, 
                        relatedGameId: game.id, 
                        description: `Win on ${game.title}`, 
                        balanceBefore: wallet.balance - allBetInCoins, 
                        balanceAfter: wallet.balance - allBetInCoins + phpResult.totalWin 
                    }
                })] : []),
                
                // Update wallet balance
                prisma.wallet.update({ 
                    where: { id: wallet.id }, 
                    data: { 
                        balance: phpResult.newBalance 
                    } 
                }),
                
                // Update game session with new game data (excluding history)
                prisma.gameSession.update({ 
                    where: { id: gameSession.id }, 
                    data: { 
                        phpGameData: {
                            ...(phpResult.newGameData || {}),
                            // Ensure we don't store history in the session
                            history: undefined
                        },
                        // Update last played timestamp
                        lastPlayedAt: new Date()
                    } 
                }),
                
                // Update game statistics
                prisma.game.update({ 
                    where: { id: game.id }, 
                    data: { 
                        totalWagered: { increment: allBetInCoins }, 
                        totalWon: { increment: phpResult.totalWin },
                        // Update last played timestamp
                        updatedAt: new Date()
                    } 
                }),
                
                // Update game bank
                prisma.gameBank.update({ 
                    where: { id: gameBank.id }, 
                    data: { 
                        slots: phpResult.newBank,
                        // Update timestamp
                        updatedAt: new Date()
                    } 
                }),
                
                // Add any additional updates here (e.g., leaderboards, achievements)
            ]);
            
            // Handle jackpot updates after the main transaction
            if (phpResult.jackpotWin) {
                try {
                    await handleJackpotWin({
                        userId: userProfile.id,
                        gameId: game.id,
                        amount: phpResult.jackpotWin,
                        jackpotType: phpResult.jackpotType,
                        walletId: wallet.id
                    });
                } catch (error) {
                    console.error('Error processing jackpot win:', error);
                    // Don't fail the main transaction if jackpot update fails
                }
            }
            return {
                success: true, message: 'Spin processed successfully',
                data: {
                    winAmount: phpResult.totalWin, balance: updatedWallet.id, reels: phpResult.reels, winLines: phpResult.winLines,
                    isBonus: (phpResult.totalFreeGames ?? 0) > 0, freeSpinState: phpResult.freeSpinState, isRespin: phpResult.isRespin,
                },
            };
        }
        return phpResult.stringResponse ?? "";
    }

// import { o, publicProcedure } from '@/lib/orpc';
// import z from 'zod';
// import prisma from '../../prisma/';
// import { type PhpGameStateData, type PhpApiResponse } from '@/types';
// import { TransactionType, type Game, type GameBank, type Shop, type Wallet, type GameSession, type UserProfile } from '../../prisma/generated';

// /**
//  * Determines the desired outcome of a spin based on RTP and bank status.
//  * THIS IS THE CORE RTP LOGIC.
//  */
// function determineWinType(
//   game: { totalWagered: number; totalWon: number; },
//   shop: { percent: number },
//   gameBank: { bonus: number }
// ): 'bonus' | 'win' | 'none' {
//   const totalWagered = game.totalWagered ?? 0;
//   const totalWon = game.totalWon ?? 0;
//   const currentRTP = totalWagered > 0 ? (totalWon / totalWagered) * 100 : 0;
//   const targetRTP = shop.percent;
//   const randomValue = Math.random() * 100;

//   if (gameBank.bonus > 1000 && currentRTP < targetRTP && randomValue < 5) {
//     return 'bonus';
//   }
//   const winChance = currentRTP < targetRTP ? 30 : 15;
//   if (randomValue < winChance) {
//     return 'win';
//   }
//   return 'none';
// }

// /**
//  * Sends the fully assembled game state to the PHP logic engine.
//  */
// async function callPhpEngine(gameName: string, gameState: PhpGameStateData): Promise<PhpApiResponse> {
//   const phpEngineUrl = `${process.env.PHP_ENGINE_URL}/game/${gameName}/index.php`; // Point directly to the entrypoint
//   try {
//     const response = await fetch(phpEngineUrl, {
//       method: 'POST',
//       body: JSON.stringify(gameState),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(`PHP engine error for ${gameName}: ${response.status}`, errorText);
//       throw new Error(`Upstream PHP server responded with status: ${response.status}`);
//     }
//     // The PHP script might return text/plain or application/json. We must handle both.
//     const responseText = await response.text();
//     try {
//         return JSON.parse(responseText) as PhpApiResponse;
//     } catch(e) {
//         // If it's not JSON, it's likely the legacy string response for 'init'.
//         // We'll wrap it in our response structure.
//         return { stringResponse: responseText } as unknown as PhpApiResponse;
//     }
//   } catch (error) {
//     console.error('Failed to communicate with PHP engine:', error);
//     throw new Error('Could not process game request due to an internal error.');
//   }
// }

// // The router is now simpler and defines standard procedures.
// export const phpRouter = o.router({
//   /**
//    * Universal procedure for handling all legacy PHP game actions.
//    * Defined as a .mutation() as it changes state (balance, banks, etc.).
//    */
//   handleLegacyGame: publicProcedure
//     .input(z.object({
//         gameName: z.string(),
//         body: z.any().optional(),
//         queryParams: z.record(z.string()).optional(),
//     })).handler
//     (async ({ context, input }) => { 
//         const { session, userProfile } = ctx;
//         const { gameName, body, queryParams } = input;
    
//         if (!session || !userProfile || !userProfile.phpId) {
//           throw new Error('User not authenticated or not configured for this game type.');
//         }

//         const action = queryParams?.action || body?.action || 'spin';
//         const postData = action === 'init' || action === 'paytable' ? queryParams : body;

//         const [game, shop, gameBank, wallet, gameSession] = await Promise.all([
//             prisma.game.findFirst({ where: { name: gameName, operatorId: userProfile.operatorId ?? undefined } }),
//             prisma.shop.findUnique({ where: { id: userProfile.shopId ?? undefined } }),
//             prisma.gameBank.findFirst({ where: { shop_id: userProfile.shopId ?? undefined } }),
//             prisma.wallet.findFirst({ where: { userId: userProfile.id, operatorId: userProfile.operatorId ?? undefined } }),
//             prisma.gameSession.findFirst({ where: { userId: userProfile.id, gameId: gameName, isActive: true } }),
//         ]);

//         if (!game || !shop || !gameBank || !wallet || !gameSession) {
//             throw new Error('Required game, user, or session data not found.');
//         }
    
//         const betLevel = (postData as any)?.bet_betlevel || (postData as any)?.betLevel || 1;
//         const denomination = (postData as any)?.bet_denomination || (postData as any)?.denomination || 0.01;
//         const allBetInCoins = betLevel * 20;

//         if (action === 'spin' && wallet.balance < allBetInCoins) {
//             throw new Error('Insufficient funds.');
//         }

//         const desiredWinType = action === 'spin' ? determineWinType(game, shop, gameBank) : 'none';
//         const goldsvetData = typeof game.goldsvetData === 'object' && game.goldsvetData !== null ? game.goldsvetData : {};

//         const gameStateForPhp: PhpGameStateData = {
//             action: action as any,
//             desiredWinType: desiredWinType,
//             postData: postData,
//             playerId: userProfile.phpId,
//             balance: wallet.balance,
//             bank: gameBank.slots,
//             gameData: (gameSession.phpGameData as Record<string, any>) ?? {},
//             user: { shopId: userProfile.shopId, balance: userProfile.balance },
//             shop: { percent: shop.percent, maxWin: shop.maxWin },
//             game: { name: game.name, goldsvetData: goldsvetData },
//         };

//         const phpResult = await callPhpEngine(gameName, gameStateForPhp);

//         if (action === 'spin') {
//             const [, updatedWallet] = await prisma.$transaction([
//                 prisma.transaction.create({ data: { type: TransactionType.BET, amount: -allBetInCoins, userProfileId: userProfile.id, walletId: wallet.id, relatedGameId: game.id, description: `Bet on ${game.title}`, balanceBefore: wallet.balance, balanceAfter: wallet.balance - allBetInCoins } }),
//                 ...(phpResult.totalWin > 0 ? [prisma.transaction.create({ data: { type: TransactionType.WIN, amount: phpResult.totalWin, userProfileId: userProfile.id, walletId: wallet.id, relatedGameId: game.id, description: `Win on ${game.title}`, balanceBefore: wallet.balance - allBetInCoins, balanceAfter: wallet.balance - allBetInCoins + phpResult.totalWin }})] : []),
//                 prisma.wallet.update({ where: { id: wallet.id }, data: { balance: phpResult.newBalance } }),
//                 prisma.gameSession.update({ where: { id: gameSession.id }, data: { phpGameData: phpResult.newGameData } }),
//                 prisma.game.update({ where: { id: game.id }, data: { totalWagered: { increment: allBetInCoins }, totalWon: { increment: phpResult.totalWin } } }),
//                 prisma.gameBank.update({ where: { id: gameBank.id }, data: { slots: phpResult.newBank } }),
//             ]);
//             return {
//                 success: true, message: 'Spin processed successfully',
//                 data: {
//                     winAmount: phpResult.totalWin, balance: updatedWallet.balance, reels: phpResult.reels, winLines: phpResult.winLines,
//                     isBonus: (phpResult.totalFreeGames ?? 0) > 0, freeSpinState: phpResult.freeSpinState, isRespin: phpResult.isRespin,
//                 },
//             };
//         }
//         return phpResult.stringResponse ?? "";
//     }),
// });
