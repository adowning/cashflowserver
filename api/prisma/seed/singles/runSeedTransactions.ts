import { PrismaClient, UserProfile, Operator } from '../../generated'
import { seedWalletsAndTransactions as seedWalletsAndTransactionsOriginal } from '../seedTransactions'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedWalletsAndTransactions.')

    const userProfiles = await prisma.userProfile.findMany()
    const operator = await prisma.operator.findFirst({
      // where: { name: 'MainCasinoOperator' }, // Or fetch the first one
    })

    if (userProfiles.length === 0) {
      console.warn('No user profiles found. Wallets and transactions cannot be created.')
      return
    }
    if (!operator) {
      console.error(
        'No operator found. Cannot run seedWalletsAndTransactions. Please run the main seed first.'
      )
      return
    }

    const minTransactions = 1
    const maxTransactions = 3

    await seedWalletsAndTransactionsOriginal(
      prisma,
      userProfiles,
      operator.id,
      minTransactions,
      maxTransactions
    )

    console.log('Standalone seedWalletsAndTransactions script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedWalletsAndTransactions script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
