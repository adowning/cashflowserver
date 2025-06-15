import { PrismaClient, TransactionType } from '@prisma/client';
import prisma from '../prisma/';

interface JackpotWinParams {
  userId: string;
  gameId: string;
  amount: number;
  jackpotType: string;
  walletId: string;
}

/**
 * Handles jackpot wins by creating transactions and updating the wallet
 */
export async function handleJackpotWin({
  userId,
  gameId,
  amount,
  jackpotType,
  walletId
}: JackpotWinParams) {
  if (!amount || amount <= 0) {
    throw new Error('Invalid jackpot amount');
  }

  // Start a transaction to ensure data consistency
  return await prisma.$transaction(async (prisma) => {
    // Get the current wallet balance
    const wallet = await prisma.wallet.findUnique({
      where: { id: walletId },
      select: { balance: true }
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    const newBalance = wallet.balance + amount;

    // Create a transaction record for the jackpot win
    await prisma.transaction.create({
      data: {
        type: TransactionType.JACKPOT_WIN,
        amount,
        userProfileId: userId,
        walletId,
        relatedGameId: gameId,
        description: `${jackpotType.toUpperCase()} Jackpot Win`,
        balanceBefore: wallet.balance,
        balanceAfter: newBalance,
      },
    });

    // Update the wallet balance
    await prisma.wallet.update({
      where: { id: walletId },
      data: { balance: newBalance },
    });

    // You might want to add additional logging or notifications here
    console.log(`Jackpot win processed: ${amount} for user ${userId}`);

    return { success: true, newBalance };
  });
}

/**
 * Updates the jackpot amounts based on the bet
 */
export async function updateJackpots(betAmount: number, shopId: string) {
  // Get all jackpots for the shop
  const jackpots = await prisma.jackpot.findMany({
    where: { shopId },
  });

  // Update each jackpot based on the bet amount and jackpot settings
  for (const jackpot of jackpots) {
    const incrementAmount = (betAmount * jackpot.percent) / 100;
    
    await prisma.jackpot.update({
      where: { id: jackpot.id },
      data: {
        currentAmount: { increment: incrementAmount },
      },
    });
  }

  return true;
}

export default {
  handleJackpotWin,
  updateJackpots,
};
