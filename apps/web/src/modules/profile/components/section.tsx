import Book from "@/components/book";
import { UserBook } from "@/graphql/graphql";


interface SectionProps {
    books: UserBook[];
    title: string
}


export const Section: React.FC<SectionProps> = ({ title, books }) => {

    return (
        <>
            <div className="flex justify-between">
                <div className="text-beige text-lg font-semibold">{title}</div>
                {/* <div className="text-beige text-lg font-semibold">More</div> */}

            </div>
            <div className="grid grid-cols-4 gap-4 justify-center overflow-hidden pt-2 pb-10">
                {books &&
                    books?.slice(0, 4).map((book, idx) => (
                        <div key={idx}>
                            <Book userBook={book} showRemoveBook={true} />
                        </div>
                    ))}
            </div></>
    );
}
