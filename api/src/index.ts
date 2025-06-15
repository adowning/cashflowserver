
import { WebSocketRouter } from './routers/socket.router'
import type { AppWsData } from './types'
import app from './app'
import { handleStartGame } from './handlers/php-games.handler'
import { auth } from './lib/auth'
import { createContext } from './lib/context'
import type { Server } from 'bun'
import prisma from '../prisma/'

// const resthandler = new OpenAPIHandler(appRouter, {
//   plugins: [new ZodSmartCoercionPlugin()],
// })

const ws = new WebSocketRouter<AppWsData>()
ws.addOpenHandler(handleStartGame)
Bun.serve({
  async fetch(req: Request, server: Server) {
    const parsedUrl = new URL(req.url)
    // //console.log(parsedUrl.searchParams)
    const paths = parsedUrl.pathname.replace('/', '').split('/')[0]
    // //console.log(paths)
    let token
    let wsUpgrade
    let authSession
    switch (paths) {
      case 'game':
        return await app.fetch(req, { context: { req } })
      case 'php':
        //console.log(x)
        return await app.fetch(req, { context: { req, res: new Response(), } })
      case 'games':
        return await app.fetch(req, { context: { req } })
      case 'slots':
        // const cookies = req.cookies;

        //console.log('cookies = ', cookies)
        // ws.data.isphpProxy = true
        //console.log('slots params = ', parsedUrl)
        token = parsedUrl.searchParams.get('token')
        if(!token) token = parsedUrl.searchParams.get('sessionId')
        let gameName = parsedUrl.searchParams.get('gameName')
        // //console.log('slots token = ', token)
        if (token) req.headers.set('Authorization', token)

        authSession = await auth.api.getSession({
          headers: req.headers,
        })
        //console.log('slots authSession', authSession)
        if (authSession !== null) {
          const user = await prisma.userProfile.findFirst({
            where: {
              userId: authSession.user.id
            }
          })
          wsUpgrade = ws.upgrade({
            server,
            request: req,
            data: {
              user,
              gameName,
              token: token as string,
              username: authSession.user.username,
              clientId: Math.random().toString(36),
              isPhpProxy: true,
              request: req
            },
          })
        }
        if (wsUpgrade && typeof wsUpgrade === 'object' && (wsUpgrade as any) instanceof Response)
          return wsUpgrade
        break
      case 'nolimit':
        ws.data.isNoLimitProxy = true
        break
      case 'kagaming':
        ws.data.isKaGamingProxy = true
        break
      default:
        // let gameName

        if (parsedUrl.pathname.startsWith('/rtg')) {
          const platformSplit = parsedUrl.pathname.split('platform/')
          if (platformSplit.length > 1 && platformSplit[1]) {
            const gameSplit = platformSplit[1].split('/game')
            if (gameSplit.length > 0) {
              token = gameSplit[0]
              // If you want to extract gameName from somewhere else, add logic here
            }
          }
        }
        if (token) req.headers.set('Authorization', token)
        // let user

        authSession = await auth.api.getSession({
          headers: req.headers,
        })
        // user = authSession
        // if (authSession != null) user = authSession.user
        let result
        if (parsedUrl.pathname.startsWith('/rpc')) {
          if (authSession !== null) {
            return await app.fetch(req, {
              context: await createContext({
                context: {
                  session: authSession.session,
                  req,
                },
              }),
            })
            // result = await resthandler.handle(req, {
            //   prefix: '/rpc',
            //   context: await createContext({
            //     context: {
            //       session: authSession.session,
            //       req,
            //     },
            //   }),
            // })
          }
          // if (
          //   result &&
          //   typeof result === 'object' &&
          //   'matched' in result &&
          //   result.matched &&
          //   result.response instanceof Response
          // ) {
          //   return result.response
          // }
          // If not matched, fall through to app.fetch
        }

        if (authSession !== null) {
          return await app.fetch(req, {
            context: {
              session: authSession.session,
              req,
            },
          })
        } else {
          return await app.fetch(req, { context: { req } })
        }
    }
    //console.log('deep')
    token = parsedUrl.searchParams.get('token')
    if (token != null) req.headers.set('Authorization', token)
    authSession = await auth.api.getSession({
      headers: req.headers,
    })
    let user
    if (authSession != null) user = authSession.user
    if (authSession === null || authSession.session === undefined)
      if (user)
        wsUpgrade = ws.upgrade({
          server,
          request: req,
          data: {
            user,
            token: token as string,
            username: user.username,
            clientId: Math.random().toString(36),
          },
        })
    //console.log(wsUpgrade)
    if (wsUpgrade && typeof wsUpgrade === 'object' && (wsUpgrade as any) instanceof Response)
      return wsUpgrade
    return new Response('Not Found', { status: 404 })
  },
  websocket: ws.websocket // {
  // message(ws, message) {
  //     handler.message(ws, message, {
  //       context: {}, // Provide initial context if needed
  //     })
  //   },
  //   close(ws) {
  //     handler.close(ws)
  //   },
  // },
})

// import { WebSocketRouter } from './routers/socket.router'
// import type { AppWsData } from './types'
// import app from './app'

// const ws = new WebSocketRouter<AppWsData>()

// Bun.serve({
//   fetch(req, server) {
//     if (server.upgrade(req)) {
//       return
//     }else{
//       return app.fetch(req, server)
//     }
//     // return new Response('Upgrade failed', { status: 500 })
//   },
//   websocket: ws.websocket // {
//     // message(ws, message) {
//   //     handler.message(ws, message, {
//   //       context: {}, // Provide initial context if needed
//   //     })
//   //   },
//   //   close(ws) {
//   //     handler.close(ws)
//   //   },
//   // },
// })