import { SiteFooter } from "@/modules/layout/templates/site-footer";
import { getCurrentUser } from "@/lib/auth/session";
import { authOptions } from "@/lib/auth/auth";
import { notFound, redirect } from "next/navigation";
import { myBooksConfig } from "@/config/mybooks";
import { AccountNav } from "@/modules/layout/components/account-nav";

interface AccountLayoutProps {
    children: React.ReactNode;
    params: { user: string };
}

export default async function Account({
    children,
    params,
}: AccountLayoutProps) {
    const user = await getCurrentUser();
    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login");
    }
    if (!user.name || user.name !== params.user) {
        notFound();
    }
    return (
        <div className="grid w-full items-center mt-5">
            <AccountNav items={myBooksConfig.profileNav} user={user} />
            <div className="flex-col justify-center">{children}</div>
        </div>
    );
}
