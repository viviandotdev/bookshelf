import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import { myBooksConfig } from "@/config/mybooks";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { getShelves } from "@/actions/getShelves";

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
