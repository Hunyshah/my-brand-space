import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // TODO: implement auth check
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
