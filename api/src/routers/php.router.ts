// import type { CreateMyContextOptions } from "@/lib/context";
// import { o, publicProcedure } from "@/lib/orpc"
// import { os } from "@orpc/server"
// import z from "zod"
// import prisma from '../../prisma/'


// /*
// {
//   "action": "InitRequest",
//   "sesId": false,
//   "result": true,
//   "data": {}
// }
//   */
// async function handleNetGame(gameName: string, body: any, phpId: string) {
//     const gameURL = `${process.env.PHP_SERVER_URL_PREFIX}${process.env.PHP_SERVER_URL_HOST}:${process.env.PHP_SERVER_URL_PORT}/game/${gameName}/server_api`;
//     const apiKey = process.env.PHP_SERVER_API_KEY;
//     const postData = {
//         // gameData: body,
//         ...body,
//         apiKey: apiKey,
//         userId: phpId
//     };
//     console.log('request to : ',gameURL)
//     console.log('request action : ', postData)
//     const response = await fetch(gameURL, {
//         method: 'POST',
//         body: JSON.stringify(postData),
//         headers: { 'Content-Type': 'application/json', }
//     });

//     if (!response.ok) {
//         throw new Error(`Upstream server responded with status: ${response.status}`);
//     }
//     console.log('response action:', response)
//     const responseBody = await response.text();
//     const jbody = JSON.parse(responseBody)
//     console.log('resonse from server ')
//     return jbody
// }
// export const phpRouter = o.router({


//     handleServerCommandx: os.route({
//         path: '/game/{gameName}/server',
//         method: 'POST',
//         inputStructure: 'detailed',

//     })
//         .input(z.object({
//             params: z.object({ gameName: z.string() }),
//             body: z.any()
//         }))
//         .handler(async ({ context, input }) => {
//             console.log(context)
//             const user = await prisma.userProfile.findFirst({
//                 where: {
//                     id: context.session?.user?.id
//                 }
//             })

//             if (user == undefined || user == null) return { status: 401 }
//             const phpId = user.phpId
//             if (phpId == undefined || phpId == null) return { status: 402 }
//             const gameName = input.params['gameName']
//             const body = input.body
//             let response
//             if (gameName.endsWith('NG')) {
//                 const res = await handleNetGame(gameName, body, phpId)
//                 return res

//             }
//             if (gameName.endsWith('NET')) {
//                 return await handleNetGame(gameName, body, phpId)

//             }

//             // //console.log('iput biotch ', input)
//             // return await rtgService.rtgSettings({ params: input.params, body: input.body, session: context.session }, input.params.gameName)
//         }),


// })

// // // src/laravel-connector.ts

// // import { o, publicProcedure } from '@/lib/orpc'
// // import { os } from '@orpc/server'
// // import { oz } from '@orpc/zod'
// // import type { ServerWebSocket } from 'bun'
// // import z from 'zod'
// // import { ZodAny } from 'zod/v4'

// // let laravelSocket: WebSocket | undefined
// // const LARAVEL_WS_URL = 'ws://192.168.1.35:8091'

// // // We need the main Bun server instance to publish messages from Laravel

// // export function connectToLaravel() {
// //     //console.log('Attempting to connect to Laravel WebSocket...')
// //     laravelSocket = new WebSocket(LARAVEL_WS_URL)

// //     laravelSocket.addEventListener('open', () => {
// //         //console.log('Successfully connected to Laravel WebSocket server.')
// //     })

// //     laravelSocket.addEventListener('close', () => {
// //         //console.log('Disconnected from Laravel. Reconnecting in 3 seconds...')
// //         setTimeout(connectToLaravel, 3000) // Simple reconnect logic
// //     })

// //     laravelSocket.addEventListener('error', (err: any) => {
// //         console.error('Error with Laravel WebSocket connection:', err.message)
// //     })
// // }

// // // function connect() {
// // //   //console.log('Attempting to connect to Laravel WebSocket...')
// // //   laravelSocket = new WebSocket(LARAVEL_WS_URL)

// // //   laravelSocket.addEventListener('open', () => {
// // //     //console.log('✅ Successfully connected to Laravel WebSocket server.')
// // //   })

// // //   laravelSocket.addEventListener('close', () => {
// // //     console.warn('Disconnected from Laravel. Reconnecting in 3 seconds...')
// // //     setTimeout(connect, 3000)
// // //   })

// // //   laravelSocket.addEventListener('error', (event) => {
// // //     // Bun's WebSocket client provides a more detailed error event
// // //     const error = event as ErrorEvent
// // //     console.error('Error with Laravel WebSocket connection:', error.message)
// // //   })

// // //   // --- THIS IS THE CRITICAL PART FOR RECEIVING DATA FROM LARAVEL ---
// // //   laravelSocket.addEventListener('message', (event) => {
// // //     //console.log('Received message from Laravel:', event.data)
// // //     try {
// // //       const message = JSON.parse(event.data as string)

// // //       // Assuming Laravel sends a message with a target topic and payload
// // //       // Example format from Laravel: { "topic": "room:123", "payload": { ... } }
// // //       // Or for a specific user: { "topic": "user:456", "payload": { ... } }
// // //       if (message.topic && message.payload) {
// // //         bunServer.publish(message.topic, JSON.stringify(message.payload))
// // //         //console.log(`Published message from Laravel to topic: ${message.topic}`)
// // //       } else {
// // //         console.warn('Received message from Laravel in unknown format', message)
// // //       }
// // //     } catch (e) {
// // //       console.error('Failed to parse message from Laravel:', e)
// // //     }
// // //   })
// // // }

// // /**
// //  * Initializes the connection to Laravel.
// //  * Must be called once when the Bun server starts.
// //  * @param server The main Bun server instance.
// //  */
// // // export function initializeLaravelConnector(server: Server) {
// // //   bunServer = server
// // //   connect()
// // // }

// // /**
// //  * Sends data to the Laravel WebSocket server.
// //  * @param data The data object to send.
// //  */
// // export async function sendToLaravel(ws: ServerWebSocket<any>, message: any) {
// //     let param
// //     let gameName
// //     if (message.toString().split(':::')[1] != undefined) {
// //         try {
// //             param = JSON.parse(message.toString().split(':::')[1])
// //         } catch (e) {
// //             return
// //         }

// //         /*---------CQ---------*/

// //         if (param.vals != undefined) {
// //             if (param.irq != undefined) {
// //                 ws.send('~m~67~m~~j~{"err":0,"irs":1,"vals":[1,-2147483648,2,-503893983],"msg":null}')

// //                 return
// //             }

// //             param = param.vals[0]
// //         }

// //         /*-----------------------*/

// //         var sessionId = param.cookie
// //         // var sessionId=param.sessionId;
// //         param.cookie = ''

// //         gameName = param.gameName
// //     } else {
// //         param = {}
// //         sessionId = ''
// //     }

// //     var gameURL = '/game/' + gameName + '/server?&sessionId=' + sessionId

// //     if (gameName == undefined) {
// //         //console.log(param)
// //         return
// //     }

// //     // var paramStr = JSON.stringify(param)

// //     // var options = {
// //     //   method: 'post',
// //     //   body: param,
// //     //   json: true,
// //     //   rejectUnauthorized: false,
// //     //   requestCert: false,
// //     //   agent: false,
// //     //   url: gameURL,
// //     //   headers: {
// //     //     Connection: 'keep-alive',
// //     //     'Content-Type': 'application/json',
// //     //     'Content-Length': paramStr.length,
// //     //     Cookie: ck,
// //     //   },
// //     // }

// //     // 1. Parse the command from the user
// //     try {
// //         // const command = JSON.parse(evt.data as string)
// //         // const { userId, game, sessionId, balance, denomination, betLevel, action } = command.payload

// //         // 2. Call the Laravel API with the command data
// //         const laravelResponse = await fetch(gameURL, {
// //             method: 'POST',
// //             body: param,
// //             // options,

// //             // headers: {
// //             //   'Authorization': `Bearer ${c.env.LARAVEL_API_TOKEN}`,
// //             //   'Content-Type': 'application/json',
// //             //   'Accept': 'text/plain', // We now expect plain text back
// //             // },
// //             // body: JSON.stringify({
// //             //   user_id: userId,
// //             //   balance: balance,
// //             //   sessionId: sessionId,
// //             //   game_denomination: denomination,
// //             //   bet_level: betLevel,
// //             //   action: action
// //             // }),
// //         })

// //         if (!laravelResponse.ok) {
// //             throw new Error(`Laravel API responded with status: ${laravelResponse.status}`)
// //         }

// //         // 3. THE CRITICAL CHANGE: Get the response as raw text, not JSON.
// //         const rawResponseFromLaravel = await laravelResponse.text()

// //         // 4. Send the exact, unaltered string to the client.
// //         ws.send(rawResponseFromLaravel)
// //     } catch (error) {
// //         console.error('An error occurred:', error)
// //         // Still good practice to send a standardized error back if things fail
// //         ws.send('responseEvent=error&serverResponse=InternalError')
// //     }
// // }

// // const PhpInput = z.any()


// // export const phpProxyRouter = {
// //     apiGame: publicProcedure.handler(async () => {
// //         //console.log('hit')
// //         //console.log('hit')
// //         //console.log('hit')
// //         //console.log('hit')
// //     }),
// //     apiGamex:
// //         os.route({
// //             path: '/api/game/BananasNG/*',
// //             method: 'POST',
// //             inputStructure: 'detailed',
// //         })
// //             .input(z.any())
// //             .handler(async ({ context, input }) => {
// //                 //console.log('asdfasdf here')
// //                 //console.log(input.body)
// //                 // return await rtgService.rtgSettings({ params: input.params, body: input.body, session: context.session }, input.params.gameName)
// //             }),
// //     api:
// //         os.route({
// //             path: '/api/game/BananasNG/server',
// //             method: 'POST',
// //             inputStructure: 'detailed',
// //         })
// //             .input(z.any())
// //             .handler(async ({ context, input }) => {
// //                 //console.log('asdfasdf here xxx')

// //                 //console.log(input.body)

// //                 // return await rtgService.rtgSettings({ params: input.params, body: input.body, session: context.session }, input.params.gameName)
// //             }),

// // }
// // // export default app
