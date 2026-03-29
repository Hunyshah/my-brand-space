import Link from "next/link";

export default function AdminPostsPage() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link href="/admin/posts/create" className="text-sm text-blue-600">
          Create new post
        </Link>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border bg-white p-4">
          Post item placeholder
        </div>
      </div>
    </section>
  );
}
