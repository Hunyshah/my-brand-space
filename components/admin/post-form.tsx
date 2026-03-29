export function PostForm() {
  return (
    <form className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input className="mt-2 w-full rounded-lg border p-3" />
      </div>
      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea className="mt-2 w-full rounded-lg border p-3" rows={6} />
      </div>
      <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">
        Save post
      </button>
    </form>
  );
}
