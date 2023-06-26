import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import SiteHeader from "@/components/site-header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/home");
  }

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
