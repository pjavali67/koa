import { NextResponse } from "next/server";
// import { createDbClient } from "../../../lib/db";
import { neon } from "@neondatabase/serverless";
export async function GET() {
  try {
    // Check if we have a database connection string
    const connectionString =
      process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (!connectionString) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "No database connection string found in environment variables",
          envVars: {
            DATABASE_URL: !!process.env.DATABASE_URL,
            POSTGRES_URL: !!process.env.POSTGRES_URL,
          },
        },
        { status: 500 }
      );
    }

    // Try to create a client and run a simple query
    const sql = createDbClient();
    const result = await sql`SELECT 1 as test`;

    return NextResponse.json({
      status: "success",
      message: "Database connection successful",
      result: result,
    });
  } catch (error) {
    console.error("Database check error:", error);

    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Unknown database error",
        envVars: {
          DATABASE_URL: !!process.env.DATABASE_URL,
          POSTGRES_URL: !!process.env.POSTGRES_URL,
        },
      },
      { status: 500 }
    );
  }
}
export const createDbClient = () => {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!connectionString) {
    console.error(
      "No database connection string found in environment variables"
    );
    throw new Error("Database connection not configured");
  }

  try {
    return neon(connectionString);
  } catch (error) {
    console.error("Failed to create database client:", error);
    throw error;
  }
};
