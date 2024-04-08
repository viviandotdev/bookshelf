import React from 'react';
import { Shelf, Size, UserBook } from '@/graphql/graphql';
import { BookStatusSection } from '../components/books-status-section';
import StatsCard, {
  ChallengeCard,
  ReadingSummary,
} from '../components/readidng-summary';
import { BestsellerList } from '../components/bestseller-list';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
import BookCover from '@/components/book-cover';
import { Dot } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Icons } from '@/components/icons';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
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
        <div className='grid grid-cols-1 items-start gap-4 xl:grid-cols-16 xl:gap-8'>
          {/* Left column */}
          <div className='grid grid-cols-1 gap-4 xl:col-span-11'>
            <section aria-labelledby='section-1-title' className='mb-4'>
              <div id='section-1-title'>
                <div className='overflow-hidden rounded-lg text-beige-700'>
                  <div className='text-4xl font-bold'>
                    Welcome back, Vivian 👋
                  </div>
                  <span className='font-medium text-gray-500'>
                    Here's what you've been reading
                  </span>
                </div>
              </div>
            </section>
            <BestsellerList books={fiction} genre='Fiction' />
            <section className='rounded-md border-2 border-gray-100 bg-white p-6 shadow-sm'>
              <div className='flex justify-between'>
                <h2 className={cn('mb-4 text-xl font-semibold text-beige-700')}>
                  Currently Reading
                </h2>
              </div>
              <div className={'flex flex-col gap-2 '}>
                <div className='divide-y'>
                  {currentlyReading.map((book, idx) => (
                    <div className='flex justify-between'>
                      <div className='flex gap-4 border-gray-100 p-2'>
                        <div className='flex flex-col gap-1'>
                          <div className='flex gap-4'>
                            <BookCover
                              src={getCoverUrl(book.book, Size.Small)}
                              size={'xxs'}
                            />
                            <div className='space-y-1'>
                              <h2
                                className={cn(
                                  dm_sefif_display.className,
                                  'text-xl leading-5 text-beige'
                                )}
                              >
                                {book.book.title}
                              </h2>
                              <div className='flex items-center gap-2'>
                                <p className='text-sm text-gray-400'>
                                  by {formatAuthors(book.book!)}
                                </p>
                                <div className='flex items-center'></div>
                              </div>
                            </div>
                          </div>

                          <div className='flex items-center font-medium'>
                            <span className='text-sm text-gray-700'></span>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-end gap-4 p-2'>
                        <div>
                          <div className='flex min-w-[19em] flex-col gap-[-2px] px-2 text-sm'>
                            <div className='flex min-w-36 items-center justify-center gap-2 text-center text-beige'>
                              <Progress className='items-center' value={23} />
                              <div className='flex items-center gap-0.5'>
                                {23}%
                              </div>
                            </div>
                            <div className='flex w-max items-center text-xs font-medium text-gray-500'>
                              <div>
                                {100} / {223} pages read
                              </div>
                              {/* <Dot className='h-5 w-5' />
                              <div>
                                {21} / {233} pages
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div className='flex justify-end'>
                          <Button>Update Progress</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* Right column */}
          <div className='grid grid-cols-1 gap-4  xl:col-span-5 '>
            <section aria-labelledby='section-2-title'>
              <h2 className='sr-only' id='section-2-title'>
                Section title
              </h2>
              <div className='overflow-hidden rounded-lg'>
                <div className='py-4 shadow-md'>
                  <div className='space-y-4'>
                    <ReadingSummary />
                    <ChallengeCard />
                    <Card className='overflow-hidden rounded-md border-2 border-gray-100 bg-white shadow-sm'>
                      <CardHeader className='p-6 pb-2 text-xl font-bold text-beige-700'>
                        Up Next
                      </CardHeader>
                      <CardContent className=''>
                        {upNext.length > 0 && (
                          <BookStatusSection
                            booksData={upNext}
                            shelves={shelves}
                          />
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
