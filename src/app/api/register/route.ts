import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { neon } from "@neondatabase/serverless"
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
    const { name, email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Create SQL client
    const sql = createDbClient()

    // Check if user already exists
    // const existingUsers = await sql`
    //   SELECT * FROM users WHERE email = ${email}
    // `
      const existingUsers = await sql`
      SELECT * FROM member WHERE email = ${email}
    `;



    if (existingUsers.length > 0) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    await sql`
      INSERT INTO Member (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 })
  }
}
