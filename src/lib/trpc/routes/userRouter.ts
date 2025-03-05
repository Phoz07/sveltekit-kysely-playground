import { publicProcedure } from "$lib/trpc/trpc";
import { router } from "$lib/trpc/trpc";

export const userRouter = router({
  test: publicProcedure.query(async () => {
    return {
      message: "Hello, world!",
    };
  }),
  test2: publicProcedure.query(async () => {
    return {
      message: "Hello, world! 2",
    };
  }),
});
