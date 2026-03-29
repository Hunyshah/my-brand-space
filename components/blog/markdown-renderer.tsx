interface MarkdownRendererProps {
  markdown: string;
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return <div className="prose max-w-none text-slate-700">{markdown}</div>;
}
