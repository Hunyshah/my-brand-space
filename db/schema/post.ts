import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { users } from "./user";

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),

  // BASIC
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),

  excerpt: text("excerpt"),
  content: text("content").notNull(),

  // IMAGE
  coverImage: text("cover_image"),
  coverImageAlt: varchar("cover_image_alt", { length: 255 }),

  // AUTHOR
  authorId: text("author_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  // STATUS
  status: varchar("status", { length: 20 })
    .$type<"draft" | "published" | "archived">()
    .notNull()
    .default("draft"),

  isFeatured: boolean("is_featured").default(false).notNull(),

  // SEO
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),

  // ANALYTICS
  views: integer("views").default(0).notNull(),
  readingTime: integer("reading_time"),

  // PUBLISHING
  publishedAt: timestamp("published_at"),

  // TIMESTAMPS
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
