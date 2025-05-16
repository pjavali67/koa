import { neon } from "@neondatabase/serverless"

// Create a more resilient SQL client with proper error handling
export const createDbClient = () => {
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

// Export a singleton instance for common use
export const sql = createDbClient()
