'use client';

import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';
import { LoginForm } from '../auth-forms/login-form';
import { RegisterForm } from '../auth-forms/register-form';
import { hasAccount } from '../../actions/has-account';

type FormStep = 'email' | 'login' | 'register';

const emailSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

export const EmailForm = (props: { email: string }) => {

    const [step, setStep] = useState<FormStep>('email');
    const [error, setError] = useState<string | undefined>();
    const [email, setEmail] = useState<string>('');
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: props.email,
        },
    });
    const [isPending, startTransition] = useTransition();

    const handleEmailSubmit = async (values: z.infer<typeof emailSchema>) => {
        startTransition(async () => {
            const { data: isHasAccount, error } = await hasAccount({ email: values.email });
            if (error) {
                setError(error);
                return;
            }
            setEmail(values.email);
            if (isHasAccount) {
                setStep('login');

            } else {
                setStep('register');
            }

        });

    };

    if (step === 'login') {
        return (
            <LoginForm email={email} />
        );
    }

    if (step === 'register') {
        return (
            <RegisterForm email={email} />
        );
    }

    return (
        <AuthFormWrapper
            onSubmit={handleSubmit(handleEmailSubmit)}
            isPending={isPending}
            error={error}
            buttonLabel="Continue"
        >
            <AuthInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="john.doe@example.com"
                error={errors?.email?.message}
                disabled={isPending}
                register={register}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
            />
        </AuthFormWrapper>
    );
};
