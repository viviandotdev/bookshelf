
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
import MainHeader from "../components/main-header";
import SecondaryHeader from "../components/secondary-header";

interface SiteHeaderProps {
    user: any
    secondary?: React.ReactNode
}

const SiteHeader = ({ user, secondary }: SiteHeaderProps) => {
    return (
        <header className="container max-w-[none] bg-background p-0">
            <MainHeader user={user} />
            <hr className="border-gray-200" />
            {secondary}

        </header>
       
    );

}


export default SiteHeader;
