"use client";
import React, { useCallback, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import EditShelfMenu from "./edit-shelf-menu";
import useCreateQueryString from "../hooks/use-create-query-string";
import useShelfStore from "@/stores/use-shelf-store";

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
    const router = useRouter();
    const updateSelected = useShelfStore((state) => state.updateSelected);
    const createQueryString = useCreateQueryString();
    const handleClick = useCallback(() => {
        (updateSelected(shelf.name!));
        startTransition(() => {
            router.push(
                `${pathname}?${createQueryString({
                    shelf: shelf.name,
                    page: 1,
                    status: "Any Status",
                })}`,
            )
        })
    }, [shelf]);

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
