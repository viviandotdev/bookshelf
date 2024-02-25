import {
  ApolloClient,
  from,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
});

export const setAuthToken = (token: string) =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }));

export function getApolloClient() {
  return new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
  });
}
