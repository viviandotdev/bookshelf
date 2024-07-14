'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
interface DemoButtonProps {}

export const DemoButton: React.FC<DemoButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const router = useRouter();
  const handleOnClick = async () => {
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        email: 'bookcue-demo@vivianlin.dev',
        password: 'demo',
        redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      });
      if (res?.error) {
        console.error('Error signing in:', res.error);
      } else {
        router.push(callbackUrl || DEFAULT_LOGIN_REDIRECT);
      }
    } catch (err: any) {
      //   setError('Error signing in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleOnClick}
      className={cn(
        buttonVariants({ variant: 'secondary' }),
        'text-md mt-4 h-12 translate-y-[-1rem] animate-fade-in px-6 opacity-0 [--animation-delay:600ms]'
      )}
    >
      Try Demo
    </Button>
  );
};
export default DemoButton;
