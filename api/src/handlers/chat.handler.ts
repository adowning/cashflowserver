import { publish } from '../utils'
import { JoinRoom, type MessageHandlerContext, NewMessage, SendMessage, UserJoined } from '../types'

// Handler for JOIN_ROOM
export function handleJoinRoom(context: MessageHandlerContext<typeof JoinRoom>) {
  const { ws, payload, send, server } = context // Get server from context
  const { roomId } = payload
  const userId = ws.data.user.id

  if (!userId || !server) {
    // Check server existence
    console.warn('[WS JOIN_ROOM] Missing userId or server instance.')
    return
  }

  ws.data.currentRoomId = roomId
  ws.subscribe(roomId)
  console.log(`[WS] User ${userId} joined room: ${roomId}`)
  ws.send('1::')
  publish(ws, server, roomId, UserJoined, { roomId, userId }) // Pass server to publish
}

// Handler for SEND_MESSAGE
export function handleSendMessage(context: MessageHandlerContext<typeof SendMessage>) {
  const { ws, payload, server } = context // Get server from context
  const { roomId, text } = payload
  const userId = ws.data.user.id

  if (!userId || !server) {
    // Check server existence
    console.warn('[WS SEND_MESSAGE] Missing userId or server instance.')
    return
  }

  console.log(`[WS] Message from ${userId} in room ${roomId}: ${text}`)
  publish(ws, server, roomId, NewMessage, {
    // Pass server to publish
    roomId,
    userId,
    text,
    timestamp: Date.now(),
  })
}

// Add other chat-related handlers here (e.g., handleLeaveRoom, handleRoomList)
