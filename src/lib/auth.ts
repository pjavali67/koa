import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { neon } from "@neondatabase/serverless"
import { compare } from "bcrypt"

// Create a SQL client
const sql = neon(process.env.DATABASE_URL || "")

export const authOptions: NextAuthOptions = {
  // Make sure we have a proper secret
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  // Configure the pages
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const users = await sql`
            SELECT * FROM users WHERE email = ${credentials.email}
          `

          const user = users[0]

          if (!user || !user.password) {
            return null
          }

          const passwordMatch = await compare(credentials.password, user.password)
    
          if (!passwordMatch) {
            return null
          }

          return {
            id: String(user.id),
            email: user.email,
            name: user.name || null,
            image: user.image || null,
          }
        } catch (error) {
          console.error("Database error in authorize:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.picture = user.image
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = (token.name as string) || null
        session.user.image = (token.picture as string) || null
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}
