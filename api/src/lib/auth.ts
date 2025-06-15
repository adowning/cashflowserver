import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { username, bearer, createAuthMiddleware } from 'better-auth/plugins'

import prisma from '../../prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  trustedOrigins: [process.env.CORS_ORIGIN || ''],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [username(), bearer()],
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path.includes('/sign-up')) {
        //console.log('/here')
        const newSession = ctx.context.newSession
        if (newSession) {
          // Find or create a default operator
          let operator = await prisma.operator.findFirst({
            where: { name: 'MainCasinoOperator' },
          })

          if (!operator) {
            // Create default operator if it doesn't exist
            operator = await prisma.operator.create({
              data: {
                id: 'default-operator-id',
                name: 'MainCasinoOperator',
                operatorSecret: 'default-secret',
                operatorAccess: 'internal_services',
                callbackUrl: 'http://localhost:3000/callback',
                active: true,
                permissions: ['read', 'write', 'manage_users'],
                ips: ['127.0.0.1', '::1', '*'],
                description: 'Default casino operator',
                acceptedPayments: ['CASH_APP', 'INSTORE_CARD', 'INSTORE_CASH'],
                updatedAt: new Date(),
              },
            })
          }
          const vip = await prisma.vipInfo.create({
            data: {
              level: 0,
              currentLevelXp: 0,
              totalXp: 0,
              cashbackPercentage: 0,
            }
          })
          // Create user profile and wallet in a transaction
          await prisma.$transaction(async (tx) => {
            // Create user profile
            const up = await tx.userProfile.create({
              data: {
                id: newSession.user.id, // Assuming user.id is the unique identifier
                userId: newSession.user.id,
                avatar: newSession.user.image || 'avatar-10.webp',
                username:
                  newSession.user.username ||
                  newSession.user.name ||
                  `user_${newSession.user.id.slice(-8)}`,
                // Set other default values as needed
                balance: 0,
                totalXpFromOperator: 0,
                operatorId: operator.id,
                activeCurrencyType: 'USD',
                lastDailySpin: new Date('1970-01-01T00:00:00Z'),
                isActive: true,
                role: 'USER', // Assuming 'USER' is a valid role in your schema
                vipInfoId: vip.id,
                vipInfo: {
                  create: {
                    id: newSession.user.id, // Assuming user.id is the unique identifier
                    userId: newSession.user.id,
                    // avatar: newSession.user.image || 'avatar-10.webp',
                    // username:
                    //   newSession.user.username ||
                    //   newSession.user.name ||
                    //   `user_${newSession.user.id.slice(-8)}`,
                  },
                },
              },
            })

            // Create wallet for the user with the same operator
            await tx.wallet.create({
              data: {
                userId: newSession.user.id,
                operatorId: operator.id,
                paymentMethod: 'CASH_APP', // Default payment method
                balance: 0.0,
                bonusBalance: 0,
                lockedBalance: 0,
                isActive: true,
                // address will be null by default for CASH_APP unless specifically needed
              },
            })
            //console.log(up)
          })
        }
      }
    }),
  },
})
