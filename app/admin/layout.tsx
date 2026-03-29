import type { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r bg-white p-6">
          <div className="mb-8 text-xl font-semibold">Admin</div>
          <nav className="space-y-3 text-sm text-slate-700">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/posts">Posts</Link>
            <Link href="/admin/projects">Projects</Link>
            <Link href="/admin/settings">Settings</Link>
          </nav>
        </aside>
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}
