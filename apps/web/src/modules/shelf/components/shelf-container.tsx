'use client';
import { useState } from 'react';
import AlertModal from '../../../components/modals/alert-modal';
import { Shelf } from '@/graphql/graphql';
import { ShelfItem } from './shelf-item';
import useCreateShelfModal from '../hooks/use-create-shelf-modal';
import { useDeleteShelf } from '../mutations/use-delete-shelf';
import useShelfStore from '@/stores/use-shelf-store';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
interface ShelfContainerProps {
    title: string;
    shelves: Shelf[];
    isShelves?: boolean;
    counts?: {
        [key: string]: number;
    };
}

const ShelfContainer: React.FC<ShelfContainerProps> = ({
    title,
    shelves,
    isShelves,
    counts,
}) => {
    const [openAlert, setOpenAlert] = useState(false);
    const shelfModal = useCreateShelfModal();
    const { removeShelf } = useShelfStore();
    const { deleteShelf } = useDeleteShelf({
        onSuccess: (_) => {
            removeShelf(shelfModal.shelf!.slug);
            setOpenAlert(false);
            shelfModal.onClose();
        },
    });

    return (
        <>
            <AlertModal
                title={'Are you sure you want to remove this shelf?'}
                description={'This action cannot be undone.'}
                isOpen={openAlert}
                onClose={() => setOpenAlert(false)}
                onConfirm={async () => {
                    await deleteShelf({ slug: shelfModal.shelf!.slug });
                }}
                loading={false}
            />
            <div key={1}>
                <div className=' items-start text-base font-semibold text-beige'>
                    {!isShelves ? (
                        <div
                            className={cn(dm_sefif_display.className, 'ml-2 mr-6 text-3xl py-4 pr-2 font-medium items-center justify-between')}
                        >

                            My Library
                        </div>
                    ) : (
                        <div
                            className={`ml-2 mr-6 flex flex-1 py-2 pr-2 font-medium transition-all  cursor-pointer items-center justify-between`}
                        >
                            <div
                                className={cn('h-px w-full bg-gray-200')}
                            />
                        </div>


                    )}

                </div>
                <div
                    className={`transition-max-height overflow-hidden duration-700 ease-in-out`}
                >
                    <div> <div className='grid gap-1 text-sm'>
                        {shelves.map((link, index) => (
                            <ShelfItem
                                key={index}
                                shelf={link}
                                isShelves={isShelves}
                                counts={counts ? counts[link.name!] : 0}
                                setOpenAlert={setOpenAlert}
                            ></ShelfItem>
                        ))}
                        {isShelves && (
                            <>
                                <Button
                                    onClick={() => {
                                        shelfModal.onOpen();
                                    }}
                                    className={`my-3 mr-4 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100`}
                                >
                                    <span className='sr-only'>Edit Shelf</span>
                                    <div className='flex gap-2'>
                                        <div className='flex items-center justify-center'>
                                            <Plus className={`h-4 w-4 `} />
                                        </div>
                                        Add a shelf
                                    </div>
                                </Button>
                            </>
                        )}
                    </div></div>
                </div>
            </div>

        </>
    );
};

export default ShelfContainer;
