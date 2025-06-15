import type { PrismaGameCategory, PrismaUserProfile } from './prisma'
import type {
  PrismaGame as PrismaGame,
  PrismaGameSession,
  PrismaGameSpin as PrismaGameSpin,
  PrismaPaymentMethod,
  // TransactionStatus,
  // TransactionType,
  PrismaWallet,
} from './prisma'
export interface LuckyBetInfo {
  id: string // spin id
  username: string | null
  avatar: string | null
  gameName: string | null
  winAmount: number // in cents
  wagerAmount: number // in cents
  multiplier: number | null
  timestamp: Date
  userId?: string // Added for internal processing
}
export interface NolimitGameLaunchOptions {
  gameName: string
  user: {
    id: string | number
    // Add other fields your loader/game might need, e.g., username
  }
}
export interface NetGameOptions {
  gameName: string //
  token: string
  url: string
}
export interface RtgGameLaunchOptions {
  gameName: string // e.g., "777Strike"
  lang?: string
  currency?: string
  mode?: 'real' | 'demo'
  // Add any other parameters that your rtg_loader_template.html expects
  // or that are needed to construct the full preconfig
  rgsApiBase?: string // Base for your proxy: e.g., /api/rtg/platform
  gameCdnBase?: string // If different from default construction
  operator?: string
  provider?: string
  depositUrl?: string
  lobbyUrl?: string
  // ... any other specific params from com.casino.preconfig
}
export interface OutputGameBigWinItem {
  id: string // Unique ID for this item (e.g., spin.id for lucky bet, user.id for high roller)
  userId: string
  username: string | null
  avatar: string | null // Frontend might expect this key instead of 'avatar'

  gameId: string | null
  gameName: string | null

  // Lucky Bet specific (optional)
  winAmount: number
  wagerAmount: number
  multiplier?: number | null
  timestamp: Date
  // High Roller specific (optional)
  total_wagered_cents?: number

  // Adding a few more common optional fields to account for "6 more" from error.
  // These are illustrative; adjust based on actual GameBigWinItem definition.
  rank?: number // Optional: if you implement ranking
  currency_code?: string // e.g., USD, EUR
  // country_flag_url?: string | null; // Optional: URL for user's country flag
  description?: string | null // e.g., "Huge win on..." or "Top wagerer this week"
  // property_extra1?: any;
  // property_extra2?: any;
  // property_extra3?: any;
  // property_extra4?: any;
  // property_extra5?: any;
  // property_extra6?: any;
}

export interface GameBigWinResponseData {
  high_rollers: OutputGameBigWinItem[]
  lucky_bets: OutputGameBigWinItem[]
}
export interface HighRollerInfo {
  userId: string
  username: string | null
  avatar: string | null
  totalWagered: number // in cents, over a period
  lastActivity: Date // Timestamp of their last relevant activity
}

// export interface GameBigWinData {
//   high_rollers: HighRollerInfo[]
//   lucky_bets: LuckyBetInfo[]
// }

export interface ProviderSettingsResponseData {
  user: {
    balance: { cash: string; freeBets?: string; bonus?: string;[key: string]: any }
    canGamble: boolean
    userId: number | string // Provider's user ID
    sessionId: string // Provider's session ID
    sessionNetPosition?: string
    token: string // Provider's session token
    country?: string
    currency?: { code: string; symbol: string }
    stakes?: any
    limits?: any
    serverTime: string // ISO Date string
    [key: string]: any // Allow other provider-specific fields
  }
  game?: {
    version?: string
    gameType?: string
    [key: string]: any
  }
  launcher?: {
    version?: string
    [key: string]: any
  }
  jackpots?: any
  // ... any other top-level properties from the provider's settings response
}

// The DTO your /rtg/settings endpoint will return to the client
export interface RTGSettingsResponseDto {
  success: boolean
  result?: ProviderSettingsResponseData // If successful, this is the data from the provider
  error?: {
    code: string
    message: string
    details?: any
  }
}

// Provider's raw response shape for a spin/play call (e.g., from RTG)
// This is what `proxyRequestToRgs` will return for a spin.
// Based on your `ProviderSpinResponseData` type in the original game.service.ts context.
export interface ProviderSpinResponseData {
  transactions: {
    roundId: number | string // Provider's round ID
    [key: string]: any
  }
  user: {
    balance: {
      // Balance structure after spin
      cash: { atStart?: string; afterBet?: string; atEnd: string } // atEnd is primary
      freeBets?: { atStart?: string; afterBet?: string; atEnd: string }
      bonus?: { atStart?: string; afterBet?: string; atEnd: string }
      [key: string]: any
    }
    userId: number | string
    sessionId: string
    sessionNetPosition?: string
    token: string
    serverTime: string // ISO Date string
    canGamble?: boolean
    [key: string]: any
  }
  game: {
    win: {
      instantWin?: string
      lines?: string
      total: string // Total win amount as string from provider
      [key: string]: any
    }
    stake: string // Stake amount for this spin
    multiplier?: number
    winLines?: any[]
    reelsBuffer?: Array<Array<number[]>>
    [key: string]: any // Other game-specific outcomes
  }
  jackpots?: any | null
  bonusChance?: any | null
  // Any other fields specific to the provider's spin response
}

// This is the "result" part of RTGSpinResponseDto,
// it should be structurally compatible with ProviderSpinResponseData.
// If they are identical, you can alias: export type RtgSpinResult = ProviderSpinResponseData;
// If not, define RtgSpinResult explicitly and map ProviderSpinResponseData to it.
// export type RtgSpinResult = ProviderSpinResponseData // Assuming direct compatibility for now. Adjust if needed.

// The DTO your /rtg/spin endpoint will return to the client
export interface RTGSpinResponseDto {
  success: boolean
  result?: RtgSpinResult // If successful, this is the (potentially mapped) data
  error?: {
    code: string
    message: string
    details?: any
  }
}

// Request DTOs remain largely the same, ensure they match provider's requirements
export interface RTGSettingsRequestDto {
  gameId: string
  token: string // Platform session token or provider specific?
  userId: string // Platform user ID, possibly prefixed
  currency: string
  language: string
  mode: 'real' | 'demo' | 'test'
  // Include all other fields RTG /settings endpoint expects
  // Based on original game.ts:
  custom?: { siteId?: string; extras?: string;[key: string]: any }
  userData?: {
    userId?: string | number
    hash?: string
    affiliate?: string
    lang?: string
    channel?: string
    userType?: string
    fingerprint?: string
    [key: string]: any
  }
  // [key: string]: any; // For flexibility if many varying fields
}

export interface RTGSpinRequestDto {
  token: string // Platform session token OR provider's game session token
  userId: string // Platform user ID, possibly prefixed for provider
  gameId: string // Provider's game ID
  stake: number | string // Stake amount
  currency: string
  sessionId: string // THIS IS CRUCIAL - Provider's session ID obtained from settings call
  playMode?: 'real' | 'demo' | 'test'
  actions?: any[] // Specific game actions
  // Include all other fields RTG /spin endpoint expects
  // Based on original game.ts context and game.ts type file:
  custom?: { siteId?: string; extras?: string;[key: string]: any }
  bonusId?: any
  extras?: any
  siteId?: string
  userType?: string
  lang?: string | number
  fingerprint?: string | number
  channel?: string | number
  affiliate?: string | number
  userData?: {
    userId?: string | number
    affiliate?: string
    lang?: string
    channel?: string
    userType?: string
    [key: string]: any
  }
  roundId?: string | number // Optional if client tracks/sends it
  transactionId?: string | number // Optional platform-side tx id if sent to provider
  // [key: string]: any;
}

// --- GamePlatformSpinResultDetails (Internal Backend Type) ---
// This defines the structure returned by your internal handlePlatformGameRound function.
// It uses 's GetPayload types for precision.
export interface GamePlatformSpinResultDetails {
  betTransaction: {
    include: {
      originatorUser: {
        // Renamed from originatedUser for consistency if schema uses 'originatorUser'
        select: {
          id: true
          username: true
        }
      }
    }
  }
  winTransaction?: {
    include: {
      originatorUser: {
        // Renamed for consistency
        select: {
          id: true
          username: true
        }
      }
    }
  } | null
  finalPlatformWallet: PrismaWallet
  updatedGameSession: PrismaGameSession
  gameSpinRecord: GameSpin
  xpAwardedThisSpin: number
  tournamentPointsAwardedThisSpin: number
}

// Other existing types from your packages/types/src/interface/game.ts
// ... (GameCategoryName, Game, RTGUser, ResultGame, Launcher, etc. - review for consistency with above)
// It's important that if RTGUser used in RtgSpinResult is different from RTGUser used in RTGSettingsResponseDto's result,
// they are named distinctly, e.g., RtgSettingsUser, RtgSpinUser.
// The ProviderSpinResponseData and ProviderSettingsResponseData above try to generalize this.

// export { GameSession } // Re-export if used directly by client-facing types

// export type GameCategoryName = 'TABLE' | 'FISH' | 'POKER' | 'SLOTS' | 'OTHER' //

// ... (Keep other types like GameListResponse, Search, GameItem, etc., ensuring they align)
// For GameListResponse and GetGameSearchResponse, ensure they use the updated PaginatedResponse structure if applicable.

export interface GameListResponse {
  // Example if you keep this specific structure
  code: number
  list: Game[] // Define Game type if not already
  total: number
}

export interface Game extends PrismaGame {
  // Basic Game definition, expand as needed
  id: string
  name: string
  totalWagered: number
  totalWon: number
  totalSpins?: number // from adding all spins from all game sessions
  title: string
  targetRrp?: number
  providerName: string | null // Was 'developer'
  providerGameId?: string // External ID from provider
  category: PrismaGameCategory // from enum GameCategory in schema
  isActive: boolean
  thumbnailUrl: string | null
  popularity?: number
  activePlayers: PrismaUserProfile[]
  // ... other fields from your  Game model that client needs
}
// Ensure all DTOs used in game.service.ts (like LaunchGameResponseDto) are defined here too.
export interface LaunchGameResponseDto {
  launch_url: string
  game_session_id?: string
  launch_strategy?: 'IFRAME' | 'REDIRECT' | 'POPUP'
  provider_parameters?: Record<string, any> | string
}

export interface ProviderSettingsResponseData {
  user: {
    balance: { cash: string; freeBets?: string; bonus?: string;[key: string]: any }
    canGamble: boolean
    userId: number | string // Provider's user ID
    sessionId: string // Provider's session ID
    sessionNetPosition?: string
    token: string // Provider's session token
    country?: string
    currency?: { code: string; symbol: string }
    stakes?: any
    limits?: any
    serverTime: string // ISO Date string
    [key: string]: any // Allow other provider-specific fields
  }
  game?: {
    version?: string
    gameType?: string
    [key: string]: any
  }
  launcher?: {
    version?: string
    [key: string]: any
  }
  jackpots?: any
  // ... any other top-level properties from the provider's settings response
}

// The DTO your /rtg/settings endpoint will return to the client
export interface RTGSettingsResponseDto {
  success: boolean
  result?: ProviderSettingsResponseData // If successful, this is the data from the provider
  error?: {
    code: string
    message: string
    details?: any
  }
}

// Provider's raw response shape for a spin/play call (e.g., from RTG)
// This is what `proxyRequestToRgs` will return for a spin.
// Based on your `ProviderSpinResponseData` type in the original game.service.ts context.
export interface ProviderSpinResponseData {
  transactions: {
    roundId: number | string // Provider's round ID
    [key: string]: any
  }
  user: {
    balance: {
      // Balance structure after spin
      cash: { atStart?: string; afterBet?: string; atEnd: string } // atEnd is primary
      freeBets?: { atStart?: string; afterBet?: string; atEnd: string }
      bonus?: { atStart?: string; afterBet?: string; atEnd: string }
      [key: string]: any
    }
    userId: number | string
    sessionId: string
    sessionNetPosition?: string
    token: string
    serverTime: string // ISO Date string
    canGamble?: boolean
    [key: string]: any
  }
  game: {
    win: {
      instantWin?: string
      lines?: string
      total: string // Total win amount as string from provider
      [key: string]: any
    }
    stake: string // Stake amount for this spin
    multiplier?: number
    winLines?: any[]
    reelsBuffer?: Array<Array<number[]>>
    [key: string]: any // Other game-specific outcomes
  }
  jackpots?: any | null
  bonusChance?: any | null
  // Any other fields specific to the provider's spin response
}

// This is the "result" part of RTGSpinResponseDto,
// it should be structurally compatible with ProviderSpinResponseData.
// If they are identical, you can alias: export type RtgSpinResult = ProviderSpinResponseData;
// If not, define RtgSpinResult explicitly and map ProviderSpinResponseData to it.
export type RtgSpinResult = ProviderSpinResponseData // Assuming direct compatibility for now. Adjust if needed.

// The DTO your /rtg/spin endpoint will return to the client
export interface RTGSpinResponseDto {
  success: boolean
  result?: RtgSpinResult // If successful, this is the (potentially mapped) data
  error?: {
    code: string
    message: string
    details?: any
  }
}
export interface LaunchGameResponseDto {
  launch_url: string
  game_session_id?: string
  launch_strategy?: 'IFRAME' | 'REDIRECT' | 'POPUP'
  provider_parameters?: Record<string, any> | string
}

// Request DTOs remain largely the same, ensure they match provider's requirements
export interface RTGSettingsRequestDto {
  gameId: string
  token: string // Platform session token or provider specific?
  userId: string // Platform user ID, possibly prefixed
  currency: string
  language: string
  mode: 'real' | 'demo' | 'test'
  // Include all other fields RTG /settings endpoint expects
  // Based on original game.ts:
  custom?: { siteId?: string; extras?: string;[key: string]: any }
  userData?: {
    userId?: string | number
    hash?: string
    affiliate?: string
    lang?: string
    channel?: string
    userType?: string
    fingerprint?: string
    [key: string]: any
  }
  // [key: string]: any; // For flexibility if many varying fields
}

export interface RTGSpinRequestDto {
  token: string // Platform session token OR provider's game session token
  userId: string // Platform user ID, possibly prefixed for provider
  gameId: string // Provider's game ID
  stake: number | string // Stake amount
  currency: string
  sessionId: string // THIS IS CRUCIAL - Provider's session ID obtained from settings call
  playMode?: 'real' | 'demo' | 'test'
  actions?: any[] // Specific game actions
  // Include all other fields RTG /spin endpoint expects
  // Based on original game.ts context and game.ts type file:
  custom?: { siteId?: string; extras?: string;[key: string]: any }
  bonusId?: any
  extras?: any
  siteId?: string
  userType?: string
  lang?: string | number
  fingerprint?: string | number
  channel?: string | number
  affiliate?: string | number
  userData?: {
    userId?: string | number
    affiliate?: string
    lang?: string
    channel?: string
    userType?: string
    [key: string]: any
  }
  roundId?: string | number // Optional if client tracks/sends it
  transactionId?: string | number // Optional platform-side tx id if sent to provider
  // [key: string]: any;
}

// --- GamePlatformSpinResultDetails (Internal Backend Type) ---
// This defines the structure returned by your internal handlePlatformGameRound function.
// It uses 's GetPayload types for precision.
export interface GamePlatformSpinResultDetails {
  betTransaction: {
    include: {
      originatorUser: {
        // Renamed from originatedUser for consistency if schema uses 'originatorUser'
        select: {
          id: true
          username: true
        }
      }
    }
  }
  winTransaction?: {
    include: {
      originatorUser: {
        // Renamed for consistency
        select: {
          id: true
          username: true
        }
      }
    }
  } | null
  finalPlatformWallet: PrismaWallet
  updatedGameSession: PrismaGameSession
  gameSpinRecord: GameSpin
  xpAwardedThisSpin: number
  tournamentPointsAwardedThisSpin: number
}

// Other existing types from your packages/types/src/interface/game.ts
// ... (GameCategoryName, Game, RTGUser, ResultGame, Launcher, etc. - review for consistency with above)
// It's important that if RTGUser used in RtgSpinResult is different from RTGUser used in RTGSettingsResponseDto's result,
// they are named distinctly, e.g., RtgSettingsUser, RtgSpinUser.
// The ProviderSpinResponseData and ProviderSettingsResponseData above try to generalize this.

export type { PrismaGameSession as GameSession } // Re-export if used directly by client-facing types

export type GameCategoryName = 'TABLE' | 'FISH' | 'POKER' | 'SLOTS' | 'OTHER' //

// ... (Keep other types like GameListResponse, Search, GameItem, etc., ensuring they align)
// For GameListResponse and GetGameSearchResponse, ensure they use the updated PaginatedResponse structure if applicable.

export interface GameListResponse {
  // Example if you keep this specific structure
  code: number
  list: Game[] // Define Game type if not already
  total: number
}

// export interface Game {
//   // Basic Game definition, expand as needed
//   id: string
//   name: string
//   title: string
//   providerName?: string // Was 'developer'
//   providerGameId?: string // External ID from provider
//   category?: GameCategoryName // from enum GameCategory in schema
//   isActive?: boolean
//   thumbnailUrl?: string
//   popularity?: number
//   // ... other fields from your  Game model that client needs
// }
// Ensure all DTOs used in game.service.ts (like LaunchGameResponseDto) are defined here too.
export interface LaunchGameResponseDto {
  launch_url: string
  game_session_id?: string
  launch_strategy?: 'IFRAME' | 'REDIRECT' | 'POPUP'
  provider_parameters?: Record<string, any> | string
}
// Suggested content for: ai_folder/packages/types/src/interface/game.ts
// This file should be reviewed to ensure RTGSpinResponseDto, RtgSpinResult,
// ProviderSpinResponseData, and ProviderSettingsResponseData are consistent
// and that Provider types can be safely cast or mapped to RtgSpinResult/RtgSettingsResult.

// Original imports from your file

// Ensure RTGUser, RtgSettingsBalance, ResultGame etc. are what ProviderSettingsResponseData maps to.
// Ensure RTGUser, RtgSpinBalance, RtgGame etc. are what ProviderSpinResponseData maps to.

// Example: RTGSpinResponseDto and RtgSpinResult
// (Assuming RtgSpinResult is the actual data payload when success is true)

// Provider's raw response shape for user settings/init call (e.g., from RTG)
// This is what `proxyRequestToRgs` will return for settings.
// Based on your `ProviderSettingsResponseData` type in the original game.service.ts context.
export interface ProviderSettingsResponseData {
  user: {
    balance: { cash: string; freeBets?: string; bonus?: string;[key: string]: any }
    canGamble: boolean
    userId: number | string // Provider's user ID
    sessionId: string // Provider's session ID
    sessionNetPosition?: string
    token: string // Provider's session token
    country?: string
    currency?: { code: string; symbol: string }
    stakes?: any
    limits?: any
    serverTime: string // ISO Date string
    [key: string]: any // Allow other provider-specific fields
  }
  game?: {
    version?: string
    gameType?: string
    [key: string]: any
  }
  launcher?: {
    version?: string
    [key: string]: any
  }
  jackpots?: any
  // ... any other top-level properties from the provider's settings response
}

// The DTO your /rtg/settings endpoint will return to the client
export interface RTGSettingsResponseDto {
  success: boolean
  result?: ProviderSettingsResponseData // If successful, this is the data from the provider
  error?: {
    code: string
    message: string
    details?: any
  }
}

// Provider's raw response shape for a spin/play call (e.g., from RTG)
// This is what `proxyRequestToRgs` will return for a spin.
// Based on your `ProviderSpinResponseData` type in the original game.service.ts context.
export interface ProviderSpinResponseData {
  transactions: {
    roundId: number | string // Provider's round ID
    [key: string]: any
  }
  user: {
    balance: {
      // Balance structure after spin
      cash: { atStart?: string; afterBet?: string; atEnd: string } // atEnd is primary
      freeBets?: { atStart?: string; afterBet?: string; atEnd: string }
      bonus?: { atStart?: string; afterBet?: string; atEnd: string }
      [key: string]: any
    }
    userId: number | string
    sessionId: string
    sessionNetPosition?: string
    token: string
    serverTime: string // ISO Date string
    canGamble?: boolean
    [key: string]: any
  }
  game: {
    win: {
      instantWin?: string
      lines?: string
      total: string // Total win amount as string from provider
      [key: string]: any
    }
    stake: string // Stake amount for this spin
    multiplier?: number
    winLines?: any[]
    reelsBuffer?: Array<Array<number[]>>
    [key: string]: any // Other game-specific outcomes
  }
  jackpots?: any | null
  bonusChance?: any | null
  // Any other fields specific to the provider's spin response
}

// This is the "result" part of RTGSpinResponseDto,
// it should be structurally compatible with ProviderSpinResponseData.
// If they are identical, you can alias: export type RtgSpinResult = ProviderSpinResponseData;
// If not, define RtgSpinResult explicitly and map ProviderSpinResponseData to it.
// export type RtgSpinResult = ProviderSpinResponseData // Assuming direct compatibility for now. Adjust if needed.

// The DTO your /rtg/spin endpoint will return to the client
export interface RTGSpinResponseDto {
  success: boolean
  result?: RtgSpinResult // If successful, this is the (potentially mapped) data
  error?: {
    code: string
    message: string
    details?: any
  }
}

// Request DTOs remain largely the same, ensure they match provider's requirements
export interface RTGSettingsRequestDto {
  gameId: string
  token: string // Platform session token or provider specific?
  userId: string // Platform user ID, possibly prefixed
  currency: string
  language: string
  playMode: 'real' | 'demo' | 'test'
  // Include all other fields RTG /settings endpoint expects
  // Based on original game.ts:
  custom?: { siteId?: string; extras?: string;[key: string]: any }
  userData?: {
    userId?: string | number
    hash?: string
    affiliate?: string
    lang?: string
    channel?: string
    userType?: string
    fingerprint?: string
    [key: string]: any
  }
  // [key: string]: any; // For flexibility if many varying fields
}

export interface RTGSpinRequestDto {
  token: string // Platform session token OR provider's game session token
  userId: string // Platform user ID, possibly prefixed for provider
  gameId: string // Provider's game ID
  stake: number | string // Stake amount
  currency: string
  sessionId: string // THIS IS CRUCIAL - Provider's session ID obtained from settings call
  playMode?: 'real' | 'demo' | 'test'
  actions?: any[] // Specific game actions
  // Include all other fields RTG /spin endpoint expects
  // Based on original game.ts context and game.ts type file:
  custom?: { siteId?: string; extras?: string;[key: string]: any }
  bonusId?: any
  extras?: any
  siteId?: string
  userType?: string
  lang?: string | number
  fingerprint?: string | number
  channel?: string | number
  affiliate?: string | number
  userData?: {
    userId?: string | number
    affiliate?: string
    lang?: string
    channel?: string
    userType?: string
    [key: string]: any
  }
  roundId?: string | number // Optional if client tracks/sends it
  transactionId?: string | number // Optional platform-side tx id if sent to provider
  // [key: string]: any;
}

// --- GamePlatformSpinResultDetails (Internal Backend Type) ---
// This defines the structure returned by your internal handlePlatformGameRound function.
// It uses 's GetPayload types for precision.
export interface GamePlatformSpinResultDetails {
  betTransaction: {
    include: {
      originatorUser: {
        // Renamed from originatedUser for consistency if schema uses 'originatorUser'
        select: {
          id: true
          username: true
        }
      }
    }
  }
  winTransaction?: {
    include: {
      originatorUser: {
        // Renamed for consistency
        select: {
          id: true
          username: true
        }
      }
    }
  } | null
  finalPlatformWallet: PrismaWallet
  updatedGameSession: PrismaGameSession
  gameSpinRecord: GameSpin
  xpAwardedThisSpin: number
  tournamentPointsAwardedThisSpin: number
}

// Other existing types from your packages/types/src/interface/game.ts
// ... (GameCategoryName, Game, RTGUser, ResultGame, Launcher, etc. - review for consistency with above)
// It's important that if RTGUser used in RtgSpinResult is different from RTGUser used in RTGSettingsResponseDto's result,
// they are named distinctly, e.g., RtgSettingsUser, RtgSpinUser.
// The ProviderSpinResponseData and ProviderSettingsResponseData above try to generalize this.

// export { GameSession } // Re-export if used directly by client-facing types

// export type GameCategoryName = 'TABLE' | 'FISH' | 'POKER' | 'SLOTS' | 'OTHER' //

// ... (Keep other types like GameListResponse, Search, GameItem, etc., ensuring they align)
// For GameListResponse and GetGameSearchResponse, ensure they use the updated PaginatedResponse structure if applicable.

export interface GameListResponse {
  // Example if you keep this specific structure
  code: number
  list: Game[] // Define Game type if not already
  total: number
}

// export interface Game {
//   // Basic Game definition, expand as needed
//   id: string
//   name: string
//   title: string
//   providerName?: string // Was 'developer'
//   providerGameId?: string // External ID from provider
//   category: GameCategoryName | undefined // from enum GameCategory in schema
//   isActive?: boolean
//   thumbnailUrl?: string
//   popularity?: number
//   // ... other fields from your  Game model that client needs
// }
// Ensure all DTOs used in game.service.ts (like LaunchGameResponseDto) are defined here too.
export interface LaunchGameResponseDto {
  launch_url: string
  game_session_id?: string
  launch_strategy?: 'IFRAME' | 'REDIRECT' | 'POPUP'
  provider_parameters?: Record<string, any> | string
}
// import { GameSession } from '../types'
// import { CurrencyInfo } from './currency'
// import { UserProfile } from './user'
// import { JsonArray } from '@prisma/client/runtime/library'

// export type GameCategoryName = 'TABLE' | 'FISH' | 'POKER' | 'SLOTS' | 'OTHER'

// export interface Game {
//   id: string
//   name: string
//   title: string
//   temperature: string | null
//   developer: string | null
//   vipLevel: number | null
//   // isActive: boolean | null
//   device: number | null
//   featured: boolean | null
//   gamebank: string | null
//   bet: number | null
//   denomination: number | null
//   categoryTemp: number | null
//   originalId: number | null
//   bids: number | null
//   statIn: number | null
//   statOut: number | null
//   currentRtp: number | null
//   rtpStatIn: number | null
//   rtpStatOut: number | null
//   standardRtp: number | null
//   // popularity: number | null
//   chanceFirepot1: number | null
//   chanceFirepot2: number | null
//   chanceFirepot3: number | null
//   fireCount1: number | null
//   fireCount2: number | null
//   fireCount3: number | null
//   linesPercentConfigSpin: string | null
//   linesPercentConfigSpinBonus: string | null
//   linesPercentConfigBonus: string | null
//   linesPercentConfigBonusBonus: string | null
//   rezerv: number | null
//   cask: number | null
//   advanced: string | null
//   scaleMode: string
//   slotViewState: string
//   view: number | null
//   categoryId: string | null
//   operatorId: string | null
//   providerId: string | null
//   createdAt: Date
//   updatedAt: Date
//   category: GameCategoryName | undefined
//   jackpotGroupId: string | null
//   active: boolean
//   password: string | null
//   // ope
//   // rator: Operator | null;
// }
// export interface RTGSettingsRequestDto {
//   token: string
//   gameId: string
//   userData: {
//     userId: string
//     hash: string
//     affiliate: string
//     lang: string
//     channel: string
//     userType: string
//     fingerprint: string
//   }
//   custom: {
//     siteId: string
//     extras: string
//   }
// }
// export interface RTGSettingsResponseDto {
//   success: boolean
//   result: RtgSettingsResult
// }

// export interface RtgSettingsResult {
//   user: RTGUser
//   game: ResultGame
//   launcher: Launcher
//   jackpots: null
// }

// export interface ResultGame {
//   cols: number
//   rows: number
//   offset: number
//   multiplierSequence: MultiplierSequence
//   extraWin: ExtraWin
//   lines: Array<number[]>
//   tiles: Tile[]
//   reelsBuffer: Array<Array<number[]>>
//   paysType: string
//   features: string[]
//   singlePayline: boolean
//   hasState: boolean
//   version: string
//   rtp: RTP
//   volatilityIndex: string
//   maxMultiplier: string
//   maxWinlineHitRate: string
//   maxMultiplierHitRate: string
//   maxMultiplierHitFrequency: string
//   maxMultiplierWinLines: string
//   maxMultiplierWinLinesHitRate: string
//   maxMultiplierWinLinesHitFrequency: string
//   hasGambleGame: boolean
//   gameType: string
//   stateful: boolean
//   hasChoices: boolean
//   stateExpireDays: null
//   hasBonuses: boolean
//   pendingRoundDays: number
//   skin: null
//   hasFeatureBuy: boolean
// }

// export interface ExtraWin {
//   bigWin: string
//   superWin: string
//   megaWin: string
// }

// export interface MultiplierSequence {
//   Progress: Progress[]
// }

// export interface Progress {
//   count: number
//   multiplier: number
//   spins: number
// }

// export interface RTP {
//   game: RtgGame
// }

// // export interface RtgGame {
// //   default: string

// export interface Tile {
//   id: number
//   type: Type
//   pays: string[]
// }

// export enum Type {
//   Normal = 'normal',
//   Scatter = 'scatter',
// }

// export interface Launcher {
//   version: string
// }

// export interface RTGUser {
//   balance: RtgSettingsBalance | RtgSpinBalance
//   notifications: any[]
//   messages: any[]
//   bonuses: any[]
//   tournaments: any[]
//   vouchers: any[]
//   userId: number
//   country: string
//   casino: string
//   vertical: string
//   currency: Currency
//   token: string
//   sessionId: string
//   sessionNetPosition: string
//   aamsParticipationId: null
//   aamsSessionId: null
//   depositedAmount: string
//   maxDeposit: string
//   canGamble: boolean
//   lastWin: string
//   prevRounds: any[]
//   limits: Limits
//   stakes: Stakes
//   autoplay: Autoplay
//   serverTime: Date
//   additional: null
// }

export interface Autoplay {
  type: string
  options: Options
}

export interface Options {
  spins: RtgSpins
  stopOnFeature: StopOnFeature
  stopOnLossLimits: StopOnLossLimits
  stopOnWin: StopOnWin
  hasRestart: boolean
}

export interface RtgSpins {
  values: string[]
  default: number
}

export interface StopOnFeature {
  enabled: boolean
}

export interface StopOnLossLimits {
  mandatory: boolean
  enabled: boolean
  values: string[]
  default: number
}

export interface StopOnWin {
  enabled: boolean
  values: string[]
}

export interface RtgSettingsBalance {
  cash: string
  freeBets: string
  sessionCash: string
  sessionFreeBets: string
  bonus: string
}

export interface Currency {
  code: string
  symbol: string
}

export interface Limits {
  maxGambleStake: string
  maxTotalStake: TotalStake
  minTotalStake: TotalStake
  spinDuration: null
}

export interface TotalStake {
  total: string
}

export interface Stakes {
  defaultIndex: number
  lastIndex: number
  types: string[]
}

// export interface GameCategory {
//   image: string
//   pictures: string
//   game_count: string | number
//   name: string
//   slug: string
//   games: Array<Search>
//   page_no: number
// }
export interface GameListResponse {
  code: number
  list: Array<Game>
  total: number
}
export interface Search {
  id: string
  name: string
  image: string
  developer: string
  is_demo: boolean
}

export interface GameItem {
  id: number
  name: string
  image: string
  developer: string
  producer: string
  is_demo: boolean
}

export interface GameEnterBody {
  id: string | Array<string>
  demo: boolean
}

export interface GameUserBody {
  game_categories_slug: string
  id: string
  demo: boolean
  page: number
  limit: number
}

export interface GameEnterResponse {
  method: string
  parames: string
  developer: string
  reserve: string
  weburl: string
}

export interface GameHistoryItem {
  name: string
  created_at: number
  amount: string | number
  multiplier: string | number
  bet_id: string | number
  status: string | number
  profit: number
}

export interface GameBigWinItem {
  game_id: string
  game_name: string
  game_icon: string
  user_name: string
  user_vip_group: number
  user_vip_level: number
  bet_amount: string
  multiplier: string
  win_amount: string
  time: number
}

// export interface GameBigWinData {
//   high_rollers: Array<HighRollerInfo>
//   lucky_bets: Array<LuckyBetInfo>
// }

export interface GameHistoryResponse {
  total_pages: number
  record: Array<GameHistoryItem>
}

export interface GameSearchResponse {
  items: Array<Game>
  total: number
}

export type GetGameFavoriteListResponse = {
  code: number
  data: Array<number | string>
  message: string
}

export type GetGameBigWinResponse = {
  code: number
  data: GameBigWinData
  message: string
}
export type Category = {
  name: string
  games: Game[]
}

export type GetGameCategoriesResponse = {
  code: number
  data: Array<any>
  messsage: string
}

// export type GetGameSearchResponse = {
//   code: number
//   data: GameSearchResponse
//   message: string
// }

export type GetGameEnterResponse = {
  code: number
  data: GameEnterResponse
  gameSession: PrismaGameSession
  message: string
}

export type GetGameHistoryResponse = {
  code: number
  data: GameHistoryResponse
  message: string
}

/**
 * Represents a Game Provider.
 * Based on the  'GameProvider' model.
 */
export interface GameProvider {
  id: string
  name: string
  slug: string
  description?: string | null
  logo_url?: string | null
  is_enabled: boolean
  created_at: Date
  updated_at: Date
}

/**
 * Represents a Game. Based on the  'Game' model.
 */
export interface GameType {
  id: string
  name: string
  slug: string
  provider_id: string
  category_id?: string | null
  description?: string | null
  thumbnail_url?: string | null
  banner_url?: string | null
  external_game_id?: string | null // ID from the game provider
  tags?: string[]
  rtp?: number | null // Return to Player percentage
  volatility?: string | null // e.g., 'low', 'medium', 'high'
  is_active: boolean
  is_featured?: boolean
  launch_options?: Record<string, any> | null // JSON for specific launch params
  created_at: Date
  updated_at: Date
  provider?: GameProvider // Optional relation
  // category?: GameCategoryType; // Optional relation
}

/**
 * Represents a Game Round or history entry.
 * Based on the  'GameRound' model.
 */
export interface GameSpin {
  id: string
  user_id: string
  game_id: string
  currency_id: string
  bet_amount: number // Consider using a Decimal library
  win_amount: number // Consider using a Decimal library
  profit: number // Consider using a Decimal library (win_amount - bet_amount)
  external_round_id?: string | null // ID from the game provider, if available
  status: string // e.g., 'PENDING', 'COMPLETED', 'FAILED'
  bet_details?: Record<string, any> | null // JSON for complex bet info
  win_details?: Record<string, any> | null // JSON for complex win info
  created_at: Date
  updated_at: Date
  user?: PrismaUserProfile // Optional relation
  game?: GameType // Optional relation
}
/**
 * Represents a Game Round or history entry.
 * Based on the  'GameRound' model.
 */
export interface RawGameSpinBody {
  user_id: string
  game_id: string
  currency_id: string
  rawVendorData: any
  created_at: Date
}
// Suggested location: packages/types/src/interface/game.ts
export interface LaunchGameResponseDto {
  /**
   * The URL to launch the game session.
   * This could be an iframe source or a URL for redirection.
   */
  launch_url: string

  /**
   * A unique session identifier for this game launch, if provided by the game aggregator or server.
   * Can be used for tracking or further communication related to this session.
   */
  game_session_id?: string

  /**
   * Any specific strategy for launching the game (e.g., 'IFRAME', 'REDIRECT', 'POPUP').
   * Optional, defaults to client figuring it out or a standard method.
   */
  launch_strategy?: 'IFRAME' | 'REDIRECT' | 'POPUP'

  /**
   * Additional parameters or tokens required by the game provider, serialized as a string
   * or as a nested object.
   * Optional.
   */
  provider_parameters?: Record<string, any> | string
}
// export interface RTGSpinRequestDto {
//   gameId: string
//   custom: {
//     siteId: string
//     extras: string
//   }
//   bonusId: any
//   extras: any
//   siteId: string
//   userType: string
//   lang: number
//   fingerprint: number
//   channel: number
//   affiliate: number
//   userData: {
//     userId: number
//     affiliate: string
//     lang: string
//     channel: string
//     userType: string
//   }
//   token: string

//   stake: number
//   sessionId: string
//   playMode: string
// }
// export interface RTGSpinResponseDto {
//   success: boolean
//   result: RtgSpinResult
//   error?: any
// }

// export interface RtgSpinResult {
//   transactions: Transactions
//   user: RTGUser
//   game: RtgGame
//   jackpots: null
//   bonusChance: null
// }

export interface RtgGame {
  win: Win
  winsMultipliers: Win
  stake: string
  multiplier: number
  winLines: any[]
  spinMode: string
  fatTiles: FatTile[]
  instantWin: InstantWin
  actions: Action[]
  scatters: any[]
  reelsBuffer: Array<Array<number[]>>
  features: any[]
  hasState: boolean
}

export interface Action {
  type: string
  data: Data
}

export interface Data {
  multiplier?: number
  index?: number
  fatTiles?: FatTile[]
}

export interface FatTile {
  tileId: number
  reel: number
  index: number
  width: number
  height: number
  multiplier: number
  amount: string
}

export interface InstantWin {
  multiplier: string
  amount: string
  options: string[]
}

export interface Win {
  instantWin: string
  lines: string
  total: string
}

export interface Transactions {
  roundId: number
}

// export interface RTGUser {
//   balance: RtgSpinBalance | RtgSettingsBalance
//   canGamble: boolean
//   userId: number
//   sessionId: string
//   sessionNetPosition: string
//   token: string
//   bonuses: any[]
//   tournaments: any[]
//   vouchers: any[]
//   messages: any[]
//   limits: Limits
//   serverTime: Date
// }

// export interface RtgSpinBalance {
//   cash: RtgBonus
//   freeBets: RtgBonus
//   bonus: RtgBonus
//   sessionCash: RtgBonus
//   sessionFreeBets: RtgBonus
// }

// export interface RtgBonus {
//   atStart: string
//   afterBet: string
//   atEnd: string
// }

// export interface Limits {
//   betThresholdTime: number
// }

// import type {
//   Wallet as Wallet,
//   Transaction as Transaction,
//   GameSession as GameSession,
//   GameSpin as GameSpin,
//   ,
// } from '../types' // Assuming  types are re-exported

// // --- ProviderSettingsResponseData ---
// // This is the expected structure of the data AFTER your proxy calls the
// // game provider's /settings or /initUser endpoint.
// // Your existing `game.ts` has RTG-specific types like RTGUser, RtgSettingsBalance, etc.
// // that fulfill this. For RTG, this would be something like:

// export interface RtgSettingsBalance {
//   // As per your game.ts
//   cash: string // Provider's balance for the user, often a string representation
//   freeBets: string
//   bonus: string
//   // ... other balance types if any
// }

// export interface RTGUserForSettings {
//   // Based on RTGUser in your game.ts
//   balance: RtgSettingsBalance
//   canGamble: boolean
//   userId: number | string // Provider's user ID
//   sessionId: string // Provider's session ID for this game session
//   sessionNetPosition?: string
//   token: string // Provider's session token (might be same as sessionId or different)
//   bonuses?: any[]
//   tournaments?: any[]
//   vouchers?: any[]
//   messages?: any[]
//   limits?: any // Define if structure is known
//   serverTime: string // ISO Date string
//   // ... any other fields RTG returns on settings/init
// }

// // This is the actual data structure returned by a provider's settings call.
// // For RTG, it's wrapped in the `RTGSettingsResponseDto` which has a `result` field.
// // So, `ProviderSettingsResponseData` would be the type of that `result` field.
// export type ProviderSettingsResponseData = RTGUserForSettings & {
//   // Include other top-level properties returned by the provider for settings
//   // Example from your game.ts ProviderSettingsResponseData
//   game?: {
//     version?: string
//     gameType?: string
//     // ... other game-specific settings from provider
//   }
//   launcher?: {
//     version?: string
//   }
//   // Any other fields specific to the provider's settings response
// }

// // --- ProviderSpinResponseData ---
// // This is the expected structure of the data AFTER your proxy calls the
// // game provider's /spin or /play endpoint.
// // Your existing `game.ts` has RTG-specific types.

// export interface RtgSpinWinDetails {
//   // As per Win in your game.ts
//   instantWin: string
//   lines: string
//   total: string // Total win amount as a string from provider
// }

// export interface RtgSpinGameDetails {
//   // As per RtgGame in your game.ts
//   win: RtgSpinWinDetails
//   winsMultipliers?: RtgSpinWinDetails // Optional
//   stake: string // Stake amount for this spin as a string
//   multiplier?: number
//   winLines?: any[]
//   spinMode?: string
//   reelsBuffer?: Array<Array<number[]>> // Or appropriate type
//   // ... other game-specific outcomes from RTG spin
//   actions?: any[] // Define if structure known
//   features?: any[]
//   hasState?: boolean
// }

// export interface RtgSpinTransactionDetails {
//   // As per Transactions in your game.ts
//   roundId: number | string // Provider's round ID
//   // ... other transaction details from provider
// }

// export interface RtgSpinUserBalance {
//   // As per RtgSpinBalance in your game.ts
//   cash: {
//     // Structure for cash balance after spin
//     atStart: string
//     afterBet: string
//     atEnd: string // Provider's balance after this spin
//   }
//   // ... other balance types (freeBets, bonus) if applicable
// }

// export interface RTGUserForSpin {
//   // Based on RTGUser in your game.ts
//   balance: RtgSpinUserBalance // Different balance structure for spin
//   userId: number | string
//   sessionId: string
//   sessionNetPosition?: string
//   token: string
//   serverTime: string // ISO Date string
//   // ... other user-related fields from provider's spin response
// }

// // This is the actual data structure returned by a provider's spin call.
// // For RTG, it's wrapped in the `RtgSpinResult` which has a `result` field.
// // So, `ProviderSpinResponseData` would be the type of that `result` field.
// export type ProviderSpinResponseData = {
//   transactions: RtgSpinTransactionDetails
//   user: RTGUserForSpin
//   game: RtgSpinGameDetails
//   jackpots?: any | null // Define if structure known
//   bonusChance?: any | null // Define if structure known
//   // Any other fields specific to the provider's spin response
// }

// // --- GamePlatformSpinResultDetails ---
// // This is a new interface to standardize the data structure that
// // `handlePlatformGameRound` returns after processing a spin and updating your platform.
// // It's used internally within your backend.
export type TransactionGetPayload = {
  id: string
  processedAt: Date | null
  walletId: string | null
  // type: TransactionType
  // status: TransactionStatus
  amount: number
  netAmount: number | null
  feeAmount: number | null
  productId: string | null
  paymentMethod: PrismaPaymentMethod | null
  balanceBefore: number | null
  balanceAfter: number | null
  bonusBalanceBefore: number | null
  bonusBalanceAfter: number | null
  bonusAmount: number | null
  wageringRequirement: number | null
  wageringProgress: number | null
  description: string | null
  provider: string | null
  providerTxId: string | null
  relatedGameId: string | null
  relatedRoundId: string | null
  metadata: any | null
  createdAt: Date
  updatedAt: Date
  userProfileId: string | null
  operatorId: string | null
}
export interface GamePlatformSpinResultDetails {
  betTransaction: {
    // Select specific fields if you don't need the whole object
    include: {
      originatorUser: {
        select: {
          id: true
          username: true
        }
      }
    }
  }
  winTransaction?: {
    include: {
      originatorUser: {
        select: {
          id: true
          username: true
        }
      }
    }
  } | null
  finalPlatformWallet: PrismaWallet // The user's wallet state on your platform AFTER the spin
  updatedGameSession: PrismaGameSession
  gameSpinRecord: GameSpin
  xpAwardedThisSpin: number
  tournamentPointsAwardedThisSpin: number
  // You might also include:
  // platformUserId: string;
  // platformGameId: string;
  // currencyId: string;
  // wagerAmountPlatformCents: number;
  winAmountPlatformCents: number
}

// import type { GameSession } from '../types'
// import type { CurrencyInfo } from './currency'
// import type { UserProfile } from './user'
// import type { JsonArray } from '@/client/runtime/library'

// export type GameCategoryName = 'TABLE' | 'FISH' | 'POKER' | 'SLOTS' | 'OTHER'

// export interface Game {
//   id: string
//   name: string
//   title: string
//   temperature: string | null
//   developer: string | null
//   vipLevel: number | null
//   isActive: boolean | null
//   device: number | null
//   featured: boolean | null
//   gamebank: string | null
//   bet: number | null
//   denomination: number | null
//   categoryTemp: number | null
//   originalId: number | null
//   bids: number | null
//   statIn: number | null
//   statOut: number | null
//   currentRtp: number | null
//   rtpStatIn: number | null
//   rtpStatOut: number | null
//   standardRtp: number | null
//   popularity: number | null
//   chanceFirepot1: number | null
//   chanceFirepot2: number | null
//   chanceFirepot3: number | null
//   fireCount1: number | null
//   fireCount2: number | null
//   fireCount3: number | null
//   linesPercentConfigSpin: string | null
//   linesPercentConfigSpinBonus: string | null
//   linesPercentConfigBonus: string | null
//   linesPercentConfigBonusBonus: string | null
//   rezerv: number | null
//   cask: number | null
//   advanced: string | null
//   scaleMode: string
//   slotViewState: string
//   view: number | null
//   categoryId: string | null
//   operatorId: string | null
//   providerId: string | null
//   createdAt: Date
//   updatedAt: Date
//   category: GameCategoryName
//   jackpotGroupId: string | null
//   active: boolean
//   password: string | null
//   // ope
//   // rator: Operator | null;
// }
// export interface RTGSettingsRequestDto {
//   token: string
//   gameId: string
//   userData: {
//     userId: string
//     hash: string
//     affiliate: string
//     lang: string
//     channel: string
//     userType: string
//     fingerprint: string
//   }
//   custom: {
//     siteId: string
//     extras: string
//   }
// }
// export interface RTGSettingsResponseDto {
//   success: boolean
//   result: RtgSettingsResult
// }

// export interface RtgSettingsResult {
//   user: RTGUser
//   game: ResultGame
//   launcher: Launcher
//   jackpots: null
// }

// export interface ResultGame {
//   cols: number
//   rows: number
//   offset: number
//   multiplierSequence: MultiplierSequence
//   extraWin: ExtraWin
//   lines: Array<number[]>
//   tiles: Tile[]
//   reelsBuffer: Array<Array<number[]>>
//   paysType: string
//   features: string[]
//   singlePayline: boolean
//   hasState: boolean
//   version: string
//   rtp: RTP
//   volatilityIndex: string
//   maxMultiplier: string
//   maxWinlineHitRate: string
//   maxMultiplierHitRate: string
//   maxMultiplierHitFrequency: string
//   maxMultiplierWinLines: string
//   maxMultiplierWinLinesHitRate: string
//   maxMultiplierWinLinesHitFrequency: string
//   hasGambleGame: boolean
//   gameType: string
//   stateful: boolean
//   hasChoices: boolean
//   stateExpireDays: null
//   hasBonuses: boolean
//   pendingRoundDays: number
//   skin: null
//   hasFeatureBuy: boolean
// }

// export interface ExtraWin {
//   bigWin: string
//   superWin: string
//   megaWin: string
// }

// export interface MultiplierSequence {
//   Progress: Progress[]
// }

// export interface Progress {
//   count: number
//   multiplier: number
//   spins: number
// }

// export interface RTP {
//   game: RtgGame
// }

// // export interface RtgGame {
// //   default: string

// export interface Tile {
//   id: number
//   type: Type
//   pays: string[]
// }

// export enum Type {
//   Normal = 'normal',
//   Scatter = 'scatter',
// }

// export interface Launcher {
//   version: string
// }

// export interface RTGUser {
//   balance: RtgSettingsBalance | RtgSpinBalance
//   notifications: any[]
//   messages: any[]
//   bonuses: any[]
//   tournaments: any[]
//   vouchers: any[]
//   userId: number
//   country: string
//   casino: string
//   vertical: string
//   currency: Currency
//   token: string
//   sessionId: string
//   sessionNetPosition: string
//   aamsParticipationId: null
//   aamsSessionId: null
//   depositedAmount: string
//   maxDeposit: string
//   canGamble: boolean
//   lastWin: string
//   prevRounds: any[]
//   limits: Limits
//   stakes: Stakes
//   autoplay: Autoplay
//   serverTime: Date
//   additional: null
// }

// export interface Autoplay {
//   type: string
//   options: Options
// }

// export interface Options {
//   spins: RtgSpins
//   stopOnFeature: StopOnFeature
//   stopOnLossLimits: StopOnLossLimits
//   stopOnWin: StopOnWin
//   hasRestart: boolean
// }

// export interface RtgSpins {
//   values: string[]
//   default: number
// }

// export interface StopOnFeature {
//   enabled: boolean
// }

// export interface StopOnLossLimits {
//   mandatory: boolean
//   enabled: boolean
//   values: string[]
//   default: number
// }

// export interface StopOnWin {
//   enabled: boolean
//   values: string[]
// }

// export interface RtgSettingsBalance {
//   cash: string
//   freeBets: string
//   sessionCash: string
//   sessionFreeBets: string
//   bonus: string
// }

// export interface Currency {
//   code: string
//   symbol: string
// }

// export interface Limits {
//   maxGambleStake: string
//   maxTotalStake: TotalStake
//   minTotalStake: TotalStake
//   spinDuration: null
// }

// export interface TotalStake {
//   total: string
// }

// export interface Stakes {
//   defaultIndex: number
//   lastIndex: number
//   types: string[]
// }

// export interface GameCategory {
//   image: string
//   pictures: string
//   game_count: string | number
//   name: string
//   slug: string
//   games: Array<Search>
//   page_no: number
// }
// export interface GameListResponse {
//   code: number
//   list: Array<Game>
//   total: number
// }
export interface Search {
  id: string
  name: string
  image: string
  developer: string
  is_demo: boolean
}

// export interface GameItem {
//   id: number
//   name: string
//   image: string
//   developer: string
//   producer: string
//   is_demo: boolean
// }

export interface GameEnterBody {
  id: string | Array<string>
  demo: boolean
}

export interface GameUserBody {
  game_categories_slug: string
  page: number
  limit: number
}

// export interface GameEnterResponse {
//   method: string
//   parames: string
//   developer: string
//   reserve: string
//   weburl: string
// }

export interface GameHistoryItem {
  name: string
  created_at: number
  amount: string | number
  multiplier: string | number
  bet_id: string | number
  status: string | number
  profit: number
}

export interface GameBigWinItem {
  game_id: string
  game_name: string
  game_icon: string
  user_name: string
  user_vip_group: number
  user_vip_level: number
  bet_amount: string
  multiplier: string
  win_amount: string
  time: number
}

export interface GameBigWinData {
  high_rollers: Array<GameBigWinItem>
  lucky_bets: Array<GameBigWinItem>
}

export interface GameHistoryResponse {
  total_pages: number
  record: Array<GameHistoryItem>
}

// export interface GameSearchResponse {
//   items: Array<Search>
//   total: number
// }

// export type GetGameFavoriteListResponse = {
//   code: number
//   data: Array<number | string>
//   message: string
// }

// export type GetGameBigWinResponse = {
//   code: number
//   data: GameBigWinData
//   message: string
// }
// export type Category = {
//   name: string
//   games: Game[]
// }

// export type GetGameCategoriesResponse = {
//   code: number
//   data: Array<any>
//   messsage: string
// }

// export type GetGameSearchResponse = {
//   code: number
//   data: GameSearchResponse
//   message: string
// }

// export type GetGameEnterResponse = {
//   code: number
//   data: GameEnterResponse
//   gameSession: GameSession
//   message: string
// }

// export type GetGameHistoryResponse = {
//   code: number
//   data: GameHistoryResponse
//   message: string
// }

// /**
//  * Represents a Game Provider.
//  * Based on the  'GameProvider' model.
//  */
// export interface GameProvider {
//   id: string
//   name: string
//   slug: string
//   description?: string | null
//   logo_url?: string | null
//   is_enabled: boolean
//   created_at: Date
//   updated_at: Date
// }

// /**
//  * Represents a Game. Based on the  'Game' model.
//  */
// export interface GameType {
//   id: string
//   name: string
//   slug: string
//   provider_id: string
//   category_id?: string | null
//   description?: string | null
//   thumbnail_url?: string | null
//   banner_url?: string | null
//   external_game_id?: string | null // ID from the game provider
//   tags?: string[]
//   rtp?: number | null // Return to Player percentage
//   volatility?: string | null // e.g., 'low', 'medium', 'high'
//   is_active: boolean
//   is_featured?: boolean
//   launch_options?: Record<string, any> | null // JSON for specific launch params
//   created_at: Date
//   updated_at: Date
//   provider?: GameProvider // Optional relation
//   // category?: GameCategoryType; // Optional relation
// }

// /**
//  * Represents a Game Round or history entry.
//  * Based on the  'GameRound' model.
//  */
// export interface GameSpin {
//   id: string
//   user_id: string
//   game_id: string
//   currency_id: string
//   bet_amount: number // Consider using a Decimal library
//   win_amount: number // Consider using a Decimal library
//   profit: number // Consider using a Decimal library (win_amount - bet_amount)
//   external_round_id?: string | null // ID from the game provider, if available
//   status: string // e.g., 'PENDING', 'COMPLETED', 'FAILED'
//   bet_details?: Record<string, any> | null // JSON for complex bet info
//   win_details?: Record<string, any> | null // JSON for complex win info
//   created_at: Date
//   updated_at: Date
//   user?: UserProfile // Optional relation
//   game?: GameType // Optional relation
//   currency?: CurrencyInfo // Optional relation
// }
// /**
//  * Represents a Game Round or history entry.
//  * Based on the  'GameRound' model.
//  */
// export interface RawGameSpinBody {
//   user_id: string
//   game_id: string
//   currency_id: string
//   rawVendorData: JsonArray
//   created_at: Date
// }
// // Suggested location: packages/types/src/interface/game.ts
// export interface LaunchGameResponseDto {
//   /**
//    * The URL to launch the game session.
//    * This could be an iframe source or a URL for redirection.
//    */
//   launch_url: string

//   /**
//    * A unique session identifier for this game launch, if provided by the game aggregator or server.
//    * Can be used for tracking or further communication related to this session.
//    */
//   game_session_id?: string

//   /**
//    * Any specific strategy for launching the game (e.g., 'IFRAME', 'REDIRECT', 'POPUP').
//    * Optional, defaults to client figuring it out or a standard method.
//    */
//   launch_strategy?: 'IFRAME' | 'REDIRECT' | 'POPUP'

//   /**
//    * Additional parameters or tokens required by the game provider, serialized as a string
//    * or as a nested object.
//    * Optional.
//    */
//   provider_parameters?: Record<string, any> | string
// }
// export interface RTGSpinRequestDto {
//   gameId: string
//   custom: {
//     siteId: string
//     extras: string
//   }
//   bonusId: any
//   extras: any
//   siteId: string
//   userType: string
//   lang: number
//   fingerprint: number
//   channel: number
//   affiliate: number
//   userData: {
//     userId: number
//     affiliate: string
//     lang: string
//     channel: string
//     userType: string
//   }
//   token: string

//   stake: number
//   sessionId: string
//   playMode: string
// }
// export interface RTGSpinResponseDto {
//   success: boolean
//   result: RtgSpinResult
//   error?: any
// }

// export interface RtgSpinResult {
//   transactions: Transactions
//   user: RTGUser
//   game: RtgGame
//   jackpots: null
//   bonusChance: null
// }

// export interface RtgGame {
//   win: Win
//   winsMultipliers: Win
//   stake: string
//   multiplier: number
//   winLines: any[]
//   spinMode: string
//   fatTiles: FatTile[]
//   instantWin: InstantWin
//   actions: Action[]
//   scatters: any[]
//   reelsBuffer: Array<Array<number[]>>
//   features: any[]
//   hasState: boolean
// }

// export interface Action {
//   type: string
//   data: Data
// }

// export interface Data {
//   multiplier?: number
//   index?: number
//   fatTiles?: FatTile[]
// }

// export interface FatTile {
//   tileId: number
//   reel: number
//   index: number
//   width: number
//   height: number
//   multiplier: number
//   amount: string
// }

// export interface InstantWin {
//   multiplier: string
//   amount: string
//   options: string[]
// }

// export interface Win {
//   instantWin: string
//   lines: string
//   total: string
// }

// export interface Transactions {
//   roundId: number
// }

// export interface RTGUser {
//   balance: RtgSpinBalance | RtgSettingsBalance
//   canGamble: boolean
//   userId: number
//   sessionId: string
//   sessionNetPosition: string
//   token: string
//   bonuses: any[]
//   tournaments: any[]
//   vouchers: any[]
//   messages: any[]
//   limits: Limits
//   serverTime: Date
// }

// export interface RtgSpinBalance {
//   cash: RtgBonus
//   freeBets: RtgBonus
//   bonus: RtgBonus
//   sessionCash: RtgBonus
//   sessionFreeBets: RtgBonus
// }

// export interface RtgBonus {
//   atStart: string
//   afterBet: string
//   atEnd: string
// }

// export interface Limits {
//   betThresholdTime: number
// }

// import type {
//   Wallet as Wallet,
//   Transaction as Transaction,
//   GameSession as GameSession,
//   GameSpin as GameSpin,
//   ,
// } from '../types' // Assuming  types are re-exported

// // --- ProviderSettingsResponseData ---
// // This is the expected structure of the data AFTER your proxy calls the
// // game provider's /settings or /initUser endpoint.
// // Your existing `game.ts` has RTG-specific types like RTGUser, RtgSettingsBalance, etc.
// // that fulfill this. For RTG, this would be something like:

// export interface RtgSettingsBalance {
//   // As per your game.ts
//   cash: string // Provider's balance for the user, often a string representation
//   freeBets: string
//   bonus: string
//   // ... other balance types if any
// }

// export interface RTGUserForSettings {
//   // Based on RTGUser in your game.ts
//   balance: RtgSettingsBalance
//   canGamble: boolean
//   userId: number | string // Provider's user ID
//   sessionId: string // Provider's session ID for this game session
//   sessionNetPosition?: string
//   token: string // Provider's session token (might be same as sessionId or different)
//   bonuses?: any[]
//   tournaments?: any[]
//   vouchers?: any[]
//   messages?: any[]
//   limits?: any // Define if structure is known
//   serverTime: string // ISO Date string
//   // ... any other fields RTG returns on settings/init
// }

// // This is the actual data structure returned by a provider's settings call.
// // For RTG, it's wrapped in the `RTGSettingsResponseDto` which has a `result` field.
// // So, `ProviderSettingsResponseData` would be the type of that `result` field.
// export type ProviderSettingsResponseData = RTGUserForSettings & {
//   // Include other top-level properties returned by the provider for settings
//   // Example from your game.ts ProviderSettingsResponseData
//   game?: {
//     version?: string
//     gameType?: string
//     // ... other game-specific settings from provider
//   }
//   launcher?: {
//     version?: string
//   }
//   // Any other fields specific to the provider's settings response
// }

// // --- ProviderSpinResponseData ---
// // This is the expected structure of the data AFTER your proxy calls the
// // game provider's /spin or /play endpoint.
// // Your existing `game.ts` has RTG-specific types.

// export interface RtgSpinWinDetails {
//   // As per Win in your game.ts
//   instantWin: string
//   lines: string
//   total: string // Total win amount as a string from provider
// }

// export interface RtgSpinGameDetails {
//   // As per RtgGame in your game.ts
//   win: RtgSpinWinDetails
//   winsMultipliers?: RtgSpinWinDetails // Optional
//   stake: string // Stake amount for this spin as a string
//   multiplier?: number
//   winLines?: any[]
//   spinMode?: string
//   reelsBuffer?: Array<Array<number[]>> // Or appropriate type
//   // ... other game-specific outcomes from RTG spin
//   actions?: any[] // Define if structure known
//   features?: any[]
//   hasState?: boolean
// }

// export interface RtgSpinTransactionDetails {
//   // As per Transactions in your game.ts
//   roundId: number | string // Provider's round ID
//   // ... other transaction details from provider
// }

// export interface RtgSpinUserBalance {
//   // As per RtgSpinBalance in your game.ts
//   cash: {
//     // Structure for cash balance after spin
//     atStart: string
//     afterBet: string
//     atEnd: string // Provider's balance after this spin
//   }
//   // ... other balance types (freeBets, bonus) if applicable
// }

// export interface RTGUserForSpin {
//   // Based on RTGUser in your game.ts
//   balance: RtgSpinUserBalance // Different balance structure for spin
//   userId: number | string
//   sessionId: string
//   sessionNetPosition?: string
//   token: string
//   serverTime: string // ISO Date string
//   // ... other user-related fields from provider's spin response
// }

// // This is the actual data structure returned by a provider's spin call.
// // For RTG, it's wrapped in the `RtgSpinResult` which has a `result` field.
// // So, `ProviderSpinResponseData` would be the type of that `result` field.
// export type ProviderSpinResponseData = {
//   transactions: RtgSpinTransactionDetails
//   user: RTGUserForSpin
//   game: RtgSpinGameDetails
//   jackpots?: any | null // Define if structure known
//   bonusChance?: any | null // Define if structure known
//   // Any other fields specific to the provider's spin response
// }

// // --- GamePlatformSpinResultDetails ---
// // This is a new interface to standardize the data structure that
// // `handlePlatformGameRound` returns after processing a spin and updating your platform.
// // It's used internally within your backend.

// export interface GamePlatformSpinResultDetails {
//   betTransaction: .TransactionGetPayload<{
//     // Select specific fields if you don't need the whole object
//     include: {
//       originatedUser: {
//         select: {
//           id: true
//           username: true
//         }
//       }
//     }
//   }>
//   winTransaction?: .TransactionGetPayload<{
//     include: {
//       originatedUser: {
//         select: {
//           id: true
//           username: true
//         }
//       }
//     }
//   }> | null
//   finalPlatformWallet: Wallet // The user's wallet state on your platform AFTER the spin
//   updatedGameSession: GameSession
//   gameSpinRecord: GameSpin
//   xpAwardedThisSpin: number
//   tournamentPointsAwardedThisSpin: number
//   // You might also include:
//   // platformUserId: string;
//   // platformGameId: string;
//   // currencyId: string;
//   // wagerAmountPlatformCents: number;
//   // winAmountPlatformCents: number;
// }
