import type { ServerWebSocket } from 'bun'
import { WebSocketMonitorService } from '../services/websocket-monitor.service'
import { EventEmitter } from 'events'

export interface WebSocketClient {
  id: string
  socket: ServerWebSocket<any>
  request: Request
  ip: string
  userAgent: string
  path: string
  userId?: string
  username?: string
  type: 'user' | 'game' | 'monitor'
  connectedAt: string
}

interface WebSocketStats {
  totalConnections: number
  activeConnections: number
  userConnections: number
  gameConnections: number
  monitorConnections: number
  messagesProcessed: number
  messagesPerMinute: number
  lastUpdated: string
}
export type MesssageType = "connect" | "disconnect" | "message_in" | "message_out"

export class WebSocketMonitorHandler extends EventEmitter {
  private static instance: WebSocketMonitorHandler
  private clients: Map<string, WebSocketClient> = new Map()
  private stats: WebSocketStats = {
    totalConnections: 0,
    activeConnections: 0,
    userConnections: 0,
    gameConnections: 0,
    monitorConnections: 0,
    messagesProcessed: 0,
    messagesPerMinute: 0,
    lastUpdated: new Date().toISOString(),
  }
  private messageStats: { timestamp: number; count: number }[] = []
  private statsUpdateInterval: NodeJS.Timeout | null = null

  /**
   * Initialize the WebSocket monitor handler
   * Sets up the stats update interval
   */
  public initialize(): void {
    // Start stats update interval if not already running
    if (!this.statsUpdateInterval) {
      this.statsUpdateInterval = setInterval(() => this.updateStats(), 1000)
    }
  }

  private constructor() {
    super()
  }

  public static getInstance(): WebSocketMonitorHandler {
    if (!WebSocketMonitorHandler.instance) {
      WebSocketMonitorHandler.instance = new WebSocketMonitorHandler()
    }
    return WebSocketMonitorHandler.instance
  }

  public cleanup() {
    if (this.statsUpdateInterval) {
      clearInterval(this.statsUpdateInterval)
      this.statsUpdateInterval = null
    }
  }

  public addClient(client: Omit<WebSocketClient, 'connectedAt'>): string {
    const clientWithTimestamp = {
      ...client,
      connectedAt: new Date().toISOString(),
    }

    this.clients.set(client.id, clientWithTimestamp)
    this.stats.totalConnections++
    this.stats.activeConnections = this.clients.size

    // Log the connection
    WebSocketMonitorService.logEvent({
      type: 'connect',
      clientId: client.id,
      userId: client.userId,
      username: client.username,
      path: client.path,
      size: 0,
      ip: client.ip,
      userAgent: client.userAgent,
    })

    // Emit connection update
    this.emit('connection_update', {
      type: 'connect',
      clientId: client.id,
      userId: client.userId,
      username: client.username,
      ip: client.ip,
      userAgent: client.userAgent,
      timestamp: clientWithTimestamp.connectedAt,
    })

    return client.id
  }
  public handleMessage(clientId: string, messageType: MesssageType, message: string | Buffer) {
    const client = this.clients.get(clientId)
    if (!client) return

    const messageStr = message.toString()
    const messageSize = Buffer.byteLength(messageStr, 'utf8')
    const now = Date.now()

    // Log the message
    WebSocketMonitorService.logEvent({
      type: messageType,
      clientId,
      userId: client.userId,
      username: client.username,
      path: client.path,
      message: messageStr,
      size: messageSize,
      ip: client.ip,
      userAgent: client.userAgent,
    })

    // Update message stats for MPM calculation
    const lastStat = this.messageStats[this.messageStats.length - 1]
    if (lastStat && now - lastStat.timestamp < 1000) {
      lastStat.count++
    } else {
      this.messageStats.push({ timestamp: now, count: 1 })
    }

    // Update stats
    this.stats.messagesProcessed++

    // Emit message event
    this.emit('connection_update', {
      type: 'message',
      clientId,
      userId: client.userId,
      username: client.username,
      size: messageSize,
      timestamp: new Date().toISOString(),
    })

  }

  public handleClose(clientId: string, code: number, reason: string) {
    const client = this.clients.get(clientId)
    if (!client) return

    const disconnectTime = new Date().toISOString()

    // Log the disconnection
    WebSocketMonitorService.logEvent({
      type: 'disconnect',
      clientId,
      userId: client.userId,
      username: client.username,
      path: client.path,
      size: 0,
      ip: client.ip,
      userAgent: client.userAgent,
    })

    // Emit connection update before removing client
    this.emit('connection_update', {
      type: 'disconnect',
      clientId,
      userId: client.userId,
      username: client.username,
      ip: client.ip,
      reason,
      code,
      timestamp: disconnectTime,
    })

    // Remove client
    this.clients.delete(clientId)
    this.stats.activeConnections = this.clients.size

    // Clean up any remaining references
    if (this.clients.size === 0) {
      this.messageStats = []
    }
  }

  public broadcastToMonitors(message: any) {
    const messageStr = JSON.stringify(message)
    for (const client of this.clients.values()) {
      if (client.socket.readyState === 1) { // 1 = OPEN
        client.socket.send(messageStr)
      }
    }
  }


  public getStats() {
    return {
      ...this.stats,
      monitorClients: Array.from(this.clients.values()).filter(
        (c) => c.type === 'monitor'
      ).length,
    }
  }

  public getActiveConnections() {
    return Array.from(this.clients.values()).map((client) => ({
      id: client.id,
      userId: client.userId,
      username: client.username,
      type: client.type,
      ip: client.ip,
      userAgent: client.userAgent,
      connectedAt: client.connectedAt,
    }))
  }

  public getRecentEvents(limit: number = 100) {
    return WebSocketMonitorService.getRecentEvents(limit)
  }

  private updateStats(): void {
    try {
      const now = new Date()
      const oneMinuteAgo = now.getTime() - 60000

      // Clean up old message stats
      this.messageStats = this.messageStats.filter(
        (stat) => stat.timestamp > oneMinuteAgo
      )

      // Calculate messages per minute
      const messagesLastMinute = this.messageStats.reduce(
        (sum, stat) => sum + stat.count,
        0
      )

      // Get connection stats
      const userConnections = Array.from(this.clients.values()).filter(
        (c) => c.type === 'user'
      ).length
      const gameConnections = Array.from(this.clients.values()).filter(
        (c) => c.type === 'game'
      ).length
      const monitorConnections = Array.from(this.clients.values()).filter(
        (c) => c.type === 'monitor'
      ).length

      // Update stats
      this.stats = {
        ...this.stats,
        activeConnections: this.clients.size,
        userConnections,
        gameConnections,
        monitorConnections,
        messagesPerMinute: messagesLastMinute,
        lastUpdated: now.toISOString(),
      }

      // Emit stats update
      this.emit('stats_update', this.getStats())
    } catch (error) {
      console.error('Error updating WebSocket monitor stats:', error)
    }
  }
}

export const webSocketMonitorHandler = WebSocketMonitorHandler.getInstance()
