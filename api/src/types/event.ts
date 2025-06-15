// Event payload types, matching those defined in server/src/events.ts
// It's good practice to have these shared if clients also need to understand event structures,
// or if you have a stricter separation where server event definitions live in shared/dist.
// For now, I'm assuming the primary definitions are in server/src/events.ts and
// these would be re-exports or mirrors.

// Example (mirroring structure from server/src/events.ts):
export interface UserEventPayload {
  userId: string
  timestamp?: string | Date
}

export interface UserXpGainedEventPayload extends UserEventPayload {
  pointsGained: number
  source: string
  sourceId?: string
  newTotalXp: number
  currentLevel: number
  xpInLevel: number
  xpForNextLevel: number
  xpEventId: string
}

export interface UserLeveledUpEventPayload extends UserEventPayload {
  previousLevel: number
  newLevel: number
  newLevelTitle: string
  totalXp: number
}

export interface TransactionStatusChangedEventPayload extends UserEventPayload {
  transactionId: string
  newStatus: string // TransactionStatus enum string value
  previousStatus?: string
  amount?: number
  currencyId?: string
  transactionType?: string // TransactionType enum string value
}

export interface DepositSuccessfulEventPayload extends UserEventPayload {
  transactionId: string
  amount: number
  currencyId: string
  paymentProvider?: string
}

export interface WithdrawalRequestedEventPayload extends UserEventPayload {
  transactionId: string
  amount: number
  currencyId: string
}

export interface WebSocketMessageToUserEventPayload {
  userId: string
  eventType: string // Client-side event name
  data: any
}
// ... other event payloads

// Base payload for user-specific events

// --- XP and Leveling Payload Types ---
export interface UserXpGainedPayload extends UserEventPayload {
  pointsGained: number
  source: string // e.g., 'GAME_WIN', 'DAILY_CHALLENGE', 'ACHIEVEMENT'
  sourceId?: string // e.g., gameId, challengeId, achievementId
  newTotalXp: number
  currentLevel: number // Current VIP level after gaining XP
  xpInLevel: number // XP accumulated within the current level
  xpForNextLevel: number // Total XP required for the current level's bar (length of the bar)
  xpEventId: string // ID of the XpEvent record
}

export interface UserLeveledUpPayload extends UserEventPayload {
  previousLevel: number
  newLevel: number
  newLevelTitle: string // e.g., "Bronze II", "Gold Master"
  totalXp: number
  // Optionally include details about rewards unlocked, if any
  rewardsGranted?: Array<{ rewardId: string; description: string; type: string }>
}

// --- User Event Payloads ---
export interface UserCreatedPayload extends UserEventPayload {
  email: string
  name?: string | null
  // other relevant initial user data
}

export interface UserProfileUpdatedPayload extends UserEventPayload {
  updatedFields: string[] // e.g., ['name', 'avatarUrl']
  // include old and new values if necessary for auditing or specific listeners
}

// --- Transaction Event Payloads ---
export interface TransactionStatusChangedPayload extends UserEventPayload {
  transactionId: string
  newStatus: string // e.g., from your TransactionStatus enum
  previousStatus?: string
  amount?: number
  currencyId?: string
  transactionType?: string // from TransactionType enum
}

export interface DepositSuccessfulPayload extends UserEventPayload {
  transactionId: string
  amount: number
  currencyId: string
  paymentProvider?: string
}
export interface WithdrawalProcessedPayload extends UserEventPayload {
  transactionId: string
  amount: number
  currencyId: string
  paymentProvider?: string
}
// --- Reward Event Payloads ---
export interface UserRewardClaimedPayload extends UserEventPayload {
  userRewardId: string
  rewardType: string // From your RewardType enum
  description: string
  amount?: number | null
  currencyId?: string | null
  // any other relevant reward details
}

// --- WebSocket Event Payloads (for internal use to trigger WebSocket emissions) ---
export interface WebSocketMessageToUserPayload {
  userId: string
  eventType: string // The actual event type to send to the client (e.g., 'balance_update', 'new_notification')
  data: any // The payload for the client-side event
}

export interface WebSocketBroadcastPayload {
  eventType: string // The actual event type to send to clients
  data: any // The payload for the client-side event
  room?: string // Optional room/topic for targeted broadcasts
  excludeUserIds?: string[] // Optional user IDs to exclude from the broadcast
}
