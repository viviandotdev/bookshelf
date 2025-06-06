'use client';
import { Icons } from '@/components/icons';
import React from 'react';
import AccountCards from './account-cards';
import { useSession } from 'next-auth/react';
import { UserQuery } from '@/graphql/graphql';

interface AccountFormProps {
    userData?: UserQuery;
    loading: boolean;
}

export const AccountForm: React.FC<AccountFormProps> = ({ userData, loading }) => {
    const { data: session } = useSession();
    const accountSecurityConfigs = [
        {
            title: 'Email',
            button: 'Change email',
            info: `${session?.user.email}`,
            icon: Icons.email,
        },
        {
            title: 'Password',
            button: 'Change password',
            info: userData?.user?.passwordUpdatedAt ? `Last updated ${new Date(userData.user.passwordUpdatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}` : 'Never updated',
            icon: Icons.lock,
        },
    ];

    return (
        <main className='px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                <div>
                    <h1 className='mb-2 text-2xl font-bold leading-8'>Account</h1>
                    <p className='mt-1 text-sm text-gray-600'>
                        Manage settings related to signing in to your account, account
                        security, as well as how to recover your data when you're having
                        trouble signing in.
                    </p>

                    <dl className='text-sm'>
                        {accountSecurityConfigs.map((config, index) => (
                            <div key={index} className='pt-6'>
                                <AccountCards config={config} />
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </main>
    );
};

export default AccountForm;
