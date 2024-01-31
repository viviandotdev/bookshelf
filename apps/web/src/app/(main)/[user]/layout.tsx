import { getCurrentUser } from "@/lib/auth";
import { siteConfig } from "@/config/site";
import { UserNav } from "@/modules/layout/components/user-nav";
interface UserLayoutProps {
    children: React.ReactNode;
}

export default async function User({
    children,
}: UserLayoutProps) {
    const user = await getCurrentUser();


    return (
        <div className="grid w-full items-center mt-5">
            <UserNav items={siteConfig.userNav} user={user} />
            <div className="flex-col justify-center">{children}</div>
        </div>
    );
}
