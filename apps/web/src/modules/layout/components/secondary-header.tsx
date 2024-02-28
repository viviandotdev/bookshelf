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
        <>
            <header className='flex items-center justify-start px-8 py-2'>
                <nav className='flex-1 justify-start space-x-4 md:flex'>
                    {subItems?.length ? (
                        <nav className='hidden gap-6 md:flex'>
                            {subItems?.map((item, index) => (
                                <NavLink type='underlined' key={index} href={item.href} routeType={item.type}>
                                    {item.title}
                                </NavLink>
                            ))}
                        </nav>
                    ) : null}
                </nav>
            </header>
            <hr className='border-gray-200' />
        </>
    );
};
export default SecondaryHeader;
