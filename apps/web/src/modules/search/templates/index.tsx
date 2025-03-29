import UnderlinedTabs from '@/components/underlined-tabs';
import { searchBooks } from '../api/searchBooks';
import { SearchResults } from '../components/search-results';

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
    const { q, field } = query;
    const offset = 0;

    const { hits, totalItems } = await searchBooks(q, field as string, offset);

    return (
        <UnderlinedTabs tabs={[
            {
                label: 'Books',
                children: (
                    <SearchResults
                        initialHits={hits}
                        totalItems={totalItems}
                        searchQuery={q}
                        field={field as string}
                    />
                ),
                id: 'search-results',
            },
        ]} initialTabId='search-results' />
    );
};
export default SearchTemplate;
