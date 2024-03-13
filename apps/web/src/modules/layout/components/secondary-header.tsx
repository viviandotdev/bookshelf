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
        <nav className="flex py-2.5 px-6 border-t" aria-label="Global">
            <header className='flex items-center justify-start '>
                <nav className='flex-1 justify-start space-x-4 flex'>
                    {subItems?.length ? (
                        <nav className='gap-6 flex'>
                            {subItems?.map((item, index) => (
                                <NavLink type="underlined" key={index} href={item.href!} routeType={item.type}>
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
