// apps/server/src/app.ts
import "dotenv/config";
import { RPCHandler } from "@orpc/server/fetch";
import { createContext, createGameContext, type CreateMyContextOptions } from "./lib/context";
import { appRouter } from "./routers/index";
import { handlePhpCall } from "./routers/php.routes";
import { auth } from "./lib/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { serveStatic } from 'hono/bun'; // 1. Import
import { OpenAPIHandler } from '@orpc/openapi/fetch'
import { gamesRouter } from "./routers/index";
import { CORSPlugin } from '@orpc/server/plugins'
import { ZodSmartCoercionPlugin, ZodToJsonSchemaConverter } from '@orpc/zod'
import { OpenAPIGenerator } from '@orpc/openapi'
import { sseEndpoint } from './services/websocket-monitor.service';
import prisma from '../prisma/'


const app = new Hono();
app.use('/server-logs', sseEndpoint);

app.use(logger());
app.use(
  "/*",
  cors({
    origin: ['http://localhost:3001', 'https://slots.cashflowcasino.com', 'http://localhost:3000'], //process.env.CORS_ORIGIN || "",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 2. Add the static file middleware to serve everything from the public root.
const handler = new RPCHandler(appRouter);
// const phpHandler = new OpenAPIHandler(phpRouter, {
//   plugins: [
//     new CORSPlugin(),
//     new ZodSmartCoercionPlugin(),
//   ],
// })
app.use('/*', serveStatic({ root: './public' }));

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));
// app.on(["POST", "GET", 'HEAD'], ["/php/game/**"], async (c) => {
//   const parsedUrl = new URL(c.req.raw.url)
//   let token = parsedUrl.searchParams.get('token')
//   if (!token)
//     token = parsedUrl.searchParams.get('sessionId')
//   if (token) c.req.raw.headers.set('Authorization', token)
//   const authSession = await auth.api.getSession({
//     headers: c.req.raw.headers,
//   })
//   if (authSession !== null) {
//     const user = await prisma.userProfile.findFirst({
//       where: {
//         id: authSession.user.id
//       }
//     })
//     let context
//     if (user !== undefined && user !== null) {
//       context = await createContext({
//         context: {
//           user: authSession?.user,
//           userProfile: user,
//           req: c.req.raw,
//           res: c.res,
//           token: token as string,
//         }
//       });
//       const { matched, response } = await phpHandler.handle(c.req.raw, {
//         prefix: "/php",
//         context: context,
//       });
//       if (matched) {
//         return c.newResponse(response.body, response);
//       }

//       if (matched) {
//         return c.newResponse(response, response);
//       }
//       // Optionally handle unmatched case
//       return c.text('Not Found', 404);
//     }
//     return c.text('User Not Found', 401);
//   } else {
//     return c.text('User Not Found', 401);
//   }

// })

// THIS IS THE NEW, CORRECTED ROUTE HANDLER
app.on(["POST", "GET"], "/php/game/:gameName/server", async (c) => {
    try {
        const gameName = c.req.param('gameName');

        // 1. Manually run the authentication and context creation logic
        const parsedUrl = new URL(c.req.url);
        let token = parsedUrl.searchParams.get('token') || parsedUrl.searchParams.get('sessionId');
        if (token) {
            c.req.raw.headers.set('Authorization', token);
        }
console.log
        const authSession = await auth.api.getSession({ headers: c.req.raw.headers });
        if (!authSession) {
            return c.json({ error: 'Authentication failed' }, 401);
        }

        // We need to fetch the UserProfile to pass it into the context
        const userProfile = await prisma.userProfile.findUnique({ where: { userId: authSession.user.id } });
        if (!userProfile) {
            return c.json({ error: 'User profile not found.'}, 404);
        }

   

        // 2. Manually parse query parameters and the body
        const queryParams: Record<string, string> = {};
        parsedUrl.searchParams.forEach((value, key) => {
            queryParams[key] = value;
        });
        
        const body = await c.req.json().catch(() => ({}));
        // 3. Create a caller and invoke the procedure by name
        console.log(gameName)
        console.log(body)
  //       const result = phpHandler.handle(c.req.raw, {
  //   prefix: "/php",
  //   context: context,
  // }, );
    //  const context = await createContext({
    //         context: {
    //             session: authSession.session,
    //             userProfile: userProfile, // Pass the full profile here
    //             req: c.req.raw,
    //             res: c.res,
    //             gameName,
    //             queryParams,
    //             body
    //         }
    //     });

  const result = handlePhpCall({ context: {
                session: authSession.session,
                userProfile: userProfile, // Pass the full profile here
                req: c.req.raw,
                res: c.res,
                gameName,
                queryParams,
                body
            }})
        // const result = await caller.handleLegacyGame.mutate({ gameName, body, queryParams });

        // 4. Return the result based on its type
        if (typeof result === 'string') {
            return c.text(result); 
        }
        return c.json(result); 

    } catch (error: any) {
        console.error("Error in legacy game handler:", error);
        return c.json({ success: false, message: error.message || 'An internal error occurred.' }, 500);
    }
});

// app.on(["POST", "GET"], "/php/game/**", (c) =>   phpHandler.handle(c.req.raw)

// import type { inferRouterContext } from "@orpc/server";
// import type { appRouter as AppRouterType } from "./routers/index";

type AppContext = Awaited<ReturnType<typeof createContext>>;

// Explicitly type the handler with the correct context

// const gamesHandler = new OpenAPIHandler(gameRouter);
const gamesHandler = new OpenAPIHandler(gamesRouter, {
  plugins: [
    new CORSPlugin(),
    new ZodSmartCoercionPlugin(),
  ],
})
app.use("/rpc/*", async (c, next) => {

  const context = await createContext({
    context: {
      req: c.req.raw,
      res: c.res,
    }
  });
  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: "/rpc",
    context: context,
  });
  if (matched) {
    return c.newResponse(response.body, response);
  }
  await next();
});
// app.use("/php/game/*", async (c, next) => {
//   const context = await createContext({
//     context: {
//       req: c.req.raw,
//       res: c.res,
//     }
//   });
//   // //console.log(appRouter.api.apiGameBananasNGServer["~orpc"].route)
//   // //console.log(appRouter.api.game["~orpc"].route.path)
//   //console.log(phpRouter.game["~orpc"].route.path)
//   const { matched, response } = await phpHandler.handle(c.req.raw, {
//     prefix: "/php",
//     context: context,
//   });
//   //console.log(matched)
//   if (matched) {
//     return c.newResponse(response.body, response);
//   }
//   await next();
// });
app.use("/rtg/*", async (c, next) => {
  //console.log(c.req.raw.url)
  //console.log(c.req.param('gameName'))
  const context = await createGameContext({
    context: {
      req: c.req.raw,
      res: c.res,
    }
  });
  // //console.log(context)

  const { matched, response } = await gamesHandler.handle(c.req.raw, {
    prefix: "/rtg/redtiger",
    context: context,
  });
  //console.log(matched)

  if (matched) {
    return c.newResponse(response.body, response);
  }
  await next();
});
// ... rest of your app
const openAPIGenerator = new OpenAPIGenerator({
  schemaConverters: [
    new ZodToJsonSchemaConverter(),
  ],
})

// if (req.url === '/spec.json') {
app.use("/spec.json", async (c, next) => {

  const spec = await openAPIGenerator.generate(appRouter, {
    info: {
      title: 'Cashflow Game Routes',
      version: '1.0.0',
    },
    servers: [
      // { url: '/q' }, /** Should use absolute URLs in production */
    ],
    security: [{ bearerAuth: [] }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  })

  // res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.end(JSON.stringify(spec))

  const html = `
    <!doctype html>
    <html>
      <head>
        <title>My Client</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="https://orpc.unnoq.com/icon.svg" />
      </head>
      <body>
        <div id="app"></div>

        <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
        <script>
          Scalar.createApiReference('#app', {
            url: '/spec.json',
            authentication: {
              securitySchemes: {
                bearerAuth: {
                  token: 'default-token',
                },
              },
            },
          })
        </script>
      </body>
    </html>
  `
  // const z = new Response(html)
  // return z
  // res.writeHead(200, { 'Content-Type': 'text/html' })
  // res.end(html)
  return c.newResponse(JSON.stringify(spec), 200)

})

// res.writeHead(200, { 'Content-Type': 'text/html' })
// res.end(html)
export default app;