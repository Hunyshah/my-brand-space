interface BlogContentProps {
  title: string;
  content: string;
}

export function BlogContent({ title, content }: BlogContentProps) {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="prose max-w-none text-slate-700">{content}</div>
    </article>
  );
}
