import Credentials from 'next-auth/providers/credentials';
import { CredentialsSignin, type NextAuthConfig } from 'next-auth';
import {
    LoginDocument,
    LoginMutation,
} from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import type { User } from "next-auth"

const REFRESH_AUTHENTICATION_MUTATION = `
    mutation RefreshAuth {
        refreshAuth {
            accessToken
            refreshToken
            expiresIn
    }
 }
`

async function refreshAccessToken(token: any): Promise<any> {
    try {
        const response = await fetch('http://localhost:4000/graphql', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.refreshToken}`
            },
            body: JSON.stringify({
                operationName: "RefreshAuth",
                query: REFRESH_AUTHENTICATION_MUTATION,
            })
        });

        const { data } = await response.json();
        const refreshResult = data?.refreshAuth;

        if (!refreshResult) {
            return {
                ...token,
                error: 'RefreshTokenError',
            };
        }

        const { accessToken: newAccessToken, refreshToken: newRefreshToken, expiresIn } = refreshResult;

        return {
            ...token,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            expiresIn: expiresIn
        };
    } catch (error) {
        console.error('Error refreshing token:', error);
        return {
            ...token,
            error: 'RefreshTokenError',
        };
    }
}

export default {
    providers: [
        Credentials({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<User | null> {
                try {
                    const { data: loginData, errors } = await getClient().mutate<LoginMutation>({
                        mutation: LoginDocument, variables: {
                            input: {
                                email: credentials?.email as string,
                                password: credentials?.password as string,
                            },
                        },
                    });

                    if (errors) {
                        throw new CredentialsSignin()
                    }

                    if (!loginData?.login?.user?.id || !loginData?.login?.user?.email || !loginData?.login?.accessToken || !loginData?.login?.expiresIn || !loginData?.login?.refreshToken) {
                        throw new CredentialsSignin()
                    }

                    return {
                        id: loginData?.login.user.id,
                        email: loginData?.login.user.email,
                        avatarImage: loginData?.login.user.avatarImage || '',
                        name: loginData?.login.user.name,
                        username: loginData?.login.user.username || '',
                        accessToken: loginData?.login.accessToken,
                        refreshToken: loginData?.login.refreshToken,
                        expiresIn: loginData?.login.expiresIn,
                    };
                } catch (error) {
                    throw new CredentialsSignin()
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, session, trigger }) {
            // Initial signin contains a 'User' object from authorize method
            if (trigger === "update") {
                token.username = session?.user?.username;
                token.name = session?.user?.name;
                token.email = session?.user?.email;
                token.avatarImage = session?.user?.avatarImage;
                return token
            }
            if (user && account) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.username = user.username;
                token.avatarImage = user.avatarImage;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresIn = user.expiresIn;
                return token
            }
            const bufferInMinutes = 2;
            const isExpiringSoon =
                token &&
                Date.now() >= (token.expiresIn as number) * 1000 - bufferInMinutes * 60 * 1000;

            if (!isExpiringSoon) {
                // Subsequent logins, but the `access_token` is still valid
                return token;
            } else {
                return await refreshAccessToken(token);
            }



        },
        async session({ session, token }) {
            session.error = token.error;
            session.user = {
                ...session.user,
                id: token.id as string,
                email: token.email as string,
                name: token.name as string,
                username: token.username as string,
                avatarImage: token.avatarImage as string,
                accessToken: token.accessToken as string,
                refreshToken: token.refreshToken as string,
                expiresIn: token.expiresIn as number,
            };
            return session;
        },
    },
} satisfies NextAuthConfig;
