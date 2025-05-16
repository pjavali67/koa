import { NextResponse } from "next/server"

export async function GET() {
  // Check if essential environment variables are set
  const envCheck = {
    DATABASE_URL: !!process.env.DATABASE_URL,
    NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || null,
  }

  return NextResponse.json({
    status: "Auth environment check",
    variables: envCheck,
    nodeEnv: process.env.NODE_ENV,
  })
}
