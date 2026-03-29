import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),

  image: text("image"),

  liveUrl: text("live_url"),
  githubUrl: text("github_url"),

  techStack: text("tech_stack"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
