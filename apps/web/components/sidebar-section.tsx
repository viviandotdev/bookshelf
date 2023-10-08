import { NavItem } from "@/types";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import useSidebar from "@/hooks/use-sidebar";
import Collapsible from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useShelfModal } from "@/hooks/use-shelf-modal";
import { useState } from "react";
import AlertModal from "./modal/alert-modal";
import { toast } from "@/hooks/use-toast";

interface SidebarSectionProps {
  title: string;
  items: NavItem[];
  counts?: number[];
  isShelves?: boolean;
  collapsible?: boolean;
}
//TODO: Shelf couldn't be created. Shelf name is either invalid or a duplicate.

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  counts,
  isShelves,
  collapsible,
}) => {
  const sidebar = useSidebar();
  const [openAlert, setOpenAlert] = useState(false);
  const shelfModal = useShelfModal();
  const updateSelected = useSidebar((state) => state.updateSelected);
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = async () => {
    setIsLoading(true);
    // const { data, errors } = await removeUserBook({
    //   variables: {
    //     where: {
    //       bookId: userBook.bookId,
    //       userId: userBook.userId,
    //     },
    //   },
    // });

    // if (errors) {
    //   toast({
    //     title: "Something went wrong",
    //     variant: "destructive",
    //   });
    // }

    // if (data) {
    //   toast({
    //     title: "Sucessfylly deleted book",
    //   });
    //   setIsLoading(false);
    // }
    setOpenAlert(false);
  };
  return (
    <>
      <AlertModal
        title={"Are you sure you want to remove this shelf?"}
        description={"This action cannot be undone."}
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
        onConfirm={() => {
          onDelete();
        }}
        loading={false}
      />
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
                    <DropdownMenu key={i} modal={false}>
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
                            shelfModal.onEdit(heading.title!);
                          }}
                        >
                          Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setOpenAlert(true);
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
                onClick={shelfModal.onOpen}
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
