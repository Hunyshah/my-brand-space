import Link from "next/link";

export function AdminSidebar() {
  return (
    <aside className="space-y-3 text-sm text-slate-700">
      <Link href="/admin">Overview</Link>
      <Link href="/admin/posts">Posts</Link>
      <Link href="/admin/projects">Projects</Link>
      <Link href="/admin/settings">Settings</Link>
    </aside>
  );
}
