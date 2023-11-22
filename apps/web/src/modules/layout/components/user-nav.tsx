"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { UserAccountNav } from "./user-account-nav";
import { User } from "next-auth";
import Link from "next/link";

interface UserNavProps {
    items?: NavItem[];
    user: User;
}

export function UserNav({ user, items }: UserNavProps) {
    return (
        <nav className="bg-secondary flex w-full p-3 gap-20 rounded-lg items-center">
            <div className="flex items-center font-medium gap-3">
                <UserAccountNav
                    user={{
                        email: user.email,
                        name: user.name,
                        id: user.id,
                    }}
                />
                {user.name}
            </div>
            <div className="flex gap-3 text-sm">
                {items?.map((item, index) => (
                    <Link href={`/${user.name}${item.href}`} key={index} className={cn("flex")}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
