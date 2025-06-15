import { RedisClient } from 'bun'

// Extend the RedisClient type with our custom methods
type ExtendedRedisClient = RedisClient & {
  lrange(key: string, start: number, stop: number): Promise<string[]>
  lpush(key: string, ...values: string[]): Promise<number>
  on(event: 'connect' | 'close' | 'error', listener: (...args: any[]) => void): void
  quit(): Promise<void>
}

// Cache key prefixes for different data types
export const CACHE_KEYS = {
  USER_PROFILE: 'user_profile',
  GAME: 'game',
  GAME_SESSION: 'game_session',
  GAME_SETTINGS: 'game_settings',
  WALLET: 'wallet',
  PROVIDER_CONFIG: 'provider_config',
  JACKPOTS: 'jackpots',
  WEBSOCKET_EVENTS: 'ws:monitor:events',
} as const

// Cache TTL values in seconds
export const CACHE_TTL = {
  USER_PROFILE: 600, // 10 minutes
  GAME: 3600, // 1 hour
  GAME_SESSION: 60, // 1 minute
  WALLET: 30, // 30 seconds
  PROVIDER_CONFIG: 7200, // 2 hours
  WEBSOCKET_EVENTS: 86400 * 7, // 7 days
} as const

// Cache performance metrics
interface CacheMetrics {
  hits: number
  misses: number
  sets: number
  deletes: number
  errors: number
  connectionErrors: number
  totalTime: number
}

// Performance monitoring thresholds
const PERFORMANCE_THRESHOLDS = {
  MIN_HIT_RATE: 70, // Minimum acceptable cache hit rate (%)
  MAX_AVG_RESPONSE_TIME: 5, // Maximum acceptable average response time (ms)
  MAX_CONNECTION_ERRORS: 10, // Maximum connection errors before alert
  MONITORING_INTERVAL: 60000, // Monitor every 60 seconds
} as const

export class RedisCacheService {
  incr(arg0: string) {
    this.client.incr(arg0)
  }
  sadd(arg0: string, refernceId: string) {
    this.client.sadd(arg0, refernceId)
  }
  srem(arg0: string, clientId: string) {
    this.client.srem(arg0, clientId)
  }
  decr(arg0: string) {
    this.client.decr(arg0)
  }
  private client: ExtendedRedisClient
  private metrics: CacheMetrics
  private isConnecting: boolean
  private monitoringInterval: Timer | null
  public dbType: string

  constructor() {
    const redisUrl = process.env['REDIS_URL'] || 'redis://localhost:6379'
    //console.log(redisUrl)
    this.dbType = redisUrl.includes('6081') ? 'DragonflyDB' : 'Redis'
    this.metrics = {
      hits: 0,
      misses: 0,
      sets: 0,
      deletes: 0,
      errors: 0,
      connectionErrors: 0,
      totalTime: 0,
    }
    this.isConnecting = false
    this.monitoringInterval = null
    //console.log(this.isConnecting)

    try {
      this.client = new RedisClient(redisUrl) as ExtendedRedisClient

      this.setupEventHandlers()
      this.startMonitoring()
      //console.log(`[RedisCacheService] Successfully initialized ${this.dbType} client`)
    } catch (error) {
      console.error('[RedisCacheService] Failed to initialize Redis client:', error)
      this.metrics.errors++
      if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
        this.metrics.connectionErrors++
      }
      throw error
    }
  }

  private async connect(): Promise<void> {
    // `client.connected` is the documented way to check connection status.
    if (this.client.connected || this.isConnecting) {
      //console.log('[RedisCacheService] Already connected or connecting.')
      return
    }
    this.isConnecting = true
    //console.log('[RedisCacheService] Attempting to connect/verify Redis...')
    try {
      // Bun documentation: `await client.connect()` to explicitly connect.
      await this.client.connect()
      // The 'onconnect' event should handle setting isConnecting and logging.
    } catch (err) {
      this.isConnecting = false // Ensure flag is reset on explicit connect failure
      console.error('[RedisCacheService] Explicit connect attempt failed:', err)
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      if (!this.client.connected && !this.isConnecting) {
        console.warn(
          '[RedisCacheService - HealthCheck] Client not connected, attempting to connect.'
        )
        await this.connect()
        if (!this.client.connected) {
          console.error('[RedisCacheService - HealthCheck] Failed to connect during health check.')
          return false
        }
      }
      const testKey = 'health_check_bun_redis'
      await this.client.set(testKey, 'ok')
      // Note: A standalone 'expire' call is not supported by bun:redis, but it works with 'set'.
      await this.client.set(testKey, 'ok', 'EX', 10)
      const result = await this.client.get(testKey)
      await this.client.del(testKey)
      return result === 'ok'
    } catch (error) {
      console.error('[RedisCacheService - HealthCheck] Redis health check failed:', error)
      return false
    }
  }

  resetMetrics(): void {
    this.metrics = {
      hits: 0,
      misses: 0,
      sets: 0,
      deletes: 0,
      errors: 0,
      connectionErrors: 0,
      totalTime: 0,
    }
  }

  private setupEventHandlers(): void {
    const that = this
    this.client.on = function (event, error) {
      if (event === 'connect') that.isConnecting = false
      if (event === 'close') that.isConnecting = false
      if (event === 'error') {
        console.error('[RedisCacheService] Redis error:', error)
        that.metrics.errors++
        //@ts-ignore
        if (error.message.includes('ECONNREFUSED')) {
          that.metrics.connectionErrors++
        }
      }
    }
  }

  private startMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
    }

    this.monitoringInterval = setInterval(() => {
      this.monitorPerformance()
    }, PERFORMANCE_THRESHOLDS.MONITORING_INTERVAL)
  }

  private monitorPerformance(): void {
    const hitRate = this.calculateHitRate()
    const avgResponseTime = this.metrics.hits > 0 ? this.metrics.totalTime / this.metrics.hits : 0

    if (hitRate < PERFORMANCE_THRESHOLDS.MIN_HIT_RATE) {
      // console.warn(`[RedisCacheService] Low cache hit rate: ${hitRate.toFixed(2)}%`)
    }

    if (avgResponseTime > PERFORMANCE_THRESHOLDS.MAX_AVG_RESPONSE_TIME) {
      console.warn(
        `[RedisCacheService] High average response time: ${avgResponseTime.toFixed(2)}ms`
      )
    }

    if (this.metrics.connectionErrors > PERFORMANCE_THRESHOLDS.MAX_CONNECTION_ERRORS) {
      console.error('[RedisCacheService] High number of connection errors')
    }
  }

  private calculateHitRate(): number {
    const total = this.metrics.hits + this.metrics.misses
    return total > 0 ? (this.metrics.hits / total) * 100 : 0
  }

  private getFullKey(key: string, identifier?: string | undefined): string {
    if (identifier) return `${key}:${identifier}`
    return `cashit:${key}`
  }

  // Core cache methods
  async get<T>(key: string, identifier?: string): Promise<T | null> {
    const startTime = Date.now()
    const fullKey = this.getFullKey(key, identifier)

    try {
      const data = await this.client.get(fullKey)
      if (data === null) {
        this.metrics.misses++
        return null
      }

      this.metrics.hits++
      this.metrics.totalTime += Date.now() - startTime
      return JSON.parse(data) as T
    } catch (error) {
      this.handleError('get', error)
      return null
    }
  }

  async set<T>(
    key: string,
    value: T,
    ttl?: number,
    identifier?: string | number
  ): Promise<boolean> {
    const startTime = Date.now()
    const fullKey = this.getFullKey(key, identifier?.toString())
    try {
      const serialized = JSON.stringify(value)
      if (ttl) {
        await this.client.set(fullKey, serialized, 'EX', ttl)
      } else {
        await this.client.set(fullKey, serialized)
      }
      //console.log(fullKey)
      this.metrics.sets++
      this.metrics.totalTime += Date.now() - startTime
      return true
    } catch (error) {
      this.handleError('set', error)
      return false
    }
  }

  async delete(key: string, identifier?: string): Promise<boolean> {
    const startTime = Date.now()
    const fullKey = this.getFullKey(key, identifier)

    try {
      const result = await this.client.del(fullKey)
      this.metrics.deletes++
      this.metrics.totalTime += Date.now() - startTime
      return result > 0
    } catch (error) {
      this.handleError('delete', error)
      return false
    }
  }

  // List operations
  async lrange(key: string, start: number, stop: number): Promise<string[]> {
    const startTime = Date.now()
    const fullKey = this.getFullKey(key)

    try {
      const result = await this.client.lrange(fullKey, start, stop)
      this.metrics.hits++
      this.metrics.totalTime += Date.now() - startTime
      return result || []
    } catch (error) {
      this.handleError('lrange', error)
      return []
    }
  }

  async lpush(key: string, ...values: string[]): Promise<number> {
    const fullKey = this.getFullKey(key)
    try {
      return await this.client.lpush(fullKey, ...values)
    } catch (error) {
      this.handleError('lpush', error)
      return 0
    }
  }

  // Error handling
  private handleError(operation: string, error: unknown): void {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`[RedisCacheService] Error in ${operation}:`, errorMessage)

    this.metrics.errors++
    if (errorMessage.includes('ECONNREFUSED')) {
      this.metrics.connectionErrors++
    }
  }
  getMetrics(): CacheMetrics & { hitRate: number; avgResponseTime: number } {
    const totalRequests = this.metrics.hits + this.metrics.misses
    const hitRate = totalRequests > 0 ? (this.metrics.hits / totalRequests) * 100 : 0
    const timedOperationsCount =
      this.metrics.hits + this.metrics.misses + this.metrics.sets + this.metrics.deletes
    const avgResponseTime =
      timedOperationsCount > 0 ? this.metrics.totalTime / timedOperationsCount : 0

    return {
      ...this.metrics,
      hitRate: Math.round(hitRate * 100) / 100,
      avgResponseTime: Math.round(avgResponseTime * 100) / 100,
    }
  }
  // Cleanup
  async disconnect(): Promise<void> {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
      this.monitoringInterval = null
    }

    try {
      await this.client.quit()
    } catch (error) {
      console.error('[RedisCacheService] Error disconnecting from Redis:', error)
    }
  }
  async setWallet(userId: string, operatorId: string, wallet: any): Promise<boolean> {
    const walletKey = `${userId}:${operatorId}`
    return this.set(`${CACHE_KEYS.WALLET}:${walletKey}`, wallet, CACHE_TTL.WALLET)
  }
  //server specific
  async invalidateWallet(userId: string, operatorId: string): Promise<boolean> {
    const walletKey = `${userId}:${operatorId}`
    return this.delete(`${CACHE_KEYS.WALLET}:${walletKey}`)
  }
  async invalidateGameSession(userId: string, gameId: string): Promise<boolean> {
    const sessionKey = `${userId}:${gameId}`

    return this.delete(`${CACHE_KEYS.GAME_SESSION}:${sessionKey}`)
  }

  async getWallet(userId: string, operatorId: string): Promise<any | null> {
    const walletKey = `${userId}:${operatorId}`
    const wallet = await this.get(`${CACHE_KEYS.WALLET}:${walletKey}`)
    if (wallet) this.metrics.hits++
    else this.metrics.misses++
    return wallet
  }

  async setUserProfile(userId: string, profile: any): Promise<boolean> {
    return this.set(CACHE_KEYS.USER_PROFILE, userId, profile, CACHE_TTL.USER_PROFILE)
  }

  async invalidateUserProfile(userId: string): Promise<boolean> {
    return this.delete(CACHE_KEYS.USER_PROFILE, userId)
  }

  async getGame(gameName: string): Promise<any | null> {
    const game = await this.get(CACHE_KEYS.GAME, gameName)
    if (game) this.metrics.hits++
    else this.metrics.misses++
    return game
  }

  async setGame(gameName: string, game: any): Promise<boolean> {
    return this.set(CACHE_KEYS.GAME, gameName, game, CACHE_TTL.GAME)
  }

  async getGameSession(userId: string, gameId: string): Promise<any | null> {
    const sessionKey = `${userId}:${gameId}`
    const session = await this.get(CACHE_KEYS.GAME_SESSION, sessionKey)
    if (session) this.metrics.hits++
    else this.metrics.misses++
    return session
  }

  async getGameSettings(gameName: string): Promise<any | null> {
    const session = await this.get(CACHE_KEYS.GAME_SETTINGS, gameName)
    if (session) this.metrics.hits++
    else this.metrics.misses++
    return session
  }

  async setGameSession(userId: string, gameId: string, session: any): Promise<boolean> {
    const sessionKey = `${userId}:${gameId}`
    return this.set(CACHE_KEYS.GAME_SESSION, sessionKey, session, CACHE_TTL.GAME_SESSION)
  }
  async setGameSettings(gameName: string, settings: any): Promise<boolean> {
    return this.set(CACHE_KEYS.GAME_SETTINGS, settings, CACHE_TTL.GAME_SESSION, gameName,)
  }

  async getProviderConfig(providerName: string): Promise<any | null> {
    const config = await this.get(CACHE_KEYS.PROVIDER_CONFIG, providerName)
    if (config) this.metrics.hits++
    else this.metrics.misses++
    return config
  }

  async setProviderConfig(providerName: string, config: any): Promise<boolean> {
    return this.set(CACHE_KEYS.PROVIDER_CONFIG, providerName, config, CACHE_TTL.PROVIDER_CONFIG)
  }

  // Enhanced cache preloading for user session start
  async preloadUserData(userId: string, operatorId: string): Promise<void> {
    //console.log(`🚀 [RedisCacheService] Preloading user data for ${userId}`)

    const commonGames = [
      'BassBossRTG',
      'AztecTreasureRTG',
      'CashBanditsRTG',
      'CleopatrasGoldRTG',
      'CountMoneyRTG',
    ]

    try {
      // Batch preload user profile and wallet
      const userDataPromises = [this.getUserProfile(userId), this.getWallet(userId, operatorId)]

      // Preload common games in parallel
      const gamePromises = commonGames.map((game) =>
        this.getGame(game).catch((e) => console.warn(`Preload failed for game ${game}:`, e.message))
      )

      await Promise.allSettled([...userDataPromises, ...gamePromises])
      //console.log(`✅ [RedisCacheService] User data preloading complete for ${userId}`)
    } catch (error: any) {
      console.error('[RedisCacheService] User data preloading failed:', error.message)
    }
  }

  async warmCache(userId: string, gameId: string, operatorId: string): Promise<void> {
    console.log(
      `🔥 [RedisCacheService] Warming cache for user ${userId}, game ${gameId}, operator ${operatorId}`
    )
    try {
      await Promise.all([
        this.getUserProfile(userId).catch((e) =>
          console.warn(`Cache warm-up failed for userProfile ${userId}:`, e.message)
        ),
        this.getGame(gameId).catch((e) =>
          console.warn(`Cache warm-up failed for game ${gameId}:`, e.message)
        ),
        this.getWallet(userId, operatorId).catch((e) =>
          console.warn(`Cache warm-up failed for wallet ${userId}:${operatorId}:`, e.message)
        ),
      ])
      console.log(
        `✅ [RedisCacheService] Cache warming attempt complete for user ${userId}, game ${gameId}`
      )
    } catch (error: any) {
      console.error('[RedisCacheService] Cache warming failed overall:', error.message)
    }
  }
  async getUserProfile(userId: string): Promise<any | null> {
    const profile = await this.get(CACHE_KEYS.USER_PROFILE, userId)
    if (profile) this.metrics.hits++
    else this.metrics.misses++
    return profile
  }
}

// Export a singleton instance
export const cacheService = new RedisCacheService()

// Handle process termination
process.on('SIGINT', async () => {
  //console.log('SIGINT received - closing Redis connection')
  await cacheService.disconnect()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  //console.log('SIGTERM received - closing Redis connection')
  await cacheService.disconnect()
  process.exit(0)
})