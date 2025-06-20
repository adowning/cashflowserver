import z from "zod/v4";
import prisma from "../../prisma";
import { publicProcedure } from "../lib/orpc";

export const todoRouter = {
  getAll: publicProcedure.handler(async () => {
    return await prisma.todo.findMany({
      orderBy: {
        id: "asc",
      },
    });
  }),

  create: publicProcedure
    .input(z.object({ text: z.string().min(1) }))
    .handler(async ({ input }) => {
      return await prisma.todo.create({
        data: {
          text: input.text,
        },
      });
    }),

  toggle: publicProcedure
    .input(z.object({ id: z.number(), completed: z.boolean() }))
    .handler(async ({ input }) => {
      await prisma.todo.update({
        where: { id: input.id },
        data: { completed: input.completed },
      });
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .handler(async ({ input }) => {
      await prisma.todo.delete({
        where: { id: input.id },
      });
      return { success: true };
    }),
};

