'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Shelf, useShelvesLazyQuery } from '@/graphql/graphql';
import useShelfStore from '@/stores/use-shelf-store';
import ShelfContainer from '@/modules/shelf/components/shelf-container';
import { librarySelects } from '@/config/books';
interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { shelves, library, initLibrary, initShelves, updateSelected } =
    useShelfStore();

  const params = useSearchParams();
  const shelf = params?.get('shelf');

  const [loadShelves] = useShelvesLazyQuery({
    variables: {},
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.shelves) {
        const library = librarySelects.map((item, i): Shelf => {
          return {
            id: i.toString(),
            name: item.name,
            slug: '',
            _count: {
              userBooks: item.name == 'All Books' ? 100 : 12,
            },
          };
        });
        initLibrary(library);
        initShelves((data.shelves ? data.shelves : []) as Shelf[]);
      }
    },
  });

  useEffect(() => {
    const loadData = async () => {
      await loadShelves();
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
      //   style={{ height: 'calc(100vh - 64px)' }}
    >
      <div className='ml-4 flex w-72 flex-col'>
        {/* <Button className='py- mb-2 mr-6 mt-6 flex items-center   justify-start gap-2 rounded-lg px-3 text-white transition-all hover:text-white '>
                    <Icons.plus className='h-5 w-5' />
                    Add a Book
                </Button> */}

        <nav className='flex flex-1 flex-col gap-2 overflow-auto scrollbar-thin scrollbar-track-beige-50 scrollbar-thumb-beige-700'>
          <ShelfContainer
            shelves={library}
            collapsible={true}
            title='My Library '
          />
          <ShelfContainer
            shelves={shelves}
            isShelves={true}
            collapsible={true}
            title='Shelves '
          />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
