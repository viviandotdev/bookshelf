import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import SearchResults from '../components/search-results';
import UnderlinedTabs from '@/components/underlined-tabs';
import { searchBooks } from '../api/searchBooks';

interface SearchTemplateProps {
  query: {
    q: string;
    page: string | string[] | undefined;
    field: string | string[] | undefined;
  };
}

export const SearchTemplate: React.FC<SearchTemplateProps> = async ({
  query,
}) => {
  const { q, page, field } = query;
  const pageAsNumber = Number(page) - 1;
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 0 ? 0 : pageAsNumber;

  const offset = Math.ceil(Number(fallbackPage) * RESULTS_PAGE_SIZE);

  const { hits, count } = await searchBooks(q, field as string, offset);
  const tabs = [
    {
      label: 'Books',
      children: <SearchResults hits={hits} />,
      id: 'bookInfo',
    },
  ];

  return <UnderlinedTabs tabs={tabs} initialTabId='bookInfo' />;
};
export default SearchTemplate;
