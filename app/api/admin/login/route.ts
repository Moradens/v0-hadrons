import { NextResponse } from "next/server"

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

    // Create response and set cookie on it directly
    const response = NextResponse.json({ success: true })
    
    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Chyba serveru" },
      { status: 500 }
    )
  }
}
