'use client';
import React, { Suspense, useEffect } from 'react';
import ListView from '../components/list-view';
import ShelfMenu from '../components/shelf-menu';
import { SortingOptions } from '../components/sorting-options';
import StatusMenu from '../components/status-menu';
import { sortingSelects } from '@/config/books';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import ToggleButton from '../components/toggle-button';
import { Icons } from '@/components/icons';
import useShelfStore from '@/stores/use-shelf-store';
import SearchBar from '../components/search-bar';
import useCreateShelfModal from '@/modules/shelf/hooks/use-create-shelf-modal';


interface BookshelvesTemplateProps { }

export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {
    const shelfModal = useCreateShelfModal();
    const searchParams = useSearchParams();
    const editShelf = async () => {
        if (searchParams?.get('shelf')) {
            const shelfSlug = searchParams?.get('shelf') || '';
            shelfModal.onEdit({
                slug: shelfSlug,
                name: shelfSlug.substring(0, shelfSlug.lastIndexOf('-'))
            });
        }
    };
    const { page, status, sort, shelf, owned, favorites } = {
        page: searchParams?.get('page') ?? '1',
        status: searchParams?.get('status') ?? 'All Status',
        sort: searchParams?.get('sort') ?? 'dateAdded.desc',
        shelf: searchParams?.get('shelf') ?? 'All Books',
        owned: searchParams?.get('owned') ?? '',
        favorites: searchParams?.get('favorites') ?? '',
    };
    useEffect(() => {
        if (shelf) {
            updateSelected(shelf);
        } else {
            updateSelected('All Books');
        }
    }, [searchParams]);

    const updateSelected = useShelfStore((state) => state.updateSelected);

    return (
        <>
            <div
                className='w-full overflow-y-auto pt-3.5 scrollbar-thin scrollbar-track-beige-50 scrollbar-thumb-white'
                style={{ height: 'calc(100vh - 64px)' }}
            >
                <nav className='mx-8 flex flex-col justify-between gap-2 rounded-lg pb-2 '>
                    <div className='flex justify-between py-2'>
                    </div>
                    <div className="w-full text-sm">
                        <div className="flex flex-col gap-2 w-full xl:gap-x-4">
                            {/* Search bar and Edit Shelf button */}
                            <div className="flex w-auto gap-2">
                                <div className="flex-1 min-w-0">
                                    <SearchBar />
                                </div>
                                <div className="hidden xl:flex gap-2">
                                    <ShelfMenu />
                                    <StatusMenu />
                                    <ToggleButton type={'owned'} />
                                    <ToggleButton type={'favorites'} />
                                    <SortingOptions selections={sortingSelects} />
                                </div>

                                {shelf !== "All Books" && shelf !== "Unshelved" && (
                                    <Button
                                        onClick={editShelf}
                                        size={'sm'}
                                        className="min-w-[120px] shrink-0 cursor-pointer bg-beige-100 items-center justify-center text-black shadow-xs"
                                    >
                                        <span className='sr-only'>Edit Shelf</span>
                                        <div className='flex gap-2'>
                                            <div className='flex items-center justify-center'>
                                                <Icons.edit className="h-4 w-4" />
                                            </div>
                                            Edit Shelf
                                        </div>
                                    </Button>
                                )}

                            </div>
                            {/* Mobile Responsive Filters and Sort */}
                            <div className="flex xl:hidden flex-col gap-2 w-full ">
                                <div className="flex flex-wrap gap-2 w-full">
                                    <ShelfMenu />
                                    <StatusMenu />
                                    <ToggleButton type={'owned'} />
                                    <ToggleButton type={'favorites'} />
                                    <SortingOptions selections={sortingSelects} />
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                <div className='mx-8 mt-4 overflow-x-auto'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ListView />
                    </Suspense>
                </div>
            </div>
        </>
    );
}
