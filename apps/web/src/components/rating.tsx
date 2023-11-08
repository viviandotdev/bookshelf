import { useUpdateUserBook } from "@/hooks/user-books/mutations";
import { Rating, Star } from "@smastrom/react-rating";


const myStyles = {
    itemShapes: Star,
    activeFillColor: "#F4CC49",
    inactiveFillColor: "#c6cdd6",
};


interface BookRatingProps {
    bookId: string;
    rating: number;
    setRating: (rating: number) => void;
}

// Book Rating Component
export function BookRating({ rating, setRating, bookId }: BookRatingProps) {
    // get the userbook context
    const { updateUserBook } = useUpdateUserBook();
    async function updateRating(selectedValue: number) {
        const updatedBook = await updateUserBook(bookId, { rating: selectedValue });
        if (updatedBook) {
            setRating(selectedValue);
        }
    }

    return (
        <div className="flex justify-end items-center gap-2">
            My Rating:
            <Rating
                halfFillMode="box"
                itemStyles={myStyles}
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={updateRating}
            />
        </div>
    );
}
