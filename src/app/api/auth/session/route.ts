import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session-token")?.value

  if (!token) {
    return NextResponse.json({
      authenticated: false,
      user: null,
    })
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret"))

    return NextResponse.json({
      authenticated: true,
      user: verified.payload,
    })
  } catch (error) {
    console.error("Session verification error:", error)
    return NextResponse.json({
      authenticated: false,
      user: null,
    })
  }
}
