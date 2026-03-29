import type { ReactNode } from "react";
import Link from "next/link";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/80 p-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            My Brand Space
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/profile">Profile</Link>
            <Link href="/blog/test-post">Blog</Link>
            <Link href="/admin">Dashboard</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
      <footer className="border-t bg-white/80 p-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} My Brand Space. All rights reserved.
      </footer>
    </div>
  );
}
