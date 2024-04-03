import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { getApolloClient, httpLink, setAuthToken } from '@/lib/apollo';
import {
  LoginDocument,
  LoginMutation,
  MeDocument,
  MeQuery,
  OAuthDocument,
  OAuthMutation,
  VerifyTokenDocument,
  VerifyTokenMutation,
} from '@/graphql/graphql';
import Github from 'next-auth/providers/github';
// import Google from "next-auth/providers/google";

const client = getApolloClient();

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com',
        },
        password: { label: 'Password', type: 'password' },
        token: { label: 'Token', type: 'token' },
      },
      async authorize(credentials): Promise<any> {
        const { email, password, token } = credentials as {
          email: string;
          password: string | null;
          token: string | null;
        };

        let data;
        if (!token) {
          const { data: loginData, errors } =
            await client.mutate<LoginMutation>({
              mutation: LoginDocument,
              variables: {
                input: {
                  email: email,
                  password: password || '',
                },
              },
              //   Error policay call catches the error in errors
              errorPolicy: 'all',
            });

          data = loginData?.login;
          if (errors) {
            throw new Error(errors.map((e) => e.message)[0]);
          }
        } else if (token) {
          const { data: verifyData, errors } =
            // pass in the new email and then log the user in
            await client.mutate<VerifyTokenMutation>({
              mutation: VerifyTokenDocument,
              variables: {
                token,
              },
              errorPolicy: 'all',
            });
          if (errors) {
            throw new Error(errors.map((e) => e.message)[0]);
          }
          data = verifyData?.verifyToken;
        }

        if (!data) throw new Error('No data returned from server');

        return {
          id: data!.user.id,
          email: data!.user.email,
          
          username: data!.user.username,
          emailVerified: data!.user.emailVerified,
          accessToken: data!.accessToken,
          expiresIn: data!.expiresIn,
          verificationToken: data!.verificationToken,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // If provider allow signin regardless of email verification
      if (account?.provider !== 'credentials') return true;
      //   Check if email is verified
      const u = user as unknown as any;
      // Prevent sign in without email verification
      if (!u?.emailVerified) return false;

      return true;
    },
    async jwt({ token, user, account, profile }) {
      const u = user as unknown as any;
      if (account && account?.provider != 'credentials') {
        const { data } = await client.mutate<OAuthMutation>({
          mutation: OAuthDocument,
          variables: {
            input: {
              ...account,
              image: profile?.avatar_url,
              username: profile?.login,
              email: profile?.email,
            },
          },
        });
        if (data) {
          token.username = data!.oAuth!.user.username;
          token.email = data!.oAuth!.user.email;
          token.id = data?.oAuth.user.id;
          token.accessToken = data?.oAuth.accessToken;
          token.expiresIn = data?.oAuth.expiresIn;
          token.isOAuth = true;
        }
      }
      //  handle oauth provider case
      // create provider account in the database
      else if (user && account?.provider == 'credentials') {
        token.username = u.username;
        token.email = u.email;
        token.id = u.id;
        token.accessToken = u.accessToken;
        token.expiresIn = u.expiresIn;
        token.isOAuth = false;
        //the user is signin, add additional properties to the jwt token created
      } else if (token.accessToken) {
        client.setLink(
          setAuthToken(token.accessToken as string).concat(httpLink)
        );
        const { data } = await client.query<MeQuery>({
          query: MeDocument,
          fetchPolicy: 'network-only',
        });

        if (data) {
          token.isOAuth = data!.me!.isOAuth;
          token.username = data!.me!.username;
          token.email = data!.me!.email;
        }

        return Promise.resolve(token);
      }

      if (Date.now() >= (token.expiresIn as unknown as any) * 1000) {
        //the api token expired sign in again
        await client.resetStore();
        token.error = 'TokenExpiredError' as string;
      }

      return Promise.resolve(token); //signed in user is returning to the same session
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
        isOAuth: token.isOAuth,
      };
      return Promise.resolve(session);
      //pass the additional properties to the session object on the client side
    },
  },
} satisfies NextAuthConfig;
