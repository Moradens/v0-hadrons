import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hadrons2024"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Nesprávné heslo" },
        { status: 401 }
      )
    }

    // Use cookies() from next/headers for reliable cookie setting
    const cookieStore = await cookies()
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { success: false, error: "Chyba serveru" },
      { status: 500 }
    )
  }
}
