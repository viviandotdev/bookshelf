import { SiteFooter } from "@/modules/layout/templates/site-footer";
import { getCurrentUser } from "@/lib/auth";
import SiteHeader from "@/modules/layout/templates/site-header";

interface PageLayoutProps {
    children: React.ReactNode;
}

export default async function SettingsPageLayout({ children }: PageLayoutProps) {
    const user = await getCurrentUser();
    console.log(user)
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader user={user} />
            <main className="container flex-1 z-40 bg-beige-50 mx-auto px-8 lg:px-16 xl:px-28">
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}
