import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="grid min-h-screen place-items-center px-4 py-10">
        {children}
      </main>
    </div>
  );
}
