import { Rating, Star } from "@smastrom/react-rating";


const myStyles = {
    itemShapes: Star,
    activeFillColor: "#F4CC49",
    inactiveFillColor: "#c6cdd6",
};


interface BookRatingProps {
    rating: number;
    setRating: (rating: number) => void;
}

// Book Rating Component
export function BookRating({ rating, setRating }: BookRatingProps) {
    // get the userbook context
    // each on change will update the databases of this book with new rating

    return (
        <div className="flex justify-end items-center gap-2">
            My Rating:
            <Rating
                halfFillMode="box"
                itemStyles={myStyles}
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
            />
        </div>
    );
}
