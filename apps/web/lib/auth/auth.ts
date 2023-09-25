import { SignInMutation, SignInDocument } from "@/graphql/graphql";
import { NextAuthOptions } from "next-auth";
import { getApolloClient } from "../apollo";
import CredentialsProvider from "next-auth/providers/credentials";
const client = getApolloClient();
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
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
    async jwt({ token, user }) {
      const u = user as unknown as any;

      if (user) {
        //the user is signin, add additional properties to the jwt token created
        return {
          ...token,
          name: u.username,
          id: u.id,
          accessToken: u.accessToken,
          expiresIn: u.expiresIn,
        };
      }
      if (Date.now() >= (token.expiresIn as unknown as any) * 1000) {
        //the api token expired sign in again
        await client.resetStore();
        console.log("token expired error");
        throw new Error("token expired");
      }
      return token; //signed in user is returning to the same session
    },
    async session({ session, token }) {
      return {
        //pass the additional properties to the session object on the client side
        ...session,
        user: {
          ...session.user,
          name: token.name,
          id: token.id,
          accessToken: token.accessToken,
        },
      };
    },
  },
};
