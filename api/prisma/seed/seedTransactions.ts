import {
  PrismaClient,
  UserProfile,
  Wallet,
  Transaction,
  TransactionType,
  TransactionStatus,
  PaymentMethod,
  Product,
  Role,
} from '../generated/'
import { faker } from '@faker-js/faker'

export async function seedWalletsAndTransactions(
  prisma: PrismaClient,
  userProfiles: UserProfile[],
  operatorId: string,
  minTransactionsPerUser: number = 2,
  maxTransactionsPerUser: number = 10
) {
  console.log('Seeding wallets and transactions...')
  const createdWallets: Wallet[] = []
  const createdTransactions: Transaction[] = []

  const products = await prisma.product.findMany({ where: { shopId: operatorId }, take: 5 })

  for (const profile of userProfiles) {
    if (!profile || !profile.id) continue

    const paymentMethods = Object.values(PaymentMethod)
    const userPaymentMethod = faker.helpers.arrayElement(paymentMethods)

    let wallet = await prisma.wallet.findUnique({
      where: {
        userOperator: {
          userId: profile.userId,
          operatorId: operatorId,
        },
      },
    })

    if (!wallet) {
      wallet = await prisma.wallet.create({
        data: {
          userId: profile.userId,
          operatorId: operatorId,
          paymentMethod: userPaymentMethod,
          balance: profile.balance,
          bonusBalance: faker.number.int({ min: 0, max: 5000 }),
          lockedBalance: 0,
          isActive: true,
          address:
            userPaymentMethod === PaymentMethod.CASH_APP
              ? `$${profile.username}${faker.string.alphanumeric(4)}`
              : null,
        },
      })
      createdWallets.push(wallet)
      console.log(`Created ${userPaymentMethod} wallet for ${profile.username}`)
    } else {
      createdWallets.push(wallet)
    }

    let currentBalance = wallet.balance
    let currentBonusBalance = wallet.bonusBalance

    const numTransactions = faker.number.int({
      min: minTransactionsPerUser,
      max: maxTransactionsPerUser,
    })

    for (let i = 0; i < numTransactions; i++) {
      const transactionTypeCandidates = [
        TransactionType.DEPOSIT,
        TransactionType.BET_PLACE,
        TransactionType.BET_WIN,
        TransactionType.BONUS_AWARD,
        TransactionType.WITHDRAWAL,
      ]
      if (products.length > 0) transactionTypeCandidates.push(TransactionType.DEPOSIT)
      if (currentBalance > 2000) transactionTypeCandidates.push(TransactionType.WITHDRAWAL)

      const transactionType = faker.helpers.arrayElement(transactionTypeCandidates)
      let status = faker.helpers.arrayElement([
        TransactionStatus.COMPLETED,
        TransactionStatus.PENDING,
        TransactionStatus.FAILED,
      ])

      let amount = 0
      let netAmount = 0
      let feeAmount = 0
      let bonusAmountTrx = 0
      const balanceBefore = currentBalance
      const bonusBalanceBefore = currentBonusBalance
      let currentProductId: string | null = null

      switch (transactionType) {
        case TransactionType.DEPOSIT:
          amount = faker.number.int({ min: 1000, max: 20000 })
          netAmount = amount
          if (status === TransactionStatus.COMPLETED) currentBalance += netAmount
          if (products.length > 0 && faker.datatype.boolean(0.3)) {
            currentProductId = faker.helpers.arrayElement(products).id
          }
          break
        case TransactionType.BET_WIN:
          if (products.length > 0) {
            const product = faker.helpers.arrayElement(products)
            currentProductId = product.id
            amount = product.priceInCents
            netAmount = -amount
            if (status === TransactionStatus.COMPLETED && currentBalance >= amount)
              currentBalance += netAmount
            else if (status === TransactionStatus.COMPLETED) status = TransactionStatus.FAILED // Not enough balance
          } else continue
          break
        case TransactionType.BET_PLACE:
          amount = faker.number.int({ min: 50, max: Math.min(5000, currentBalance) })
          if (amount <= 0 && currentBalance > 0)
            amount = 50 // ensure some bet if balance exists
          else if (currentBalance <= 0) continue // skip bet if no balance

          netAmount = -amount
          if (status === TransactionStatus.COMPLETED) currentBalance += netAmount
          break
        case TransactionType.BET_WIN:
          const lastBet = createdTransactions
            .reverse()
            .find((t) => t.type === TransactionType.BET_PLACE && t.userProfileId === profile.id)
          amount = faker.number.int({ min: 10, max: (lastBet?.amount || 500) * 5 })
          netAmount = amount
          if (status === TransactionStatus.COMPLETED) currentBalance += netAmount
          break
        case TransactionType.WITHDRAWAL:
          amount = faker.number.int({ min: 1000, max: Math.min(10000, currentBalance) })
          if (amount <= 0 && currentBalance > 0) amount = 1000
          else if (currentBalance <= 0) continue

          feeAmount = faker.datatype.boolean(0.2) ? faker.number.int({ min: 50, max: 200 }) : 0
          netAmount = -(amount + feeAmount)
          if (status === TransactionStatus.COMPLETED) currentBalance += netAmount
          break
        case TransactionType.BONUS_AWARD:
          bonusAmountTrx = faker.number.int({ min: 500, max: 5000 })
          if (status === TransactionStatus.COMPLETED) currentBonusBalance += bonusAmountTrx
          amount = bonusAmountTrx // For display/logging, bonus is the "amount"
          netAmount = 0 // No change to real balance for bonus award itself
          break
      }

      const balanceAfter = currentBalance
      const bonusBalanceAfter = currentBonusBalance

      if (
        transactionType === TransactionType.WITHDRAWAL &&
        balanceBefore < amount + feeAmount &&
        status === TransactionStatus.COMPLETED
      ) {
        status = TransactionStatus.FAILED // Correct status if withdrawal would make balance negative
      }

      const transaction = await prisma.transaction.create({
        data: {
          walletId: wallet.id,
          userProfileId: profile.id,
          operatorId: operatorId,
          type: transactionType,
          status,
          amount,
          netAmount:
            status === TransactionStatus.COMPLETED &&
            transactionType !== TransactionType.BONUS_AWARD
              ? netAmount
              : 0,
          feeAmount: feeAmount > 0 ? feeAmount : null,
          productId: currentProductId,
          paymentMethod: wallet.paymentMethod,
          balanceBefore:
            status === TransactionStatus.COMPLETED &&
            transactionType !== TransactionType.BONUS_AWARD
              ? balanceBefore
              : null,
          balanceAfter:
            status === TransactionStatus.COMPLETED &&
            transactionType !== TransactionType.BONUS_AWARD
              ? balanceAfter
              : null,
          bonusBalanceBefore: status === TransactionStatus.COMPLETED ? bonusBalanceBefore : null,
          bonusBalanceAfter: status === TransactionStatus.COMPLETED ? bonusBalanceAfter : null,
          bonusAmount: bonusAmountTrx > 0 ? bonusAmountTrx : null,
          description: `${transactionType} of ${amount / 100}`,
          provider:
            transactionType === TransactionType.DEPOSIT ||
            transactionType === TransactionType.WITHDRAWAL
              ? 'MockPaymentProvider'
              : 'System',
          providerTxId: faker.string.alphanumeric(16),
          processedAt:
            status === TransactionStatus.COMPLETED || status === TransactionStatus.FAILED
              ? new Date()
              : null,
          metadata: {
            ipAddress: faker.internet.ip(),
            deviceInfo: {
              os: faker.helpers.arrayElement(['iOS', 'Android', 'Windows', 'MacOS']),
              browser: faker.internet.userAgent(),
            },
          },
        },
      })
      createdTransactions.push(transaction)
    }
    // Final update to wallet based on simulated transactions
    if (
      wallet &&
      (wallet.balance !== currentBalance || wallet.bonusBalance !== currentBonusBalance)
    ) {
      await prisma.wallet.update({
        where: { id: wallet.id },
        data: { balance: currentBalance, bonusBalance: currentBonusBalance },
      })
    }
  }

  console.log('Wallet and transaction seeding finished.')
  return { wallets: createdWallets, transactions: createdTransactions }
}
