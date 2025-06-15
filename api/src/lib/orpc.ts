// File: ai/src/lib/orpc.ts
import { ORPCError, os } from "@orpc/server";
import type { Context } from "./context";

// Create the oRPC instance
export const o = os.$context<Context>();

// The context-aware instance 'o' is the base for procedures
export const publicProcedure = o;

// Define auth middleware
const requireAuth = o.middleware(async ({ context, next }) => {
  if (!context.session?.user) {
    throw new ORPCError("UNAUTHORIZED");
  }
  return next({
    context: { session: context.session },
  });
});

// Export a reusable protected procedure
export const protectedProcedure = publicProcedure.use(requireAuth);

// IMPORTANT: Do NOT export `o.router` directly.
// The `o` instance itself will be used to access the router method.
// // File: ai/src/lib/orpc.ts
// import { ORPCError, os } from "@orpc/server";
// import type { Context } from "./context";

// // Create an oRPC instance with your context
// export const o = os.$context<Context>();

// // Export the router factory from your instance
// export const router = o.router;

// // Correct: The context-aware instance 'o' itself serves as the base for creating procedures.
// export const publicProcedure = o;

// // Define and export auth middleware
// const requireAuth = o.middleware(async ({ context, next }) => {
//   if (!context.session?.user) {
//     throw new ORPCError("UNAUTHORIZED");
//   }
//   return next({
//     // Pass context to the next middleware or procedure
//     context: {
//       session: context.session,
//     },
//   });
// });

// // Export a reusable protected procedure, built from the public procedure
// export const protectedProcedure = publicProcedure.use(requireAuth);
// // import { ORPCError, os } from "@orpc/server";
// // import type { Context } from "./context";

// // export const o = os.$context<Context>();

// // export const publicProcedure = o;

// // const requireAuth = o.middleware(async ({ context, next }) => {
// //   if (!context.session?.user) {
// //     throw new ORPCError("UNAUTHORIZED");
// //   }
// //   return next({
// //     context: {
// //       session: context.session,
// //     },
// //   });
// // });

// // export const protectedProcedure = publicProcedure.use(requireAuth);
