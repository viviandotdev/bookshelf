
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/modules/layout/components/main-nav";
import { UserAccountNav } from "@/modules/layout/components/user-account-nav";
import SearchInput from "../components/search-input";
import LogBookButton from "../components/log-book-button";
import { User } from "@/types/interfaces";
import { getCurrentUser } from "@/lib/auth";

interface SiteHeaderProps {

}

const SiteHeader = async () => {
    const user = await getCurrentUser();
    const items = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "My Books",
            href: user ? `/${user.username}/books` : "/",
        },
        {
            title: "Browse",
            href: "/browse",
        },
    ]


    return (
        <header className="container bg-background mx-auto">
            <div className="flex h-20 items-center justify-between py-6 space-x-4">
                <MainNav items={items} />
                <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                    <div className="flex-1 sm:grow-0">
                        <SearchInput />
                        {/* <CommandMenu /> */}
                    </div>
                    <nav>
                        {user ? (
                            <div className="flex gap-4">
                                <UserAccountNav
                                    user={{
                                        email: user.email,
                                        username: user.username,
                                        id: user.id,
                                    }}
                                />
                                <LogBookButton />
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({ variant: "beige-100", size: "sm" }),
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

}

// const SiteHeader: React.FC<SiteHeaderProps> = async () => {
//     const user = await getCurrentUser();
//     const items = [
//         {
//             title: "Home",
//             href: "/",
//         },
//         {
//             title: "My Books",
//             href: user ? `/${user.username}/books` : "/",
//         },
//         {
//             title: "Browse",
//             href: "/browse",
//         },
//     ]

// };

export default SiteHeader;
