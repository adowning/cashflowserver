import { type OpenHandlerContext, type AppWsData, type UserProfile } from '../types'
import type { ServerWebSocket } from 'bun'
import type { User } from 'better-auth'
import prisma from '../../prisma/'

export interface PhpProxyData extends AppWsData {
  [key: string]: any
  user: UserProfile
  token: string
  isPhpProxy?: boolean
  clientId: string
  gameName?: string
}


// Handler for JOIN_ROOM
export function handleStartGame(context: OpenHandlerContext<PhpProxyData>) {
  const { ws } = context
  const { clientId, user, gameName, isPhpProxy } = ws.data // clientId is from router, userId from auth
  if (isPhpProxy == false || isPhpProxy == undefined) {
    //console.log('isPhpProxy is false or undefined')
    return
  }
  // const { gameName } = payload
  // const userId = ws.data.user.id

  // if (!userId || !server) {
  //   // Check server existence
  //   console.warn('[WS JOIN_ROOM] Missing userId or server instance.')
  //   return
  // }
  const userId = user.id
  ws.data.currentGameName = gameName
  ws.subscribe(userId + '/' + gameName)
  //console.log(`[WS] User ${userId} started game: ${gameName}`)
  ws.send('1::')
  // publish(ws, server, gameName, GameStarted, { gameName, userId }) // Pass server to publish
}

// Handler for SEND_MESSAGE
export async function phpProxyMessageHandler(ws: ServerWebSocket<PhpProxyData>,
  params: any, user: UserProfile) {
  try {
    const gameData = params.gameData
    //console.log('params in phproxy', params)
    //console.log('gamedata in user', user)
    // let params;
    // const messageStr = message.toString();
    // if (messageStr.includes(":::")) {
    //   // params = JSON.parse(messageStr.split(":::")[1]);
    //   params = convertNetGameMessageToJson(message)
    // } else {
    //   console.error("Received malformed message:", messageStr);
    //   return;
    // }
    // //console.log(params)

    if (params.irq !== undefined) {
      ws.send('~m~67~m~~j~{"err":0,"irs":1,"vals":[1,-2147483648,2,-503893983],"msg":null}');
      return;
    }
    if (params.vals !== undefined) {
      params = params.vals[0];
    }

    // We assume the incoming message from the game client now includes the userId.
    let { cookie: ck, sessionId, gameName, } = params;
    // const userProfile = prisma.userProfile.findFirst({
    //   where: {
    //     id: user.id
    //   }
    // })
    const phpUserId = user?.phpId



    // Point to the new API endpoint
    const gameURL = `${process.env.PHP_SERVER_URL_PREFIX}${process.env.PHP_SERVER_URL_HOST}:${process.env.PHP_SERVER_URL_PORT}/game/${gameName}/server_api`;
    //console.log(gameURL)
    //console.log(params)

    // It's better to load this from an environment variable or a config file
    const apiKey = "a-very-secret-key";

    // Construct the payload for the new API
    const postData = {
      ...params,
      apiKey: apiKey,
      userId: phpUserId
    };
console.log(postData)
// console.log(JSON.stringify(postData))
    const response = await fetch(gameURL, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json', 'Cookie': ck }
    });
    // console.log(response)
    if (!response.ok) {
      throw new Error(`Upstream server responded with status: ${response.status}`);
    }

    const body = await response.text();
    console.log(body)
    const allReq = body.split("------");

    for (const reqPart of allReq) {
      if (reqPart) ws.send(reqPart);
    }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error processing /slots message:", errorMessage);
    ws.send(JSON.stringify({ error: 'Failed to process request', details: errorMessage }));
  }
}

// Add other chat-related handlers here (e.g., handleLeaveRoom, handleRoomList)
