import { initTRPC } from "@trpc/server";
import type { Context } from "$lib/trpc/context";
import { db } from "$lib/db/db";

export const t = initTRPC.context<Context>().create();

export const router = t.router({
  getUser: t.procedure.query(async () => {
    return await db.selectFrom("user").selectAll().execute();
  }),
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
