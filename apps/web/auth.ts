import NextAuth from "next-auth";
import authConfig from "./auth.config";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/",
  },
  events: {
    async linkAccount({ user }) {
      // when a user links an account, update their emailVerified field in the database
      // when a user logs in with OAuth emailVerfier is automatically set to true
      //   await db.user.update({
      //     where: { id: user.id },
      //     data: { emailVerified: new Date() },
      //   });
    },
  },
  session: { strategy: "jwt" },

  ...authConfig,
});
