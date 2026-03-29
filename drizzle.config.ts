import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // 1. Apne schema folder ka sahi path dein
  schema: "./db/schema/*",

  // 2. Migrations kahan save honi chahiye
  out: "./drizzle",

  // 3. Database type
  dialect: "postgresql",

  // 4. Neon DB ka URL
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
