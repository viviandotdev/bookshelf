'use client';
import { useState } from 'react';
import Collapsible from '../../../components/ui/collapsible';
import AlertModal from '../../../components/modals/alert-modal';
import { Shelf } from '@/graphql/graphql';
import { ShelfItem } from './shelf-item';
import useCreateShelfModal from '../hooks/use-create-shelf-modal';
import { useDeleteShelf } from '../mutations/use-delete-shelf';
import useShelfStore from '@/stores/use-shelf-store';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
;

interface ShelfContainerProps {
    title: string;
    shelves: Shelf[];
    isShelves?: boolean;
    collapsible?: boolean;
    children?: React.ReactNode
}

const ShelfContainer: React.FC<ShelfContainerProps> = ({
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

    console.log(shelves)
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


                <div className="grid gap-0.5 text-sm">
                    {shelves.map((link, index) => (
                        // <Link key={index} href={"/"} className={cn('mr-4 flex text-base font-medium items-center gap-2 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-900', `${link.selected && "bg-beige-100"}`)}>
                        //     <Icons.shelf className="h-6 w-6" />
                        //     {link.name}
                        // </Link>
                        <ShelfItem
                            key={index}
                            shelf={link}
                            isShelves={isShelves}
                            setOpenAlert={setOpenAlert}
                        >
                        </ShelfItem>
                    ))}
                    {
                        isShelves &&
                        <Button className="flex mr-4 text-sm items-center gap-2 justify-start bg-beige-50 text-gray-400 rounded-lg px-3 transition-all ">
                            <Icons.plus className="h-4 w-4" />
                            Add a shelf
                        </Button>
                    }

                </div>



            </Collapsible>


        </>
    );
};

export default ShelfContainer;
