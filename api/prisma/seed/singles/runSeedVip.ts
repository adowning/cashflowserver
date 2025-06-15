import { PrismaClient, UserProfile } from '../../generated'
import { seedVipInfos as seedVipInfosOriginal } from '../seedVip'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedVipInfos.')

    const userProfiles = await prisma.userProfile.findMany({
      // VipInfo seeding often depends on UserProfiles already having vipInfoId populated
      // or the seedVipInfos function handles upserting based on userId in UserProfile.
      // The original seedVip.ts seems to update existing VipInfos.
      where: {
        vipInfoId: {
          // not: null,
          not: undefined,
        },
      },
    })

    if (userProfiles.length === 0) {
      console.warn(
        'No user profiles with linked vipInfoId found. seedVipInfos might not update anything. Ensure main seed and seedUserProfiles ran correctly.'
      )
      // return; // You might still want to run it if seedVipInfos has creation logic based on UserProfile.
    }

    await seedVipInfosOriginal(prisma, userProfiles)

    console.log('Standalone seedVipInfos script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedVipInfos script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
