"use server";

import { db } from "@/lib/db";
import { posts } from "@/db/schema/post";
import { eq, desc, and } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

/**
 * UTILITY: Clean Slug Generation
 * Symbols remove karta hai aur spaces ko hyphens se replace karta hai
 */
const generateSlug = (title: string) => {
  return (
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove non-word chars (symbols)
      .replace(/[\s_-]+/g, "-") // Replace spaces/underscores with -
      .replace(/^-+|-+$/g, "") +
    "-" +
    Date.now()
  );
};

// --- CREATE POST ---
export async function createPost(data: {
  title: string;
  content: string;
  coverImage?: string;
}) {
  try {
    // 1. Get Session from Better Auth
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return {
        success: false,
        error: "Unauthorized: Please login to create a post.",
      };
    }

    // 2. Insert with Real User ID
    const [newPost] = await db
      .insert(posts)
      .values({
        title: data.title,
        slug: generateSlug(data.title),
        content: data.content,
        coverImage: data.coverImage || "",
        status: "published",
        isFeatured: false,
        authorId: session.user.id,
      })
      .returning();

    return { success: true, data: newPost };
  } catch (error) {
    console.error("CREATE_POST_ERROR:", error);
    return {
      success: false,
      error: "Failed to create post. Please try again.",
    };
  }
}

// --- GET ALL PUBLISHED POSTS ---
export async function getAllPosts() {
  try {
    const data = await db
      .select()
      .from(posts)
      .where(eq(posts.status, "published"))
      .orderBy(desc(posts.createdAt));

    return { success: true, data };
  } catch (error) {
    console.error("GET_ALL_POSTS_ERROR:", error);
    return { success: false, data: [], error: "Could not fetch posts." };
  }
}

// --- GET SINGLE POST BY SLUG ---
export async function getPostBySlug(slug: string) {
  try {
    const data = await db
      .select()
      .from(posts)
      .where(
        and(
          eq(posts.slug, slug),
          eq(posts.status, "published"), // Only show if published
        ),
      )
      .limit(1);

    if (!data.length) {
      return { success: false, error: "Post not found." };
    }

    return { success: true, data: data[0] };
  } catch (error) {
    console.error("GET_POST_BY_SLUG_ERROR:", error);
    return {
      success: false,
      error: "An error occurred while fetching the post.",
    };
  }
}
