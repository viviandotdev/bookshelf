import { SiteFooter } from '@/modules/layout/templates/site-footer';
import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import SecondaryHeader from '@/modules/layout/components/secondary-header';

interface PageLayoutProps {
  children: React.ReactNode;
  //   get the paraemeeets
}

export default async function PageLayout({ children }: PageLayoutProps) {
  const user = await getCurrentUser();
  // pathname
  const subItems = [
    {
      title: 'Activity',
      href: user ? `/book/activity` : '/',
    },
    {
      title: 'Journal',
      href: user ? `/book/journal` : '/',
    },
    {
      title: 'Lists',
      href: user ? `/book/lists` : '/',
    },
  ];
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader user={user}>
        <SecondaryHeader user={user} subItems={subItems} />
      </SiteHeader>

      <main className='container z-40 mx-auto flex-1 '>{children}</main>
      <SiteFooter />
    </div>
  );
}
