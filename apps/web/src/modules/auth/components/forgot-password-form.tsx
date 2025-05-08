'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { ResetSchema } from '@/schemas/auth';
import { forgotPassword } from '../actions/forgot-password';

export const ForgotPasswordForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            forgotPassword(values).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    if (success) {
        return (
            <div className='grid gap-6'>
                <FormSuccess message='Check your inbox for the link to reset your password' />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input
                        className='w-full'
                        id='email'
                        type='email'
                        variant='rings'
                        placeholder='john.doe@example.com'
                        disabled={isPending}
                        {...register('email')}
                    />
                    {errors?.email && (
                        <p className='px-1 text-xs text-red-600'>{errors.email.message}</p>
                    )}
                </div>
                <FormError message={error} />
                <button
                    className={cn(buttonVariants({ variant: 'default' }))}
                    disabled={isPending}
                >
                    {isPending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                    Send reset email
                </button>
            </div>
        </form>
    );
};
