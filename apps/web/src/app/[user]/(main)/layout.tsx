import { SiteFooter } from '@/modules/layout/templates/site-footer';
import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import SecondaryHeader from '@/modules/layout/components/secondary-header';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
    const user = await getCurrentUser();
    const subItems = [
        {
            title: 'My Library',
            href: user ? `/${user.username}/books` : '/',
            isUserRoute: user ? true : false,
        },
        {
            title: 'Journal',
            href: user ? `/${user.username}/journal` : '/',
            isUserRoute: user ? true : false,
        },
        {
            title: 'Reviews',
            href: user ? `/${user.username}/reviews` : '/',
            isUserRoute: user ? true : false,
        },
        {
            title: 'Activity',
            href: user ? `/${user.username}/activity` : '/',
            isUserRoute: user ? true : false,
        },
    ];
    return (
        <div className='flex min-h-screen flex-col bg-background'>
            <SiteHeader user={user} />
            <SecondaryHeader user={user} subItems={subItems} />
            <main className='flex flex-col '>{children}</main>
            {/* <SiteFooter /> */}
        </div>
    );
}
