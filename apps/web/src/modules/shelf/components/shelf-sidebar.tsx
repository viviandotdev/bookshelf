'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    Shelf,
    useCountUserBooksLazyQuery,
    useShelvesLazyQuery,
} from '@/graphql/graphql';
import useShelfStore from '@/stores/use-shelf-store';
import ShelfContainer from '@/modules/shelf/components/shelf-container';
import { librarySelects } from '@/config/books';
interface SidebarProps { }

export const Sidebar: React.FC<SidebarProps> = ({ }) => {
    const { shelves, library, initLibrary, initShelves, updateSelected } =
        useShelfStore();

    const params = useSearchParams();
    const shelf = params?.get('shelf');
    const [getAllCounts, { data: allCountsData, loading: allCountsLoading }] =
        useCountUserBooksLazyQuery({
            variables: {},
        });

    const [
        getUnshelvedCounts,
        { data: unshelvedCountsData, loading: unshelvedCountsLoading },
    ] = useCountUserBooksLazyQuery({
        variables: {
            where: {
                shelves: { none: {} },
            },
        },
    });
    const [loadShelves] = useShelvesLazyQuery({
        variables: {},
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            if (data.shelves) {
                initShelves((data.shelves ? data.shelves : []) as Shelf[]);
            }
        },
    });

    useEffect(() => {
        const loadData = async () => {
            await getAllCounts();
            await getUnshelvedCounts();
            await loadShelves();

            const library = librarySelects.map((item, i): Shelf => {
                return {
                    id: i.toString(),
                    name: item.name,
                    slug: '',
                    _count: {
                        userBooks: item.name === 'All Books' ? 0 : 0,
                    },
                };
            });
            initLibrary(library);
        };

        loadData();
    }, []);
    useEffect(() => {
        if (shelf) {
            updateSelected(shelf);
        } else {
            updateSelected('All Books');
        }
        // filter out the owned and favorites
        // then append the owned and favorites to the tp
        // initShelves(shelfSelections);
        // initLibrary(librarySelections);
    }, []);

    return (
        <div
            className='mt-5 hidden w-72 gap-10 overflow-y-auto lg:flex'
        >
            <div className='ml-4 flex w-72 flex-col'>
                <nav className='flex flex-1 flex-col gap-2 overflow-auto no-scrollbar'>
                    <ShelfContainer
                        shelves={library}
                        title='My Library '
                        counts={{
                            'All Books': allCountsData?.countUserBooks || 0,
                            Unshelved: unshelvedCountsData?.countUserBooks || 0,
                        }}
                    />
                    <ShelfContainer
                        shelves={shelves}
                        isShelves={true}
                        title='Shelves '
                    />
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
