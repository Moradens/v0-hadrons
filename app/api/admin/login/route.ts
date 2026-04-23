import { NextResponse } from "next/server"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hadrons2024"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    console.log("LOGIN API: přišel požadavek")
    console.log("LOGIN API: heslo přišlo?", !!password)
    console.log("LOGIN API: shoda hesla?", password === ADMIN_PASSWORD)

    if (!password || password !== ADMIN_PASSWORD) {
      console.log("LOGIN API: špatné heslo")
      return NextResponse.json(
        { success: false, error: "Nesprávné heslo" },
        { status: 401 }
      )
    }

    const response = NextResponse.json({ success: true })

    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })

    console.log("LOGIN API: cookie nastavena")
    return response
  } catch (error) {
    console.error("LOGIN API ERROR:", error)

    return NextResponse.json(
      { success: false, error: "Chyba serveru" },
      { status: 500 }
    )
  }
}