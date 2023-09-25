import { ApolloClient, from, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getSession } from 'next-auth/react'

let apolloClient: ApolloClient<any> | null = null

export const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include'
})

export const setAuthToken = (token: string) =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }))

const authLink = setContext(async (_, { headers }) => {
  const session = await getSession()
  const modifiedHeader = {
    headers: {
      ...headers,
      authorization: session?.user.accessToken ? `Bearer ${session.user.accessToken}` : ''
    }
  }
  return modifiedHeader
})

function createApolloClient() {
  return new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache()
  })
}

export function getApolloClient() {
  // only use existing apollo client on client side else create new apollo client
  const client = apolloClient && typeof window !== 'undefined' ? apolloClient : createApolloClient()

  return client
}
