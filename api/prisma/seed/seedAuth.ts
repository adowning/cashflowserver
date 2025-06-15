import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcryptjs'
import { User } from 'prisma/generated'
import { generateUsernames } from './wutang.js'

export async function seedUsersAndAccounts(prisma: PrismaClient) {
  // Renamed function
  console.log('Seeding users and accounts (auth)...')

  const usersToCreate = 20
  const createdUsersList: User[] = []
  const defaultPassword = 'Password123!' // Use a common secure password for mock users
  const tangNamesList = generateUsernames(usersToCreate + 5)

  // 1. Create or find Admin User
  const adminEmail = 'admin@casino.example.com'
  let adminUser = await prisma.user.findUnique({ where: { email: adminEmail } })

  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        id: faker.string.uuid(),
        name: 'Administrator Prime',
        username: 'admincasino',
        displayUsername: 'AdminCasino',
        email: adminEmail,
        emailVerified: true,
        image: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
    console.log(`Created admin user: ${adminUser.email}`)
  } else {
    console.log(`Admin user ${adminEmail} already exists.`)
  }

  if (adminUser) {
    createdUsersList.push(adminUser)
    // Seed Account for Admin
    const adminAccount = await prisma.account.findFirst({
      where: { userId: adminUser.id, providerId: 'credentials' },
    })
    if (!adminAccount) {
      const hashedPassword = await bcrypt.hash(`Admin_${defaultPassword}`, 10)
      await prisma.account.create({
        data: {
          id: faker.string.uuid(),
          userId: adminUser.id,
          accountId: adminUser.email, // Using email as accountId for credentials
          providerId: 'credentials',
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
      console.log(`Created credentials account for admin user ${adminUser.email}.`)
    }
  }

  // 2. Create or find Regular Users and their Accounts
  for (let i = 0; i < usersToCreate; i++) {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email({
      firstName: `${firstName.toLowerCase()}${i}`,
      lastName: lastName.toLowerCase(),
    })
    let regularUser = await prisma.user.findUnique({ where: { email } })

    if (!regularUser) {
      regularUser = await prisma.user.create({
        data: {
          id: faker.string.uuid(),
          name: `${firstName} ${lastName}`,
          username: tangNamesList[i], //faker.internet.userName({ firstName, lastName }).toLowerCase() + i,
          displayUsername: `${firstName}${faker.number.int({ min: 10, max: 99 })}`,
          email: email,
          emailVerified: faker.datatype.boolean(0.7),
          image: faker.image.avatar(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
      console.log(`Created regular user: ${regularUser.email}`)
    } else {
      console.log(`Regular user ${email} already exists, skipping user creation.`)
    }

    if (regularUser) {
      if (!createdUsersList.find((u) => u.id === regularUser!.id)) {
        // Add if not already present (e.g. if found existing)
        createdUsersList.push(regularUser)
      }
      // Seed Account for Regular User
      const userAccount = await prisma.account.findFirst({
        where: { userId: regularUser.id, providerId: 'credentials' },
      })
      if (!userAccount) {
        const hashedPassword = await bcrypt.hash(`${regularUser.username}_${defaultPassword}`, 10)
        await prisma.account.create({
          data: {
            id: faker.string.uuid(),
            userId: regularUser.id,
            accountId: regularUser.email, // Using email as accountId for credentials
            providerId: 'credentials',
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
        console.log(`Created credentials account for regular user ${regularUser.email}.`)
      }
    }
  }

  const finalAdminUser = createdUsersList.find((u) => u.email === adminEmail)
  const finalRegularUsers = createdUsersList.filter(
    (u) => u.email !== adminEmail && u.id !== finalAdminUser?.id
  )

  console.log('User and account (auth) seeding finished.')
  return { adminUser: finalAdminUser!, users: finalRegularUsers }
}
