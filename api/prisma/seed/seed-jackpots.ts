import prisma from '../../prisma/'
import { JACKPOT_CONFIG, JackpotType } from 'shared'

async function seedJackpots() {
  console.log('🎰 Starting jackpot seeding...')

  try {
    // Check if jackpots already exist
    const existingJackpots = await prisma.jackpot.findMany()

    if (existingJackpots.length > 0) {
      console.log(`Found ${existingJackpots.length} existing jackpots. Skipping seed.`)
      console.log('Existing jackpots:')
      existingJackpots.forEach((jackpot) => {
        console.log(
          `  - ${jackpot.type}: ${jackpot.currentAmountCoins} coins ($${jackpot.currentAmountCoins / 100})`
        )
      })
      return
    }

    // Create the three jackpots
    console.log('Creating jackpots...')

    for (const [typeName, config] of Object.entries(JACKPOT_CONFIG)) {
      console.log(`Creating ${typeName} jackpot...`)

      const jackpot = await prisma.jackpot.create({
        data: {
          type: config.type,
          currentAmountCoins: config.seedAmountCoins,
          seedAmountCoins: config.seedAmountCoins,
          minimumBetCoins: config.minimumBetCoins,
          contributionRateBasisPoints: config.contributionRateBasisPoints,
          probabilityPerMillion: config.probabilityPerMillion,
          minimumTimeBetweenWinsMinutes: config.minimumTimeBetweenWinsMinutes,
          isActive: true,
        },
      })

      console.log(`✅ Created ${typeName} jackpot:`)
      console.log(`   ID: ${jackpot.id}`)
      console.log(
        `   Current Amount: ${jackpot.currentAmountCoins} coins ($${jackpot.currentAmountCoins / 100})`
      )
      console.log(
        `   Minimum Bet: ${jackpot.minimumBetCoins} coins ($${jackpot.minimumBetCoins / 100})`
      )
      console.log(`   Contribution Rate: ${jackpot.contributionRateBasisPoints / 100}%`)
      console.log(`   Win Probability: ${jackpot.probabilityPerMillion / 10000}%`)
      console.log(`   Min Time Between Wins: ${jackpot.minimumTimeBetweenWinsMinutes} minutes`)
      console.log('')
    }

    // Verify creation
    const createdJackpots = await prisma.jackpot.findMany({
      orderBy: { type: 'asc' },
    })

    console.log('🎉 Jackpot seeding completed successfully!')
    console.log(`Created ${createdJackpots.length} jackpots:`)

    let totalPool = 0
    createdJackpots.forEach((jackpot) => {
      totalPool += jackpot.currentAmountCoins
      console.log(
        `  - ${jackpot.type}: ${jackpot.currentAmountCoins} coins ($${jackpot.currentAmountCoins / 100})`
      )
    })

    console.log(`Total initial pool: ${totalPool} coins ($${totalPool / 100})`)
  } catch (error) {
    console.error('❌ Error seeding jackpots:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seed function if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedJackpots()
    .then(() => {
      console.log('Seeding completed successfully')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Seeding failed:', error)
      process.exit(1)
    })
}

export { seedJackpots }
