import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
const user = await getCurrentUser();
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader user={user}></SiteHeader>
      <main className='flex flex-col '>{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}
