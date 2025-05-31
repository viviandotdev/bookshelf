import { DefaultSession, DefaultUser, CredentialsSignin } from "next-auth";
declare module "next-auth" {
    interface User {
        username?: string;
        id?: string;
        email?: string;
        avatarImage?: string;
        accessToken?: string;
        refreshToken?: string;
        expiresIn?: number;
        error?: string;
    }
    interface Session {
        user: User & DefaultSession["user"]
        error: unknown;
    }
}
