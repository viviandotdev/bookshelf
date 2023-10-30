import { Icons } from "../../../components/icons";
import { Button } from "../../../components/ui/button";
import useShelves from "@/hooks/use-shelves";
import Collapsible from "../../../components/ui/collapsible";
import { useShelfModal } from "@/hooks/use-shelf-modal";
import { useState } from "react";
import AlertModal from "../../../components/modal/alert-modal";
import { toast } from "@/hooks/use-toast";
import { Shelf, useDeleteShelfMutation } from "@/graphql/graphql";
import { ShelfActions } from "./shelf-actions";

interface ShelfGroupProps {
    title: string;
    shelves: Shelf[];
    isShelves?: boolean;
    collapsible?: boolean;
}

const ShelfGroup: React.FC<ShelfGroupProps> = ({
    title,
    shelves,
    isShelves,
    collapsible,
}) => {
    const { removeShelf } = useShelves();
    const [openAlert, setOpenAlert] = useState(false);
    const shelfModal = useShelfModal();
    const [isLoading, setIsLoading] = useState(false);
    const [deleteShelf] = useDeleteShelfMutation();

    const onDelete = async () => {
        setIsLoading(true);
        if (!shelfModal.isOpen) {
            return;
        }
        setIsLoading(true);
        await deleteShelf({
            variables: {
                where: {
                    id: shelfModal.editId,
                },
            },
            onError: (err) => {
                toast({
                    title: "Error deleting shelf",
                    variant: "destructive",
                });
            },
            onCompleted: (data) => {
                toast({
                    title: "Sucessfylly deleted shelf",
                });
            },
        });

        setIsLoading(false);
        removeShelf(shelfModal.editId!);
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
                    {shelves.map((shelf, i) => (
                        <ShelfActions
                            key={i}
                            shelf={shelf}
                            isShelves={isShelves}
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

export default ShelfGroup;
