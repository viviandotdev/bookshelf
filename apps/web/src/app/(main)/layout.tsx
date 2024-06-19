import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import { MainSidebar } from './main-sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className='bg-muted/40 w-full '>
      <div className='flex flex-col bg-background'>
        <SiteHeader user={user} />
        <MainSidebar />
        <div className='ml-14'>{children}</div>

        {/* <SiteFooter /> */}
      </div>
    </div>
  );
}
