import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { neon } from "@neondatabase/serverless";

// Create a more resilient SQL client with proper error handling
const createDbClient = () => {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!connectionString) {
    console.error(
      "No database connection string found in environment variables"
    );
    // Return a dummy client that will gracefully fail
    return {
      async query() {
        throw new Error("Database connection not configured");
      },
    };
  }

  try {
    return neon(connectionString);
  } catch (error) {
    console.error("Failed to create database client:", error);
    throw error;
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const sql = createDbClient();

          // Use the SQL client safely
          const users = await sql`
            SELECT * FROM users WHERE email = ${credentials.email}
          `;

          const user = users[0];

          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) {
            return null;
          }

          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Error in authorize:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn && request.nextUrl.pathname === "/login") {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
});
