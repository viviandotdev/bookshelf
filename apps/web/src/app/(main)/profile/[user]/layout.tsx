import { getCurrentUser } from '@/lib/auth';
interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  const user = await getCurrentUser();
  return (
    <div className='mt-5 grid w-full items-center'>
      {/* <UserNav items={siteConfig.userNav} user={user} /> */}
      <div className='flex-col justify-center'>{children}</div>
    </div>
  );
}
