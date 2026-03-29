import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

export function BlogCard({ title, excerpt, slug }: BlogCardProps) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-slate-600">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="mt-4 inline-block text-blue-600">
        Read more
      </Link>
    </article>
  );
}
