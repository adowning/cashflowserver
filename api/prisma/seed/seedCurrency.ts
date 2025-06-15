// import { PrismaClient, Currency } from '../generated/'
// import { faker } from '@faker-js/faker'

// // Ensure you have a Currency model in your schema.prisma, for example:
// // model Currency {
// //   id            String    @id @default(cuid())
// //   name          String    @unique
// //   code          String    @unique // e.g., USD, EUR
// //   symbol        String    // e.g., $, €
// //   exchangeRate  Float     @default(1.0)
// //   isActive      Boolean   @default(true)
// //   createdAt     DateTime  @default(now())
// //   updatedAt     DateTime  @updatedAt
// //   Product       Product[] // Relation to Product
// //   @@map("Currency")
// // }
// // And in Product model:
// // currencyId String
// // currency   Currency @relation(fields: [currencyId], references: [id])

// export async function seedCurrencies(prisma: PrismaClient): Promise<Currency> {
//   console.log('Seeding currencies...')

//   let usdCurrency = await prisma.currency.findUnique({
//     where: { code: 'USD' },
//   })

//   if (!usdCurrency) {
//     usdCurrency = await prisma.currency.create({
//       data: {
//         name: 'US Dollar',
//         code: 'USD',
//         symbol: '$',
//         exchangeRate: 1.0,
//         isActive: true,
//       },
//     })
//     console.log('Created USD currency.')
//   } else {
//     console.log('USD currency already exists.')
//   }

//   console.log('Currency seeding finished.')
//   return usdCurrency
// }
