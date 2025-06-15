export interface GetUserBalanceSocket {
  bal: string | number
  cur: string
  mt: number
}
import type { HeadersInit, Server, ServerWebSocket } from 'bun'
import { z, ZodLiteral, ZodObject, type ZodRawShape, type ZodTypeAny } from 'zod'
import type { PrismaUserProfile as UserProfile } from './prisma'
import type {
  TournamentEndedPayload,
  TournamentParticipantJoinedPayload,
  TournamentStartedPayload,
} from './tournament'
/* SPDX-FileCopyrightText: 2025-present Kriasoft */
/* SPDX-License-Identifier: MIT */
export const UserBalanceUpdatePayloadSchema = z.object({
  userId: z.string().min(1), // User ID is essential
  newBalance: z.number(), // Using number for balance; can be string if backend consistently uses strings
  // currency: z.string().optional(), // e.g., 'USD', 'FUN', or your game's currency symbol
})
export type UserBalanceUpdatePayloadType = z.infer<typeof UserBalanceUpdatePayloadSchema>

// /**
//  * WebSocket message schema for user balance updates.
//  * This message should be sent by the server whenever a user's balance changes.
//  */
// export const UserBalanceUpdateMessageSchema = messageSchema(
//   'USER_BALANCE_UPDATE',
//   // UserBalanceUpdatePayloadSchema
//   {
//     type: z.string(),
//     meta: {},
//   }
// )
// import type { messageSchema } from './router'
/**
 * Base schema for message metadata.
 * Provides common fields that are available on all messages.
 * Can be extended for specific message types.
 */
export const MessageMetadataSchema = z.object({
  clientId: z.string().optional(),
  timestamp: z.number().int().positive().optional(),
  corelationId: z.string().optional(),
})
/**
 * Base message schema that all specific message types extend.
 * Defines the minimum structure required for routing.
 */
export const MessageSchema = z.object({
  type: z.string(),
  meta: MessageMetadataSchema,
})
export const NewMessage = messageSchema('NEW_MESSAGE', {
  roomId: z.string(),
  userId: z.string(),
  text: z.string(),
  timestamp: z.number().optional(),
})
export const JoinRoom = messageSchema('JOIN_ROOM', {
  roomId: z.string(),
})
export const StartGame = messageSchema('START_GAME', {
  gameName: z.string(),
})
export const RecievePhpGameMessage = messageSchema('RECEIVE_PHP_GAME_MESSAGE', {
  message: z.string() || z.instanceof(Buffer)
})
export const UserJoined = messageSchema('USER_JOINED', {
  roomId: z.string(),
  userId: z.string().optional(),
})
export const GameStarted = messageSchema('GAME_STARTED', {
  gameName: z.string(),
  userId: z.string().optional(),
})
export const UserBalanceUpdateMessageSchema = messageSchema('USER_BALANCE_UPDATE', {
  userId: z.string().min(1), // User ID is essential
  newBalance: z.number(),
})
export const UserLeft = messageSchema('USER_LEFT', {
  roomId: z.string(),
  userId: z.string(),
})
export const SendMessage = messageSchema('SEND_MESSAGE', {
  roomId: z.string(),
  text: z.string(),
})
export const RoomList = messageSchema('ROOM_LIST', {
  roomId: z.string(),
})
export const Ping = messageSchema('PING', {
  timestamp: z.number().optional(),
})
export const Pong = messageSchema('PONG', {
  userId: z.string(),
  content: z.string(),
  timestamp: z.number().optional(),
})
export const LaravelCommand = messageSchema('LaravelCommand', {
  userId: z.string(),
  action: z.string(),
  content: z.string(),
  timestamp: z.number().optional(),
})
export const UserBalanceUpdate = messageSchema('USER_BALANCE_UPDATE', {
  userId: z.string(),
  content: z.record(z.any()).nullable(),
  timestamp: z.number().optional(),
})
export const Subscribe = messageSchema('SUBSCRIBE', {
  userId: z.string(),
  tableName: z.string(),
  // timestamp: z.number().optional(),
})
export const SubscribeResponse = messageSchema('PONG', {
  userId: z.string(),
  status: z.boolean(),
  // timestamp: z.number().optional(),
})
export const DatabaseUpdate = z.object({
  table: z.string(),
  operation: z.enum(['INSERT', 'UPDATE', 'DELETE']),
  recordId: z.union([z.string(), z.number(), z.null()]).optional(), // Allow string/number/null IDs
  data: z.record(z.any()).nullable(), // The row data (can be null on DELETE))
})

/**
 * Standard error codes for WebSocket communication.
 * Used in ErrorMessage payloads for consistent error handling.
 */
export const ErrorCode = z.enum([
  'INVALID_MESSAGE_FORMAT', // Message isn't valid JSON or lacks required structure
  'VALIDATION_FAILED', // Message failed schema validation
  'UNSUPPORTED_MESSAGE_TYPE', // No handler registered for this message type
  'AUTHENTICATION_FAILED', // Client isn't authenticated or has invalid credentials
  'AUTHORIZATION_FAILED', // Client lacks permission for the requested action
  'RESOURCE_NOT_FOUND', // Requested resource (user, room, etc.) doesn't exist
  'RATE_LIMIT_EXCEEDED', // Client is sending messages too frequently
  'INTERNAL_SERVER_ERROR', // Unexpected server error occurred
])
export type ErrorCode = z.infer<typeof ErrorCode>
/**
 * Standard error message schema for consistent error responses.
 */
export const ErrorMessage = messageSchema('ERROR', {
  code: ErrorCode,
  message: z.string().optional(),
  context: z.record(z.any()).optional(),
})
// -----------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------
/**
 * Schema type for messages without a payload
 */
export type BaseMessageSchema<T extends string> = ZodObject<{
  type: ZodLiteral<T>
  meta: typeof MessageMetadataSchema
}>

/**
 * Schema type for messages with a payload
 */
export type PayloadMessageSchema<T extends string, P extends ZodTypeAny> = ZodObject<{
  type: ZodLiteral<T>
  meta: typeof MessageMetadataSchema
  payload: P
}>

/**
 * Schema type for messages with custom metadata
 */
export type MessageSchemaWithCustomMeta<T extends string, M extends ZodRawShape> = ZodObject<{
  type: ZodLiteral<T>
  meta: ZodObject<typeof MessageMetadataSchema.shape & M>
}>

/**
 * Schema type for messages with both payload and custom metadata
 */
export type PayloadMessageSchemaWithCustomMeta<
  T extends string,
  P extends ZodTypeAny,
  M extends ZodRawShape,
> = ZodObject<{
  type: ZodLiteral<T>
  meta: ZodObject<typeof MessageMetadataSchema.shape & M>
  payload: P
}>

// -----------------------------------------------------------------------
// Function Overloads
// -----------------------------------------------------------------------

/**
 * Creates a basic message schema with just type and standard metadata
 */
export function messageSchema<T extends string>(messageType: T): BaseMessageSchema<T>

/**
 * Creates a message schema with a payload defined as an object
 */
export function messageSchema<T extends string, P extends Record<string, ZodTypeAny>>(
  messageType: T,
  payload: P
): PayloadMessageSchema<T, ZodObject<P>>

/**
 * Creates a message schema with a payload defined as a ZodType
 */
export function messageSchema<T extends string, P extends ZodTypeAny>(
  messageType: T,
  payload: P
): PayloadMessageSchema<T, P>

/**
 * Creates a message schema with custom metadata
 */
export function messageSchema<T extends string, M extends ZodRawShape>(
  messageType: T,
  payload: undefined,
  meta: ZodObject<M>
): MessageSchemaWithCustomMeta<T, M>

/**
 * Creates a message schema with an object payload and custom metadata
 */
export function messageSchema<
  T extends string,
  P extends Record<string, ZodTypeAny>,
  M extends ZodRawShape,
>(
  messageType: T,
  payload: P,
  meta: ZodObject<M>
): PayloadMessageSchemaWithCustomMeta<T, ZodObject<P>, M>

/**
 * Creates a message schema with a ZodType payload and custom metadata
 */
export function messageSchema<T extends string, P extends ZodTypeAny, M extends ZodRawShape>(
  messageType: T,
  payload: P,
  meta: ZodObject<M>
): PayloadMessageSchemaWithCustomMeta<T, P, M>

// -----------------------------------------------------------------------
// Implementation
// -----------------------------------------------------------------------

/**
 * Creates a type-safe WebSocket message schema.
 *
 * The schema includes:
 * - A literal type field for routing messages
 * - Metadata for tracking client info and message context
 * - Optional payload for the message data
 *
 * Types are fully inferred for use with WebSocketRouter handlers.
 */
export function messageSchema<
  T extends string,
  P extends Record<string, ZodTypeAny> | ZodTypeAny | undefined = undefined,
  M extends ZodRawShape = Record<string, never>,
>(
  messageType: T,
  payload?: P,
  meta?: ZodObject<M>
): P extends undefined
  ? M extends Record<string, never>
  ? BaseMessageSchema<T>
  : MessageSchemaWithCustomMeta<T, M>
  : P extends Record<string, ZodTypeAny>
  ? M extends Record<string, never>
  ? PayloadMessageSchema<T, ZodObject<P>>
  : PayloadMessageSchemaWithCustomMeta<T, ZodObject<P>, M>
  : M extends Record<string, never>
  ? PayloadMessageSchema<T, P & ZodTypeAny>
  : PayloadMessageSchemaWithCustomMeta<T, P & ZodTypeAny, M> {
  // Always use .extend() to avoid union types in meta
  const baseMetaSchema = MessageMetadataSchema.extend(meta ? meta.shape : {})

  const baseSchema = z.object({
    type: z.literal(messageType),
    meta: baseMetaSchema,
  })

  // If no payload schema provided, return without payload
  if (payload === undefined) {
    return baseSchema as any
  }

  const payloadSchema =
    payload instanceof z.ZodType ? payload : z.object(payload as Record<string, ZodTypeAny>)

  // Add payload to schema
  const finalSchema = baseSchema.extend({
    payload: payloadSchema as z.ZodTypeAny,
  })

  return finalSchema as any
}
export const UserBalanceUpdateEvent = z.object({
  table: z.string(),
  operation: z.enum(['INSERT', 'UPDATE', 'DELETE']),
  recordId: z.union([z.string(), z.number(), z.null()]).optional(), // Allow string/number/null IDs
  data: z.record(z.any()).nullable(), // The row data (can be null on DELETE))
})
export const TournamentLeaderboardUpdateEvent = z.object({
  table: z.string(),
  operation: z.enum(['INSERT', 'UPDATE', 'DELETE']),
  recordId: z.union([z.string(), z.number(), z.null()]).optional(), // Allow string/number/null IDs
  data: z.record(z.any()).nullable(), // The row data (can be null on DELETE))
})
// New WebSocket Message Schemas for Tournaments
export const TournamentStartedEvent = messageSchema(
  'TOURNAMENT_STARTED_WS', // WebSocket message type, distinct from AppEvents enum value
  z.custom<TournamentStartedPayload>() // Use the payload type directly
)

export const TournamentEndedEvent = messageSchema(
  'TOURNAMENT_ENDED_WS',
  z.custom<TournamentEndedPayload>()
)

export const TournamentParticipantJoinedEvent = messageSchema(
  'TOURNAMENT_PARTICIPANT_JOINED_WS',
  z.custom<TournamentParticipantJoinedPayload>()
)

// You might also want a generic tournament notification schema
export const TournamentNotificationEvent = messageSchema(
  'TOURNAMENT_NOTIFICATION_WS',
  z.object({
    tournamentId: z.string(),
    title: z.string(),
    message: z.string(),
    details: z.record(z.unknown()).optional(), // For any extra data
  })
)

// New Schemas for Client-to-Server Tournament Topic Subscription Messages
export const SubscribeToTournamentTopicPayload = z.object({
  tournamentId: z.string().cuid(), // Specific tournament ID
  topicType: z.enum(['updates', 'leaderboard']), // Type of updates to subscribe to for that tournament
})
export const SubscribeToTournamentTopic = messageSchema(
  'SUBSCRIBE_TOURNAMENT_TOPIC', // Message type from client
  SubscribeToTournamentTopicPayload
)

export const UnsubscribeFromTournamentTopicPayload = z.object({
  tournamentId: z.string().cuid(),
  topicType: z.enum(['updates', 'leaderboard']),
})
export const UnsubscribeFromTournamentTopic = messageSchema(
  'UNSUBSCRIBE_FROM_TOURNAMENT_TOPIC', // Message type from client
  UnsubscribeFromTournamentTopicPayload
)

// Schema for subscribing to general tournament announcements (optional)
export const SubscribeToGeneralTournaments = messageSchema('SUBSCRIBE_TO_GENERAL_TOURNAMENTS')
export const UnsubscribeFromGeneralTournaments = messageSchema(
  'UNSUBSCRIBE_FROM_GENERAL_TOURNAMENTS'
)

// It's also good to have a generic success/error response schema for client requests
export const GenericWsResponsePayload = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  details: z.record(z.unknown()).optional(),
})
export const GenericWsResponse = messageSchema('GENERIC_WS_RESPONSE', GenericWsResponsePayload)

// Context object passed to message handlers
export type MessageHandlerContext<
  Schema extends MessageSchemaType,
  Data extends AppWsData = AppWsData, // Changed WsData to AppWsData
> = {
  ws: ServerWebSocket<Data>
  meta: z.infer<Schema['shape']['meta']>
  send: SendFunction
  server: Server
} & (Schema['shape'] extends { payload: infer P }
  ? P extends ZodTypeAny
  ? { payload: z.infer<P> }
  : {}
  : {})

// Base WsData structure
export interface WsData {
  clientId: string // Automatically added by the router
  userId?: string // Made optional for flexibility (e.g. proxy before auth)
  key?: string // Generic key, purpose defined by handler (e.g. client's original 'data' param)
  currentRoomId?: string
  [key: string]: unknown // Allow other properties
}

// Application-specific WebSocket data, extending WsData
export type AppWsData = WsData & {
  data: any
  // userId: string; // If userId is always expected after auth for non-proxy
  user: UserProfile
  username?: string
  token: string
  key?: string
  isNoLimitProxy?: boolean
  nolimitSessionKey?: string
  nolimitRemoteWs?: WebSocket
  nolimitMessageCounter?: number
  nolimitRememberedData?: { extPlayerKey?: string }
  nolimitGameCodeString?: string
  nolimitClientString?: string
  nolimitLanguage?: string
  nolimitToken?: string
  subscribedTournamentTopics?: Set<string>
  mode?: string
  gameCodeString?: string
  kaToken?: string
  gameId?: string
  isKaGamingProxy?: boolean
}

// Base type for Zod message schemas used in the router
export type MessageSchemaType = ZodObject<{
  type: ZodLiteral<string>
  meta: typeof MessageMetadataSchema // Changed line: Use the schema type directly
  payload?: ZodTypeAny
}>

// Type for the 'send' function provided to handlers
export type SendFunction = <Schema extends MessageSchemaType>(
  schema: Schema,
  payload: Schema['shape'] extends { payload: infer P }
    ? P extends ZodTypeAny
    ? z.infer<P>
    : unknown
    : unknown,
  meta?: Partial<Omit<z.infer<Schema['shape']['meta']>, 'clientId' | 'timestamp'>>
) => void

// Type signature for a message handler function
export type MessageHandler<Schema extends MessageSchemaType, Data extends AppWsData = AppWsData> = (
  context: MessageHandlerContext<Schema, Data>
) => void | Promise<void>

// Context for the 'open' event handler
export interface OpenHandlerContext<Data extends AppWsData = AppWsData> {
  ws: ServerWebSocket<Data>
  send: SendFunction
}

// Type signature for the 'open' handler
export type OpenHandler<Data extends AppWsData = AppWsData> = (
  context: OpenHandlerContext<Data>
) => void | Promise<void>

// Context for the 'close' event handler
export interface CloseHandlerContext<Data extends AppWsData = AppWsData> {
  ws: ServerWebSocket<Data>
  code: number
  reason?: string
  send: SendFunction
}

// Type signature for the 'close' handler
export type CloseHandler<Data extends AppWsData = AppWsData> = (
  context: CloseHandlerContext<Data>
) => void | Promise<void>

// Structure to hold schema and handler pairs internally in the router
export interface MessageHandlerEntry<Data extends AppWsData = AppWsData> {
  schema: MessageSchemaType
  handler: MessageHandler<MessageSchemaType, Data>
}

// Options for the WebSocketRouter constructor
export interface WebSocketRouterOptions {
  server?: Server
}

// Options specifically for the upgrade request handling
export interface UpgradeRequestOptions<T extends Omit<AppWsData, 'clientId'>> {
  // Changed to AppWsData
  server: Server
  request: Request
  data?: T
  headers?: HeadersInit
}
