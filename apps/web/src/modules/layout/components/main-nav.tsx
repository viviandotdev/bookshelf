import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import { dm_sefif_display } from "@/lib/fonts";
import MobileMenu from "./mobile-menu";
import { NavLink } from "./nav-link";

interface MainNavProps {
    children?: React.ReactNode;
    items: MainNavItem[];
}

export function MainNav({ children, items }: MainNavProps) {
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <h1
                    className={cn(
                        dm_sefif_display.className,
                        "hidden sm:inline-block text-beige text-3xl "
                    )}
                >
                    {siteConfig.name}
                </h1>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <NavLink key={index} href={item.href}>{item.title}</NavLink>
                    ))}
                </nav>
            ) : null}
            <MobileMenu items={items}>
                {children}
            </MobileMenu>
        </div>
    );
}
