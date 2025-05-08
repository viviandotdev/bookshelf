'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormError } from '@/components/form-error';
import { NewPasswordSchema } from '@/schemas/auth';
import { resetPassword } from '../actions/reset-password';
import { dm_sefif_display } from '@/lib/fonts';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-6'>
                    <div className='grid gap-2'>
                        <Label htmlFor='password'>New Password</Label>
                        <Input
                            className='w-full'
                            id='password'
                            type='password'
                            variant='rings'
                            placeholder='******'
                            disabled={isPending}
                            {...register('password')}
                        />
                        {errors?.password && (
                            <p className='px-1 text-xs text-red-600'>{errors.password.message}</p>
                        )}
                    </div>
                    <FormError message={error} />
                    <button
                        className={cn(buttonVariants({ variant: 'default' }))}
                        disabled={isPending}
                    >
                        {isPending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                        Reset password
                    </button>
                </div>
            </form>
        </>

    );
};
