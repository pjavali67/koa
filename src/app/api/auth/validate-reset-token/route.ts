import { NextResponse } from "next/server"
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get("token")

  if (!token) {
    return NextResponse.json({ valid: false })
  }

  try {
    const sql = createDbClient()

    const tokens = await sql`
      SELECT * FROM password_reset_tokens 
      WHERE token = ${token} AND expires > NOW()
    `

    return NextResponse.json({ valid: tokens.length > 0 })
  } catch (error) {
    console.error("Error validating reset token:", error)
    return NextResponse.json({ valid: false })
  }
}
