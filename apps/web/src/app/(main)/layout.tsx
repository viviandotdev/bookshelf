import { SiteFooter } from "@/modules/layout/templates/site-footer";
import { getCurrentUser } from "@/lib/auth";
import SiteHeader from "@/modules/layout/templates/site-header";


interface PageLayoutProps {
    children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
    const user = await getCurrentUser();

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader user={user} />
            <main className="container flex-1 z-40 mx-auto px-16 lg:px-24 xl:px-28">
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}
