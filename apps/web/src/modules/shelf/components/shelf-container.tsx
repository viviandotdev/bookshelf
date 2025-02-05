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
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
interface ShelfContainerProps {
  title: string;
  shelves: Shelf[];
  isShelves?: boolean;
  collapsible?: boolean;
  children?: React.ReactNode;
  counts?: {
    [key: string]: number;
  };
}

const ShelfContainer: React.FC<ShelfContainerProps> = ({
  title,
  shelves,
  isShelves,
  collapsible,
  children,
  counts,
}) => {
  //   const [openAlert, setOpenAlert] = useState(false);
  const shelfModal = useCreateShelfModal();
  //   const { removeShelf } = useShelfStore();
  //   const { deleteShelf } = useDeleteShelf({
  //     onSuccess: (_) => {
  //       removeShelf(shelfModal.shelf!.id);
  //       setOpenAlert(false);
  //       shelfModal.onClose();
  //     },
  //   });

  return (
    <>
      {/* <AlertModal
        title={'Are you sure you want to remove this shelf?'}
        description={'This action cannot be undone.'}
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
        onConfirm={async () => {
          await deleteShelf({ id: shelfModal.shelf!.id });
        }}
        loading={false}
      /> */}
      <Collapsible title={title} collapsible={collapsible}>
        <div className='grid gap-1 text-sm'>
          {shelves.map((link, index) => (
            <ShelfItem
              key={index}
              shelf={link}
              isShelves={isShelves}
              counts={counts ? counts[link.name!] : 0}
              //   setOpenAlert={setOpenAlert}
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
        </div>
      </Collapsible>
    </>
  );
};

export default ShelfContainer;
