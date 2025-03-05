import pkg from "pg";
const { Pool } = pkg;
import { PostgresDialect } from "kysely";
import { defineConfig } from "kysely-ctl";

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),

  migrations: {
    migrationFolder: "migrations",
    allowJS: false,
    getMigrationPrefix: () => `${Date.now()}_`,
  },
  //   plugins: [],
  //   seeds: {
  //     seedFolder: "seeds",
  //   }
});
