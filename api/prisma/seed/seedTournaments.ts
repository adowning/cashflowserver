// Path: packages/database/src/seed/seedTournaments.ts
import {
  PrismaClient,
  Game,
  TournamentStatus,
  Role as PrismaRoleEnum,
  Prisma,
  Tournament,
  UserProfile, // Using UserProfile
} from '../generated/' // Adjust path to your Prisma client if needed
import { faker } from '@faker-js/faker'

// Helper to get a random item from an array (currently unused but kept for future use)
// function getRandomItem<T>(arr: T[]): T | undefined {
//   if (arr.length === 0) return undefined
//   return arr[Math.floor(Math.random() * arr.length)]
// }

// Helper function to get the start of a day
function getStartOfDay(date: Date): Date {
  const newDate = new Date(date)
  newDate.setHours(0, 0, 0, 0)
  return newDate
}

// Helper function to add days to a date
function addDays(date: Date, days: number): Date {
  const newDate = new Date(date.valueOf())
  newDate.setDate(newDate.getDate() + days)
  return newDate
}

// Helper function to set time for a date
function setTime(
  date: Date,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): Date {
  const newDate = new Date(date)
  newDate.setHours(hours, minutes, seconds, milliseconds)
  return newDate
}

export async function seedTournaments(
  prisma: PrismaClient,
  userProfilesToSeed: UserProfile[], // Changed to userProfilesToSeed for clarity
  games: Game[],
  explicitAdminProfile?: UserProfile // Can pass an explicit admin UserProfile
): Promise<Tournament[]> {
  console.log('🌱 Seeding Tournaments (Refactored for UserProfile as primary reference)...')

  if (!games || games.length === 0) {
    console.warn('⚠️ No games available. Skipping tournament seeding.')
    return []
  }
  if (!userProfilesToSeed || userProfilesToSeed.length === 0) {
    console.warn('⚠️ No user profiles available. Skipping tournament seeding.')
    return []
  }

  // Find an admin user from the UserProfile list based on its role property
  // UserProfile schema has 'role: Role?'
  const adminProfile =
    explicitAdminProfile || userProfilesToSeed.find((up) => up.role === PrismaRoleEnum.ADMIN)

  if (!adminProfile) {
    console.warn('⚠️ No admin UserProfile found. Skipping tournament seeding.')
    return []
  }

  const createdTournaments: Tournament[] = []
  const now = new Date() // Current time reference for seeding

  const createTournamentEntry = async (
    title: string,
    description: string,
    status: TournamentStatus,
    startTime: Date,
    endTime: Date,
    targetScore: number | null = null
  ) => {
    const selectedGamesForTournament = faker.helpers.arrayElements(
      games,
      faker.number.int({ min: Math.min(1, games.length), max: Math.min(5, games.length) })
    )
    if (selectedGamesForTournament.length === 0) {
      console.warn(`⚠️ No games selected for tournament ${title}, skipping.`)
      return
    }

    // Tournament.userId is the foreign key to UserProfile.id
    const tournamentInput: Prisma.TournamentCreateInput = {
      name: title,
      description,
      startTime,
      endTime,
      status,
      targetScore,
      user: { connect: { id: adminProfile.id } }, // Connects Tournament.userId to adminProfile.id
      rewards: {
        create: [
          {
            rank: 1,
            description: `${faker.number.int({ min: 1000, max: 5000 })} Super Coins + Trophy Icon`,
          },
          { rank: 2, description: `${faker.number.int({ min: 500, max: 2000 })} Super Coins` },
          { rank: 3, description: `${faker.number.int({ min: 250, max: 1000 })} Super Coins` },
        ],
      },
    }

    try {
      const tournament = await prisma.tournament.create({ data: tournamentInput })

      // Create TournamentGames relationships
      await prisma.tournamentGames.createMany({
        data: selectedGamesForTournament.map((game) => ({
          A: game.id, // gameId
          B: tournament.id, // tournamentId
        })),
      })

      createdTournaments.push(tournament)
      console.log(
        `🏆 Created tournament: ${tournament.name} (Status: ${tournament.status}, Start: ${tournament.startTime.toISOString()}, End: ${
          tournament.endTime ? tournament.endTime.toISOString() : 'N/A (Open-ended or not set)'
        }) with ${selectedGamesForTournament.length} eligible games`
      )
      if (
        (status === TournamentStatus.ACTIVE || status === TournamentStatus.COMPLETED) &&
        userProfilesToSeed.length > 1
      ) {
        const numParticipants = faker.number.int({
          min: 1,
          max: Math.min(10, userProfilesToSeed.length - 1),
        })
        const potentialParticipants = userProfilesToSeed.filter((up) => up.id !== adminProfile.id) // Compare UserProfile IDs
        const participantsToSeedForTournament = faker.helpers.arrayElements(
          potentialParticipants,
          numParticipants
        )

        for (const pUserProfile of participantsToSeedForTournament) {
          let totalScore = 0
          const gamePlays: Prisma.TournamentGamePlayCreateWithoutTournamentParticipantInput[] = []
          const numGamePlaySets = faker.number.int({
            min: 1,
            max: selectedGamesForTournament.length,
          })
          const gamesPlayedThisTournament = faker.helpers.arrayElements(
            selectedGamesForTournament,
            numGamePlaySets
          )

          for (const playedGame of gamesPlayedThisTournament) {
            const numPlaysInGame = faker.number.int({ min: 1, max: 3 })
            for (let k = 0; k < numPlaysInGame; k++) {
              const pointsEarned = faker.number.int({
                min: 10,
                max: targetScore ? targetScore / 10 : 2000,
              })
              totalScore += pointsEarned
              gamePlays.push({
                gameId: playedGame.id,
                pointsEarned,
                playedAt: faker.date.between({
                  from: startTime,
                  to: endTime > now && status === TournamentStatus.ACTIVE ? now : endTime,
                }),
              })
            }
          }
          if (status === TournamentStatus.COMPLETED && targetScore && totalScore > targetScore) {
            totalScore = faker.number.int({ min: targetScore / 2, max: targetScore })
          }

          // TournamentParticipant.userId should link to UserProfile.id
          await prisma.tournamentParticipant.create({
            data: {
              tournamentId: tournament.id,
              userId: pUserProfile.id, // Use UserProfile's own ID
              score: totalScore,
              joinedAt: faker.date.between({
                from: startTime,
                to: endTime > now && status === TournamentStatus.ACTIVE ? now : endTime,
              }),
              gamePlays: { create: gamePlays },
            },
          })
        }
      }
    } catch (e: any) {
      console.error(`❌ Error creating tournament "${title}":`, e.message)
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Prisma Error Code:', e.code)
        if (e.meta) console.error('Meta:', e.meta)
      }
    }
  }

  // --- Daily Tournaments ---
  console.log('  📅 Seeding Daily Tournaments...')
  for (let i = 1; i <= 7; i++) {
    const pastDate = addDays(getStartOfDay(now), -i)
    await createTournamentEntry(
      `Past Daily Challenge #${i} (${faker.word.adjective()})`,
      `Daily challenge from ${i} day(s) ago, sponsored by ${faker.company.name()}.`,
      TournamentStatus.COMPLETED,
      setTime(pastDate, 0, 0, 0, 0),
      setTime(pastDate, 23, 59, 59, 999),
      faker.number.int({ min: 50000, max: 150000 })
    )
  }

  const todayStartActive = setTime(getStartOfDay(now), Math.max(0, now.getHours() - 2), 0, 0, 0)
  const todayEndActive = addDays(todayStartActive, 1)
  await createTournamentEntry(
    "Today's Daily Grind",
    `The current daily challenge by ${faker.company.name()}, live now!`,
    TournamentStatus.ACTIVE,
    todayStartActive,
    todayEndActive,
    faker.number.int({ min: 50000, max: 150000 })
  )

  const tomorrowStart = addDays(getStartOfDay(now), 1)
  await createTournamentEntry(
    'Upcoming Daily Dash',
    `Get ready for tomorrow's daily challenge by ${faker.company.name()}!`,
    TournamentStatus.PENDING,
    setTime(tomorrowStart, 0, 0, 0, 0),
    setTime(addDays(tomorrowStart, 0), 23, 59, 59, 999),
    faker.number.int({ min: 50000, max: 150000 })
  )

  // --- Weekly Tournaments ---
  console.log('  🗓️ Seeding Weekly Tournaments...')
  const lastWeekEnd = addDays(getStartOfDay(now), -(now.getDay() || 7))
  const lastWeekStart = addDays(lastWeekEnd, -6)
  await createTournamentEntry(
    "Last Week's Marathon",
    `Highlights from the previous week's grand tournament by ${faker.company.name()}.`,
    TournamentStatus.COMPLETED,
    setTime(lastWeekStart, 0, 0, 0, 0),
    setTime(lastWeekEnd, 23, 59, 59, 999),
    faker.number.int({ min: 200000, max: 1000000 })
  )

  const currentWeekStartDay = now.getDay() || 7
  const currentWeekStart = addDays(getStartOfDay(now), -(currentWeekStartDay - 1))
  const currentWeekEnd = addDays(currentWeekStart, 6)
  await createTournamentEntry(
    "This Week's Championship",
    `The main event for this week by ${faker.company.name()} is ongoing!`,
    TournamentStatus.ACTIVE,
    setTime(currentWeekStart, 0, 0, 0, 0),
    setTime(currentWeekEnd, 23, 59, 59, 999),
    faker.number.int({ min: 200000, max: 1000000 })
  )

  const nextWeekStart = addDays(currentWeekEnd, 1)
  const nextWeekEnd = addDays(nextWeekStart, 6)
  await createTournamentEntry(
    "Next Week's Conquest",
    `Prepare for the upcoming weekly tournament by ${faker.company.name()}.`,
    TournamentStatus.PENDING,
    setTime(nextWeekStart, 0, 0, 0, 0),
    setTime(nextWeekEnd, 23, 59, 59, 999),
    faker.number.int({ min: 200000, max: 1000000 })
  )

  // --- Weekend Tournaments ---
  console.log('  🎉 Seeding Weekend Tournaments...')
  const pastWeekendEndSunday = addDays(getStartOfDay(now), -(now.getDay() || 7))
  const pastWeekendStartFriday = addDays(pastWeekendEndSunday, -2)
  await createTournamentEntry(
    "Last Weekend's Rumble",
    `Revisiting the excitement of the past weekend tournament by ${faker.company.name()}.`,
    TournamentStatus.COMPLETED,
    setTime(pastWeekendStartFriday, 17, 0, 0, 0),
    setTime(pastWeekendEndSunday, 22, 59, 59, 999),
    faker.number.int({ min: 100000, max: 500000 })
  )

  let daysUntilUpcomingFriday = (5 - now.getDay() + 7) % 7
  if (daysUntilUpcomingFriday === 0 && now.getHours() >= 17) {
    daysUntilUpcomingFriday = 7
  }
  const upcomingWeekendStartFriday = addDays(getStartOfDay(now), daysUntilUpcomingFriday)
  const upcomingWeekendEndSunday = addDays(upcomingWeekendStartFriday, 2)
  await createTournamentEntry(
    'Upcoming Weekend Blitz',
    `Get set for the weekend's action-packed tournament by ${faker.company.name()}!`,
    TournamentStatus.PENDING,
    setTime(upcomingWeekendStartFriday, 17, 0, 0, 0),
    setTime(upcomingWeekendEndSunday, 22, 59, 59, 999),
    faker.number.int({ min: 100000, max: 500000 })
  )

  console.log(
    `🌱 Seeded ${createdTournaments.length} tournaments in total (UserProfile ID Refactor).`
  )
  return createdTournaments
}
