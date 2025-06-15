import { PrismaClient, Game, UserProfile, GameSession, GameSpin } from '../generated/'
import { faker } from '@faker-js/faker'

export async function seedGameSessionsAndSpins(
  prisma: PrismaClient,
  userProfiles: UserProfile[],
  games: Game[],
  minSessionsPerUser: number,
  maxSessionsPerUser: number,
  minSpinsPerSession: number,
  maxSpinsPerSession: number
) {
  console.log('Seeding game sessions and spins...')
  if (userProfiles.length === 0 || games.length === 0) {
    console.log('No users or games available to create sessions/spins.')
    return { gameSessions: [], gameSpins: [] }
  }

  const createdGameSessions: GameSession[] = []
  const createdGameSpins: GameSpin[] = []

  for (const profile of userProfiles) {
    if (!profile || !profile.id) continue
    const numSessions = faker.number.int({ min: minSessionsPerUser, max: maxSessionsPerUser })

    for (let i = 0; i < numSessions; i++) {
      const randomGame = faker.helpers.arrayElement(
        games.filter((g) => g.operatorId === profile.operatorId)
      )
      if (!randomGame) continue

      const sessionStartTime = faker.date.recent({ days: 30 })
      const sessionDurationMinutes = faker.number.int({ min: 5, max: 120 })
      const sessionEndTime = new Date(sessionStartTime.getTime() + sessionDurationMinutes * 60000)
      const isActive = faker.datatype.boolean(0.05) // 5% chance session is still "active"

      const gameSessionData = {
        userId: profile.userId,
        gameId: randomGame.id,
        isActive: isActive,
        startedAt: sessionStartTime,
        startTime: sessionStartTime,
        endTime: isActive ? null : sessionEndTime,
        ipAddress: faker.internet.ip(),
        userAgent: faker.internet.userAgent(),
        startingBalance: profile.balance,
        startingTotalXp: profile.totalXpFromOperator,
        currencyId: profile.activeCurrencyType,
        sessionData: { providerSessionId: faker.string.uuid(), clientType: 'HTML5_DESKTOP' },
        rtgToken: faker.string.alphanumeric(32),
        rtgFingerPrint: faker.string.uuid(),
        // profileId: profile.id, // If you add this direct relation
      }

      const gameSession = await prisma.gameSession.create({ data: gameSessionData })
      createdGameSessions.push(gameSession)

      if (isActive && (!profile.currentGameSessionid || faker.datatype.boolean(0.5))) {
        await prisma.userProfile.update({
          where: { id: profile.id },
          data: { currentGameSessionid: gameSession.id },
        })
      }

      const numSpins = faker.number.int({ min: minSpinsPerSession, max: maxSpinsPerSession })
      let totalWageredInSession = 0
      let totalWonInSession = 0

      for (let j = 0; j < numSpins; j++) {
        const wagerAmount = faker.number.int({ min: 10, max: 500 }) // cents
        const grossWinAmount = faker.datatype.boolean(0.4)
          ? faker.number.int({ min: 0, max: wagerAmount * faker.number.int({ min: 1, max: 10 }) })
          : 0

        totalWageredInSession += wagerAmount
        totalWonInSession += grossWinAmount

        const spin = await prisma.gameSpin.create({
          data: {
            gameSessionId: gameSession.id,
            sessionId: gameSessionData.sessionData.providerSessionId, // Assuming sessionId is the same as gameSession.id
            spinNumber: j + 1,
            wagerAmount,
            grossWinAmount,
            currencyId: profile.activeCurrencyType,
            timeStamp: faker.date.between({
              from: sessionStartTime,
              to: isActive ? new Date() : sessionEndTime,
            }),
            spinData: { betLines: 20, coinValue: (wagerAmount / 20 / 100).toFixed(2) },
            // sessionId: gameSession.id, // This seems redundant if gameSessionId is present
          },
        })
        createdGameSpins.push(spin)
      }
      await prisma.gameSession.update({
        where: { id: gameSession.id },
        data: { totalWagered: totalWageredInSession, totalWon: totalWonInSession },
      })
    }
  }

  console.log('Game session and spin seeding finished.')
  return { gameSessions: createdGameSessions, gameSpins: createdGameSpins }
}
