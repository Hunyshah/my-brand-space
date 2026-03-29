import { BlogCard } from "@/components/blog/blog-card";

const posts = [
  { title: "First post", excerpt: "A short introduction.", slug: "first-post" },
  { title: "Second post", excerpt: "Another story.", slug: "second-post" },
];

export function BlogList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
