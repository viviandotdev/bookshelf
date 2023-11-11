import { useSearchParams } from "next/navigation";
import { BookCard, BookInfo, BookShelves } from "@/components/book-card";
import BookCover from "@/components/book-cover";
import { Icons } from "@/components/icons";
interface SearchPageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


export default function SearchPage({ searchParams }: SearchPageProps) {
    const resultSelections = ["All", "Title", "Author"];

    function selection(title: string) {
        return (
            <div className="text-xs bg-secondary w-[fill-available] rounded-lg p-2 cursor-pointer">
                {title}
            </div>
        );
    }
    return (
        <>
            <>
                <div className="flex-col justify-center">
                    <div className="w-full grid grid-cols-4 gap-4">
                        <div className="col-span-4 xl:col-span-3">
                            {/* <ContentNav
                                resultText={`Found at least 200 matches for “${searchQuery}”`}
                            /> */}
                            <hr className="mt-1 border-t-1 border-primary" />
                            <div>
                                <BookCard
                                    book={booksData[0]}
                                    content={
                                        <BookCard.BookContent
                                            image={<BookCover src={booksData[0].image} size={"sm"} />}
                                            info={<BookInfo />}
                                        />
                                    }
                                    actions={
                                        <BookCard.BookActions
                                            buttons={[
                                                <>
                                                    Currently reading
                                                    <Icons.chevronDown className="h-4 w-4" />
                                                </>
                                                ,
                                                <>
                                                    Edit
                                                </>
                                            ]}
                                        />
                                    }
                                />
                            </div>
                        </div>
                        <div className="hidden xl:block">
                            <div className="w-full justify-between mt-8 rounded-lg flex flex-col text-sm gap-1 text-muted-foreground font-light">
                                <div className="leading-7 items-start text-primary font-semibold ">
                                    Show Results For
                                </div>
                                <hr className="mt-1 border-t-1 border-primary" />
                                {resultSelections.map((heading) => {
                                    return selection(heading);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}
