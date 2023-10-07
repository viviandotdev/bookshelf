import { NavItem } from "@/types";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import useSidebar from "@/hooks/use-sidebar";
import useCreateShelfModal from "@/hooks/use-create-shelf-moda";
import Collapsible from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { useState } from "react";

interface SidebarSectionProps {
  title: string;
  items: NavItem[];
  counts?: number[];
  isShelves?: boolean;
  collapsible?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  counts,
  isShelves,
  collapsible,
}) => {
  const sidebar = useSidebar();
  const createShelfModal = useCreateShelfModal();
  const updateSelected = useSidebar((state) => state.updateSelected);
  return (
    <>
      <Collapsible title={title} collapsible={collapsible}>
        <>
          {items.map((heading, i) => (
            <>
              <div
                className={`${
                  heading.title === sidebar.selected
                    ? "bg-secondary"
                    : "hover:bg-slate-100 hover:bg-opacity-70"
                } group/item flex rounded-lg px-3 font-medium`}
                key={i}
              >
                <div
                  key={i}
                  className={`w-[fill-available] cursor-pointer justify-between py-2`}
                  onClick={() => updateSelected(heading.title!)}
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
                            console.log("REname" + i);
                          }}
                        >
                          Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            console.log("Delete" + i);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <span>
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
                )}
              </div>
            </>
          ))}

          {isShelves && (
            <div className="pt-1.5">
              <Button
                className="w-[fill-available]"
                size="sm"
                label="Add Shelf"
                onClick={createShelfModal.onOpen}
                icon={<Icons.edit className="h-4 w-4 mr-2" />}
              />
            </div>
          )}
        </>
      </Collapsible>
    </>
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

export default SidebarSection;
