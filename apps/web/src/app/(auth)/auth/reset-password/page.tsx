import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ResetPasswordForm } from '@/modules/auth/components/auth-forms/reset-password-form';

export default function ResetPasswordPage() {
    return (
        <div className='container flex h-screen w-screen flex-col items-center justify-center'>
            <Link
                href='/'
                className={cn(
                    buttonVariants({ variant: 'link' }),
                    'absolute left-4 top-4 md:left-8 md:top-8'
                )}
            >
                <>
                    <Icons.chevronLeft className='mr-2 h-4 w-4' />
                    Back
                </>
            </Link>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>

                <ResetPasswordForm />
            </div>
        </div>
    );
}
