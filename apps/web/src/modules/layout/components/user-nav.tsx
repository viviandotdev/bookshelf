'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { UserAccountNav } from './user-account-nav';
import Link from 'next/link';
import { User } from '@/types/interfaces';

interface UserNavProps {
  items?: NavItem[];
  user: User;
}

export function UserNav({ user, items }: UserNavProps) {
  return (
    <nav className='flex w-full items-center gap-20 rounded-lg bg-beige-100 p-3'>
      <div className='flex items-center gap-3 font-medium'>
        <UserAccountNav
          user={{
            email: user.email,
            username: user.username,
            id: user.id,
          }}
        />
        {user.username}
      </div>
      <div className='flex gap-3 text-sm'>
        {items?.map((item, index) => (
          <Link
            href={`/${user.username}${item.href}`}
            key={index}
            className={cn('flex')}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
