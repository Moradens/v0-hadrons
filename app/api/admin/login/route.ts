import { NextResponse } from "next/server"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hadrons2024"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    console.log("[v0] Login attempt with password:", password ? "****" : "empty")
    console.log("[v0] Expected password:", ADMIN_PASSWORD ? "****" : "empty")
    console.log("[v0] Password match:", password === ADMIN_PASSWORD)

    if (!password || password !== ADMIN_PASSWORD) {
      console.log("[v0] Login failed - incorrect password")
      return NextResponse.json(
        { success: false, error: "Nesprávné heslo" },
        { status: 401 }
      )
    }

    console.log("[v0] Password correct, setting cookie")

    const response = NextResponse.json({ success: true })

    response.cookies.set({
      name: "admin_session",
      value: "authenticated",
      httpOnly: false, // Set to false for development
      secure: false, // Allow HTTP in development
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })

    console.log("[v0] Cookie set, sending response")

    return response
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json(
      { success: false, error: "Chyba serveru" },
      { status: 500 }
    )
  }
}
