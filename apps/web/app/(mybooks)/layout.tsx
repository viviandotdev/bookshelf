import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import SiteHeader from "@/components/site-header";
import { ProfileNav } from "@/components/profile-nav";
import { myBooksConfig } from "@/config/mybooks";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

interface MyBookLayoutProps {
  children: React.ReactNode;
}

export default async function MyBook({ children }: MyBookLayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="container flex-1 z-40 bg-background mx-auto px-8 lg:px-16 xl:px-28">
        <div className="grid w-full items-center mt-5">
          <ProfileNav items={myBooksConfig.profileNav} user={user} />
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
