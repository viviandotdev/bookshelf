'use client'
import { Icons } from "../../../components/icons";
import { Button } from "../../../components/ui/button";
import Collapsible from "../../../components/ui/collapsible";
import { useState } from "react";
import AlertModal from "../../../components/modals/alert-modal";
import { Shelf } from "@/graphql/graphql";
import { ShelfActions } from "./shelf-actions";
import useCreateShelfModal from "../hooks/use-create-shelf-modal";
import { useAppDispatch, useAppSelector } from "@/stores";
import { removeShelf } from "@/stores/shelf-slice";
import { CreateShelfModal } from "./create-shelf-modal";
import { useDeleteShelf } from "../api/use-delete-shelf";

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
    const dispatch = useAppDispatch();
    const [openAlert, setOpenAlert] = useState(false);
    const shelfModal = useCreateShelfModal();
    const [isLoading, setIsLoading] = useState(false);
    const { deleteShelf } = useDeleteShelf();
    const selected = useAppSelector((state) => state.shelf.selected);
    const onDelete = async () => {
        setIsLoading(true);
        const deletedShelf = await deleteShelf(shelfModal.editId!);
        if (deletedShelf) {
            dispatch(removeShelf(shelfModal.editId!));
        }
        setIsLoading(false);
        setOpenAlert(false);
        shelfModal.onClose();
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
                        <div
                            key={i}
                            className={`${shelf.name === selected
                                ? "bg-secondary"
                                : "hover:bg-slate-100 hover:bg-opacity-70"
                                }  group/item flex rounded-lg px-3 font-medium `}
                        >
                            <ShelfActions
                                shelf={shelf}
                                isShelves={isShelves}
                                setOpenAlert={setOpenAlert}
                            >
                                <Icons.shelf className="h-5 w-5 mr-4" />
                                {shelf.name}
                            </ShelfActions>
                        </div>

                    ))}

                    {isShelves && (
                        <div className="pt-1.5">
                            <CreateShelfModal />
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
