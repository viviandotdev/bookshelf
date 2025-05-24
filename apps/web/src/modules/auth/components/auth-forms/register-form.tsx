'use client';
import { buttonVariants } from '@/components/ui/button';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { registerUserSchema } from '@/schemas/auth';
import { regsiterUser } from '../../actions/register-user';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const RegisterForm = ({ }: UserAuthFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerUserSchema>>({
        resolver: zodResolver(registerUserSchema),
    });
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const onSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        setError('');
        setSuccess('');
        startTransition(() => {
            regsiterUser(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            });
        });
    };

    if (success) {
        return (
            <div className='grid gap-6'>
                <div className='flex flex-col items-center justify-center'>
                    Success account created
                </div>
            </div>
        );
    }

    return (
        <AuthFormWrapper
            onSubmit={handleSubmit(onSubmit)}
            isPending={isPending}
            error={error}
            success={success}
            buttonLabel='Create account'
        >
            <AuthInput
                id='email'
                label='Email Address'
                type='email'
                placeholder='john.doe@example.com'
                error={errors?.email?.message}
                disabled={isPending}
                register={register}
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect='off'
            />
            <AuthInput
                id='username'
                label='Username'
                type='text'
                placeholder='Username'
                error={errors?.username?.message}
                disabled={isPending}
                register={register}
                required
            />
            <AuthInput
                id='password'
                label='Password'
                type='password'
                placeholder='******'
                error={errors?.password?.message}
                disabled={isPending}
                register={register}
                required
            />
        </AuthFormWrapper>
    );
};
