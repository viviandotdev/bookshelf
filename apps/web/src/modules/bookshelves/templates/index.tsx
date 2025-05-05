'use client';
import React, { Suspense, useEffect } from 'react';
import ListView from '../components/list-view';
import ShelfMenu from '../components/shelf-menu';
import { SortingOptions } from '../components/sorting-options';
import StatusMenu from '../components/status-menu';
import { GalleryView } from '../components/gallery-view';
import { ShelfTitle } from '../components/shelf-title';
import { sortingSelects } from '@/config/books';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
import ToggleButton from '../components/toggle-button';
import { Icons } from '@/components/icons';
import useShelfStore from '@/stores/use-shelf-store';
import SearchBar from '../components/search-bar';
import KanbanTemplate from '../components/kanban-template';
import useCreateShelfModal from '@/modules/shelf/hooks/use-create-shelf-modal';

interface BookshelvesTemplateProps { }



export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {
    const [view, setView] = React.useState<string>('list');
    const shelfModal = useCreateShelfModal();
    const searchParams = useSearchParams();
    const editShelf = async () => {
        if (searchParams?.get('shelf')) {
            const shelfSlug = searchParams?.get('shelf') || '';
            await shelfModal.onEdit({
                slug: shelfSlug,
                name: shelfSlug.substring(0, shelfSlug.lastIndexOf('-'))
            });
        }
    };
    let contentView;
    const router = useRouter();
    const pathname = usePathname();
    const createQueryString = useCreateQueryString();

    const clearButtonIsEnabled =
        searchParams?.get('status') ||
        searchParams?.get('shelf') ||
        searchParams?.get('owned') ||
        searchParams?.get('favorites');

    const updateView = (newView: string) => {
        setView(newView);
        localStorage.setItem('defaultView', newView);
    };

    useEffect(() => {
        const shelf = searchParams?.get('shelf');
        if (shelf) {
            updateSelected(shelf);
        } else {
            updateSelected('All Books');
        }
    }, [searchParams]);

    const updateSelected = useShelfStore((state) => state.updateSelected);

    if (view === 'gallery') {
        contentView = <GalleryView />;
    } else if (view === 'list') {
        contentView = <ListView />;
    } else if (view === 'board') {
        return <KanbanTemplate view={view} setView={setView} />;
    }

    return (
        <>
            <div
                className='w-full overflow-y-auto pt-3.5'
                style={{ height: 'calc(100vh - 64px)' }}
            >
                <nav className='mx-16 flex flex-col justify-between gap-2 rounded-lg pb-2 '>
                    <div className='flex justify-between py-4'>
                        <div className='flex gap-1'>
                            <ShelfTitle />
                        </div>
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

                                    {view !== 'board' && (
                                        <SortingOptions selections={sortingSelects} />
                                    )}
                                </div>

                                {searchParams?.get('shelf') !== "All Books" && searchParams?.get('shelf') !== "Unshelved" && (
                                    <Button
                                        onClick={editShelf}
                                        size={'sm'}
                                        className="min-w-[120px] flex-shrink-0 cursor-pointer bg-beige-100 items-center justify-center text-black shadow-sm"
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
                            {/* Filters and Sort */}
                            <div className="flex xl:hidden flex-col gap-2 w-full ">
                                <div className="flex flex-wrap gap-2 w-full">
                                    <ShelfMenu />
                                    <StatusMenu />
                                    <ToggleButton type={'owned'} />
                                    <ToggleButton type={'favorites'} />

                                    {view !== 'board' && (
                                        <SortingOptions selections={sortingSelects} />
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                <div className='mx-16 mt-4 overflow-x-auto'>
                    <Suspense fallback={<div>Loading...</div>}>{contentView}</Suspense>
                </div>
            </div>
        </>
    );
}
