import { Metadata } from 'next';
import AuthTemplate from '@/modules/auth/templates';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login to your account',
};

export default function LoginPage() {
    return (
        <AuthTemplate />
    );
}
