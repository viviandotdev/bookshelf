// import { getToken } from "next-auth/jwt";
// import withAuth from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req });
//     const expired =
//       token &&
//       Date.now() >= (token && (token.expiresIn as unknown as any)) * 1000;
//     const isAuth = !!token && !expired;

//     const isAuthPage =
//       req.nextUrl.pathname.startsWith("/login") ||
//       req.nextUrl.pathname.startsWith("/register");

//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL("/", req.url));
//       }

//       return null; //allow rendering of the page
//     }

//     if (!isAuth) {
//       let from = req.nextUrl.pathname;
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search;
//       }

//       return NextResponse.redirect(
//         new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
//       );
//     }
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This ensures the middleware function is called where we can check
//         // if user is authenticated, and if yes redirect away from auth pages.
//         return true;
//       },
//     },
//   }
// );

// export const config = { matcher: ["/home/:path*", "/login", "/register"] };

import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req: any) => {
  const isLoggedIn = !!req.auth?.user;
  console.log("ROUTE", req.nextUrl.pathname);
  console.log("isLogged", isLoggedIn);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
