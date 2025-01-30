'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useBooksByShelfNameLazyQuery } from '@/graphql/graphql';
import EditShelfMenu from '@/modules/shelf/components/edit-shelf-menu';
import useCreateShelfModal from '@/modules/shelf/hooks/use-create-shelf-modal';
import React, { useEffect } from 'react';

interface ShelfTemplateProps {
  slug: string;
  username: string;
}

export const ShelfTemplate: React.FC<ShelfTemplateProps> = ({
  slug,
  username,
}) => {
  const [shelfName, setShelfName] = React.useState<string>();
  const shelfModal = useCreateShelfModal();

  const [loadShelves, { data }] = useBooksByShelfNameLazyQuery();

  useEffect(() => {
    loadShelves({
      variables: {
        slug: slug,
        username: username,
      },
    });
  }, [slug, username, loadShelves]);

  useEffect(() => {
    if (data?.booksByShelf?.name) {
      setShelfName(data.booksByShelf.name);
    }
  }, [data]);

  const editShelf = async () => {
    try {
      await shelfModal.onEdit({
        id: data.booksByShelf.id!,
        name: shelfName!,
      });
    } catch (error) {
      console.error('Failed to rename shelf:', error);
    }
  };

  return (
    <>
      <h1 className='text-2xl font-bold'>{shelfName}</h1>
      <p className='mr-2 mt-2 text-gray-500'>
        A collection of
        <span className='px-1 font-medium'>
          {data?.booksByShelf?._count.userBooks} Books
        </span>
        by {username}
      </p>
      <p className='mt-2 text-gray-500'>
        <EditShelfMenu shelf={data?.booksByShelf} />
        <Button
          onClick={editShelf}
          className={`cursor-pointer items-center justify-center rounded-3xl border border-gray-200 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100`}
        >
          <span className='sr-only'>Edit Shelf</span>
          <div className='flex gap-2'>
            <div className='flex items-center justify-center'>
              <Icons.edit className={`h-4 w-4 `} />
            </div>
            Edit Shelf
          </div>
        </Button>
      </p>
    </>
  );
};

export default ShelfTemplate;
