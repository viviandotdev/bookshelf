import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import {
    LoginDocument,
    LoginMutation,
} from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';

interface CustomUser {
    id: string;
    email: string;
    username: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

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
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<CustomUser | null> {
                const { data: loginData, errors } = await getClient().mutate<LoginMutation>({
                    mutation: LoginDocument, variables: {
                        input: {
                            email: credentials?.email || "",
                            password: credentials?.password || '',
                        },
                    },
                });

                if (errors) {
                    throw new Error('Failed to login! try again');
                }

                if (!loginData?.login?.user?.id || !loginData?.login?.user?.email || !loginData?.login?.user?.username || !loginData?.login?.accessToken || !loginData?.login?.expiresIn || !loginData?.login?.refreshToken) {
                    throw new Error('Invalid loginData?.login returned from server');
                }

                return {
                    id: loginData?.login.user.id,
                    email: loginData?.login.user.email,
                    username: loginData?.login.user.username,
                    accessToken: loginData?.login.accessToken,
                    refreshToken: loginData?.login.refreshToken,
                    expiresIn: loginData?.login.expiresIn,
                };
            },
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl)
                ? Promise.resolve(url)
                : Promise.resolve(baseUrl);
        },
        async jwt({ token, user, account }) {
            // Initial signin contains a 'User' object from authorize method
            if (user && account) {
                console.debug("Initial signin");
                const customUser = user as CustomUser;
                token.username = customUser.username;
                token.email = customUser.email;
                token.id = customUser.id;
                token.accessToken = customUser.accessToken;
                token.refreshToken = customUser.refreshToken;
                token.expiresIn = customUser.expiresIn;
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
                username: token.username,
                email: token.email,
                id: token.id,
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
                expiresIn: token.expiresIn,
                error: token.error,
            };
            return session;
        },
    },
} satisfies NextAuthConfig;
