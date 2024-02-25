import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { MainNav } from './main-nav';
import { UserAccountNav } from './user-account-nav';
import Link from 'next/link';
import { NavItem } from '@/types';

interface MainHeaderProps {
  user: any;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ user }) => {
  const items = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'My Library',
      href: user ? `/${user.username}/books` : '/',
    },
    {
      title: 'Browse',
      href: '/browse',
    },
    {
      title: 'Community',
      href: '/browse',
    },
  ];
  return (
    <header className='container mx-0 flex max-w-[none] items-center justify-between py-2'>
      <MainNav items={items} />
      <div className='flex items-center space-x-6'>
        {/* <MicroscopeIcon className="text-gray-600" /> */}
        <Icons.search className='text-beige-700' />
        {user ? (
          <div className='flex gap-4'>
            <UserAccountNav
              user={{
                email: user.email,
                username: user.username,
                id: user.id,
              }}
            />
            {/* <LogBookButton /> */}
          </div>
        ) : (
          <Link
            href='/login'
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4'
            )}
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
export default MainHeader;
