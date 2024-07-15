'use client';

import { ApolloProvider, from } from '@apollo/client';
import { createContext, ReactNode, useContext, useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';
import {
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { httpLink } from '../lib/apollo';
import { useSession } from 'next-auth/react';

export type ApolloClientProviderProps = {
  children: ReactNode;
};

/**
 * Create apollo client on 'client'
 */
//https://lyonwj.com/blog/grandstack-podcast-app-next-js-graphql-authentication
//https://grafbase.com/guides/how-to-use-nextauthjs-jwt-auth-with-apollo-client
// Client components with server side rendering
export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  const session = useSession();
  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${session.data?.user.accessToken}`,
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
