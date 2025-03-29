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
        <div className='flex justify-center px-4 sm:px-6 lg:px-8'>
            <section className='w-full max-w-[1220px]'>
                <main className='mt-4 flex min-h-screen flex-col sm:mt-8'>
                    <Suspense key={searchQuery + page} fallback={<></>}>
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
