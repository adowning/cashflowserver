import { PrismaClient, UserProfile, Game } from '../../generated'
import { seedGameSessionsAndSpins as seedGameSessionsAndSpinsOriginal } from '../seedGameSessionsAndSpins'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedGameSessionsAndSpins.')

    const userProfiles = await prisma.userProfile.findMany()
    const games = await prisma.game.findMany()

    if (userProfiles.length === 0) {
      console.warn(
        'No user profiles found. Game sessions and spins might be limited or not created.'
      )
    }
    if (games.length === 0) {
      console.warn('No games found. Game sessions and spins cannot be created.')
      return
    }

    // Define default min/max values or fetch them from a config if needed
    const minSessionsPerUser = 1
    const maxSessionsPerUser = 2
    const minSpinsPerSession = 3
    const maxSpinsPerSession = 5

    await seedGameSessionsAndSpinsOriginal(
      prisma,
      userProfiles,
      games,
      minSessionsPerUser,
      maxSessionsPerUser,
      minSpinsPerSession,
      maxSpinsPerSession
    )

    console.log('Standalone seedGameSessionsAndSpins script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedGameSessionsAndSpins script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
