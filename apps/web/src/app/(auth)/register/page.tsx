import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { RegisterForm } from '../../../modules/auth/components/auth-forms/register-form';
import { dm_sefif_display } from '@/lib/fonts';

export const metadata = {
    title: 'Create an account',
    description: 'Create an account to get started.',
};

export default function RegisterPage() {
    return (
        <>
            <div className='flex flex-col space-y-2 text-center'>
                <h1
                    className={cn(
                        dm_sefif_display.className,
                        'text-3xl/[64px] text-beige '
                    )}
                >
                    Create Account
                </h1>
            </div>
            <div className='grid gap-4'>
                <hr />
                <RegisterForm />
                <p className='px-8 text-center text-sm text-beige'>
                    Already have an account?
                    <Link
                        href='/login'

                        className='ml-2 hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
                    >
                        Log in
                    </Link>
                </p>
            </div></>
    );
}
