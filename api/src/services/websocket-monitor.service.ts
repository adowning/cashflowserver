import { RedisCacheService } from './common/redis.service'
import { Hono } from 'hono';
import { Readable } from 'stream';

// Initialize Redis cache service
const cacheService = new RedisCacheService()

export interface WebSocketEvent {
  id: string
  timestamp: string
  type: 'connect' | 'disconnect' | 'message_in' | 'message_out'
  clientId: string
  userId?: string
  username?: string
  path?: string
  message?: any
  size: number
  ip?: string
  userAgent?: string
}

export class WebSocketMonitorService {
  private static readonly REDIS_KEY_PREFIX = 'ws:monitor:'
  private static readonly MAX_EVENTS = 1000
  private static readonly TTL_DAYS = 7

  static async logEvent(event: Omit<WebSocketEvent, 'id' | 'timestamp'>): Promise<void> {
    try {
      const fullEvent: WebSocketEvent = {
        ...event,
        id: Date.now().toString(36) + Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toISOString(),
        size: event.size || 0,
        type: event.type || 'message_in',
        clientId: event.clientId || 'unknown',
      }

      const key = `${this.REDIS_KEY_PREFIX}events`
      const serializedEvent = JSON.stringify(fullEvent)

      // Only push the event to the list. Trimming and expiration are not supported.
      await cacheService.lpush(key, serializedEvent)

    } catch (error) {
      console.error('Error logging WebSocket event:', error)
      throw error // Re-throw to allow callers to handle the error
    }
  }

  static async getRecentEvents(limit = 100): Promise<WebSocketEvent[]> {
    try {
      const key = `${this.REDIS_KEY_PREFIX}events`
      const events = await cacheService.lrange(key, 0, limit - 1)

      return events
        .map((e) => {
          try {
            return typeof e === 'string' ? JSON.parse(e) : e
          } catch (error) {
            console.error('Error parsing WebSocket event:', error)
            return null
          }
        })
        .filter((e): e is WebSocketEvent => e !== null && typeof e === 'object')
        .reverse()
    } catch (error) {
      console.error('Error fetching WebSocket events:', error)
      return []
    }
  }

  static async getConnectionStats(): Promise<{
    totalConnections: number
    userConnections: number
    gameConnections: number
    messagesPerMinute: number
    lastUpdated: string
  }> {
    try {
      const events = await this.getRecentEvents(1000)
      const oneMinuteAgo = new Date(Date.now() - 60 * 1000).toISOString()
      const recentMessages = events.filter((e) => e.timestamp > oneMinuteAgo)

      const connectionEvents = recentMessages.filter(
        (e) => e.type === 'connect' || e.type === 'disconnect'
      )

      const userConnections = new Set(
        connectionEvents
          .filter((e): e is WebSocketEvent & { userId: string } => !!e.userId)
          .map((e) => e.userId)
      ).size

      const gameConnections = new Set(
        connectionEvents
          .filter((e): e is WebSocketEvent & { path: string } => !!e.path?.includes('/game/'))
          .map((e) => e.clientId)
      ).size

      return {
        totalConnections: userConnections + gameConnections,
        userConnections,
        gameConnections,
        messagesPerMinute: recentMessages.length,
        lastUpdated: new Date().toISOString(),
      }
    } catch (error) {
      console.error('Error calculating connection stats:', error)
      return {
        totalConnections: 0,
        userConnections: 0,
        gameConnections: 0,
        messagesPerMinute: 0,
        lastUpdated: new Date().toISOString(),
      }
    }
  }
}
class LogStream {
  private listeners: ((log: string) => void)[] = [];

  on(event: 'log', listener: (log: string) => void) {
    this.listeners.push(listener);
  }

  emit(event: 'log', log: string) {
    this.listeners.forEach((listener) => listener(log));
  }
}



const logStream = new LogStream();

const originalConsoleLog = console.log;
console.log = (...args) => {
  logStream.emit('log', args.join(' '));
  originalConsoleLog(...args);
};



const app = new Hono();



// app.get('/server-logs', async (c) => {
// const sseEndpoint = async (c) => {
export const sseEndpoint = async (c: any) => {

  c.header('Content-Type', 'text/event-stream');
  c.header('Cache-Control', 'no-cache');
  c.header('Connection', 'keep-alive');

  const readable = new ReadableStream({
    async pull(controller) {
      logStream.on('log', (log) => {
        controller.enqueue(`data: ${log}\n\n`);
      });
    }
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}