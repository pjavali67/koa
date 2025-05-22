// import type { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { neon } from "@neondatabase/serverless"
// import { compare } from "bcrypt"

// // Create a SQL client
// const sql = neon(process.env.DATABASE_URL || "")

// export const authOptions: NextAuthOptions = {
//   // Make sure we have a proper secret
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   // Configure the pages
//   pages: {
//     signIn: "/auth/login",
//     error: "/auth/error",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           if (!credentials?.email || !credentials?.password) {
//             return null
//           }

//           const members = await sql`
//             SELECT * FROM member WHERE email = ${credentials.email}
//           `;

//           const member = members[0];

//           if (!member || !member.password) {
//             return null;
//           }

//           const passwordMatch = await compare(
//             credentials.password,
//             member.password
//           );

//           if (!passwordMatch) {
//             return null
//           }

//           return {
//             id: String(member.id),
//             email: member.email,
//             name: member.name || null,
//             image: member.image || null,
//           };
//         } catch (error) {
//           console.error("Database error in authorize:", error)
//           return null
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, member }: { token: any; member?: { id: string; email: string; name?: string | null; image?: string | null } }) {
//       if (member) {
//         token.id = member.id
//         token.email = member.email
//         token.name = member.name
//         token.picture = member.image
//       }
//       return token
//     },
//     async session({ session, token }) {
//       if (token && session.member) {
//         session.member.id = token.id as string
//         session.member.email = token.email as string
//         session.member.name = (token.name as string) || null
//         session.member.image = (token.picture as string) || null
//       }
//       return session
//     },
//   },
//   debug: process.env.NODE_ENV === "development",
// }
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login", // You can customize this error page if needed
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) return null;

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) return null;

        const isValid = await compare(password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
  },
};
