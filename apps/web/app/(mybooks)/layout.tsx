import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import SiteHeader from "@/components/site-header";
import { ProfileNav } from "@/components/profile-nav";
import { myBooksConfig } from "@/config/mybooks";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { getShelves } from "@/actions/getShelves";

interface MyBookLayoutProps {
  children: React.ReactNode;
}

export default async function MyBook({ children }: MyBookLayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const shelves = await getShelves();
  const librarySelectionsCounts = myBooksConfig.librarySelections.map(
    (selection) => {
      // TODO: compute the count for each selection based on your data logic.
      let min = Math.ceil(1);
      let max = Math.floor(200);
      const count = Math.floor(Math.random() * (max - min + 1)) + min;
      return count;
    }
  );

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="container flex-1 z-40 bg-background mx-auto px-8 lg:px-16 xl:px-28">
        <div className="grid w-full items-center mt-5">
          <ProfileNav items={myBooksConfig.profileNav} user={user} />
          <div className="flex-col justify-center">
            <div className="w-full grid grid-cols-4 gap-12">
              <Sidebar
                librarySelections={myBooksConfig.librarySelections}
                librarySelectionsCounts={librarySelectionsCounts}
                shelfSelections={shelves}
              />

              {children}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
