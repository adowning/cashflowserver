import {
  PrismaClient,
  Game,
  UserProfile,
  Operator,
  GameLaunchLink,
  GameProvider,
} from '../generated/'
import { faker } from '@faker-js/faker'

// Your loadGames function is called from index.ts.
// This function seeds GameLaunchLinks.

export async function seedGameLaunchLinks(
  prisma: PrismaClient,
  games: Game[],
  userProfiles: UserProfile[],
  operators: Operator[] // Assuming you pass an array with the main operator
): Promise<GameLaunchLink[]> {
  console.log('Seeding game launch links...')
  if (games.length === 0 || userProfiles.length === 0 || operators.length === 0) {
    console.log('Skipping game launch links: missing games, users, or operators.')
    return []
  }
  const createdLaunchLinks: GameLaunchLink[] = []
  const mainOperator = operators[0] // Assuming the first operator is the relevant one

  for (const profile of userProfiles) {
    if (!profile || !profile.id) continue
    const numberOfLinks = faker.number.int({ min: 1, max: 3 })

    for (let i = 0; i < numberOfLinks; i++) {
      const randomGame = faker.helpers.arrayElement(
        games.filter((g) => g.operatorId === mainOperator?.id)
      ) // Ensure game belongs to operator
      if (!randomGame) continue // Skip if no suitable game found

      const launchLinkData = {
        userId: profile.userId,
        gameId: randomGame.id,
        operatorId: mainOperator?.id as string,
        tokenInternal: faker.string.uuid() + faker.string.alphanumeric(10),
        currency: profile.activeCurrencyType,
        mode: faker.helpers.arrayElement(['real', 'demo']),
        state: 'SESSION_INIT',
        active: true,
        expiresAt: faker.date.future({ years: 1 }),
        requestIp: faker.internet.ip(),
        userAgent: faker.internet.userAgent(),
        sessionUrl: `https://casino.example.com/launch/${randomGame.name}?token=${faker.string.alphanumeric(32)}`,
        meta: { platform: faker.helpers.arrayElement(['desktop', 'mobile']), language: 'en' },
        userProfileId: profile.id,
      }

      try {
        const launchLink = await prisma.gameLaunchLink.create({
          data: launchLinkData,
        })
        createdLaunchLinks.push(launchLink)
      } catch (error) {
        console.error(
          `Failed to create launch link for user ${profile.username} and game ${randomGame.name}:`,
          error
        )
      }
    }
  }

  console.log(`Seeded ${createdLaunchLinks.length} game launch links.`)
  return createdLaunchLinks
}
