'use client';
import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div>
      <div className='mb-4 flex w-full items-center'>
        <Button
          size='lg'
          className='h-10 w-full border-2 border-beige bg-white'
          variant='outline'
          onClick={(e) => {
            onClick('google');
          }}
        >
          <FcGoogle className='mr-2 h-5 w-5' /> Continue with Google
        </Button>
      </div>

      <div className='flex w-full items-center'>
        <Button
          size='lg'
          className='h-10 w-full border-beige bg-white'
          variant='outline'
          onClick={(e) => {
            onClick('github');
          }}
        >
          <FaGithub className='mr-2 h-5 w-5' /> Continue with Github
        </Button>
      </div>
    </div>
  );
};
