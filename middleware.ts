// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import { jwtVerify } from "jose"

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get("session-token")?.value
//   const protectedRoutes = [
//     "/dashboard",
//     "/profile",
//     "/bylaws-bluebook",
//     "/fellowship",
//   ];
//   // Verify authentication for protected routes
//   // if (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/profile")) 
//   if (
//     protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
//   )
//   {
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.url))
//     }

//     try {
//       await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret"))
//     } catch {
//       // Invalid token
//       return NextResponse.redirect(new URL("/login", request.url))
//     }
//   }

//   // Redirect authenticated users away from auth pages
//   if (
//     token &&
//     (request.nextUrl.pathname === "/login" ||
//       request.nextUrl.pathname === "/register" ||
//       request.nextUrl.pathname === "/forgot-password" ||
//       request.nextUrl.pathname.startsWith("/reset-password"))
//   ) {
//     try {
//       await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret"))
//       return NextResponse.redirect(new URL("/", request.url))
//     } catch {
//       // Invalid token, allow access to auth pages
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/reset-password/:path*",
//     "/profile/:path*",
//     "/bylaws-bluebook/:path*",
//   ],
// };












//uuu
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtVerify } from "jose";

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get("session-token")?.value;

//   // Define all protected routes
//   const protectedRoutes = [
//     "/dashboard",
//     "/profile",
//     "/bylaws-bluebook",
//     "/fellowship",
//   ];

//   // Verify authentication for protected routes
//   if (
//     protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
//   ) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }

//     try {
//       await jwtVerify(
//         token,
//         new TextEncoder().encode(
//           process.env.NEXTAUTH_SECRET || "fallback-secret"
//         )
//       );
//     } catch {
//       // Invalid token
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // Define auth pages
//   const authPages = [
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/reset-password",
//   ];

//   // Redirect authenticated users away from auth pages
//   if (
//     token &&
//     authPages.some(
//       (page) =>
//         request.nextUrl.pathname === page ||
//         request.nextUrl.pathname.startsWith("/reset-password")
//     )
//   ) {
//     try {
//       await jwtVerify(
//         token,
//         new TextEncoder().encode(
//           process.env.NEXTAUTH_SECRET || "fallback-secret"
//         )
//       );
//       return NextResponse.redirect(new URL("/", request.url));
//     } catch {
//       // Invalid token, allow access to auth pages
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/bylaws-bluebook/:path*",
//     "/fellowship/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/reset-password/:path*",
//   ],
// };

// middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtVerify } from "jose";

// // Define the protected and auth routes
// const protectedRoutes = [
//   "/dashboard",
//   "/profile",
//   "/bylaws-bluebook",
//   "/fellowship",
// ];

// const authPages = [
//   "/login",
//   "/register",
//   "/forgot-password",
//   "/reset-password",
// ];

// const SECRET = process.env.NEXTAUTH_SECRET || "fallback-secret";

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get("session-token")?.value;
//   const pathname = request.nextUrl.pathname;

//   const isProtectedRoute = protectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   const isAuthPage = authPages.some((authPath) =>
//     pathname.startsWith(authPath)
//   );

//   // 🔐 Redirect unauthenticated users from protected routes
//   if (isProtectedRoute) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }

//     try {
//       await jwtVerify(token, new TextEncoder().encode(SECRET));
//     } catch {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // 🔁 Redirect authenticated users away from auth pages
//   if (isAuthPage && token) {
//     try {
//       await jwtVerify(token, new TextEncoder().encode(SECRET));
//       return NextResponse.redirect(new URL("/", request.url));
//     } catch {
//       // Allow access if token is invalid
//     }
//   }

//   return NextResponse.next();
// }
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/bylaws-bluebook/:path*",
//     "/fellowship/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/reset-password/:path*",
//   ],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session-token")?.value;
  const { pathname } = request.nextUrl;

  // Define all protected routes
  const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/bylaws-bluebook",
    "/fellowship",
  ];

  // Define auth pages
  const authPages = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  // 1. Protection for protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      // Add callback URL for proper redirection after login
      const callbackUrl = encodeURIComponent(pathname);
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${callbackUrl}`, request.url)
      );
    }

    try {
      await jwtVerify(
        token,
        new TextEncoder().encode(
          process.env.NEXTAUTH_SECRET || "fallback-secret"
        )
      );
    } catch (error) {
      console.error("Token verification failed:", error);
      // Clear invalid token
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("session-token");
      return response;
    }
  }

  // 2. Redirect authenticated users from auth pages
  if (
    token &&
    authPages.some(
      (page) => pathname === page || pathname.startsWith("/reset-password")
    )
  ) {
    try {
      await jwtVerify(
        token,
        new TextEncoder().encode(
          process.env.NEXTAUTH_SECRET || "fallback-secret"
        )
      );
      // Redirect to dashboard or home instead of "/"
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } catch {
      // Invalid token - clear it and allow access to auth pages
      const response = NextResponse.next();
      response.cookies.delete("session-token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/bylaws-bluebook/:path*",
    "/fellowship/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password/:path*",
  ],
};