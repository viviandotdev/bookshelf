import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let apolloClient: ApolloClient<any> | null = null

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL
    }),
    cache: new InMemoryCache()
  })
}

export function getApolloClient() {
  // only use existing apollo client on client side
  const client = apolloClient && typeof window !== 'undefined' ? apolloClient : createApolloClient()

  return client
}
