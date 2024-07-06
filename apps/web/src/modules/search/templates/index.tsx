import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import SearchResults from '../components/search-results';
import UnderlinedTabs from '@/components/underlined-tabs';
import { BookData } from '@/modules/bookshelves/types';
import { UserBook } from '@/graphql/graphql';

interface SeachTemplateProps {
  hits: BookData[];
  libraryHits?: BookData[];
  count: number;
  query: {
    q: string;
    page: string | string[] | undefined;
    field: string | string[] | undefined;
  };
}

export const SeachTemplate: React.FC<SeachTemplateProps> = ({
  hits,
  count,
  query,
  libraryHits,
}) => {
  const currentPage = query.page ? Number(query.page) : 1;
  const pageCount = Math.ceil(count / RESULTS_PAGE_SIZE);
  const tabs = [
    {
      label: 'Books',
      children: <SearchResults hits={hits} />,
      id: 'bookInfo',
    },
    libraryHits && libraryHits.length > 0
      ? {
          label: 'My Library',
          children: <SearchResults hits={libraryHits} />,
          id: 'library',
        }
      : null,
  ];

  return (
    <div className='flex justify-center'>
      <section className='w-[1220px]'>
        <main className='mt-8 flex min-h-screen flex-col'>
          <UnderlinedTabs tabs={tabs} initialTabId='bookInfo' />
        </main>
      </section>
    </div>
  );
};
export default SeachTemplate;
