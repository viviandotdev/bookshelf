import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
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
import authConfig from './auth.config';

const client = getApolloClient();

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    update,
} = NextAuth({
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: { strategy: 'jwt' },
    ...authConfig,
});
