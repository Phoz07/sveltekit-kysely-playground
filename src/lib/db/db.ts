import { Kysely, PostgresDialect } from "kysely";
import pkg from "pg";
const { Pool } = pkg;
import type { DB } from "./schema";
import { DATABASE_URL } from "$env/static/private";

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: DATABASE_URL,
    }),
  }),
});
