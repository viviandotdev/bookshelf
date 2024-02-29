import { SiteFooter } from '@/modules/layout/templates/site-footer';
import { getCurrentUser } from '@/lib/auth';
import SiteHeader from '@/modules/layout/templates/site-header';
import SecondaryHeader from '@/modules/layout/components/secondary-header';

interface PageLayoutProps {
    children: React.ReactNode;
    params: { bookId: string };
}

export default async function PageLayout({ children, params }: PageLayoutProps) {
    console.log(params)
    const user = await getCurrentUser();
    // pathname
    const subItems = [
        {
            title: 'Activity',
            href: `activity`,
            type: "book"
        },
        {
            title: 'Journal',
            href: `journal`,
            type: "book"
        },
        {
            title: 'Reviews',
            href: `reviews`,
            type: "book"
        },
        {
            title: 'Lists',
            href: `lists`,
            type: "book"
        },
    ];
    return (
        <div className='flex min-h-screen flex-col bg-background'>
            <SiteHeader user={user} />
            <SecondaryHeader user={user} subItems={subItems} />
            <main className='container z-40 mx-auto flex-1 '>{children}</main>
            <SiteFooter />
        </div>
    );
}
