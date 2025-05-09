import NextAuth from 'next-auth';
import authConfig from '../auth.config';
import {
    apiAuthPrefix,
    publicRoutes,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
} from '../routes';
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);



export default auth(async (req): Promise<any> => {
    // Handle backend api token expires, this token expires before the frontend token
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    const expired = token && Date.now() >= (token.expiresIn as number) * 1000
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth && !expired;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    console.log(expired)

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        // Clear the session cookies
        const response = NextResponse.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
        response.cookies.set("next-auth.session-token", "", { maxAge: 0 });
        response.cookies.set("next-auth.csrf-token", "", { maxAge: 0 });

        return response
    }

    return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)',]
};
