import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { getApolloClient, httpLink, setAuthToken } from '@/lib/apollo';
import {
    LoginDocument,
    LoginMutation,
    RefreshAuthDocument,
    RefreshAuthMutation,
} from '@/graphql/graphql';

const client = getApolloClient();

interface CustomUser {
    id: string;
    email: string;
    username: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

async function refreshAccessToken(token: any): Promise<any> {
    try {
        const { data } = await client.mutate<RefreshAuthMutation>({
            mutation: RefreshAuthDocument,
            variables: {
                refreshToken: token.refreshToken,
            },
        });

        if (!data?.refreshAuth?.accessToken || !data?.refreshAuth?.refreshToken) {
            throw new Error('Failed to refresh token');
        }

        return {
            ...token,
            accessToken: data.refreshAuth.accessToken,
            refreshToken: data.refreshAuth.refreshToken,
            expiresIn: data.refreshAuth.expiresIn,
            error: undefined,
        };
    } catch (error) {
        console.error('Error refreshing token:', error);
        return {
            ...token,
            error: 'RefreshTokenExpiredError',
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
                const { data: loginData, errors } =
                    await client.mutate<LoginMutation>({
                        mutation: LoginDocument,
                        variables: {
                            input: {
                                email: credentials?.email || "",
                                password: credentials?.password || '',
                            },
                        },
                        errorPolicy: 'all',
                    });

                if (errors) {
                    console.log(errors)
                    return null
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

            // Check if token has expired
            const expired = token && Date.now() >= (token.expiresIn as number) * 1000
            console.log('jwt' + expired + token.expiresIn)
            if (expired) {
                await client.resetStore();
                token.error = 'AccessTokenExpiredError';
                return await refreshAccessToken(token);
            }
            // The current access token is still valid
            return token;
        },
        async session({ session, token }) {
            session.error = token.error;
            session.user = {
                ...session.user,
                username: token.username,
                email: token.email,
                id: token.id,
                accessToken: token.accessToken,
                expiresIn: token.expiresIn,
                error: token.error,
            };
            return session;
        },
    },
} satisfies NextAuthConfig;
