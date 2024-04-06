import React from 'react';
import { Shelf, UserBook } from '@/graphql/graphql';
import { BookStatusSection } from '../components/books-status-section';
import StatsCard, { ReadingSummary } from '../components/readidng-summary';
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
      <main className='py-8'>
        {/* Main 3 column grid */}
        <div className='xl:grid-cols-16 grid grid-cols-1 items-start gap-4 xl:gap-8'>
          {/* Left column */}
          <div className='grid grid-cols-1 gap-4 xl:col-span-11'>
            <section aria-labelledby='section-1-title'>
              <h2 className='sr-only' id='section-1-title'>
                Section title
              </h2>
              <div className='overflow-hidden xl:border-r-2 xl:border-gray-100'>
                <div className=''>
                  <div className='space-y-6 pr-10'>
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
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className='grid grid-cols-1 gap-4 xl:col-span-5'>
            <section aria-labelledby='section-2-title'>
              <h2 className='sr-only' id='section-2-title'>
                Section title
              </h2>
              <div className='overflow-hidden rounded-lg'>
                <div className=''>
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
