import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React from 'react';
import { Shelf, UserBook } from '@/graphql/graphql';
import UpdateCard from '../components/update-card';
import { BookStatusSection } from '../components/books-status-section';
interface HomeTemplateProps {
  currentlyReading: UserBook[];
  shelves: Shelf[];
  upNext: UserBook[];
}
export default function HomeTemplate({
  currentlyReading,
  shelves,
  upNext,
}: HomeTemplateProps) {
  return (
    <>
      <div className='mx-auto px-0'>
        <div className='flex'>
          <div className='space-y-6 px-10 py-6'>
            <BookStatusSection
              details={{ progress: 90, date_started: 'Sept 12' }}
              status={'Currently Reading'}
              layout='row'
              booksData={currentlyReading}
              shelves={shelves}
            />
            <section aria-labelledby='popular-books-heading'>
              <h2
                className={cn(
                  dm_sefif_display.className,
                  'mb-4 text-2xl font-semibold text-beige-700'
                )}
              >
                Popular Books
              </h2>
              <div className='grid grid-cols-4 gap-4'>
                {Array.from({ length: 4 }, (_, idx) => (
                  <div key={idx}>
                    <div className={`relative`}>
                      <div className={`flex-row`}>
                        <div
                          className={`relative flex items-start bg-beige-100`}
                        >
                          <div
                            className={`relative flex h-64 items-start bg-beige-100 opacity-30 md:h-44 lg:h-48 xl:h-60 2xl:h-72`}
                          >
                            {/* Adjust height based on screen breakpoints */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section aria-labelledby='updates-heading'>
              <h2
                className={cn(
                  dm_sefif_display.className,
                  'mb-4 text-2xl font-semibold text-beige-700'
                )}
              >
                Updates
              </h2>
              <UpdateCard />
            </section>
          </div>
          <aside className='hidden min-w-96 space-y-6 border-l border-gray-200 py-6 pl-10 xl:flex'>
            {/* <Calendar className="rounded-md border" mode="single" /> */}
            <div className='space-y-4'>
              {/* <div className="flex justify-between rounded-lg">
                                <StatsCard title="Today Pages" value={351} />
                                <StatsCard title="Total Check-Ins" value={167} />
                            </div>
                            <div className="flex justify-between rounded-lg">
                                <StatsCard title="Current Streak" value={351} />
                                <StatsCard title="Best Streak" value={167} />

                            </div> */}
              {/* <div className="bg-white rounded-lg border border-gray-700/10 p-4">
                                <h3 className="text-sm font-medium text-gray-400 mb-1">2024 READING CHALLENGE PROGRESS</h3>
                                <p className="text-lg text-beige-600 font-semibold mb-1">{22} / {45} books completed</p>
                                <p className="text-sm text-gray-400 mb-2">You're 2 books behind schedule</p>
                                <div className="flex justify-center gap-2 items-center">
                                    <Progress className="w-full items-center h-3" value={60} />
                                    <div className="items-center text-xs text-beige-700 font-semibold">60%</div>
                                </div>

                                <p className="text-sm text-beige-700 mt-2">There are still <span className="font-semibold">{85}</span> days left! You can do it!</p>
                            </div> */}
              <BookStatusSection
                details={{ progress: 90, date_started: 'Sept 12' }}
                status={'Up Next'}
                layout='column'
                booksData={upNext}
                shelves={shelves}
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
