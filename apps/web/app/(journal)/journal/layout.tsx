import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import SiteHeader from "@/components/site-header";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function Journal({ children }: HomeLayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="container flex-1 z-40 bg-background mx-auto">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
