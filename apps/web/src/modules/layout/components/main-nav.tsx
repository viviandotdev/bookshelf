"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MainNavItem } from "@/types";
import { MobileNav } from "@/modules/layout/components/mobile-nav";
import { dm_sefif_display } from "@/lib/fonts";
import { useSession } from "next-auth/react";

interface MainNavProps {
    children?: React.ReactNode;
}

export function MainNav({ children }: MainNavProps) {
    const { data: session } = useSession();
    const segment = useSelectedLayoutSegment();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const items = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "My Books",
            href: `/${session?.user.name}/books`,
        },
        {
            title: "Browse",
            href: "/browse",
        },
    ]
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <h1
                    className={cn(
                        dm_sefif_display.className,
                        "hidden sm:inline-block text-primary text-3xl "
                    )}
                >
                    {siteConfig.name}
                </h1>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground/60"
                                    : "text-foreground",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <button
                className="flex items-center space-x-2 md:hidden text-foreground font-bold"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                <span>Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    );
}
