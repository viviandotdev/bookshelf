'use client';
import React, { useEffect, useState } from 'react';
import { BookData } from '@/types/interfaces';
import { Book, Review, Shelf, useUserBookLazyQuery } from '@/graphql/graphql';
import { useSession } from 'next-auth/react';
import useUserBookStore from '@/stores/use-user-book-store';
import { Icons } from '../../../components/icons';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import { Button } from '@/components/ui/button';
import useCreateUserBook from '../mutations/use-create-user-book';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import { BookRating } from '@/components/book-rating';
import useCreateReviewModal from '@/components/modals/create-review-modal/use-create-review.modal';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import useShelfStore from '@/stores/use-shelf-store';
import SkeletonActionPanel from '@/modules/skeletons/components/skeleton-action-panel';
interface ActionItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

function ActionItem({ icon, label, onClick }: ActionItemProps) {
    return (
        <div
            className='flex cursor-pointer flex-col items-center'
            onClick={onClick}
        >
            {icon}
            <button className='p-1'>{label}</button>
        </div>
    );
}
interface ActionsPanelProps {
    book: Book;
    shelves: Shelf[];
    reviewed: boolean;
    reviewId?: string;
    review: Review;
}
export default function ActionsPanel({
    book,
    review,
    shelves,
    reviewed,
    reviewId,
}: ActionsPanelProps) {
    const [rating, setRating] = useState(0); // Initial value
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
    const statusModal = useBookStatusModal();
    const addToShelfModal = useAddToShelfModal();
    const createReviewModal = useCreateReviewModal();
    const {
        setBook,
        updateBookId,
        updateStatus,
        updateRating,
        updateUserId,
        status: userBookStatus,
        rating: userBookRating,
    } = useUserBookStore();
    const { createUserBook } = useCreateUserBook();
    const { initShelves } = useShelfStore();
    const router = useRouter();
    const pathname = usePathname();
    const editReview = pathname.includes('review');

    const [loadBook] = useUserBookLazyQuery({
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
        onError: (error) => {
            toast({
                title: error.message,
                variant: 'destructive',
            });
        },
        onCompleted: (data) => {
            setBook(data.userBook?.book as Book);
            setStatus(data.userBook?.status as string);
            setRating(data.userBook?.rating as number);
            setLoading(false);
        },
        errorPolicy: 'all',
    });

    useEffect(() => {
        initShelves(shelves);
    }, []);
    useEffect(() => {
        setStatus(userBookStatus);
        // update the rating too>
    }, [userBookStatus]);

    useEffect(() => {
        setRating(userBookRating);
    }, [userBookRating]);
    useEffect(() => {
        const loadData = async () => {
            await loadBook({ variables: { where: { id: book.id } } });
        };
        loadData();
    }, [loadBook, router]);

    const journalEntryModal = useJournalEntryModal();

    async function createBook(book: BookData) {
        setLoading(true);
        await createUserBook(book);
        setStatus('Want to Read');
        setLoading(false);
    }

    async function openUpdateStatusModal() {
        updateUserId(session?.user.id as string);
        updateBookId(book.id);
        updateStatus(status as string);
        statusModal.onOpen();
    }

    const handleLogClick = () => {
        if (status == 'Currently Reading') {
            setBook(book!);
            updateStatus(status);
            journalEntryModal.onOpen();
        }
    };

    let actionItemToShow;
    switch (status) {
        case 'Currently Reading':
            actionItemToShow = (
                <ActionItem
                    onClick={handleLogClick}
                    icon={<Icons.log className='h-8 w-8 items-center' />}
                    label='Log'
                />
            );
            break;
        case 'Did Not Finish':
            actionItemToShow = (
                <ActionItem
                    onClick={() => openUpdateStatusModal()}
                    icon={<Icons.dnf className='h-8 w-8 items-center' />}
                    label='Did Not Finish'
                />
            );
            break;
        case 'Read':
            actionItemToShow = (
                <ActionItem
                    onClick={() => openUpdateStatusModal()}
                    icon={<Icons.book className='h-8 w-8 items-center' />}
                    label='Read'
                />
            );
            break;
        case 'Want to Read':
            actionItemToShow = (
                <ActionItem
                    onClick={() => openUpdateStatusModal()}
                    icon={
                        <Icons.save
                            color={'#64748b'}
                            fill='#64748b'
                            className='h-8 w-8 items-center '
                        />
                    }
                    label='To Read'
                />
            );
            break;
        default:
            actionItemToShow = (
                <ActionItem
                    onClick={() => createBook(book)}
                    icon={<Icons.save className='h-8 w-8 items-center' />}
                    label='To Read'
                />
            );
    }

    if (loading) {
        return <SkeletonActionPanel />;
    }
    return (
        <>
            <div className='flex min-w-72 flex-col items-center gap-1 rounded-lg text-sm font-light text-gray-500'>
                <div className='grid w-[fill-available] grid-cols-3 items-center rounded-lg bg-beige-100 p-2'>
                    {actionItemToShow}
                    <ActionItem
                        icon={<Icons.library className='h-8 w-8 items-center' />}
                        label='Shelve'
                    />
                    <ActionItem
                        icon={<Icons.heart className='h-8 w-8 items-center' />}
                        label='Like'
                    />
                </div>

                <div className='flex w-[fill-available] cursor-pointer flex-col items-center justify-center rounded-lg bg-beige-100 p-2 text-center'>
                    <span>Rating</span>
                    <BookRating
                        size={'lg'}
                        bookId={book.id}
                        rating={rating}
                        setRating={setRating}
                    />
                </div>
                {status ? (
                    <Button
                        onClick={() => openUpdateStatusModal()}
                        disabled={loading}
                        className='inline-flex w-[fill-available] cursor-pointer items-center justify-center rounded-lg bg-beige-100 p-2 text-center text-sm font-light text-gray-500 hover:bg-beige-100'
                    >
                        <Icons.edit className='mr-2 h-4 w-4 ' />
                        {status}
                    </Button>
                ) : (
                    <Button
                        disabled={loading}
                        onClick={() => createBook(book)}
                        className='w-[fill-available] cursor-pointer items-center rounded-lg bg-beige p-2 text-center font-light text-white'
                    >
                        Want to Read
                    </Button>
                )}

                <div
                    onClick={() => {
                        updateBookId(book!.id);
                        setBook(book!);
                        if (!editReview) {
                            updateRating(rating);
                            createReviewModal.onOpen();
                        } else {
                            updateRating(rating);
                            createReviewModal.setReview({
                                spoilers: review.spoilers || false,
                                content: review.content || '',
                            });
                            createReviewModal.onEdit(reviewId || '');
                        }
                    }}
                    className='w-[fill-available] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'
                >
                    {reviewed
                        ? `${editReview ? 'Edit Review' : 'Review Again'}`
                        : ' Review'}
                </div>
                <div
                    onClick={() => {
                        updateBookId(book!.id);
                        addToShelfModal.onOpen();
                    }}
                    className='w-[fill-available] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'
                >
                    Add to shelf
                </div>
            </div>
        </>
    );
}
