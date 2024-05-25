import { SiteFooter } from '@/modules/layout/templates/site-footer';
import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';

interface PageLayoutProps {
  children: React.ReactNode;
  params: { bookId: string };
}

export default async function PageLayout({
  children,
  params,
}: PageLayoutProps) {
  console.log(params);
  const user = await getCurrentUser();
  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader user={user}></SiteHeader>

      <main className='container z-40 mx-auto flex-1 '>{children}</main>
      <SiteFooter />
    </div>
  );
}
