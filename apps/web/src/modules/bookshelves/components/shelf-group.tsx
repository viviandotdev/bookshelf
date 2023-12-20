'use client';
import { useState } from 'react';
import Collapsible from '../../../components/ui/collapsible';
import AlertModal from '../../../components/modals/alert-modal';
import { Shelf } from '@/graphql/graphql';
import { ShelfItem } from './shelf-item';
import useCreateShelfModal from './modals/use-create-shelf-modal';
import { useDeleteShelf } from '../api/use-delete-shelf';
import useShelfStore from '@/stores/use-shelf-store';
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
    const { removeShelf } = useShelfStore();
    const { deleteShelf } = useDeleteShelf({
        onSuccess: (_) => {
            removeShelf(shelfModal.shelf!.id);
            setOpenAlert(false);
            shelfModal.onClose();
        }
    });

    return (
        <>
            <AlertModal
                title={"Are you sure you want to remove this shelf?"}
                description={"This action cannot be undone."}
                isOpen={openAlert}
                onClose={() => setOpenAlert(false)}
                onConfirm={async () => {
                    await deleteShelf({ id: shelfModal.shelf!.id });
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
