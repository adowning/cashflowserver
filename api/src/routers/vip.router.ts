import { o, protectedProcedure } from "@/lib/orpc"
import type { InferRouterOutputs } from "@orpc/server"
import prisma from "prisma"
import type { VipInfo } from "prisma/generated/client"



export const vipRouter = o.router({
  getMyVipInfo: protectedProcedure.handler(async ({ context }): Promise<VipInfo> => {
    const vipInfo = await prisma.vipInfo.findUnique({
      where: { userId: context.session.user.id },
    })
    // console.log(vipInfo)
    if (!vipInfo) {
      throw new Error('vipInfo not found for authenticated user.')
    }
    return vipInfo
  }),
})
export type Outputs = InferRouterOutputs<typeof vipRouter>
