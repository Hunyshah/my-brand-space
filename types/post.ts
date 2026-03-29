import { Tag } from "./tag";
import { User } from "./user";

export type PostStatus = "draft" | "published" | "archived";

export interface Post {
  id: string;

  // BASIC
  title: string;
  slug: string;

  excerpt?: string | null;
  content: string;

  // IMAGE (OPTIONAL)
  coverImage?: string | null;
  coverImageAlt?: string | null;

  // AUTHOR
  authorId: string;
  author?: User;

  // STATUS
  status: PostStatus;
  isFeatured: boolean;

  // SEO
  metaTitle?: string | null;
  metaDescription?: string | null;

  // ANALYTICS
  views: number;
  readingTime?: number | null;

  // PUBLISHING
  publishedAt?: Date | null;

  // RELATIONS
  tags?: Tag[];

  // TIMESTAMPS
  createdAt: Date;
  updatedAt: Date;
}
