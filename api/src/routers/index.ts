// import { os, type Context } from "@orpc/server";
// import { protectedProcedure, publicProcedure } from "../lib/orpc";
import { gameRouter } from "./game.router";
import { redtigerRouter } from "./redtiger.router";
// import { todoRouter } from "./todo";
import { userRouter } from "./user.router";
// import { websocketMonitorRouter } from "./websocket-monitor.router";
import { o } from '../lib/orpc';
import { jackpotRouter } from "./jackpot.router";
import { transactionRouter } from "./transaction";
import { vipRouter } from "./vip.router";
import { tournamentRouter } from "./tournament.router";
import { phpProxyMessageHandler } from "@/handlers/php-games.handler";
// import { phpProxyRouter } from "./php.router";

export const appRouter = o.router({
  user: userRouter,
  game: gameRouter,
  jackpot: jackpotRouter,
  transaction: transactionRouter,
  vip: vipRouter,
  tournament: tournamentRouter,
  // php: phpRouter,
  // api: phpProxyRouter,
  // redtiger: redtigerRouter,
  // websocket: websocketMonitorRouter,
  // socket: socketRouter,
});
export type AppRouter = typeof appRouter;

export const gamesRouter = {
  // redtiger: redtigerRouter
};
export type GamesRouter = typeof gamesRouter;
