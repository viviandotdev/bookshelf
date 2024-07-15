'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/pagination';
import useBuildQuery from '@/modules/bookshelves/hooks/use-build-query';
import { useCountUserBooksLazyQuery, UserBook } from '@/graphql/graphql';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { NetworkStatus } from '@apollo/client';
import useLoadBooks from '../queries/use-load-books';
import useShelfStore from '@/stores/use-shelf-store';
import SkeletonGalleryView from '@/modules/skeletons/components/skeleton-gallery-view';
import Book from '@/components/book';
interface GalleryViewProps {}

export const GalleryView: React.FC<GalleryViewProps> = ({}) => {
  const searchParams = useSearchParams();
  const page = searchParams?.get('page') ?? '1';
  const query = useBuildQuery();
  const [totalPages, setTotalPages] = useState(0);
  const { library } = useShelfStore();

  const [getCount] = useCountUserBooksLazyQuery({
    onCompleted: (data) => {
      setTotalPages(Math.ceil(data!.countUserBooks / BOOKS_PAGE_SIZE));
    },
  });
  const { loadBooks, booksData, networkStatus } = useLoadBooks();

  const books = booksData && booksData?.getUserBooks?.userBooks;
  const loading = networkStatus === NetworkStatus.loading;

  useEffect(() => {
    const loadData = async () => {
      if (query && Object.keys(query).length > 0) {
        await loadBooks({ variables: { ...query } });
        await getCount({ variables: { ...query } });
      } else {
        // Handle the case when query is empty or undefined
        // For example, you might want to load all books or show an error message
      }
    };

    loadData();
  }, [query, loadBooks, getCount]);

  return (
    <>
      {!books || loading ? (
        <SkeletonGalleryView />
      ) : (
        <div className='grid grid-cols-6 justify-center gap-4 overflow-hidden pb-10 pt-2 xl:grid-cols-8'>
          {books?.map((book, idx) => (
            <div key={idx}>
              <Book
                userBook={book as UserBook}
                showRemoveBook={true}
                view='gallery'
              />
            </div>
          ))}
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} />
    </>
  );
};

export default GalleryView;
