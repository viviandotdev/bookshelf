'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';
import { NewPasswordSchema } from '@/schemas/auth';
import { resetPassword } from '../../actions/reset-password';
import { dm_sefif_display } from '@/lib/fonts';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
        },
    });

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError('');
        setSuccess('');
        startTransition(() => {
            resetPassword(values, token).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    if (success) {
        return <div className="flex flex-col items-center justify-center min-h-[300px]">
            <CheckIcon className="mb-4 h-8 w-8 text-beige" />
            <h2 className={cn('text-2xl font-semibold text-beige mb-2')}>Password reset successful</h2>
            <p className="mb-6 text-gray-500">You can now sign using your new password</p>
            <Link
                href="/login"
                className='hover:text-brand font-medium text-beige underline underline-offset-4 hover:bg-white'
            >
                Sign in with new password
            </Link>
        </div>
    }

    return (
        <>
            <div className='flex flex-col space-y-2 text-center'>
                <h1
                    className={cn(
                        dm_sefif_display.className,
                        'text-3xl/[64px] text-beige'
                    )}
                >
                    Reset Password
                </h1>
            </div>
            <AuthFormWrapper
                onSubmit={handleSubmit(onSubmit)}
                isPending={isPending}
                error={error}
                success={success}
                buttonLabel='Reset password'
            >
                <AuthInput
                    id='password'
                    label='New Password'
                    type='password'
                    placeholder='******'
                    error={errors?.password?.message}
                    disabled={isPending}
                    register={register}
                />
            </AuthFormWrapper>
        </>
    );
};
