import NextAuth from 'next-auth';
import authConfig from './auth.config';


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
