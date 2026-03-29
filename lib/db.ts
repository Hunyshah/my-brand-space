// src/lib/db.ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema"; // Saare schemas ka index file

const sql = neon(process.env.DATABASE_URL!);

// Agar aap sirf Raw SQL use karna chahte hain:
export { sql };

// Agar aap Drizzle ORM use karna chahte hain (Recommended):
export const db = drizzle(sql, { schema });
