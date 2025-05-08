import Link from 'next/link';
import { Metadata } from 'next';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
import LoginTemplate from '@/modules/auth/templates/login-template';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'link' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          Back
        </>
      </Link>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
     
        <LoginTemplate />
      </div>
    </div>
  );
}
