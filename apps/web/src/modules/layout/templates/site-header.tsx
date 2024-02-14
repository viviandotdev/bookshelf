
import React from "react";
import { MainNav } from "@/modules/layout/components/main-nav";
;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavLink from "../components/nav-link";
import { Icons } from "@/components/icons";
import { UserAccountNav } from "../components/user-account-nav";
import { LogBookButton } from "../components/log-book-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
    user: any
}

const SiteHeader = ({ user }: SiteHeaderProps) => {
    const items = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "My Library",
            href: user ? `/${user.username}/books` : "/",
        },
        {
            title: "Browse",
            href: "/browse",
        },
        {
            title: "Community",
            href: "/browse",
        },
    ]
    const subItems = [
        {
            title: "My Library",
            href: user ? `/${user.username}/books` : "/",
        },
        {
            title: "Journal",
            href: user ? `/${user.username}/journal` : "/",
        },
        {
            title: "Reviews",
            href: user ? `/${user.username}/reviews` : "/",
        },
        {
            title: "Activity",
            href: user ? `/${user.username}/activity` : "/",
        },
    ]

    return (
        <header className="container max-w-[none] bg-background p-0">
            <header className="flex container max-w-[none] justify-between items-center mx-0 py-2">
                <MainNav items={items} />
                <div className="flex items-center space-x-6">
                    {/* <MicroscopeIcon className="text-gray-600" /> */}
                    <Icons.search className="text-beige-700" />
                    {user ? (
                        <div className="flex gap-4">
                            <UserAccountNav
                                user={{
                                    email: user.email,
                                    username: user.username,
                                    id: user.id,
                                }}
                            />
                            {/* <LogBookButton /> */}
                        </div>
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
                    {/* <Avatar size={"default"}>
                        <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>VL</AvatarFallback>
                    </Avatar> */}
                </div>
            </header>
            <hr className="border-gray-200" />
            <header className="flex justify-start items-center py-2 px-8">
                <nav className="md:flex space-x-4 justify-start flex-1">
                    {subItems?.length ? (
                        <nav className="hidden gap-6 md:flex">
                            {subItems?.map((item, index) => (
                                <NavLink type="underlined" key={index} href={item.href}>{item.title}</NavLink>
                            ))}
                        </nav>
                    ) : null}
                </nav>
            </header>
            <hr className="border-gray-200" />

        </header>
    );

}


export default SiteHeader;
