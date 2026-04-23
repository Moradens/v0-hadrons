import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect admin routes (except login page)
  if (pathname.startsWith("/admin") && pathname !== "/admin") {
    const adminSession = request.cookies.get("admin_session")
    
    console.log("[v0] Middleware check - pathname:", pathname)
    console.log("[v0] Middleware check - admin_session cookie:", adminSession?.value)
    console.log("[v0] Middleware check - all cookies:", request.cookies.getAll())

    if (!adminSession || adminSession.value !== "authenticated") {
      console.log("[v0] Middleware: No valid session, redirecting to /admin")
      return NextResponse.redirect(new URL("/admin", request.url))
    }
    
    console.log("[v0] Middleware: Valid session, allowing access")
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
