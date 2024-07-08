import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import MarketingTemplate from '@/modules/marketing/templates';
import { redirect } from 'next/navigation';

export default async function IndexPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect('/dashboard');
  } else {
    return (
      <div className='bg-muted/40 w-full '>
        <div className='flex flex-col bg-background'>
          <SiteHeader />
          <div className=''>
            <MarketingTemplate />
          </div>
        </div>
      </div>
    );
  }
}
