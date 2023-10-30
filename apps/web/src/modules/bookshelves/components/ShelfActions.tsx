"use client";
import React, { useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import qs from "query-string";
import { Icons } from "@/components/icons";
import { Shelf } from "@/graphql/graphql";
import { useShelfModal } from "@/hooks/use-shelf-modal";
import useShelves from "@/hooks/use-shelves";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
interface ShelfActionsProps {
  shelf: Shelf;
  isShelves?: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShelfActions: React.FC<ShelfActionsProps> = ({
  shelf,
  isShelves,
  setOpenAlert,
}) => {
  const { selected } = useShelves();
  const shelfModal = useShelfModal();
  const updateSelected = useShelves((state) => state.updateSelected);
  const { data: session } = useSession();
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      shelf: shelf.name,
    };

    if (params?.get("shelf") === shelf.name) {
      delete updatedQuery.shelf;
    }

    const url = qs.stringifyUrl(
      {
        url: `/${session?.user.name}/books`,
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [shelf, router, params, session]);

  return (
    <div key={shelf.id}>
      <div
        className={`${
          shelf.name === selected
            ? "bg-secondary"
            : "hover:bg-slate-100 hover:bg-opacity-70"
        }  group/item flex rounded-lg px-3 font-medium`}
      >
        <div
          className={`w-[fill-available] cursor-pointer justify-between py-2`}
          onClick={() => {
            updateSelected(shelf.name!);
            handleClick();
          }}
        >
          <span className="flex">
            <Icons.shelf className="h-5 w-5 mr-4" />
            {shelf.name}
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
                  <span
                    className={`block group-hover/item:hidden cursor-pointer px-1 rounded-sm`}
                  >
                    {shelf._count.userBooks}
                  </span>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={"end"}
                side={"bottom"}
                alignOffset={-100}
              >
                <DropdownMenuItem
                  onClick={() => {
                    shelfModal.onEdit(shelf.id!);
                  }}
                >
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    shelfModal.onEdit(shelf.id!);
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
            <span
              className={`${
                isShelves ? "block group-hover/item:hidden" : ""
              } cursor-pointer px-1 rounded-sm py-2`}
            >
              {shelf._count.userBooks}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ShelfActions;
