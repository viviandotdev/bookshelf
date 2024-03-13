import React from 'react';
import ActionsPanel from '../components/actions-panel';
import ShelfTitle from '@/modules/bookshelves/components/shelf-title';
import { ViewOptions } from '@/modules/bookshelves/components/view-options';
import ShelfMenu from '@/modules/bookshelves/components/shelf-menu';
import { SortingOptions } from '@/modules/bookshelves/components/sorting-options';
import StatusMenu from '@/modules/bookshelves/components/status-menu';
import EditShelfCard from '../components/edit-shelf-card';

interface ShelfPageTemplateProps {}

export const ShelfPageTemplate: React.FC<ShelfPageTemplateProps> = ({}) => {
  // const [view, setView] = React.useState<string>('board');
  return (
    <div className='container my-12'>
      <div className='flex gap-12'>
        <section className='w-full'>
          <nav className='flex flex-col justify-between gap-2 rounded-lg pb-2 '>
            <div className='flex justify-between py-4'>
              <div className='flex gap-1'>
                <ShelfTitle />
              </div>
              <ViewOptions />
            </div>
            <div className='relative flex w-full items-center justify-between gap-2 text-sm'>
              <div className='flex gap-4'>
                <ShelfMenu />
                <StatusMenu />
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <SortingOptions />
              </div>
            </div>
          </nav>
          <div className='mt-4'>
            <div>
              <EditShelfCard />
              <EditShelfCard />
            </div>
          </div>
        </section>
        <section className='min-w-72 py-4'>
          <ActionsPanel />
        </section>
      </div>
    </div>
  );
};
export default ShelfPageTemplate;
