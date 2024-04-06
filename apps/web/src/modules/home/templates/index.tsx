import React from 'react';
import { Shelf, UserBook } from '@/graphql/graphql';
import { BookStatusSection } from '../components/books-status-section';
import { ReadingSummary } from '../components/readidng-summary';
import { BestsellerList } from '../components/bestseller-list';
interface HomeTemplateProps {
  currentlyReading: UserBook[];
  shelves: Shelf[];
  upNext: UserBook[];
  fiction: any[];
  nonfiction: any[];
}

export default function HomeTemplate({
  currentlyReading,
  shelves,
  upNext,
  nonfiction,
  fiction,
}: HomeTemplateProps) {
  return (
    <>
      <div className='mx-auto px-0'>
        <div className='flex'>
          <div className='space-y-6 px-10 py-6'>
            {currentlyReading.length > 0 && (
              <BookStatusSection
                details={{ progress: 90, date_started: 'Sept 12' }}
                status={'Currently Reading'}
                layout='row'
                booksData={currentlyReading}
                shelves={shelves}
              />
            )}

            <section
              aria-labelledby='popular-books-heading'
              className='space-y-4'
            >
              <BestsellerList books={fiction} genre='Fiction' />
              <BestsellerList books={nonfiction} genre='Non-Fiction' />
            </section>
            {/* <section aria-labelledby='updates-heading'>
              <h2
                className={cn(
                  dm_sefif_display.className,
                  'mb-4 text-2xl font-semibold text-beige-700'
                )}
              >
                Updates
              </h2>
              <UpdateCard />
            </section> */}
          </div>
          <aside className='hidden min-w-96 space-y-6 border-l border-gray-200 py-6 pl-10 xl:flex'>
            {/* <Calendar className="rounded-md border" mode="single" /> */}
            <div className='space-y-4'>
              <ReadingSummary />
              {upNext.length > 0 && (
                <BookStatusSection
                  details={{ progress: 90, date_started: 'Sept 12' }}
                  status={'Up Next'}
                  layout='column'
                  booksData={upNext}
                  shelves={shelves}
                />
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
