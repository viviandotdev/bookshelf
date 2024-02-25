import Book from '@/components/book';
import { UserBook } from '@/graphql/graphql';

interface SectionProps {
  books: UserBook[];
  title: string;
}

export const Section: React.FC<SectionProps> = ({ title, books }) => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-lg font-semibold text-beige'>{title}</div>
        {/* <div className="text-beige text-lg font-semibold">More</div> */}
      </div>
      <div className='grid grid-cols-4 justify-center gap-4 overflow-hidden pb-10 pt-2'>
        {books &&
          books?.slice(0, 4).map((book, idx) => (
            <div key={idx}>
              <Book userBook={book} showRemoveBook={true} />
            </div>
          ))}
      </div>
    </>
  );
};
