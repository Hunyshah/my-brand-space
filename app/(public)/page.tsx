import Link from "next/link";
import { getAllPosts } from "@/actions/post.actions";

export default async function HomePage() {
  // 1. Fetch data safely
  const response = await getAllPosts();

  // 2. Error handling: Agar success false ho ya data hi na ho
  if (!response.success) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Oops! Something went wrong.
        </h2>
        <p className="text-muted-foreground">
          Hum posts load nahi kar sakay. Please thori dair baad try karein.
        </p>
      </div>
    );
  }

  const posts = response.data;

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Latest Stories
        </h1>
      </div>

      {/* 3. Empty State: Agar database mein koi post hi na ho */}
      {posts.length === 0 ? (
        <div className="border-2 border-dashed rounded-lg p-20 text-center">
          <p className="text-lg text-muted-foreground">
            Abhi tak koi post publish nahi hui.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col space-y-2 border p-5 rounded-xl hover:shadow-lg transition-shadow bg-card"
            >
              {/* Post Title */}
              <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              {/* Optional: Excerpt ya Content ka chota hissa */}
              <p className="text-muted-foreground line-clamp-3 flex-1">
                {post.excerpt ||
                  "Click read more to see the full content of this post..."}
              </p>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline pt-4"
              >
                Read Full Article
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
