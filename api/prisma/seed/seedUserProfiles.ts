// Path: /home/ash/Documents/cashit/server/prisma/seed/seedUserProfiles.ts
// ... other imports ...
import {
  PrismaClient,
  UserProfile,
  User,
  Role as PrismaRole,
  Operator,
  VipInfo,
} from '../generated/' // Ensure VipInfo is imported
import { faker } from '@faker-js/faker'

export async function seedUserProfiles(
  prisma: PrismaClient,
  users: User[],
  operatorId: string,
  defaultCurrencyCode: string
): Promise<UserProfile[]> {
  console.log('Seeding user profiles and initial VIP infos...')
  const createdUserProfiles: UserProfile[] = []

  for (const user of users) {
    if (!user || !user.id) {
      console.warn('Skipping profile creation for undefined user or user without ID.')
      continue
    }
    const isAdmin = user.email === 'admin@casino.example.com' // Ensure this email is correct or use role

    let userProfile = await prisma.userProfile.findUnique({
      where: { userId: user.id }, // Assuming UserProfile.userId is unique and links to User.id
    })

    if (!userProfile) {
      // Prepare VipInfo data
      const vipData = {
        // username: user.username,
        userId: user.id, // Foreign key to User model
        // avatar: user.image || faker.image.avatarGitHub(),
        level: isAdmin ? 5 : faker.number.int({ min: 0, max: 10 }),
        currentLevelXp: faker.number.int({ min: 0, max: 1000 }),
        totalXp: faker.number.int({ min: 0, max: 100000 }),
        dailyBonusClaimedAt: faker.datatype.boolean(0.3) ? faker.date.recent({ days: 1 }) : null,
        weeklyBonusClaimedAt: faker.datatype.boolean(0.2) ? faker.date.recent({ days: 7 }) : null,
        monthlyBonusClaimedAt: faker.datatype.boolean(0.1) ? faker.date.recent({ days: 30 }) : null,
        cashbackPercentage: faker.number.int({ min: 0, max: 15 }),
      }

      // Upsert VipInfo: Create if not exists, update if it does (based on VipInfo.id = user.id)
      // Your VipInfo schema uses 'id String @id' and you set it to user.id
      // Your VipInfo schema also has 'userId String @unique' which is the FK to User.id
      // It's best to upsert based on the field that is truly meant to be unique for the relation.
      // If VipInfo.id IS user.id, then where: { id: user.id } is correct.
      // If VipInfo.userId IS user.id and is unique, then where: { userId: user.id } could also be used for upsert if id was a separate CUID.
      // Given your create logic `id: user.id`, we'll stick to upserting on `id`.
      const vipInfo = await prisma.vipInfo.upsert({
        where: { id: user.id }, // The primary key 'id' of VipInfo is being set to 'user.id'
        update: vipData, // If VipInfo with id=user.id exists, update its fields
        create: {
          id: user.id, // Explicitly set id on create
          ...vipData,
        },
      })
      // console.log(`Upserted VipInfo for user ID: ${vipInfo.userId}`); // Log based on userId from vipData

      userProfile = await prisma.userProfile.create({
        data: {
          id: user.id, // UserProfile ID is also being set to user.id
          username: user.username as string,
          avatar: user.image || faker.image.avatarGitHub(),
          cashtag:
            `$${user.username.replace(/[^a-zA-Z0-9]/g, '')}${faker.string.alphanumeric(3)}`.toLowerCase(),
          balance: faker.number.int({ min: 10000, max: 250000 }),
          totalXpFromOperator: vipInfo.totalXp,
          activeCurrencyType: defaultCurrencyCode,
          lastDailySpin: faker.date.past({ years: 1 }),
          userId: user.id, // This is the foreign key to the User model
          isActive: true,
          role: isAdmin ? PrismaRole.ADMIN : PrismaRole.USER,
          operatorId: operatorId,
          vipInfoId: vipInfo.id, // Connect UserProfile to VipInfo using VipInfo's ID
          vipInfo: { connect: { id: vipInfo.id } },
        },
      })
      console.log(`Created user profile & linked/upserted VIP info for: ${userProfile.username}`)
      createdUserProfiles.push(userProfile)
    } else {
      console.log(`User profile for ${user.username} already exists.`)
      // Ensure VipInfo is also up-to-date for existing UserProfile
      // This part of your original code already uses upsert, which is good.
      // Just ensure the fields match what you want for an update.
      const existingVipInfo = await prisma.vipInfo.upsert({
        where: { userId: user.id }, // VipInfo.userId is unique
        update: {
          level: isAdmin ? 5 : faker.number.int({ min: 0, max: 10 }),
          totalXp: faker.number.int({
            // Use totalXpFromOperator from the existing profile for min range
            min: userProfile.totalXpFromOperator ?? 0,
            max: (userProfile.totalXpFromOperator ?? 0) + 50000,
          }),
          username: user.username, // Keep username in sync
          avatar: user.image || faker.image.avatarGitHub(), // Keep avatar in sync
          cashbackPercentage: faker.number.int({ min: 0, max: 15 }),
        },
        create: {
          // This block should ideally not be hit if UserProfile exists and vipInfoId was consistent
          id: user.id, // Must match the ID UserProfile would link to
          username: user.username,
          userId: user.id,
          avatar: user.image || faker.image.avatarGitHub(),
          level: isAdmin ? 5 : faker.number.int({ min: 0, max: 10 }),
          currentLevelXp: faker.number.int({ min: 0, max: 1000 }),
          totalXp: faker.number.int({ min: 0, max: 100000 }),
          cashbackPercentage: faker.number.int({ min: 0, max: 15 }),
        },
      })
      // Ensure UserProfile.vipInfoId is correctly linked if it wasn't or if VipInfo was just created by this upsert
      if (userProfile.vipInfoId !== existingVipInfo.id) {
        await prisma.userProfile.update({
          where: { id: userProfile.id },
          data: { vipInfoId: existingVipInfo.id },
        })
      }
      createdUserProfiles.push(userProfile)
    }
  }

  console.log('User profile and VIP info seeding finished.')
  return createdUserProfiles
}
