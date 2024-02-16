import React from 'react'
import { NavLink } from './nav-link';
import { NavItem } from '@/types';

interface SecondaryHeaderProps {
    user: any
    subItems: NavItem[]
}

export const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ user, subItems }) => {


    return (
        <><header className="flex justify-start items-center py-2 px-8">
            <nav className="md:flex space-x-4 justify-start flex-1">
                {subItems?.length ? (
                    <nav className="hidden gap-6 md:flex">
                        {subItems?.map((item, index) => (
                            <NavLink type="underlined" key={index} href={item.href}>{item.title}</NavLink>
                        ))}
                    </nav>
                ) : null}
            </nav>
        </header>
            <hr className="border-gray-200" /></>
    );
}
export default SecondaryHeader
