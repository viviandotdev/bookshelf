import { MainSidebar } from '@/app/(main)/main-sidebar';
import { auth, signOut } from '@/auth';
import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import { redirect } from 'next/navigation';
import NotLoggedIn from '@/components/not-logged-in';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
    const user = await getCurrentUser();
    if (!user) {
        return <NotLoggedIn />;
    }

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
