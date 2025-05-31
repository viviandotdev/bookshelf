'use client';
import { loginUserSchema } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';
import { loginUser } from '../../actions/login-user';

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
    const [success, setSuccess] = useState<string | undefined>('');
    const searchParams = useSearchParams();
    const searchError = searchParams.get('error');
    const [error, setError] = useState<string | undefined>(
        searchError ? 'Invalid credentials' : undefined
    );
    const [isPending, startTransition] = useTransition();
    const callbackUrl = searchParams.get('callbackUrl');

    const redirectTo = (url: string) => {
        window.location.href = url
        // If url contains a hash, the browser does not reload the page. We reload manually
        if (url.includes("#")) window.location.reload()
    }

    const onSubmit = async (values: z.infer<typeof loginUserSchema>) => {
        startTransition(() => {
            loginUser({ email: values.email, password: values.password }).then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    redirectTo(callbackUrl || DEFAULT_LOGIN_REDIRECT)
                }
            });

        });
    };

    return (
        <AuthFormWrapper
            onSubmit={handleSubmit(onSubmit)}
            isPending={isPending}
            error={error}
            success={success}
            buttonLabel='Log in'
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
