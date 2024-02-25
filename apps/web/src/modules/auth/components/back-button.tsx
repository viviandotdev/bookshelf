'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      variant='link'
      className='w-full font-normal hover:bg-white'
      size='sm'
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
