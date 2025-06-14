'use client';

import { createHttpLink, from } from '@apollo/client';
import { ReactNode, useCallback } from 'react';
import { setContext } from '@apollo/client/link/context';

import {
    ApolloNextAppProvider,
    ApolloClient,
    InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { signOut, useSession } from 'next-auth/react';

export type ApolloClientProviderProps = {
    children: ReactNode;
};

export const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
});


let refreshPromise: Promise<string> | null = null;

const REFRESH_AUTHENTICATION_MUTATION = `
    mutation RefreshAuth {
        refreshAuth {
            accessToken
            refreshToken
            expiresIn
    }
 }
`
export function ApolloClientProvider({ children }: React.PropsWithChildren) {
    const { data: session, update } = useSession();

    const makeClient = useCallback(() => {
        const authMiddleware = setContext(async (operation, { headers }) => {
            if (!session?.user || !session?.user.accessToken || !session?.user.refreshToken) {
                signOut();
                return operation;
            }

            const bufferInMinutes = 2;
            const isExpiringSoon =
                session.user?.expiresIn &&
                Date.now() >= (session.user?.expiresIn) * 1000 - bufferInMinutes * 60 * 1000;

            if (!isExpiringSoon) {
                return {
                    headers: {
                        ...headers,
                        authorization: `Bearer ${session?.user.accessToken}`,
                    },
                };
            }

            // If there's already a refresh in progress, wait for it
            if (!refreshPromise) {
                refreshPromise = executeTokenRefresh(session.user.refreshToken)
                    .finally(() => {
                        // could not generate refresh token sign out user
                        refreshPromise = null;
                    });
            }

            const newAccessToken = await refreshPromise;
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${newAccessToken}`,
                },
            };
        });

        return new ApolloClient({
            cache: new InMemoryCache(),
            link: from([authMiddleware, httpLink]),
        });
    }, [session, update]);



    const executeTokenRefresh = async (refreshToken: string): Promise<string> => {
        try {

            const response = await fetch('http://localhost:4000/graphql', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${refreshToken}`
                },
                body: JSON.stringify({
                    operationName: "RefreshAuth",
                    query: REFRESH_AUTHENTICATION_MUTATION,
                })
            });

            if (!response.ok) {
                throw new Error('Failed to refresh token');
            }

            const { data } = await response.json();
            const refreshResult = data?.refreshAuth

            const { __typename } = refreshResult;

            if (__typename === "ForbiddenError") {
                signOut();
                throw new Error("Refresh token is invalid or expired");
            }


            const { accessToken: newAccessToken, refreshToken: newRefreshToken, expiresIn } = refreshResult;

            if (!newAccessToken || !newRefreshToken) {
                throw new Error('Missing tokens in refresh response');
            }

            // Update the session access tokens and the expiration of the new access token
            update({
                user: {
                    ...session?.user,
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken,
                    expiresIn: expiresIn,
                }

            });

            return newAccessToken;

        } finally {
            refreshPromise = null;
        }
    };


    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
