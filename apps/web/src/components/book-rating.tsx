'use client';
import { toast } from '@/hooks/use-toast';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { Rating, Star } from '@smastrom/react-rating';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const myStyles = {
    itemShapes: Star,
    activeFillColor: '#F4CC49',
    inactiveFillColor: '#c6cdd6',
};

interface BookRatingProps {
    size?: 'lg' | 'sm' | 'md';
    userBookId: string;
    rating: number | null;
    setRating: (rating: number | undefined) => void;
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
                title: `Book rating updated`,
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

    async function clearRating() {
        await updateUserBook(userBookId, {
            rating: null,
        });
        setRating(null);
    }

    const width = size === 'lg' ? 200 : size === 'md' ? 150 : 100;
    return (
        <div className='flex items-center justify-end gap-2'>
            <Rating
                halfFillMode='box'
                itemStyles={myStyles}
                style={{ maxWidth: width }}
                value={rating ?? 0}
                onChange={updateRating}
            />
            {rating !== null && (
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={clearRating}
                >
                    <Icons.close className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
}
