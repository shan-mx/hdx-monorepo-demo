import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return [
      {
        id: 1,
        title: "Hello World",
        content: "Welcome to the world of tRPC and Next.js!",
      },
    ];
  }),
} satisfies TRPCRouterRecord;
