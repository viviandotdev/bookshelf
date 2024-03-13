import React from 'react';
import { NavLink } from './nav-link';
import { NavItem } from '@/types';

interface SecondaryHeaderProps {
  user: any;
  subItems: NavItem[];
}

export const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({
  user,
  subItems,
}) => {
  return (
    <nav className='flex border-t px-6 py-2.5' aria-label='Global'>
      <header className='flex items-center justify-start '>
        <nav className='flex flex-1 justify-start space-x-4'>
          {subItems?.length ? (
            <nav className='flex gap-6'>
              {subItems?.map((item, index) => (
                <NavLink
                  type='underlined'
                  key={index}
                  href={item.href!}
                  routeType={item.type}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          ) : null}
        </nav>
      </header>
    </nav>
  );
};
export default SecondaryHeader;
