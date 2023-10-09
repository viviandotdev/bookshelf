"use client";
import React, { useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import qs from "query-string";
import { Icons } from "./icons";
import { NavItem } from "@/types";
import useSidebar from "@/hooks/use-shelf-store";
import { useShelfModal } from "@/hooks/use-shelf-modal";
import { useRouter, useSearchParams } from "next/navigation";

interface ShelfItemProps {
  heading: NavItem;
  isShelves?: boolean;
  counts: number[];
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  i: number;
}

export const ShelfItem: React.FC<ShelfItemProps> = ({
  heading,
  isShelves,
  counts,
  setOpenAlert,
  i,
}) => {
  const sidebar = useSidebar();
  const shelfModal = useShelfModal();
  const updateSelected = useSidebar((state) => state.updateSelected);

  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      shelf: heading.title,
    };

    if (params?.get("shelf") === heading.title) {
      delete updatedQuery.shelf;
    }

    const url = qs.stringifyUrl(
      {
        url: "/mybooks",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [heading, router, params]);
  return (
    <div key={i}>
      <div
        className={`${
          heading.title === sidebar.selected
            ? "bg-secondary"
            : "hover:bg-slate-100 hover:bg-opacity-70"
        }  group/item flex rounded-lg px-3 font-medium`}
      >
        <div
          className={`w-[fill-available] cursor-pointer justify-between py-2`}
          onClick={() => {
            updateSelected(heading.title!);
            handleClick();
          }}
        >
          <span className="flex">
            {heading.icon && nameIcon(heading.icon)}
            {heading.title}
          </span>
        </div>

        {isShelves ? (
          <>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger>
                <span>
                  <a className="group/edit hidden group-hover/item:block hover:bg-slate-200 rounded-sm px-1">
                    <Icons.more className="rotate-90 fill-current h-4 w-4 cursor-pointer stroke-muted-foreground stroke-1" />
                  </a>
                  {counts && (
                    <span
                      className={`${
                        isShelves ? "block group-hover/item:hidden" : ""
                      } cursor-pointer px-1 rounded-sm`}
                    >
                      {counts[i]}
                    </span>
                  )}
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={"end"}
                side={"bottom"}
                alignOffset={-100}
              >
                <DropdownMenuItem
                  onClick={() => {
                    shelfModal.onEdit(heading.id!);
                  }}
                >
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    shelfModal.onEdit(heading.id!);
                    setOpenAlert(true);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            {counts && (
              <span
                className={`${
                  isShelves ? "block group-hover/item:hidden" : ""
                } cursor-pointer px-1 rounded-sm py-2`}
              >
                {counts[i]}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const nameIcon = (iconName: string) => {
  const Icon = Icons[iconName];
  return (
    <>
      <Icon className="h-5 w-5 mr-4" />
    </>
  );
};
export default ShelfItem;
