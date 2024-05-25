import React from 'react';
import { Shelf, UserBook } from '@/graphql/graphql';
import { ReadingSummary } from '../components/readidng-summary';
import { MainBookList } from '../components/main-booklist';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import CurrentlyReading from '../components/currently-reading';
import BookCard from '../components/book-card';
import DashboardHeader from '../components/dashboard-header';
interface HomeTemplateProps {
  currentlyReading: UserBook[];
  wantToRead: UserBook[];
  shelves: Shelf[];
  username: string;
  upNext: UserBook[];
  summaryData: {
    wantToRead: number;
    currentlyReading: number;
    read: number;
  };
}

export default function HomeTemplate({
  currentlyReading,
  wantToRead,
  username,
  summaryData,
  upNext,
}: HomeTemplateProps) {
  return (
    <>
      <main className='py-8'>
        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 xl:grid-cols-16 xl:gap-8'>
          {/* Left column */}
          <div className='grid grid-cols-1 gap-4 xl:col-span-11'>
            <section aria-labelledby='section-1-title' className='mb-4'>
              <div id='section-1-title'>
                <div className='ml-1 overflow-hidden rounded-lg text-beige-700'>
                  <div className='text-4xl font-bold'>
                    Welcome back, {username} 👋
                  </div>
                  <span className='mt-1 text-xl text-gray-400'>
                    Here's what you've been reading
                  </span>
                </div>
              </div>
            </section>
            <MainBookList
              username={username}
              books={wantToRead}
              currView={'want-to-read'}
            />

            {currentlyReading.length > 0 && (
              <section className='rounded-md border border-gray-200 bg-white p-6 shadow-sm'>
                <div className='mb-4 flex justify-between'>
                  <DashboardHeader
                    href={`/${username}/books?status=Currently+Reading`}
                    title={'Currently Reading'}
                    count={currentlyReading.length}
                  />
                </div>
                <div className={'flex flex-col gap-2 '}>
                  <div className='divide-y'>
                    {currentlyReading.map((book, idx) => (
                      <CurrentlyReading userBook={book} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
          {/* Right column */}
          <div className='grid grid-cols-1 gap-4  xl:col-span-5 '>
            <section aria-labelledby='section-2-title'>
              <div className='overflow-hidden rounded-lg'>
                <div className='py-4 shadow-md'>
                  <div className='space-y-4'>
                    <ReadingSummary
                      summaryData={summaryData}
                      username={username}
                    />
                    {/* <ChallengeCard /> */}
                    <Card className='overflow-hidden rounded-md border-2 border-gray-100 bg-white shadow-sm'>
                      <CardHeader className='p-6 pb-2 text-beige-700'>
                        <div className='flex justify-between'>
                          <DashboardHeader
                            href={`/${username}/books?status=Up+Next`}
                            title={'Up Next'}
                            count={upNext.length}
                          />
                        </div>
                      </CardHeader>
                      <CardContent className=''>
                        {upNext.length > 0 && (
                          <div className={cn(' divide-y divide-gray-200')}>
                            {upNext.map((book, idx) => (
                              <BookCard key={idx} userBook={book} />
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
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
