import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <Link href="/" className="font-semibold">
        My Brand Space
      </Link>
      <div className="flex gap-4 text-sm text-slate-600">
        <Link href="/profile">Profile</Link>
        <Link href="/blog/test-post">Blog</Link>
      </div>
    </nav>
  );
}
