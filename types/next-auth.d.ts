// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string
//       name: string
//       email: string
//       image: string
//     }
//   }
// }
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    };
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    picture?: string;
  }
}
