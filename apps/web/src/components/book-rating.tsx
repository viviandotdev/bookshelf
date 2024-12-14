'use client';
import { toast } from '@/hooks/use-toast';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { Rating, Star } from '@smastrom/react-rating';

export const myStyles = {
  itemShapes: Star,
  activeFillColor: '#F4CC49',
  inactiveFillColor: '#c6cdd6',
};

interface BookRatingProps {
  size?: 'lg' | 'sm' | 'md';
  userBookId: string;
  rating: number;
  setRating: (rating: number) => void;
}

// Book Rating Component
export function BookRating({
  userBookId,
  size = 'sm',
  rating,
  setRating,
}: BookRatingProps) {
  const { updateUserBook } = useUpdateUserBook({
    onCompleted: (_) => {
      toast({
        title: `Book rating updated `,
        // variant: 'success',
      });
    },
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });
  async function updateRating(selectedValue: number) {
    await updateUserBook(userBookId, {
      rating: selectedValue,
    });
    setRating(selectedValue);
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
