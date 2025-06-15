import { faker } from '@faker-js/faker'

import { GameCategory, GameProvider, GameProviderName } from '../generated/' // Adjusted import
import * as gamesDataFull from './json/games2.json'
import { PrismaClient } from '../generated/'

interface OperatorKey {
  id: string
}

// const prisma = new PrismaClient();
export default async function loadGames(prisma: PrismaClient, key: OperatorKey): Promise<any[]> {
  // Return type Promise<any[]>
  // await prisma.$connect(); // Connection managed by main seed script
  console.log('Loading games from games2.json...')
  await prisma.game.deleteMany({}) // Deletion managed by main seed script's truncate

  const _games: any[] = []
  const gamesToProcess = (gamesDataFull as any).default || gamesDataFull // Handle if 'default' key exists due to module system

  async function insertGames(gamesToInsert: any[]) {
    // Renamed parameter
    if (gamesToInsert.length === 0) {
      console.log('No games to insert from games2.json data.')
      return
    }
    try {
      await prisma.game.createMany({
        data: gamesToInsert,
        skipDuplicates: true,
      })
      console.log(`Inserted/skipped ${gamesToInsert.length} games from games2.json.`)
    } catch (error: any) {
      console.error('Error inserting games from games2.json:')
      throw new Error(error)
    }
  }

  const gameProviders = await prisma.gameProvider.findMany()
  const providerMap = new Map(gameProviders.map((p) => [p.name.toLowerCase(), p.id]))

  for (const _game of gamesToProcess) {
    const game: any = { ..._game } // Create a mutable copy

    game.operatorId = key.id

    // Map developer to GameProviderName enum and then to gameProviderId
    const developerName = game.developer?.toLowerCase()
    let providerEnumKey: keyof typeof GameProviderName | undefined = undefined

    if (developerName) {
      const matchedKey = Object.keys(GameProviderName).find(
        (k) => k.toLowerCase() === developerName
      )
      if (matchedKey) {
        providerEnumKey = matchedKey as keyof typeof GameProviderName
      }
    }

    if (providerEnumKey && providerMap.has(GameProviderName[providerEnumKey].toLowerCase())) {
      game.gameProviderId = providerMap.get(GameProviderName[providerEnumKey].toLowerCase())
    } else if (developerName && providerMap.has(developerName)) {
      // Fallback to direct name match if enum not found
      game.gameProviderId = providerMap.get(developerName)
    } else {
      // console.warn(`Could not map developer "${game.developer}" to a known gameProviderId. Game: ${game.name}`);
      // Optionally, link to a default/unknown provider or skip
    }

    game.category =
      GameCategory[
      game.type
        ? ((game.type as string).toUpperCase().replace(/\s+/g, '_') as keyof typeof GameCategory)
        : 'SLOTS' // Default to SLOTS if type is missing
      ] || GameCategory.OTHER // Default to OTHER if mapping fails

    // Clean up fields not in the Game model or that need transformation
    const goldsvetData: any = {}
    const fieldsToKeepInGame = [
      'name',
      'title',
      'description',
      'supportedProviders',
      'category',
      'tags',
      'isActive',
      'thumbnailUrl',
      'bannerUrl',
      'meta',
      'featured',
      'providerName',
      'totalWagered',
      'gameProviderId',
      'operatorId',
    ]

    Object.keys(game).forEach((k) => {
      if (!fieldsToKeepInGame.includes(k) && k !== 'goldsvetData') {
        goldsvetData[k] = game[k]
        delete game[k]
      }
    })
    game.goldsvetData = goldsvetData
    console.log(providerEnumKey)
    // Ensure required fields have defa ults if not present
    game.name = game.name || game.title || `Unknown Game ${faker.string.uuid()}`
    game.title = game.title || game.name
    game.supportedProviders =
      game.supportedProviders || (providerEnumKey ? [GameProviderName[providerEnumKey]] : [])
    game.tags = game.tags || []
    game.isActive =
      typeof game.active === 'boolean'
        ? game.active
        : typeof game.isActive === 'string'
          ? game.isActive.toLowerCase() === 'true'
          : true
    game.featured =
      typeof game.featured === 'boolean'
        ? game.featured
        : typeof game.featured === 'string'
          ? game.featured.toLowerCase() === 'true'
          : false

    if (
      _games.filter((item) => item.name === game.name && item.operatorId === game.operatorId)
        .length === 0
    ) {
      _games.push(game)
    }
  }

  await insertGames(_games)
  console.log('Finished processing games from games2.json.')
  return await prisma.game.findMany({ where: { operatorId: key.id } }) // Return games for this operator
}
