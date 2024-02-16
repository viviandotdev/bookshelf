
import { SiteFooter } from "@/modules/layout/templates/site-footer";
import { getCurrentUser } from "@/lib/auth";
import SiteHeader from "@/modules/layout/templates/site-header";
import SecondaryHeader from "@/modules/layout/components/secondary-header";


interface PageLayoutProps {
    children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
    const user = await getCurrentUser();
    const subItems = [
        {
            title: "My Library",
            href: user ? `/${user.username}/books` : "/",
        },
        {
            title: "Journal",
            href: user ? `/${user.username}/journal` : "/",
        },
        {
            title: "Reviews",
            href: user ? `/${user.username}/reviews` : "/",
        },
        {
            title: "Activity",
            href: user ? `/${user.username}/activity` : "/",
        },
    ]
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader user={user} />
            <SecondaryHeader user={user} subItems={subItems} />
            <main className="flex flex-col ">
                {children}
            </main>
            {/* <SiteFooter /> */}
        </div>
    );
}
