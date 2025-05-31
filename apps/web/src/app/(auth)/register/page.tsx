import Link from 'next/link';

import { cn } from '@/lib/utils';
import { RegisterForm } from '../../../modules/auth/components/auth-forms/register-form';
import { dm_sefif_display } from '@/lib/fonts';
import AuthTemplate from '@/modules/auth/templates';

export const metadata = {
    title: 'Create an account',
    description: 'Create an account to get started.',
};

export default function RegisterPage() {
    return (
        <>
            <AuthTemplate />
        </>
    );
}
