import { PrismaClient } from '../../generated'
import { seedOperators as seedOperatorsOriginal } from '../seedOperator'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedOperators.')

    await seedOperatorsOriginal(prisma)

    console.log('Standalone seedOperators script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedOperators script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
