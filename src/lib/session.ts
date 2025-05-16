import { cookies } from "next/headers"
import { jwtVerify } from "jose"
import { redirect } from "next/navigation"

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session-token")?.value

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret"))

    return verified.payload
  } catch (error) {
    console.error("Session verification error:", error)
    return null
  }
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return session
}
