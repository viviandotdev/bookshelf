import { getApolloClient } from '@/lib/apollo'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { SignInDocument, SignInMutation } from '@/graphql/graphql'
import { signOut } from 'next-auth/react'

const client = getApolloClient()
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<any> {
        //get user
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const { data } = await client.mutate<SignInMutation>({
          mutation: SignInDocument,
          variables: {
            input: {
              email: email,
              password: password
            }
          }
        })
        if (!data) throw new Error('signin failed')
        return {
          id: data!.signin.user.id,
          email: data!.signin.user.email,
          username: data.signin.user.username,
          accessToken: data!.signin.accessToken,
          expiresIn: data!.signin.expiresIn
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      const u = user as unknown as any
      if (user) {
        //add additional properties to the jwt token created
        return {
          ...token,
          id: u.id,
          accessToken: u.accessToken,
          expiresIn: u.expiresIn
        }
      } else if (Date.now() >= (token.expiresIn as unknown as any) * 1000) {
        //token expired sign in again
        await client.resetStore()
        throw new Error('token expired')
      }
      return token
    },
    async session({ session, token }) {
      return {
        //pass the additional properties to the session object
        ...session,
        user: {
          ...session.user,
          id: token.id,
          accessToken: token.accessToken
        }
      }
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
