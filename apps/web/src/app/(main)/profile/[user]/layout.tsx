import { getCurrentUser } from "@/lib/auth/session";
interface ProfileLayoutProps {
    children: React.ReactNode;
}

export default async function ProfileLayout({
    children,
}: ProfileLayoutProps) {
    const user = await getCurrentUser();
    return (
        <div className="grid w-full items-center mt-5">
            {/* <UserNav items={siteConfig.userNav} user={user} /> */}
            <div className="flex-col justify-center">{children}</div>
        </div>
    );
}
