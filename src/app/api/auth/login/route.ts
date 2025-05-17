import { NextResponse } from "next/server"
import { compare } from "bcrypt"
import { neon } from "@neondatabase/serverless"
import { cookies } from "next/headers"
import { SignJWT } from "jose"
import { nanoid } from "nanoid"

// Create a more resilient SQL client with proper error handling
const createDbClient = () => {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL

  if (!connectionString) {
    console.error("No database connection string found in environment variables")
    throw new Error("Database connection not configured")
  }

  try {
    return neon(connectionString)
  } catch (error) {
    console.error("Failed to create database client:", error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Create SQL client
    const sql = createDbClient()

    // Find user
    const users = await sql`
      SELECT * FROM members WHERE email = ${email}
    `

    const user = users[0]

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create session
    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      name: user.name,
      role: "member",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(
        new TextEncoder().encode(
          process.env.NEXTAUTH_SECRET || "fallback-secret"
        )
      );

    // Set cookie
    (await cookies()).set({
      name: "session-token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
