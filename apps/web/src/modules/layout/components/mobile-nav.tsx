import * as React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { MainNavItem } from '@/types';
import { useLockBody } from '@/hooks/use-lock-body';
import { UserAvatar } from './user-avatar';
import { User } from '@/types/interfaces';
import { useSelectedLayoutSegments } from 'next/navigation';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
interface MobileNavProps {
  items: MainNavItem[];
  user: User;
}

export function MobileNav({ user }: MobileNavProps) {
  useLockBody();
  const segments = useSelectedLayoutSegments();
  const logBookModal = useLogBookModal();
  const { data: session } = useSession();

  if (segments[0] === 'profile') {
    segments.shift();
  }
  const menuItems = [
    { label: 'Your Profile', href: `/profile/${user.username}` },
    { label: 'Settings', href: '/settings/account' },
    { label: 'Import Books', href: '/settings/import' },
    { label: 'Log Book', href: '' },
  ];

  return (
    <div className='nav-lg:hidden' aria-label='Global'>
      {/* <div className="space-y-1 px-2 pb-3 pt-2">
                {items.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href!}
                        className={cn(
                            'flex w-full items-center rounded-md px-4 py-2 text-base font-medium hover:underline',
                            item.disabled && 'cursor-not-allowed opacity-60'
                        )}

                    >
                        {item.title}
                    </Link>
                ))}
            </div> */}
      <div className='border-t border-gray-200 pb-3 pt-4'>
        <div className='flex items-center px-4'>
          <div className='flex-shrink-0'>
            <UserAvatar
              username={'vivian'}
              size={'default'}
              className='h-10 w-10'
            />
          </div>
          <div className='ml-3'>
            <div className='text-base font-medium text-gray-800'>
              {session?.user.username || user.username}
            </div>
            <div className='text-sm font-medium text-gray-500'>
              {user.email}
            </div>
          </div>
        </div>
        <div className='mt-3 space-y-1 px-2'>
          {menuItems.map((item) => (
            <Link
              href={item.href}
              onClick={() => {
                if (item.href === '') {
                  logBookModal.onOpen();
                }
              }}
              key={item.label}
              className={`flex w-full justify-start rounded-md px-4 py-2 text-base font-medium ${
                item.href.endsWith(`/${segments.join('/')}`)
                  ? 'bg-gray-50 text-gray-900'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
