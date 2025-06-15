import { PrismaClient } from '../../generated'
import { seedGameProviders as seedGameProvidersOriginal } from '../seedGameProviders'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedGameProviders.')

    await seedGameProvidersOriginal(prisma)

    console.log('Standalone seedGameProviders script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedGameProviders script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
