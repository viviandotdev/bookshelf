'use client';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { registerUserSchema } from '@/schemas/auth';
import { regsiterUser } from '../../actions/register-user';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';
import { useSearchParams } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { EmailForm } from './email-form';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    email?: string;
}
type FormStep = 'email' | 'login' | 'register';

export const RegisterForm = ({ className, ...props }: UserAuthFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm<z.infer<typeof registerUserSchema>>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            email: props.email || '',
        },
    });
    const [step, setStep] = useState<FormStep>('register');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    const redirectTo = (url: string) => {
        window.location.href = url
        // If url contains a hash, the browser does not reload the page. We reload manually
        if (url.includes("#")) window.location.reload()
    }

    const onSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        setError('');
        setSuccess('');
        startTransition(() => {
            regsiterUser(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        redirectTo(callbackUrl || DEFAULT_LOGIN_REDIRECT)
                    }
                })
        });
    };

    if (step === 'email') {
        return (
            <EmailForm email={getValues('email')} />
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setStep('email')
                }}
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
