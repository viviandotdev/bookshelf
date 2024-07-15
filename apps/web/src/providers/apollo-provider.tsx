'use client';

import { ApolloProvider, from } from '@apollo/client';
import { ReactNode, useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';
import {
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { httpLink } from '../lib/apollo';

export type ApolloClientProviderProps = {
  children: ReactNode;
};

/**
 * Create apollo client on 'client'
 */
//https://grafbase.com/guides/how-to-use-nextauthjs-jwt-auth-with-apollo-client
// Client components with server side rendering
export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const response = await fetch('/api/accessToken');
      const { session } = await response.json();
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${session.accessToken}`,
        },
      };
    });
    return new NextSSRApolloClient({
      link:
        typeof window === 'undefined'
          ? from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              authMiddleware,
              httpLink,
            ])
          : from([authMiddleware, httpLink]),
      cache: new NextSSRInMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
