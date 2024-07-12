import {
  BooksByShelfDocument,
  BooksByShelfQuery,
  Reading_Status,
} from '@/graphql/graphql';
import { getApolloClient, httpLink } from '@/lib/apollo';
import Hit from '@/modules/search/components/hit';
import React from 'react';

interface ShelfPageProps {
params: { slug: string; user: string };
}

const ShelfPage: React.FC<ShelfPageProps> = async ({ params }) => {
  const client = getApolloClient();
  client.setLink(httpLink);
  const { data } = await client.query<BooksByShelfQuery>({
    query: BooksByShelfDocument,
    variables: {
      slug: params.slug,
      username: params.user,
    },
  });

  return (
    <div className='flex justify-center'>
      <section className='w-[1220px]'>
        <main className='mt-8 flex min-h-screen flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>{data.booksByShelf?.name}</h1>
            <p className='mt-2 text-gray-500'>
              A collection of
              <span className='font-medium'>
                {/* {data?.booksByShelf?.length} Books */}
              </span>{' '}
              by Vivian Lin
            </p>
            <p className='mt-2 text-gray-500'>
              <span className=' rounded-full px-2 py-1 align-middle text-base '>
                Manage Collection
              </span>{' '}
            </p>
          </div>
          <ul className='mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {data?.booksByShelf?.userBooks?.map((hit, index) => (
              <Hit key={index} hit={hit.userBook.book} />
            ))}
          </ul>
        </main>
      </section>
    </div>
  );
};
export default ShelfPage;
