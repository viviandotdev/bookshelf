'use client';
import React from 'react';
import { RegisterForm } from '../components/auth-forms/register-form';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface AuthTemplateProps { }

export const AuthTemplate: React.FC<AuthTemplateProps> = () => {

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
            <RegisterForm />
        </div>
    );
};

export default AuthTemplate;
