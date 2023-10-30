import { getCurrentUser } from "@/lib/auth/session";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { myBooksConfig } from "@/config/mybooks";
import { AccountNav } from "@/components/account-nav";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function Journal({ children }: HomeLayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="grid w-full items-center mt-5">
      <AccountNav items={myBooksConfig.profileNav} user={user} />
      <div className="flex-col justify-center">{children}</div>
    </div>
  );
}
