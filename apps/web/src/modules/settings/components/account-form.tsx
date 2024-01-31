"use client"
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import ChangeButton from './change-button';

interface AccountFormProps { }

export const AccountForm: React.FC<AccountFormProps> = ({ }) => {
    const accountSecurityConfigs = [
        { title: 'Email', button: 'Change email', info: 'linvivian61@gmail.com', icon: Icons.email, },
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
                    <div
                        key={index}
                        className="flex cursor-pointer justify-between px-4 py-3 bg-white rounded-md shadow-sm border border-gray-100 mb-4 text-sm"
                    >
                        <div>
                            <div className="flex items-center">
                                <div className="align-middle" >{<config.icon className={cn("mr-2 h-4 w-4")} />}</div   >
                                {config.title}
                            </div>
                            <p className="text-gray-500">{config.info}</p>
                        </div>
                        <ChangeButton config={config}></ChangeButton>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default AccountForm;
