import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { Rating, Star } from '@smastrom/react-rating';

export const myStyles = {
  itemShapes: Star,
  activeFillColor: '#F4CC49',
  inactiveFillColor: '#c6cdd6',
};

interface BookRatingProps {
  size?: 'lg' | 'sm' | 'md';
  bookId: string;
  rating: number;
  setRating: (rating: number) => void;
}

// Book Rating Component
export function BookRating({
  size = 'sm',
  rating,
  setRating,
  bookId,
}: BookRatingProps) {
  // get the userbook context
  const { updateUserBook } = useUpdateUserBook();
  async function updateRating(selectedValue: number) {
    const updatedBook = await updateUserBook(bookId, {
      rating: selectedValue,
    });
    if (updatedBook) {
      setRating(selectedValue);
    }
  }

  const width = size === 'lg' ? 200 : size === 'md' ? 150 : 100;
  return (
    <div className='flex items-center justify-end gap-2'>
      <Rating
        halfFillMode='box'
        itemStyles={myStyles}
        style={{ maxWidth: width }}
        value={rating}
        onChange={updateRating}
      />
    </div>
  );
}
