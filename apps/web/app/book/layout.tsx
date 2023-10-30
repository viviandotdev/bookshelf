import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import SiteHeader from "@/components/site-header";

interface BookLayoutProps {
  children: React.ReactNode;
}

export default async function Book({ children }: BookLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="container flex-1 z-40 bg-background mx-auto px-8 lg:px-16 xl:px-28">

        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
