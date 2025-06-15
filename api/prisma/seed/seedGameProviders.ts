import { PrismaClient, GameProvider, GameProviderName, ProviderAuthType } from '../generated/'
import { faker } from '@faker-js/faker'

export async function seedGameProviders(prisma: PrismaClient): Promise<GameProvider[]> {
  console.log('Seeding game providers...')
  const createdGameProviders: GameProvider[] = []

  const providerDataList = [
    {
      name: GameProviderName.PRAGMATICPLAY,
      displayName: 'Pragmatic Play',
      rgsBaseUrl: 'https://api.pragmaticplay.com/rgs',
      authType: ProviderAuthType.API_KEY,
      apiKey: `pk_${faker.string.alphanumeric(32)}`,
      configJson: { gameLaunchParams: ['token', 'lang', 'gameSymbol'] },
    },
    {
      name: GameProviderName.EVOPLAY,
      displayName: 'EvoPlay',
      rgsBaseUrl: 'https://api.evoplay.games/api/v2',
      authType: ProviderAuthType.JWT_SIGN,
      privateKeyRef: 'EVOPLAY_PRIVATE_KEY_VAULT_REF',
      configJson: { jwtAlgorithm: 'RS256' },
    },
    {
      name: GameProviderName.NETENT,
      displayName: 'NetEnt',
      rgsBaseUrl: 'https://netent-static.casinomodule.com/games',
      authType: ProviderAuthType.CUSTOM,
      configJson: { operatorId: faker.string.uuid() },
    },
    {
      name: GameProviderName.REDTIGER,
      displayName: 'Red Tiger',
      rgsBaseUrl: 'https://rgs.redtiger.com/rtg',
      authType: ProviderAuthType.API_KEY,
      apiKey: `rtg_pk_${faker.string.alphanumeric(24)}`,
    },
    {
      name: GameProviderName.KICKASS,
      displayName: 'KickAss Games',
      rgsBaseUrl: 'https://api.kickassgames.dev/v1',
      authType: ProviderAuthType.API_KEY,
      apiKey: `ka_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.NETGAME,
      displayName: 'NetGame',
      rgsBaseUrl: 'https://api.netgame.com/prod',
      authType: ProviderAuthType.API_KEY,
      apiKey: `ng_${faker.string.alphanumeric(28)}`,
    },
    {
      name: GameProviderName.BIGFISHGAMES,
      displayName: 'Big Fish Games',
      rgsBaseUrl: 'https://api.bigfish.com/casino',
      authType: ProviderAuthType.OAUTH2,
      configJson: { clientId: faker.string.uuid() },
    },
    {
      name: GameProviderName.CQNINE,
      displayName: 'CQ9 Gaming',
      rgsBaseUrl: 'https://api.cq9gaming.com/v1',
      authType: ProviderAuthType.API_KEY,
      apiKey: `cq9_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.NOLIMIT,
      displayName: 'Nolimit City',
      rgsBaseUrl: 'https://rgs.nolimitcity.com',
      authType: ProviderAuthType.API_KEY,
      apiKey: `nlc_${faker.string.alphanumeric(32)}`,
    },
    {
      name: GameProviderName.SPRIBE,
      displayName: 'Spribe',
      rgsBaseUrl: 'https://api.spribe.io',
      authType: ProviderAuthType.API_KEY,
      apiKey: `sp_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.BGAMING,
      displayName: 'BGaming',
      rgsBaseUrl: 'https://api.bgaming.com/rgs',
      authType: ProviderAuthType.API_KEY,
      apiKey: `bg_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.PLAYNGO,
      displayName: "Play'n GO",
      rgsBaseUrl: 'https://rgs.playngo.com',
      authType: ProviderAuthType.API_KEY,
      apiKey: `png_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.RELAXGAMING,
      displayName: 'Relax Gaming',
      rgsBaseUrl: 'https://api.relax-gaming.com',
      authType: ProviderAuthType.API_KEY,
      apiKey: `rlx_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.HACKSAW,
      displayName: 'Hacksaw Gaming',
      rgsBaseUrl: 'https://api.hacksawgaming.com',
      authType: ProviderAuthType.API_KEY,
      apiKey: `hksw_${faker.string.alphanumeric(30)}`,
    },
    {
      name: GameProviderName.INTERNAL,
      displayName: 'Internal Games',
      rgsBaseUrl: 'https://internal.casino.example/api',
      authType: ProviderAuthType.NONE,
    },
  ]

  for (const data of providerDataList) {
    let provider = await prisma.gameProvider.findUnique({
      where: { name: data.name },
    })
    if (!provider) {
      provider = await prisma.gameProvider.create({
        data: data as any, // Cast to any if there are slight mismatches with generated types for seed
      })
      console.log(`Created game provider: ${provider.displayName || provider.name}`)
      createdGameProviders.push(provider)
    } else {
      console.log(`Game provider ${data.displayName || data.name} already exists.`)
      createdGameProviders.push(provider)
    }
  }

  console.log('Game provider seeding finished.')
  return createdGameProviders
}
