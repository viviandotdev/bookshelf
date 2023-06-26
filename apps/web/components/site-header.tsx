import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { CommandMenu } from "@/components/command-menu";
import { UserAccountNav } from "@/components/user-account-nav";
import { marketingConfig } from "@/config/marketing";
import { User } from "next-auth"

interface SiteHeaderProps {
    user: User;
  }

const SiteHeader: React.FC<SiteHeaderProps> = ({user}) => {
    
  return (
    <header className="container bg-background mx-auto px-8 lg:px-16 xl:px-28">
      <div className="flex h-20 items-center justify-between py-6 space-x-4">
        <MainNav items={marketingConfig.mainNav} />
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <div className="flex-1 sm:grow-0">
            <CommandMenu />
          </div>
          <nav>
            {user ? (
              <UserAccountNav
                user={{
                  email: user.email,
                  name: user.name,
                  id: user.id,
                }}
              />
            ) : (
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
  );
};

export default SiteHeader;
