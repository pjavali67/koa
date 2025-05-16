// // lib/auth-utils.ts
// import { getServerSession } from "next-auth";
// import { authOptions } from "../app/api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";

// export async function protectPage() {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect(
//       `/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`
//     );
//   }
//   return session;
// }
// lib/auth-utils.ts
import  getServerSession  from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function protectPage(requestUrl?: string) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    const callbackUrl = requestUrl ? encodeURIComponent(requestUrl) : '';
    redirect(`/login${callbackUrl ? `?callbackUrl=${callbackUrl}` : ''}`);
  }
  
  return session;
}