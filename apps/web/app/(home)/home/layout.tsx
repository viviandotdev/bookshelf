import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import { SiteFooter } from "@/components/site-footer";
import { BooksSearch } from "@/components/search";
import { getCurrentUser } from "@/lib/auth/session";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function Home({
  children,
}: HomeLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container bg-background mx-auto px-8 lg:px-32">
        <div className="flex h-20 items-center justify-between py-6 space-x-4">
          <MainNav items={marketingConfig.mainNav} />
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <BooksSearch />
            </div>
            <nav>
            {!user && (
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 z-40 bg-background mx-auto px-8 lg:px-32">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
