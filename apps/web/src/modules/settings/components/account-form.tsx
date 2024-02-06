"use client"
import { Icons } from '@/components/icons';
import React from 'react';
import { User } from '@/graphql/graphql';
import AccountCards from './account-cards';

interface AccountFormProps {

    user: User;
}

export const AccountForm: React.FC<AccountFormProps> = ({ user }) => {
    const accountSecurityConfigs = [
        { title: 'Email', button: 'Change email', info: `${user.email}`, icon: Icons.email, },
        { title: 'Password', button: 'Change password', info: "Last updated July 26, 2018", icon: Icons.password, },
    ];

    return (
        <main className="flex-1">
            <h1 className="text-2xl font-bold">Account</h1>
            <p className="mt-1 mb-6 text-sm text-gray-600">
                Manage settings related to signing in to your account, account security, as well as how to recover your data when you’re having trouble signing in.
            </p>
            <div className="mx-auto mb-6 ">
                {accountSecurityConfigs.map((config, index) => (
                    <AccountCards config={config} />
                ))}
            </div>
        </main>
    );
};

export default AccountForm;
