import z from "zod/v4";
import prisma from "../../prisma";
import { protectedProcedure, publicProcedure } from "../lib/orpc";
import { os } from "@orpc/server";
import { oz } from '@orpc/zod'
import { RTGJackpotIntegration } from "@/services/redtiger/rtg-jackpot";
import type { RTGSpinRequestDto, RTGSpinResponseDto } from "@/types";
import { rtgService } from '../services/redtiger/rtg.service'



const SettingsInputSchema = oz.openapi(
  z.object({
    token: z.string().nullable(), //|| z.null(),
    sessionId: z.string(),
    playMode: z.string(),
    gameId: z.string(),

    userData: z.object({
      "userId": z.string(),
      "hash": z.string(),
      "affiliate": z.string(),
      "lang": z.string(),
      "channel": z.string(),
      "userType": z.string(),
      "fingerprint": z.string(),
    }),
    custom: z.object({
      "siteId": z.string().optional(),
      "extras": z.string().optional(),

    }),

  })

)


export const redtigerRouter = {
  settings:
    os.route({
      path: '/handleGameCommand/{token}/{gameName}/game/settings',
      method: 'POST',
      inputStructure: 'detailed',
    })
      .input(z.object({
        params: z.object({ token: z.string(), gameName: z.string() }),
        body: SettingsInputSchema
      }))
      .handler(async ({ context, input }) => {

        return await rtgService.rtgSettings({ params: input.params, body: input.body, session: context.session }, input.params.gameName)
      }),

  rtgSpin: protectedProcedure
    .input(z.custom<RTGSpinRequestDto>())
    .output(z.custom<RTGSpinResponseDto>())
    .handler(async ({ input, context }): Promise<RTGSpinResponseDto> => {

      // 1. Your existing RTG API call logic here
      const originalRTGResponse = await rtgService.rtgSpin(
        //@ts-ignore
        context,
        context.session.user,
        context.session,
        input.token
      )

      // 2. Add jackpot processing
      const rtgJackpotIntegration = new RTGJackpotIntegration()
      const enhancedResponse = await rtgJackpotIntegration.processRTGSpinWithJackpots(
        input,
        context.session.user.id,
        originalRTGResponse
      )

      return enhancedResponse
    })
};

