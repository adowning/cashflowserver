import { PrismaClient, User, Operator } from '../../generated'
import { seedUserProfiles as seedUserProfilesOriginal } from '../seedUserProfiles'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedUserProfiles.')

    const users = await prisma.user.findMany()
    const operator = await prisma.operator.findFirst({
      // where: { name: 'MainCasinoOperator' }, // Or fetch the first one
    })

    if (users.length === 0) {
      console.warn('No users found. User profiles cannot be created.')
      return
    }
    if (!operator) {
      console.error(
        'No operator found. Cannot run seedUserProfiles. Please run the main seed first.'
      )
      return
    }

    const defaultCurrencyCode = 'USD'

    await seedUserProfilesOriginal(prisma, users, operator.id, defaultCurrencyCode)

    console.log('Standalone seedUserProfiles script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedUserProfiles script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
