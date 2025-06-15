import { os } from '@orpc/server'
import { z } from 'zod'
import { publicProcedure, router } from '../lib/orpc'
import { webSocketMonitorHandler } from '@/handlers/websocket-monitor.handler'

// Define input schemas
const getEventsInput = z.object({
  limit: z.number().min(1).max(1000).default(100),
})

// Export the router
export const websocketRouter = router({

  // Get recent WebSocket events
  getEvents: publicProcedure
    .input(getEventsInput)
    .handler(async ({ input }) => {
      const events = await webSocketMonitorHandler.getRecentEvents(input.limit)
      return { success: true, data: events }
    }),

  // Get current WebSocket stats
  getStats: publicProcedure.handler(() => {
    const stats = webSocketMonitorHandler.getStats()
    return { success: true, data: stats }
  }),

  // Get active connections
  getConnections: publicProcedure.handler(() => {
    const connections = webSocketMonitorHandler.getActiveConnections()
    return { success: true, data: connections }
  }),

  // Subscribe to real-time WebSocket events (SSE)
  subscribeToEvents: os.handler(async () => {
    //  while (true) {
    //   yield { message: 'Hello, world!' }
    //   await new Promise(resolve => setTimeout(resolve, 1000))
    // }
    // return os.subscription(() => {
    //   return os.publisher<{
    //     type: string
    //     data: any
    //     timestamp: string
    //   }>({
    //     publish: (emit) => {
    await new Promise(resolve => {
      // Set up event listeners for real-time updates
      const onStatsUpdate = (data: any) => {
        resolve({
          type: 'stats_update',
          data,
          timestamp: new Date().toISOString(),
        })
        // emit({
        //   type: 'stats_update',
        //   data,
        //   timestamp: new Date().toISOString(),
        // })
      }
      const onConnectionUpdate = (data: any) => {
        resolve({
          type: 'connection_update',
          data,
          timestamp: new Date().toISOString(),
        })
      }




      // const onConnectionUpdate = (data: any) => {
      //   emit({
      //     type: 'connection_update',
      //     data,
      //     timestamp: new Date().toISOString(),
      //   })
      // }

      // Add event listeners
      webSocketMonitorHandler.on('stats_update', onStatsUpdate)
      webSocketMonitorHandler.on('connection_update', onConnectionUpdate)

      // Return cleanup function
      return () => {
        webSocketMonitorHandler.off('stats_update', onStatsUpdate)
        webSocketMonitorHandler.off('connection_update', onConnectionUpdate)
      }
      // },
      // })
    })
  })

})
// Extend the WebSocketMonitorHandler to support event emitter
declare module '@/handlers/websocket-monitor.handler' {
  interface WebSocketMonitorHandler {
    on(event: 'stats_update', listener: (data: any) => void): this
    on(event: 'connection_update', listener: (data: any) => void): this
    off(event: string, listener: (...args: any[]) => void): this
    emit(event: string, ...args: any[]): boolean
  }
}
