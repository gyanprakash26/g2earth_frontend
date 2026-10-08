import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware for route protection.
 *
 * Protected routes:
 *   /account/* — requires customer auth cookie
 *   /checkout   — requires customer auth cookie
 *   /admin/*    — requires admin auth cookie (separate from customer)
 *
 * The actual token validation happens on the backend.
 * Middleware only checks for cookie presence as a UX guard.
 * Backend API calls will return 401 if the token is invalid/expired.
 *
 * TODO: When backend is live, validate session via a lightweight
 *       GET /api/v1/auth/me call or use a signed JWT edge-verifiable token.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin route protection
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const adminToken = request.cookies.get("g2earth_admin_session");
    if (!adminToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Customer route protection
  const customerProtected = ["/account", "/checkout"];
  const isCustomerProtected = customerProtected.some((p) => pathname.startsWith(p));
  if (isCustomerProtected) {
    const customerToken = request.cookies.get("g2earth_session");
    if (!customerToken) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/account/:path*", "/checkout"],
};
