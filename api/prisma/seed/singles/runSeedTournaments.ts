import { PrismaClient, UserProfile, Game, Role as PrismaRoleEnum } from '../../generated'
import { seedTournaments as seedTournamentsOriginal } from '../seedTournaments'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedTournaments.')

    const userProfiles = await prisma.userProfile.findMany()
    const games = await prisma.game.findMany()

    if (userProfiles.length === 0) {
      console.warn('No user profiles found. Tournaments cannot be created.')
      return
    }
    if (games.length === 0) {
      console.warn('No games found. Tournaments cannot be created.')
      return
    }

    const adminProfile = userProfiles.find((up) => up.role === PrismaRoleEnum.ADMIN)
    if (!adminProfile) {
      console.warn(
        'No admin user profile found. Tournaments might not be created with an admin creator.'
      )
      // Depending on seedTournamentsOriginal, you might pass undefined or fetch a default user
    }

    await seedTournamentsOriginal(prisma, userProfiles, games, adminProfile)

    console.log('Standalone seedTournaments script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedTournaments script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
