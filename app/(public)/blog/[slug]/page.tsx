interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  return (
    <article>
      <h1 className="text-3xl font-bold">Blog post: {params.slug}</h1>
      <p className="mt-4 text-slate-600">
        This is the public blog content for the selected slug.
      </p>
    </article>
  );
}
