import React, { useRef, useState } from 'react';
import { Book, UserBook } from '@/graphql/graphql';
import { Icons } from '@/components/icons';
import BookCover from '@/components/book-cover';
import AlertModal from '@/components/modals/alert-modal';
import BookActions from '@/components/book-actions';
import Link from 'next/link';

interface GalleryCardProps {
    responsive?: boolean;
    book: Book;
    details?: {
        progress: number;
        date_started: string;
    };
    openAlert: boolean;
    isLoading: boolean;
    onDelete: () => void;
    status: string;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    rating: number;
    shelves: any; // Adjust the type according to your requirement
    showRemoveBook?: boolean;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
    responsive,
    book,
    details,
    openAlert,
    isLoading,
    onDelete,
    status,
    setRating,
    setStatus,
    setOpenAlert,
    rating,
    shelves,
    showRemoveBook,
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div
            className={`${responsive && "hidden md:block"
                } cursor-pointer group/item relative transition shadow-md duration-300 ease-in-out transform ${isHovered ? "scale-95 " : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setOpenMenu(false);
                setIsHovered(false);
            }}
        >
            <div className={`flex-row cursor-pointer `}>
                <div>
                    <BookCover
                        src={book && book.coverImage ? book.coverImage : null}
                        size={"dynamic"}
                    />
                    <div className="top-0 absolute"></div>
                </div>
                {details && (
                    <BookDetails
                        progress={details.progress}
                        dateStarted={details.date_started}
                    />
                )}
            </div>
            <>
                <AlertModal
                    title={"Are you sure you want to remove this book from your shelf?"}
                    description={"Removing this book will clear associated ratings, reviews and reading activity"}
                    isOpen={openAlert}
                    onClose={() => setOpenAlert(false)}
                    onConfirm={onDelete}
                    loading={isLoading}
                />
                <div
                    className={`${details ? "mb-10" : "mb-2"}   ${isHovered || openMenu ? "block" : "hidden"} flex inset-2 items-end justify-center opacity-90 absolute`}
                    onClick={() => {
                        if (linkRef.current) {
                            linkRef.current.click();
                        }
                    }}
                >
                    <div className="flex-col justify-end" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div
                            onMouseLeave={() => {
                                setOpenMenu(false);
                                setOpenDropdown(false);
                            }}
                            className="flex gap-3 bg-beige-200 text-beige font-bold py-2 px-4 rounded mx-2"
                        >
                            <Icons.book className="cursor-pointer h-6 w-6 text-beige" onClick={(e) => {
                                e.stopPropagation();
                            }} />
                            <Icons.heart className="cursor-pointer h-6 w-6 text-beige" onClick={(e) => {
                                e.stopPropagation();
                            }} />
                            <BookActions
                                openDropdown={openDropdown}
                                setOpenDropdown={setOpenDropdown}
                                setOpenAlert={setOpenAlert}
                                status={status}
                                setStatus={setStatus}
                                book={book}
                                setRating={setRating}
                                rating={rating}
                                shelves={shelves}
                                trigger={<Icons.more className="stroke-1 fill-current stroke-beige cursor-pointer rotate-90 h-6 w-6 text-beige" />}
                                showRemoveBook={showRemoveBook}
                            />
                        </div>
                    </div>
                </div>
                <Link ref={linkRef} href={`/book/${book?.id}`} className="hidden"></Link>
            </>
        </div>
    );
};


interface BookDetailsProps {
    progress: number;
    dateStarted: string;
}

export const BookDetails: React.FC<BookDetailsProps> = ({
    progress,
    dateStarted,
}) => {
    return (
        <div className="pt-1.5 pb-1.5 pl-3 pr-3 bg-beige-100 rounded-sm text-xs text-gray-500">
            <div className="flex justify-between">
                <div className="flex items-center text-beige">
                    <div className="align-middle">
                        <Icons.pieChart className="h-3 w-3 opacity-50" />
                    </div>
                    <span className="ml-1.5 text-gray-500">{progress}%</span>
                </div>
                <div className="text-gray-500 hidden lg:block">
                    {dateStarted}
                </div>
            </div>
        </div>
    );
};


export default GalleryCard;
