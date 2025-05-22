
import { neon } from "@neondatabase/serverless";

// Create a more resilient SQL client with proper error handling
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

// // Export a singleton instance for common use
// export const sql = createDbClient();
// import { PrismaClient } from "@prisma/client";

// Singleton pattern for Prisma client
// export const prismaClientSingleton = () => {
//   if (!process.env.DATABASE_URL && !process.env.POSTGRES_URL) {
//     console.error(
//       "No database connection string found in environment variables"
//     );
//     throw new Error("Database connection not configured");
//   }

//   return new PrismaClient({
//     datasources: {
//       db: {
//         url: process.env.DATABASE_URL || process.env.POSTGRES_URL,
//       },
//     },
//   });
// };

// declare global {
//   const prisma: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// // Export a singleton instance of Prisma Client
// export const prisma = globalThis.prisma ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = prisma;
// }

// // Optional: Export individual Prisma components if needed
// export { Prisma } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// // Use existing client in development to prevent too many open connections
// export const db = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db;
// }



// 1. Define the prisma client singleton function
// export const prismaClientSingleton = () => {
//   if (!process.env.DATABASE_URL && !process.env.POSTGRES_URL) {
//     throw new Error("Database connection not configured");
//   }

//   return new PrismaClient({
//     datasources: {
//       db: {
//         url: process.env.DATABASE_URL || process.env.POSTGRES_URL,
//       },
//     },
//   });
// };

// // 2. Type declaration for global prisma
// declare global {
//   // eslint-disable-next-line no-var
//   var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// // 3. Initialize and export prisma
// export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// // 4. Store in globalThis in development only
// if (process.env.NODE_ENV !== "production") {
//   globalThis.prismaGlobal = prisma;
// }