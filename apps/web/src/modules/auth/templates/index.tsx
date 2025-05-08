'use client';
import React, { useState } from 'react';
import { LoginForm } from '../components/auth-forms/login-form';
import { ForgotPasswordForm } from '../components/auth-forms/forgot-password-form';
import { Button } from '@/components/ui/button';
import { RegisterForm } from '../components/auth-forms/register-form';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

type FormType = 'login' | 'register' | 'forgotPassword';

interface FormConfig {
    title: string;
    component: React.ReactNode;
}

interface AuthTemplateProps { }

export const AuthTemplate: React.FC<AuthTemplateProps> = () => {
    const [activeForm, setActiveForm] = useState<FormType>('login');

    const handleToggleForm = (form: FormType) => {
        setActiveForm(form);
    };

    const formConfig: Record<FormType, FormConfig> = {
        login: {
            title: 'Login',
            component: (
                <>
                    <LoginForm />
                    <div className='gap-2'>
                        <p className='px-8 text-center text-sm text-beige'>
                            <Button
                                onClick={() => handleToggleForm('forgotPassword')}
                                className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
                            >
                                Forgot password?
                            </Button>
                        </p>
                        <p className='px-8 text-center text-sm text-beige'>
                            Don't have an account?
                            <Button
                                onClick={() => handleToggleForm('register')}
                                className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
                    >
                                Create one
                            </Button>
                        </p>
                    </div>
                </>
            ),
        },
        register: {
            title: 'Create Account',
            component: (
                <>
                    <RegisterForm />
                    <div className='gap-2'>
                        <p className='px-8 text-center text-sm text-beige'>
                            Already have an account?
                            <Button
                                onClick={() => handleToggleForm('login')}
                                className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
                            >
                                Log in
                            </Button>
                        </p>
                    </div>
                </>
            ),
        },
        forgotPassword: {
            title: 'Forgot Password?',
            component: (
                <>
                    <ForgotPasswordForm />
                    <p className='px-8 text-center text-sm text-beige'>
                        <Button
                            onClick={() => handleToggleForm('login')}
                            className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
                        >
                            Cancel
                        </Button>
                    </p>
                </>
            ),
        },
    };

    const currentForm = formConfig[activeForm];

    return (
        <div className='container flex flex-col items-center justify-center'>
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
                <div className='flex flex-col space-y-2 text-center'>
                    <h1
                        className={cn(
                            dm_sefif_display.className,
                            'text-3xl/[64px] text-beige',
                            activeForm === 'login' && 'text-5xl/[64px] font-bold'
                        )}
                    >
                        {currentForm.title}
                    </h1>
                </div>
                <div className='grid gap-4'>
                    <hr />
                    {currentForm.component}
                </div>
            </div>
        </div>
    );
};

export default AuthTemplate;
