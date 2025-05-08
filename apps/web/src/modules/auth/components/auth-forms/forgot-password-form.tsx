'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetSchema } from '@/schemas/auth';
import { forgotPassword } from '../../actions/forgot-password';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';

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
                <p className='text-center text-beige font-semibold'>Check your inbox for the link to reset your password</p>
            </div>
        );
    }

    return (
        <AuthFormWrapper
            onSubmit={handleSubmit(onSubmit)}
            isPending={isPending}
            error={error}
            success={success}
            buttonLabel='Send reset email'
        >
            <AuthInput
                id='email'
                label='Email Address'
                type='email'
                placeholder='john.doe@example.com'
                error={errors?.email?.message}
                disabled={isPending}
                register={register}
            />
        </AuthFormWrapper>
    );
};
