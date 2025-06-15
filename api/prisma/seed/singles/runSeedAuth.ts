import { PrismaClient } from '../../generated'
import { seedUsersAndAccounts as seedUsersAndAccountsOriginal } from '../seedAuth'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedUsersAndAccounts.')

    await seedUsersAndAccountsOriginal(prisma)

    console.log('Standalone seedUsersAndAccounts script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedUsersAndAccounts script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
