import { Icons } from '@/components/icons';
import {
  Book,
  BooksByShelfDocument,
  BooksByShelfQuery,
  Reading_Status,
} from '@/graphql/graphql';
import { getApolloClient, httpLink } from '@/lib/apollo';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import EditShelfButton from '@/modules/profile/components/edit-shelf-button';
import ShelfTemplate from '@/modules/profile/templates/shelf-template';
import Hit from '@/modules/search/components/hit';
import { Edit } from 'lucide-react';
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
            <ShelfTemplate slug={params.slug} username={params.user} />
          </div>
          <ul className='mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {data?.booksByShelf?.userBooks?.map((hit, index) => (
              <Hit key={index} hit={hit.userBook.book as Book} />
            ))}
          </ul>
        </main>
      </section>
    </div>
  );
};
export default ShelfPage;
