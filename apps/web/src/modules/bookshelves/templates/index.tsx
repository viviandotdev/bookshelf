'use client';
import React, { Suspense, useEffect } from 'react';
import ListView from '../components/list-view';
import ShelfMenu from '../components/shelf-menu';
import { SortingOptions } from '../components/sorting-options';
import StatusMenu from '../components/status-menu';
import { ViewOptions } from '../components/view-options';
import { GalleryView } from '../components/gallery-view';
import { ShelfTitle } from '../components/shelf-title';
import { sortingSelects } from '@/config/books';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
import ToggleButton from '../components/toggle-button';
import { Icons } from '@/components/icons';
import useShelfStore from '@/stores/use-shelf-store';
import SearchBar from '../components/search-bar';
import KanbanTemplate from '../components/kanban-template';
import EditShelfButton from '@/modules/profile/components/edit-shelf-button';
import useCreateShelfModal from '@/modules/shelf/hooks/use-create-shelf-modal';

interface BookshelvesTemplateProps { }



export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {
    const [view, setView] = React.useState<string>('list');
    const shelfModal = useCreateShelfModal();
    const searchParams = useSearchParams();
    const editShelf = async () => {
        if (searchParams?.get('shelf')) {
            const shelfSluug = searchParams?.get('shelf') || '';
            await shelfModal.onEdit({
                slug: shelfSluug,
                name: shelfSluug.substring(0, shelfSluug.lastIndexOf('-'))
            });
        }
    };
    let contentView;
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const createQueryString = useCreateQueryString();

    const buttonIsEnabled =
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
                        {/* <ViewOptions view={view} setView={updateView} /> */}
                    </div>
                    <div className='relative flex w-full items-center justify-between gap-2 text-sm'>
                        <div className='flex gap-4'>
                            <ShelfMenu />
                            <StatusMenu />
                            {/* <ToggleButton type={'owned'} /> */}
                            {/* <ToggleButton type={'favorites'} /> */}
                            {/* <Button
                onClick={() => {
                  updateSelected('All Books');
                  startTransition(() => {
                    router.push(
                      `${pathname}?${createQueryString({
                        shelf: null,
                        status: null,
                        owned: null,
                        favorites: null,
                      })}`
                    );
                  });
                }}
                disabled={!buttonIsEnabled}
                variant={'pill'}
                size={'sm'}
                className='bg-beige-50 px-0 font-normal text-red-500 hover:bg-beige-50 disabled:text-gray-500'
              >
                <Icons.close className='mr-1 h-4 w-4' />
                Clear Filters
              </Button> */}
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                            <div className='w-[312px]'>
                                <SearchBar />
                            </div>

                            {
                                searchParams?.get('shelf') != "All Books" && searchParams?.get('shelf') != "Unshelved" &&            <Button
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
                            }


                            {view !== 'board' && (
                                <SortingOptions selections={sortingSelects} />
                            )}
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
