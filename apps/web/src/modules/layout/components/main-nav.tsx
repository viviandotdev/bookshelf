import * as React from 'react';
import { MainNavItem } from '@/types';
import { NavLink } from './nav-link';

interface MainNavProps {
  children?: React.ReactNode;
  items: MainNavItem[];
}

export function MainNav({ children, items }: MainNavProps) {
  return (
    <>
      <nav className='flex flex-1 justify-center space-x-4'>
        {items?.length ? (
          <nav className='flex gap-6'>
            {items?.map((item, index) => (
              <NavLink key={index} href={item.href} routeType={item.type}>
                {item.title}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </nav>
    </>
  );
}
