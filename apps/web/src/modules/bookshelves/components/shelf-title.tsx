import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import useShelfStore from '@/stores/use-shelf-store';
import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';

interface ShelfTitleProps { }

export const ShelfTitle: React.FC<ShelfTitleProps> = () => {
    const { selected, shelves, library } = useShelfStore();
    // Merge shelves and library arrays
    const allShelves = [...shelves, ...library];
    const [isLoading, setIsLoading] = useState(true);

    // Find the item in the merged array based on the selected name
    const selectedShelf = allShelves.find((item) => item.name === selected?.name);

    useEffect(() => {
        if (!selectedShelf) {
            setIsLoading(true); // If selectedShelf is not available, set isLoading to true
        } else {
            setIsLoading(false); // If selectedShelf is available, set isLoading to false
        }
    }, [selectedShelf]);

    const ShelfTitleLoader = (props: any) => (
        <ContentLoader
            uniqueKey='shelf-title-loader'
            speed={2}
            width={150}
            height={50}
            backgroundColor="#f7f2ee"
        >
            <rect rx="5" ry="5" width="150" height="50" />
        </ContentLoader>
    )


    return (
        <>
            {isLoading ? (
                <>
                    <ShelfTitleLoader />
                </>
            ) : (
                <>
                    <h1
                        className={cn(
                            dm_sefif_display.className,
                            "text-beige text-5xl"
                        )}
                    >
                        {selectedShelf?.name}
                    </h1>
                    <p className="text-sm text-gray-400 self-end mx-8 pt-2 pb-1">{selectedShelf?._count.userBooks} books</p>
                </>
            )}
        </>
    );
};
export default ShelfTitle;
