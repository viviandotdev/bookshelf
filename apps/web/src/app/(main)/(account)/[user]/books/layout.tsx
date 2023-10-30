import { SiteFooter } from "@/src/components/site-footer";
import { getCurrentUser } from "@/src/lib/auth/session";
import { myBooksConfig } from "@/src/config/mybooks";
import { authOptions } from "@/src/lib/auth/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/src/components/sidebar";
import { getShelves } from "@/src/actions/getShelves";

interface MyBookLayoutProps {
  children: React.ReactNode;
}

export default async function MyBook({ children }: MyBookLayoutProps) {
  const { library, shelves } = await getShelves();

  return (
    <div className="w-full grid grid-cols-4 gap-12">
      <Sidebar librarySelections={library} shelfSelections={shelves} />
      {children}
    </div>
  );
}
