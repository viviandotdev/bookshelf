import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import { MainSidebar } from './main-sidebar';
import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
    const user = await getCurrentUser();
    const session = await auth();
    console.log("current user", user)
    if (session?.error === "RefreshTokenError" || !user) {
        await signOut() // Force sign in to obtain a new set of access and refresh tokens
        redirect('/');
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
