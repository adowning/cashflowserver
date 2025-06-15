import type { Server, ServerWebSocket } from 'bun'
import type { AppWsData, MessageSchemaType } from '../types'
import { z, type ZodTypeAny } from 'zod'

export interface WebSocketMessage {
  type: string
  meta: Record<string, any>
  payload?: any
}

export function safeJsonParse(message: string | Buffer): {
  success: boolean
  data?: any
  error?: Error
} {
  try {
    const data = typeof message === 'string' ? JSON.parse(message) : JSON.parse(message.toString())
    return { success: true, data }
  } catch (error) {
    return { success: false, error: error as Error }
  }
}

export function validateMessage<Schema extends MessageSchemaType>(
  schema: Schema,
  payload: any,
  meta: Partial<Omit<z.infer<Schema['shape']['meta']>, 'timestamp'>> = {}
): z.infer<Schema> | undefined {
  try {
    const message = {
      type: schema.shape.type._def.value,
      meta: {
        timestamp: Date.now(),
        ...meta,
      },
      ...(schema.shape.payload && payload !== undefined && { payload }),
    }

    const validationResult = schema.safeParse(message)
    if (!validationResult.success) {
      console.error(
        `[WS UTILS] Validation failed for type "${schema.shape.type._def.value}":`,
        validationResult.error.flatten()
      )
      return undefined
    }

    return validationResult.data as z.infer<Schema>
  } catch (error) {
    console.error(
      `[WS UTILS] Error validating message type "${schema.shape.type._def.value}":`,
      error
    )
    return undefined
  }
}

export function subscribeToTopic(ws: ServerWebSocket<AppWsData>, topic: string): void {
  ws.subscribe(topic)
  console.log(`[WS UTILS] Subscribed to topic: ${topic}`)
}

export function unsubscribeFromTopic(
  ws: ServerWebSocket<AppWsData>,
  topic: string,
  reason: string
): void {
  ws.unsubscribe(topic)
  console.log(`[WS UTILS] Unsubscribed from topic: ${topic} because ${reason}`)
}

export function publish<Schema extends MessageSchemaType>(
  ws: ServerWebSocket<AppWsData>,
  server: Server,
  topic: string,
  schema: Schema,
  payload: Schema['shape'] extends { payload: infer P }
    ? P extends ZodTypeAny
    ? z.infer<P>
    : unknown
    : unknown,
  meta: Partial<Omit<z.infer<Schema['shape']['meta']>, 'clientId' | 'timestamp'>> = {}
): boolean {
  try {
    const messageType = schema.shape.type._def.value

    const message = {
      type: messageType,
      meta: {
        clientId: ws.data.clientId,
        userId: ws.data.user.id,
        timestamp: Date.now(),
        ...meta,
      },
      ...(schema.shape.payload && payload !== undefined && { payload }),
    }

    const validationResult = schema.safeParse(message)
    if (!validationResult.success) {
      console.error(
        `[WS PUBLISH] Validation failed for type "${messageType}" on topic "${topic}":`,
        validationResult.error.flatten()
      )
      return false
    }

    const publishedBytes = server.publish(topic, JSON.stringify(validationResult.data))
    return publishedBytes > 0
  } catch (error) {
    console.error(`[WS PUBLISH] Error publishing message to topic "${topic}":`, error)
    return false
  }
}

export function validateAndSend(ws: any, schema: any, payload: any, meta: any) {
  const validatedMsg = validateMessage(schema, payload, meta)
  if (validatedMsg) {
    ws.send(JSON.stringify(validatedMsg))
  }

  // console.warn(
  //   '[WS UTILS] validateAndSend is a placeholder function and does not perform any action.',
  // );
}

export function validateAndPublish(
  server: Server,
  userTopic: string,
  dbUpdate: any,
  messageType: string,
  payload: any,
  meta: any
) {
  // const validatedMsg = validateMessage(dbUpdate, payload, meta);

  if (userTopic) {
    server.publish(userTopic, JSON.stringify({ type: messageType, payload, dbUpdate, meta }))
  }

  console.warn(`[WS UTILS] published tableName ${payload.table} to topic: ${userTopic}`)
}

export function parseWebSocketMessage(message: string): any {
  // Handle the protocol format: "data:::json"
  const parts = message.toString().split(':::')
  let gameData
  if (parts.length < 2) {
    return null
  }

  if (parts[1] != undefined) {
    let a = parts[1].replaceAll('"i_t"', '')
    a = a.replaceAll('"i_l"', '')
    var _gameData = JSON.parse(a)
    gameData = _gameData

    /*---------CQ---------*/

    if (gameData.vals != undefined) {
      if (gameData.irq != undefined) {
        return '~m~67~m~~j~{"err":0,"irs":1,"vals":[1,-2147483648,2,-503893983],"msg":null}'
        return { type: 'irq', data: gameData }
      }
      gameData = gameData.vals[0]
    }
    /*-----------------------*/

    var originalCookie = gameData.cookie
    var sessionId = gameData.sessionId
    const gameName = gameData.gameName
    const userId = 'cmbk4rnom0000zsmd5vf7mst1'
    console.log(gameData)
    return {
      ...gameData,
      sessionId,
      gameName,
      userId,
      action: gameData.gameData.action,
      cookie: originalCookie, // Preserve original cookie if needed
    }
  }

  // Fallback: Try to extract just the essential game data
  try {
    const parts = message.toString().split(':::')
    if (parts.length >= 2) {
      let jsonString = parts[1]

      if (!jsonString) {
        return null
      }

      // More aggressive approach: manually extract the gameData object
      const gameDataMatch = jsonString.match(/"gameData":\s*(\{[^}]*\})/s)
      const sessionIdMatch = jsonString.match(/"sessionId":\s*"([^"]*)"/)
      const gameNameMatch = jsonString.match(/"gameName":\s*"([^"]*)"/)

      if (gameDataMatch && gameDataMatch[1]) {
        try {
          const gameData = JSON.parse(gameDataMatch[1])
          return {
            ...gameData,
            sessionId: sessionIdMatch ? sessionIdMatch[1] : null,
            gameName: gameNameMatch ? gameNameMatch[1] : null,
            cookie: 'extracted_fallback',
          }
        } catch (gameDataError) {
          // Silently handle gameData parsing errors
        }
      }

      // Last resort: try to remove cookie entirely and parse
      jsonString = jsonString.replace(/"cookie":"[^"]*(?:\\.[^"]*)*"(?:,\s*)?/g, '')
      jsonString = jsonString.replace(/,(\s*[}\]])/g, '$1') // Clean trailing commas

      const jsonData = JSON.parse(jsonString)

      if (jsonData.gameData) {
        const { gameData, sessionId, gameName } = jsonData
        return {
          ...gameData,
          sessionId,
          gameName,
          cookie: 'removed_fallback',
        }
      }
      return jsonData
    }
  } catch (secondError) {
    // Silently handle all parsing failures
  }

  return null
}