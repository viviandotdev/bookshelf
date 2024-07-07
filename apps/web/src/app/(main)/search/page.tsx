import SearchTemplate from '@/modules/search/templates';
import { Suspense } from 'react';
interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, page, field } = searchParams;
  const searchQuery = q as string;
  return (
    <div className='flex justify-center'>
      <section className='w-[1220px]'>
        <main className='mt-8 flex min-h-screen flex-col'>
          <Suspense key={searchQuery + page} fallback={<>loading</>}>
            <SearchTemplate
              query={{
                q: searchQuery,
                page: page,
                field: field,
              }}
            />
          </Suspense>
        </main>
      </section>
    </div>
  );
}
