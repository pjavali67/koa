import { handlers } from "@/auth"






// This file is needed for NextAuth.js to work properly
// You'll need to implement this in your actual project

// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// // Configure one or more authentication providers
// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // Add your own logic here to validate credentials
//         // For example, check against a database

//         // For demo purposes, we'll just check for a hardcoded user
//         if (credentials?.username === "user" && credentials?.password === "password") {
//           return {
//             id: "1",
//             name: "Demo User",
//             email: "user@example.com",
//           }
//         }

//         // Return null if user data could not be retrieved
//         return null
//       },
//     }),
//   ],
//   // Add your own custom pages for sign in, sign out, etc.
//   pages: {
//     signIn: "/login",
//   },
//   // Configure session handling
//   session: {
//     strategy: "jwt",
//   },
//   // Add your own callbacks for events like sign in, JWT creation, etc.
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id
//       }
//       return session
//     },
//   },
// })

// export { handler as GET, handler as POST }











// export const GET = handlers.GET
// export const POST = handlers.POST

// import { handlers } from "@/auth";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Replace this with actual DB call
//         if (
//           credentials?.email === "email" &&
//           credentials?.password === "password"
//         ) {
//           return {
//             id: "1",
//             name: "user",
//             email: "",
//           };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//   },
// });



// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { prisma } from "../../../../lib/prisma";
// import { compare } from "bcryptjs";
// import type { NextAuthOptions } from "next-auth/react"; //  fixed import

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         const member = await prisma.member.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!member || !member.password) return null;

//         const isValid = await compare(credentials.password, member.password);
//         if (!isValid) return null;

//         return {
//           id: member.id,
//           name: member.name,
//           email: member.email,
//         };
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
  
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default NextAuth(authOptions);



// export { handler as GET, handler as POST };
export const GET = handlers.GET
export const POST = handlers.POST