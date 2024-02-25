'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  type?: 'underlined' | 'default'; // Make type optional using `?`
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  type = 'default',
}) => {
  const segments = useSelectedLayoutSegments();
  const active = href.startsWith(`/${segments.join('/')}`);
  let activeStyle;
  if (type === 'underlined') {
    activeStyle = active
      ? 'underline-distance"'
      : 'text-gray-400 text-xs font-normal';
  } else {
    activeStyle = active ? 'bg-beige-100 py-2 px-3 rounded-xl' : '';
  }
  return (
    <Link
      className={cn(
        'hover:text-foreground/80 flex items-center font-medium text-beige-700 transition-colors sm:text-sm',
        activeStyle
        // item.disabled && "cursor-not-allowed opacity-80"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
export default NavLink;
