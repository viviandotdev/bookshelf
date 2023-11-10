"use client";
import React, { use, useCallback } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import qs from "query-string";
import { Icons } from "../../../components/icons";
// import useShelves from "@/stores/shelf-store";
import { useRouter, useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setCurrentPage, updateSelected } from "@/stores/shelf-slice";
import EditShelfMenu from "./edit-shelf-menu";

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
    const dispatch = useAppDispatch();

    const { data: session } = useSession();
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        dispatch(updateSelected(shelf.name!));
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            shelf: shelf.name,
            page: 1,
        };

        if (params?.get("shelf") === shelf.name) {
            delete updatedQuery.shelf;
        }

        const url = qs.stringifyUrl(
            {
                url: `/${session!.user.name}/books`,
                query: updatedQuery,
            },
            { skipNull: true }
        );
        dispatch(setCurrentPage(0))
        router.push(url);
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
