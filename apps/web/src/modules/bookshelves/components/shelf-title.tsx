'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import useShelfStore from '@/stores/use-shelf-store';
import { all } from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';

interface ShelfTitleProps {}

export const ShelfTitle: React.FC<ShelfTitleProps> = () => {
  const { selected, shelves, library, updateSelected } = useShelfStore();
  const params = useSearchParams();
  const shelf = params?.get('shelf');
  const [selectedShelf, setSelectedShelf] = useState<any>(
    selected?.name || shelf
  );

  const [isLoading, setIsLoading] = useState(true);

  //    allShelves.find((item) => item.name === selected?.name);
  // Find the item in the merged array based on the selected name
  useEffect(() => {
    updateSelected(shelf || 'All Books');
  }, [selectedShelf, shelves, library]);
  useEffect(() => {
    if (!selectedShelf) {
      setIsLoading(true); // If selectedShelf is not available, set isLoading to true
    } else {
      setIsLoading(false); // If selectedShelf is available, set isLoading to false
    }
  }, [selectedShelf, shelves, library]);

  const ShelfTitleLoader = (props: any) => (
    <ContentLoader
      uniqueKey='shelf-title-loader'
      speed={2}
      width={150}
      height={50}
      backgroundColor='#f7f2ee'
    >
      <rect rx='5' ry='5' width='150' height='50' />
    </ContentLoader>
  );

  return (
    <>
      {false ? (
        <>
          <ShelfTitleLoader />
        </>
      ) : (
        <>
          <h1 className={cn(dm_sefif_display.className, 'text-5xl text-beige')}>
            Bookshelves
          </h1>
          <p className='mx-8 self-end pb-1 pt-2 text-sm text-gray-400'>
            {/* {selectedShelf?._count.userBooks} books */}
          </p>
        </>
      )}
    </>
  );
};
export default ShelfTitle;
