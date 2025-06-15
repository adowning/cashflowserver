import { auth } from "./auth";
import type { BunRequest, ServerWebSocket } from "bun";
import type { UserProfile } from "@/types";
import type { Session, User } from "better-auth";

// export type CreateContextOptions = {
//   context: HonoContext;
// };
export type CreateMyContextOptions = {
  context: {
    req: Request
    res?: Response
    ws?: ServerWebSocket
    user?: User
    userProfile: Partial<UserProfile>
    token?: string // Automatically added by the router
    key?: string // Generic key, purpose defined by handler (e.g. client's original 'data' param)
    session?: Session
    queryParams?: any
    body?: any
    gameName?: string
    // [key: string]?: unknown // A
  }
}
export async function createContext({ context }: CreateMyContextOptions) {
  const session = await auth.api.getSession({
    headers: context.req.headers,
  });
  return {
    session,
  };
}


export type Context = Awaited<ReturnType<typeof createContext>>;

export async function createGameContext({ context }: CreateMyContextOptions) {
  const parsedUrl = new URL(context.req.url)

  let token
  // let gameName

  if (parsedUrl.pathname.startsWith('/rtg')) {
    const platformSplit = parsedUrl.pathname.split('handleGameCommand/')
    if (platformSplit.length > 1 && platformSplit[1]) {
      const gameSplit = platformSplit[1].split('/')
      if (gameSplit.length > 0) {
        token = gameSplit[0]
        // If you want to extract gameName from somewhere else, add logic here
      }
    }
  }
  if (token) context.req.headers.set('Authorization', token)
  const session = await auth.api.getSession({
    headers: context.req.headers,
  });
  return {
    session,
  };
}