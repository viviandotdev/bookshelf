import { getCurrentUser } from "@/lib/auth/session";
import { authOptions } from "@/lib/auth/auth";
import { notFound, redirect } from "next/navigation";
import { siteConfig } from "@/config/site";
import { UserNav } from "@/modules/layout/components/user-nav";
interface UserLayoutProps {
    children: React.ReactNode;
    params: { user: string };
}

export default async function User({
    children,
    params,
}: UserLayoutProps) {
    const user = await getCurrentUser();
    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login");
    }
    if (!user.name || user.name !== params.user) {
        notFound();
    }
    return (
        <div className="grid w-full items-center mt-5">
            <UserNav items={siteConfig.userNav} user={user} />
            <div className="flex-col justify-center">{children}</div>
        </div>
    );
}
