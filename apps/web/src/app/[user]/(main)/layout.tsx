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
            type: user ? "user" : "",
        },
        {
            title: 'Journal',
            href: user ? `/${user.username}/journal` : '/',
            type: user ? "user" : "",
        },
        {
            title: 'Activity',
            href: user ? `/${user.username}/activity` : '/',
            type: user ? "user" : "",
        },
        {
            title: 'Lists',
            href: user ? `/${user.username}/lists` : '/',
            type: user ? "user" : "",
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
