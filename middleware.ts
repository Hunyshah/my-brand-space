// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Better Auth ki default session cookie ka naam
  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__secure-better-auth.session_token");

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  // Agar admin area hai aur banda logged in nahi hai
  if (isAdminRoute && !sessionCookie) {
    // Usay login page par bhej dein
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Ye zaroori hai taake middleware har request (images, fonts) par na chale
export const config = {
  matcher: ["/admin/:path*"],
};
