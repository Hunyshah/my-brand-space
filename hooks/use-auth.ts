"use client";

import { authClient } from "@/lib/auth-client";

export function useAuth() {
  // Better Auth ka modern hook 'useSession' jo client instance se aata hai
  const { data: session, isPending, error } = authClient.useSession();

  return {
    user: session?.user ?? null,
    session: session ?? null,
    loading: isPending,
    error: error,
    // Helper function taake bar bar check na karna paray
    isAuthenticated: !!session,
  };
}
