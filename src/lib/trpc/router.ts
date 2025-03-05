import { t } from "$lib/trpc/trpc";
import { router } from "$lib/trpc/trpc";
// routers
import { userRouter } from "$lib/trpc/routes/userRouter";

export const mainRouter = router({
  user: userRouter,
});

export const createCaller = t.createCallerFactory(mainRouter);

export type Router = typeof mainRouter;
