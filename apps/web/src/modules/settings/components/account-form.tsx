'use client';
import { Icons } from '@/components/icons';
import React from 'react';
import { User } from '@/graphql/graphql';
import AccountCards from './account-cards';

interface AccountFormProps {
  user: User;
}

export const AccountForm: React.FC<AccountFormProps> = ({ user }) => {
  const accountSecurityConfigs = [
    {
      title: 'Email',
      button: 'Change email',
      info: `${user.email}`,
      icon: Icons.email,
    },
    {
      title: 'Password',
      button: 'Change password',
      info: 'Last updated July 26, 2018',
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
            security, as well as how to recover your data when you’re having
            trouble signing in.
          </p>

          <dl className='mt-6 text-sm'>
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
