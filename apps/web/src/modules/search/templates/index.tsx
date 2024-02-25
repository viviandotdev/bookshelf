import Hit from '../components/hit';
import { BookData } from '@/types/interfaces';
import { UserBook } from '@/graphql/graphql';
import { Pagination } from '@/components/pagination';
import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import FieldSelector from '../components/field-selector';

interface SeachTemplateProps {
  hits: BookData[];
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
}) => {
  const currentPage = query.page ? Number(query.page) : 1;
  const pageCount = Math.ceil(count / RESULTS_PAGE_SIZE);

  return (
    <div>
      <div className='flex-col justify-center'>
        <div className='grid w-full grid-cols-4 gap-4'>
          {' '}
          <div className='col-span-4 mt-8 xl:col-span-3 '>
            <div className='items-start font-semibold leading-7 text-beige '>
              Found {count} results for "{query.q}" in{' '}
              {query.field ? query.field : 'title'}
            </div>
            <hr className='border-t-1 mt-2 border-beige' />
            <div>
              {hits &&
                hits.map((hit, index) => (
                  <li key={index} className='list-none'>
                    <Hit hit={hit} />
                  </li>
                ))}
            </div>
          </div>
          <FieldSelector selectedField={query.field ? query.field : 'title'} />
        </div>
        <Pagination page={currentPage} totalPages={pageCount} />
      </div>
    </div>
  );
};
export default SeachTemplate;
