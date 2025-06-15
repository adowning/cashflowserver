import { PrismaClient, VipInfo, UserProfile } from '../generated/'
import { faker } from '@faker-js/faker'

// This function can be used to further update VIP info if needed,
// but seedUserProfiles now handles initial creation due to the strict relation.
export async function seedVipInfos(
  prisma: PrismaClient,
  userProfiles: UserProfile[]
): Promise<VipInfo[]> {
  console.log('Updating/Enriching VIP infos (if necessary)...')
  const updatedVipInfos: VipInfo[] = []

  for (const profile of userProfiles) {
    if (!profile || !profile.vipInfoId) {
      console.warn(
        `Skipping VIP update for profile ${profile?.username} due to missing profile or vipInfoId.`
      )
      continue
    }
    const vipInfo = await prisma.vipInfo.findUnique({
      where: { id: profile.vipInfoId },
    })

    if (vipInfo) {
      // Example: Add more XP or update a recently claimed bonus
      const updatedVip = await prisma.vipInfo.update({
        where: { id: vipInfo.id },
        data: {
          currentLevelXp: faker.number.int({
            min: vipInfo.currentLevelXp,
            max: vipInfo.currentLevelXp + 500,
          }),
          totalXp: faker.number.int({ min: vipInfo.totalXp, max: vipInfo.totalXp + 2000 }),
          // Simulate a recent claim
          // dailyBonusClaimedAt: vipInfo.level > 3 && faker.datatype.boolean(0.1) ? new Date() : vipInfo.dailyBonusClaimedAt,
        },
      })
      updatedVipInfos.push(updatedVip)
    } else {
      console.warn(
        `VipInfo not found for profile ${profile.username} with vipInfoId ${profile.vipInfoId}. This should not happen if seedUserProfiles ran correctly.`
      )
    }
  }

  console.log(`VIP info update/enrichment finished. Processed ${updatedVipInfos.length} records.`)
  return updatedVipInfos
}
