import { EventEmitter } from 'node:events'
import type {
  UserCreatedPayload,
  UserProfileUpdatedPayload,
  UserEventPayload,
  UserXpGainedPayload,
  UserLeveledUpPayload,
  UserRewardClaimedPayload,
  TransactionStatusChangedPayload,
  DepositSuccessfulPayload,
  WithdrawalProcessedPayload,
  WebSocketMessageToUserPayload,
  WebSocketBroadcastPayload,
  TournamentCreatedPayload,
  TournamentScoreUpdatedPayload,
  TournamentStartedPayload,
  TournamentEndedPayload,
  TournamentParticipantJoinedPayload,
  TournamentLeaderboardUpdatedPayload,
  UserBalanceUpdatePayload,
} from '../types'

// --------------- Event Emitter Instance ---------------
/**
 * Global application event emitter.
 * Use this to emit and listen to domain events across the application.
 */
export const appEventEmitter = new EventEmitter()

// --------------- Event Definitions (Enum) ---------------
/**
 * Defines the types of events that can be emitted within the application.
 * Using an enum provides type safety and autocompletion for event names.
 */
export enum AppEvents {
  // User-related events
  USER_CREATED = 'user:created',
  USER_UPDATED = 'user:updated',
  USER_EMAIL_VERIFIED = 'user:emailVerified',
  USER_PASSWORD_RESET_REQUESTED = 'user:passwordResetRequested',
  USER_PASSWORD_CHANGED = 'user:passwordChanged',
  USER_LOGIN_SUCCESS = 'user:loginSuccess',
  USER_LOGIN_FAILURE = 'user:loginFailure',
  USER_LOGOUT = 'user:logout',
  USER_PROFILE_UPDATED = 'user:profileUpdated',

  USER_BALANCE_UPDATED = 'user:balanceUpdated', // ADD THIS if not present
  GAME_SPIN_COMPLETED = 'game:spinCompleted', // ADD THIS if not present

  // XP and Leveling Events
  USER_XP_GAINED = 'user:xpGained',
  USER_LEVELED_UP = 'user:leveledUp', // VIP Level Up

  // VIP & Reward Events
  USER_REWARD_CREATED = 'user:rewardCreated',
  USER_REWARD_CLAIMED = 'user:rewardClaimed',
  VIP_BENEFIT_UNLOCKED = 'vip:benefitUnlocked',

  // Transaction Events
  TRANSACTION_CREATED = 'transaction:created',
  TRANSACTION_CHANGED = 'transaction:changed',
  TRANSACTION_COMPLETED = 'transaction:completed',
  TRANSACTION_FAILED = 'transaction:failed',
  DEPOSIT_SUCCESSFUL = 'transaction:depositSuccessful',
  WITHDRAWAL_REQUESTED = 'transaction:withdrawalRequested',
  WITHDRAWAL_PROCESSED = 'transaction:withdrawalProcessed',

  // Game Events
  GAME_SESSION_STARTED = 'game:sessionStarted',
  GAME_SESSION_ENDED = 'game:sessionEnded',
  GAME_BET_PLACED = 'game:betPlaced',
  GAME_WIN = 'game:win',

  // Achievement Events
  ACHIEVEMENT_UNLOCKED = 'achievement:unlocked',

  // Realtime/WebSocket Events (for broadcasting or internal signaling)
  WEBSOCKET_MESSAGE_TO_USER = 'websocket:messageToUser',
  WEBSOCKET_BROADCAST = 'websocket:broadcast',

  // Admin/System Events
  SYSTEM_NOTIFICATION = 'system:notification',

  // --- Tournament Events --- ADD THESE ---
  TOURNAMENT_CREATED = 'tournament:created',
  TOURNAMENT_UPDATED = 'tournament:updated', // Optional: if you need to announce general updates
  TOURNAMENT_STARTED = 'tournament:started',
  TOURNAMENT_ENDED = 'tournament:ended',
  TOURNAMENT_PARTICIPANT_JOINED = 'tournament:participantJoined',
  TOURNAMENT_LEADERBOARD_UPDATED = 'tournament:leaderboardUpdated',
  TOURNAMENT_SCORE_UPDATED = 'tournament:scoreUpdated', // For more granular updates, if needed
}

// --------------- Event Payload Interfaces ---------------

// --------------- Type Helper for Listeners ---------------
/**
 * Provides a typed interface for event listeners.
 */
export interface EventPayloads {
  [AppEvents.USER_CREATED]: UserCreatedPayload
  [AppEvents.USER_BALANCE_UPDATED]: UserBalanceUpdatePayload
  [AppEvents.USER_UPDATED]: UserProfileUpdatedPayload
  [AppEvents.USER_EMAIL_VERIFIED]: UserEventPayload
  [AppEvents.USER_PASSWORD_RESET_REQUESTED]: UserEventPayload & { email: string }
  [AppEvents.USER_PASSWORD_CHANGED]: UserEventPayload
  [AppEvents.USER_LOGIN_SUCCESS]: UserEventPayload & { ipAddress?: string }
  [AppEvents.USER_LOGIN_FAILURE]: { emailOrUserId?: string; reason: string; ipAddress?: string }
  [AppEvents.USER_LOGOUT]: UserEventPayload
  [AppEvents.USER_PROFILE_UPDATED]: UserProfileUpdatedPayload

  [AppEvents.USER_XP_GAINED]: UserXpGainedPayload
  [AppEvents.USER_LEVELED_UP]: UserLeveledUpPayload

  [AppEvents.USER_REWARD_CREATED]: UserEventPayload & {
    rewardId: string
    rewardType: string
    description: string
  }
  [AppEvents.USER_REWARD_CLAIMED]: UserRewardClaimedPayload
  [AppEvents.VIP_BENEFIT_UNLOCKED]: UserEventPayload & {
    benefitId: string
    benefitName: string
    level: number
  }

  [AppEvents.TRANSACTION_CREATED]: TransactionStatusChangedPayload
  [AppEvents.TRANSACTION_COMPLETED]: TransactionStatusChangedPayload
  [AppEvents.TRANSACTION_CHANGED]: TransactionStatusChangedPayload
  [AppEvents.TRANSACTION_FAILED]: TransactionStatusChangedPayload & { reason?: string }
  [AppEvents.DEPOSIT_SUCCESSFUL]: DepositSuccessfulPayload
  [AppEvents.WITHDRAWAL_PROCESSED]: WithdrawalProcessedPayload

  [AppEvents.WITHDRAWAL_REQUESTED]: UserEventPayload & {
    transactionId: string
    amount: number
    currencyId: string
  }

  [AppEvents.ACHIEVEMENT_UNLOCKED]: UserEventPayload & {
    achievementId: string
    achievementName: string
  }

  [AppEvents.WEBSOCKET_MESSAGE_TO_USER]: WebSocketMessageToUserPayload
  [AppEvents.WEBSOCKET_BROADCAST]: WebSocketBroadcastPayload

  [AppEvents.SYSTEM_NOTIFICATION]: {
    message: string
    level: 'info' | 'warn' | 'error'
    details?: unknown
  }

  // --- Tournament Event Payloads --- ADD THESE MAPPINGS ---
  [AppEvents.TOURNAMENT_CREATED]: TournamentCreatedPayload
  [AppEvents.TOURNAMENT_UPDATED]: TournamentScoreUpdatedPayload // If you add this event and its payload
  [AppEvents.TOURNAMENT_STARTED]: TournamentStartedPayload
  [AppEvents.TOURNAMENT_ENDED]: TournamentEndedPayload
  [AppEvents.TOURNAMENT_PARTICIPANT_JOINED]: TournamentParticipantJoinedPayload
  [AppEvents.TOURNAMENT_LEADERBOARD_UPDATED]: TournamentLeaderboardUpdatedPayload
  // [AppEvents.TOURNAMENT_SCORE_UPDATED]: TournamentScoreUpdatedPayload; // If you add this event

  [key: string]: unknown // Keep this for extensibility if it was already there
}

// Typed EventEmitter (Optional, but provides better type safety for .on, .emit)
interface TypedEventEmitter<TEvents extends Record<string, unknown>> {
  on<TEventName extends keyof TEvents>(
    eventName: TEventName,
    listener: (payload: TEvents[TEventName]) => void
  ): EventEmitter

  once<TEventName extends keyof TEvents>(
    eventName: TEventName,
    listener: (payload: TEvents[TEventName]) => void
  ): EventEmitter

  emit<TEventName extends keyof TEvents>(
    eventName: TEventName,
    payload: TEvents[TEventName]
  ): boolean

  off<TEventName extends keyof TEvents>(
    eventName: TEventName,
    listener: (payload: TEvents[TEventName]) => void
  ): EventEmitter

  removeAllListeners<TEventName extends keyof TEvents>(eventName?: TEventName): EventEmitter

  listenerCount(eventName: keyof TEvents): number
}

// Cast your appEventEmitter to the typed version for better DX
export const typedAppEventEmitter = appEventEmitter as TypedEventEmitter<EventPayloads>
