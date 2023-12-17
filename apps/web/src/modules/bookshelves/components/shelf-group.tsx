'use client';
import { useState } from 'react';
import Collapsible from '../../../components/ui/collapsible';
import AlertModal from '../../../components/modals/alert-modal';
import { Shelf } from '@/graphql/graphql';
import { ShelfItem } from './shelf-item';
import useCreateShelfModal from './modals/use-create-shelf-modal';
import { useDeleteShelf } from '../api/use-delete-shelf';
import useShelfStore from '@/stores/use-shelf-store';
import { Icons } from '../../../components/icons';
;

interface ShelfGroupProps {
    title: string;
    shelves: Shelf[];
    isShelves?: boolean;
    collapsible?: boolean;
    children?: React.ReactNode
}

const ShelfGroup: React.FC<ShelfGroupProps> = ({
    title,
    shelves,
    isShelves,
    collapsible,
    children
}) => {
    const [openAlert, setOpenAlert] = useState(false);
    const shelfModal = useCreateShelfModal();
    const [isLoading, setIsLoading] = useState(false);
    const { deleteShelf } = useDeleteShelf();
    const { removeShelf } = useShelfStore();
    const onDelete = async () => {
        setIsLoading(true);
        const deletedShelf = await deleteShelf(shelfModal.editId!);
        if (deletedShelf) {
            (removeShelf(shelfModal.editId!));
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

                        <ShelfItem
                            key={i}
                            shelf={shelf}
                            isShelves={isShelves}
                            setOpenAlert={setOpenAlert}
                        >
                         
                        </ShelfItem>

                    ))}

                    {children}
                </>
            </Collapsible>
        </>
    );
};

export default ShelfGroup;
