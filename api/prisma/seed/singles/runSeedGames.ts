import { PrismaClient, Game, UserProfile, Operator } from '../../generated'
import { seedGameLaunchLinks as seedGameLaunchLinksOriginal } from '../seedGames'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedGameLaunchLinks.')

    const games = await prisma.game.findMany()
    const userProfiles = await prisma.userProfile.findMany()
    const operators = await prisma.operator.findMany()

    if (games.length === 0 || userProfiles.length === 0 || operators.length === 0) {
      console.warn(
        'Missing games, user profiles, or operators. Game launch links may not be created. Ensure main seed has run.'
      )
      // return; // Decide if to proceed or not
    }

    await seedGameLaunchLinksOriginal(prisma, games, userProfiles, operators)

    console.log('Standalone seedGameLaunchLinks script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedGameLaunchLinks script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
