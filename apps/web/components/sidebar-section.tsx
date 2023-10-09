import { NavItem } from "@/types";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import useSidebar from "@/hooks/use-shelf-store";
import Collapsible from "./ui/collapsible";
import { useShelfModal } from "@/hooks/use-shelf-modal";
import { useEffect, useState } from "react";
import AlertModal from "./modal/alert-modal";
import { toast } from "@/hooks/use-toast";
import { useDeleteShelfMutation } from "@/graphql/graphql";
import { useSearchParams, usePathname } from "next/navigation";
import ShelfItem from "./shelf-item";

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
  const [openAlert, setOpenAlert] = useState(false);
  const shelfModal = useShelfModal();
  const updateSelected = useSidebar((state) => state.updateSelected);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteShelf] = useDeleteShelfMutation();


  const onDelete = async () => {
    setIsLoading(true);
    if (!shelfModal.isOpen) {
      return;
    }
    setIsLoading(true);
    const { data } = await deleteShelf({
      variables: {
        where: {
          id: shelfModal.editId,
        },
      },
    });

    if (!data) {
      toast({
        title: "Error delting shelf",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sucessfylly deleted shelf",
      });
    }

    setIsLoading(false);
    sidebar.removeShelf(shelfModal.editId!);
    shelfModal.onClose();
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
            <ShelfItem
              heading={heading}
              isShelves={isShelves}
              counts={counts!}
              i={i}
              setOpenAlert={setOpenAlert}
            />
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

export default SidebarSection;
