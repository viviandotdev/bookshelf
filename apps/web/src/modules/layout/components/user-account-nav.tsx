"use client";

import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { useLogoutMutation } from "@/graphql/graphql";
import { useApolloClient } from "@apollo/client";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
    user: Pick<User, "email" | "name" | "id">;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
    const [logout] = useLogoutMutation();
    const apolloClient = useApolloClient();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    user={{ name: user.name || null }}
                    size={"default"}
                    className="h-8 w-8"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <Link className="flex items-center justify-start gap-2 p-2" href={`${user.name}`}>
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.name && <p className="font-medium">{user.name}</p>}
                        {user.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        )}
                    </div>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href={`${user.name}/books`}>Books</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href="/account/import">Import Books</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={async (event) => {
                        event.preventDefault();
                        await logout({
                            variables: {
                                id: user.id,
                            },
                        });
                        await apolloClient.resetStore();
                        signOut({
                            callbackUrl: `${window.location.origin}/login`,
                        });
                    }}
                >
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
