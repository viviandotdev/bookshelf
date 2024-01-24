import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { getApolloClient } from "@/lib/apollo";
import {
  SignInMutation,
  SignInDocument,
  OAuthLoginMutation,
  OAuthLoginDocument,
  SignUpMutation,
  SignUpDocument,
} from "@/graphql/graphql";
import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";

const client = getApolloClient();

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        //get user
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const { data } = await client.mutate<SignInMutation>({
          mutation: SignInDocument,
          variables: {
            input: {
              email: email,
              password: password,
            },
          },
        });
        if (!data) throw new Error("signin failed");
        return {
          id: data!.signin.user.id,
          email: data!.signin.user.email,
          username: data.signin.user.username,
          accessToken: data!.signin.accessToken,
          expiresIn: data!.signin.expiresIn,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      const u = user as unknown as any;
      if (account && account?.provider != "credentials") {
        // console.log("account", account);
        const { data } = await client.mutate<OAuthLoginMutation>({
          mutation: OAuthLoginDocument,
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
          token.username = data!.oAuthLogin!.user.username;
          token.email = data!.oAuthLogin!.user.email;
          token.id = data?.oAuthLogin.user.id;
          token.accessToken = data?.oAuthLogin.accessToken;
          token.expiresIn = data?.oAuthLogin.expiresIn;
        }
      }
      //  handle oauth provider case
      // create provider account in the database
      else if (user) {
        token.username = u.username;
        token.email = u.email;
        token.id = u.id;
        token.accessToken = u.accessToken;
        token.expiresIn = u.expiresIn;
        //the user is signin, add additional properties to the jwt token created
      }
      if (Date.now() >= (token.expiresIn as unknown as any) * 1000) {
        //the api token expired sign in again
        await client.resetStore();
        token.error = "TokenExpiredError" as string;
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
      };
      return Promise.resolve(session);
      //pass the additional properties to the session object on the client side
    },
  },
} satisfies NextAuthConfig;
