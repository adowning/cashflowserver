import { PrismaClient, Operator, PaymentMethod, KeyMode, Role } from '../generated/'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcryptjs'

export async function seedOperators(prisma: PrismaClient): Promise<Operator> {
  console.log('Seeding operators...')

  const operatorName = 'MainCasinoOperator'
  let operator = await prisma.operator.findUnique({
    where: { name: operatorName },
  })

  if (!operator) {
    const hashedSecret = await bcrypt.hash('supersecretoperatorpassword', 10)
    operator = await prisma.operator.create({
      data: {
        id: faker.string.alphanumeric(10),
        name: operatorName,
        operatorSecret: hashedSecret,
        operatorAccess: 'internal_services', // Example access level
        callbackUrl: faker.internet.url(),
        active: true,
        permissions: [
          KeyMode.read,
          KeyMode.write,
          KeyMode.manage_users,
          KeyMode.launch_game,
          KeyMode.manage_settings,
        ],
        ips: ['127.0.0.1', '::1', '*'], // Allow all for local dev, restrict in prod
        description: 'The primary operator for this online casino platform.',
        acceptedPayments: [
          PaymentMethod.CASH_APP,
          PaymentMethod.INSTORE_CARD,
          PaymentMethod.INSTORE_CASH,
        ],
        updatedAt: new Date(),
      },
    })
    console.log(`Created operator: ${operator.name}`)
  } else {
    console.log(`Operator "${operator.name}" already exists.`)
  }

  console.log('Operator seeding finished.')
  return operator
}
