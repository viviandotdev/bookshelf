'use client';

import { from } from '@apollo/client';
import { ReactNode } from 'react';
import { setContext } from '@apollo/client/link/context';
import {
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient,
  ApolloNextAppProvider,
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
//https://medium.com/@sehrawy/how-to-set-up-nextjs-14-with-apollo-client-754a177e0a00
//https://github.com/apollographql/apollo-client-nextjs
// Client components with server side rendering
export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  const session = useSession();

  function makeClient() {
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
  }
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
