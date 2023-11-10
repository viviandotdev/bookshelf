"use client";
import React, { use, useCallback, useTransition } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import qs from "query-string";
import { Icons } from "../../../components/icons";
// import useShelves from "@/stores/shelf-store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setCurrentPage, updateSelected } from "@/stores/shelf-slice";
import EditShelfMenu from "./edit-shelf-menu";
import useCreateQueryString from "../hooks/use-create-query-string";

interface ShelfActionsProps {
    shelf: Shelf;
    isShelves?: boolean;
    setOpenAlert?: React.Dispatch<React.SetStateAction<boolean>>;
    padding?: string;
    children?: React.ReactNode
}

export const ShelfActions: React.FC<ShelfActionsProps> = ({
    shelf,
    isShelves,
    setOpenAlert,
    padding = "py-2",
    children

}) => {
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()
    const dispatch = useAppDispatch();
    const { data: session } = useSession();
    const router = useRouter();
    const params = useSearchParams();
    const createQueryString = useCreateQueryString();
    const handleClick = useCallback(() => {
        dispatch(updateSelected(shelf.name!));
        startTransition(() => {
            router.push(
                `${pathname}?${createQueryString({
                    shelf: shelf.name,
                    page: 1,
                    status: "Any Status",
                })}`,
            )
        })
    }, [shelf, router, params, session]);

    return (
        <>
            <div
                className={`w-[fill-available] cursor-pointer ${padding}`}
                onClick={handleClick}
            >
                <span className="flex">
                    {children}
                </span>
            </div>

            {
                setOpenAlert && isShelves ? (
                    <EditShelfMenu shelf={shelf} setOpenAlert={setOpenAlert} />
                ) : (
                    <span
                        className={`${isShelves ? "block group-hover/item:hidden items-end" : ""
                            } cursor-pointer px-1 rounded-sm ${padding}`}
                    >
                        {shelf._count.userBooks}
                    </span>
                )
            }
        </>
    );
};


export default ShelfActions;
