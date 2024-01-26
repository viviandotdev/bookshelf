import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { getApolloClient } from "@/lib/apollo";
import {
  LoginDocument,
  LoginMutation,
  OAuthDocument,
  OAuthMutation,
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
        console.log(credentials);
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const { data, errors } = await client.mutate<LoginMutation>({
          mutation: LoginDocument,
          variables: {
            input: {
              email: email,
              password: password,
            },
          },
          //   Error policay call catches the error in errors
          errorPolicy: "all",
        });

        console.log(errors?.map((e) => e.message)[0]);

        // if it returns a verification token do not sign in
        if (errors) {
          throw new Error(errors.map((e) => e.message)[0]);
        }

        if (!data) throw new Error("No data returned from server");

        return {
          id: data!.login.user.id,
          email: data!.login.user.email,
          username: data!.login.user.username,
          emailVerified: data!.login.user.emailVerified,
          accessToken: data!.login.accessToken,
          expiresIn: data!.login.expiresIn,
          verificationToken: data!.login.verificationToken,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // If provider allow signin regardless of email verification
      if (account?.provider !== "credentials") return true;
      //   Check if email is verified
      const u = user as unknown as any;
      // Prevent sign in without email verification
      if (!u?.emailVerified) return false;

      return true;
    },
    async jwt({ token, user, account, profile }) {
      const u = user as unknown as any;
      if (account && account?.provider != "credentials") {
        // console.log("account", account);
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
