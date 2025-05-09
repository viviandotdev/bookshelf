'use client';
import { Icons } from '@/components/icons';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { loginUserSchema } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof loginUserSchema>;

export const LoginForm = ({ className, ...props }: UserAuthFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginUserSchema),
    });
    const router = useRouter();
    const [success, setSuccess] = useState<string | undefined>('');
    const searchParams = useSearchParams();
    const searchError = searchParams.get('error');
    const [error, setError] = useState<string | null>(
        searchError ? 'Invalid email or password' : null
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const callbackUrl = searchParams.get('callbackUrl');

    const onSubmit = async (values: z.infer<typeof loginUserSchema>) => {
        setIsLoading(true);
        try {
        const res = await signIn('credentials', {
                email: values.email.toLowerCase(),
                password: values.password,
                redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
            });
            if (res?.error) {
                setError('Invalid email or password');
                setSuccess('Confirmation email sent');
            } else {
                router.push(callbackUrl || DEFAULT_LOGIN_REDIRECT);
            }
        } catch (err: any) {
            setError('Error signing in');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthFormWrapper
            onSubmit={handleSubmit(onSubmit)}
            isPending={isLoading}
            error={error || undefined}
            success={success}
            buttonLabel='Log in'
        >
            <AuthInput
                id='email'
                label='Email Address'
                type='email'
                placeholder='john.doe@example.com'
                error={errors?.email?.message}
                disabled={isLoading}
                register={register}
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect='off'
            />
            <AuthInput
                id='password'
                label='Password'
                type='password'
                placeholder='******'
                error={errors?.password?.message}
                disabled={isLoading}
                register={register}
                required
            />
        </AuthFormWrapper>
    );
};
