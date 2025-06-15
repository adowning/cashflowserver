import { type MessageHandlerContext, Ping, Pong } from '../types'

// Handler for PING
export function handlePing(context: MessageHandlerContext<typeof Ping>) {
  const { ws, send } = context
  const userId = ws.data.user.id
  if (!userId) {
    console.warn('[WS PING] Received PING without userId.')
    return
  }
  // console.log(`[WS] Received PING from user ${userId}`)
  send(Pong, {
    userId,
    timestamp: Date.now(),
    content: 'PONG',
  })
}
