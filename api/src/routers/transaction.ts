

// const prisma: ExtendedPrismaClient = prisma

import { o, protectedProcedure } from "@/lib/orpc"
import type { DepositHistoryItem, DepositHistoryResponse, DepositProduct, OperatorData, GetOperatorDataResponse } from "@/types"
import { type } from "@orpc/server"
import prisma from "prisma"
import { TransactionType } from "prisma/generated/enums"
import z from "zod"

// export const transactionRouter: Record<string, unknown> = {
export const transactionRouter = o.router({

  getTransactionById: protectedProcedure
    .input(type<{ id: string }>())
    .handler(async ({ input }) => {
      return await prisma.transaction.findUniqueOrThrow({
        where: {
          id: input.id,
        },
        // include: {
        //   // user: true, // Include the user relation if needed
        // },
      })
    }),
  getUserPendingTransactions: protectedProcedure
    .input(type<{ id: string }>())
    .handler(async ({ context }) => {
      return await prisma.transaction.findMany({
        where: {
          status: 'PENDING',
          userProfileId: context.session.user.id,
        },
        // include: {
        //   // user: true, // Include the user relation if needed
        // },
      })
    }),
  getTransactionHistory: protectedProcedure
    .input(
      z.object({
        onlyPending: z.boolean().optional().default(false),
        page: z.number().optional().default(1),
        limit: z.number().optional().default(10),
      })
    )
    .handler(async ({ context, input }) => {
      const { page, limit } = input
      try {
        const transactions = await prisma.transaction.findMany({
          where: {
            userProfileId: context.session.user.id,
            // targetUserId: user.id, // Filter by user's profile IDs
            // type: TransactionType.DEPOSIT, // Filter for deposit transactions
          },
          orderBy: {
            createdAt: 'desc', // Order by latest first
          },
          skip: (page - 1) * limit, // Apply pagination
          take: limit,
          // select: {
          //   // Select the fields needed for DepositHistoryItem
          //   id: true,
          //   createdAt: true,
          //   type: true, // Will be 'DEPOSIT'
          //   amount: true,
          //   status: true,
          //   // reference: true, // Using reference for note if available
          //   // paymentMethod: true, // Using paymentMethod for type if needed
          //   Operator: true,
          //   product: true,
          // },
          include: {
            operator: true,
            product: true,
          },
        })

        // Count total deposit transactions for pagination
        const totalRecords = await prisma.transaction.count({
          where: {
            userProfileId: context.session.user.id,
            type: TransactionType.DEPOSIT,
          },
        })

        const totalPages = Math.ceil(totalRecords / limit)

        // Map Prisma results to DepositHistoryItem interface
        const historyRecords: DepositHistoryItem[] = transactions.map((tx) => ({
          id: parseInt(tx.id), // Assuming id is a number or needs conversion
          created_at: tx.createdAt.getTime(), // Convert Date to timestamp
          // type: tx.paymentMethod || tx.type, // Use payment method or transaction type
          amount: tx.amount.toString(), // Convert amount to string
          status: tx.status, // === TransactionStatus.COMPLETED ? 1 : 0, // Map status to 1 or 0
          // note: tx.reference || '', // Use reference as note
          note: '',
          type: tx.type,
          createdAt: tx.createdAt,
          // currency: tx.currency,
          currency: 'USD', // tx.profile.currency,
          //@ts-ignore
          product: tx.product as unknown as Product, // Get currency from related profile
        }))

        const historyData: DepositHistoryResponse = {
          total_pages: totalPages,
          record: historyRecords,
          error: null,
          code: 200,
        }
        // --- End Database Logic ---

        // const response: GetDepositHistoryResponse = {
        //   code: 200,
        //   data: historyData,
        //   message: 'Deposit history fetched successfully',
        // }

        return historyData
      } catch (error) {
        console.error('Failed to fetch deposit history:', error)

        return { total_pages: 0, record: [], error: error as string, code: 500 }
      }
    }),

  // toggle: publicProcedure
  //   .input(z.object({ id: z.number(), completed: z.boolean() }))
  //   .handler(async ({ input }) => {
  //     await prisma.userTransaction.update({
  //       where: { id: input.id },
  //       data: { completed: input.completed },
  //     });
  //     return { success: true };
  //   }),

  // delete: publicProcedure
  //   .input(z.object({ id: z.number() }))
  //   .handler(async ({ input }) => {
  //     await prisma.userTransaction.delete({
  //       where: { id: input.id },
  //     });
  //     return { success: true };
  //   }),
  getOperatorData: protectedProcedure.handler(async ({ context }) => {
    console.log('getting operator data ...')
    const id = context.session.user.id
    if (!context.session?.user?.id) {
      throw new Error('User not authenticated')
    }
    const user = await prisma.userProfile.findFirst({
      where: { id },
      // include: {
      //   wallets: true, // Example: include necessary relations for the full user context
      // },
    })
    if (!user || user === null) {
      throw new Error('UserProfile not found for authenticated user.')
    }
    const _operator = await prisma.operator.findUnique({
      where: {
        id: user.operatorId as string, // as string,
      },
      include: {
        products: true,
      },
    })
    if (_operator == null) throw new Error('Operator not found')
    const products: DepositProduct[] = _operator.products.map((product): DepositProduct => {
      return {
        id: product.id,
        description: product.description,
        // Add all required fields from DepositProduct type
        name: product.title,
        price: product.priceInCents,
        bonusSpins: product.bonusSpins,
        amountToReceiveInCredits: product.amountToReceiveInCredits,
        currency: 'USD',
        isActive: product.isActive as boolean,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt as Date,
      }
    })

    const operator: OperatorData = {
      id: _operator.id,
      acceptedPayments: _operator.acceptedPayments,
      products,
    }
    // console.log(operator)

    const response: GetOperatorDataResponse = {
      code: 200,
      operator,
      message: 'Operator data with products',
    }
    return response
  }),
})