import { PrismaClient, Operator } from '../../generated'
import loadGamesOriginal from '../loadgames' // Assuming original is in parent directory

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "games" RESTART IDENTITY CASCADE;`)
    console.log('Connected to database to run loadGames.')

    // Fetch an existing operator (e.g., the first one or a specific one)
    // This assumes an operator has been seeded by the main seed script.
    const operator = await prisma.operator.findFirst({
      // You might want to specify a particular operator name if known, e.g., 'MainCasinoOperator'
      // where: { name: 'MainCasinoOperator' },
    })

    if (!operator) {
      console.error(
        'No operator found in the database. Cannot run loadGames. Please run the main seed first.'
      )
      return
    }

    console.log(`Using operator: ${operator.name} (ID: ${operator.id}) for loading games.`)
    await loadGamesOriginal(prisma, { id: operator.id })

    console.log('Standalone loadGames script finished successfully.')
  } catch (e) {
    console.error('Error running standalone loadGames script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
