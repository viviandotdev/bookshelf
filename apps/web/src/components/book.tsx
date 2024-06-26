'use client';
import React, { useEffect, useState } from 'react';
import { UserBook, useRemoveUserBookMutation } from '@/graphql/graphql';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import useShelfStore from '@/stores/use-shelf-store';
import GalleryCard from '@/modules/bookshelves/components/gallery-card';
import ListCard from '@/modules/bookshelves/components/list-card';
import { toast } from '@/hooks/use-toast';

interface BookProps {
  details?: {
    progress: number;
    date_started: string;
  };
  userBook: UserBook;
  responsive?: boolean;
  showRemoveBook?: boolean;
  view: string;
}

export const Book: React.FC<BookProps> = ({
  userBook,
  details,
  responsive,
  showRemoveBook,
  view,
}) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { shelves, book } = userBook;
  const [isLoading, setIsLoading] = useState(false);
  const { decrementLibraryCount, decrementShelfCount } = useShelfStore();
  const [status, setStatus] = useState(userBook.status ? userBook.status : '');
  const [rating, setRating] = useState(userBook.rating ? userBook.rating : 0); // Initial value
  const [percent, setPercent] = useState(0);
  const { journalEntry } = useJournalEntryModal();
  useEffect(() => {
    setStatus(userBook.status ? userBook.status : '');
    setRating(userBook.rating ? userBook.rating : 0);
    if (userBook.journalEntry && userBook.journalEntry.length > 0) {
      setPercent(userBook.journalEntry[0].currentPercent || 0);
    }
  }, [userBook]);

  const [removeUserBook] = useRemoveUserBookMutation({
    onCompleted: (data) => {
      toast({
        title: `Book removed from your library`,
        variant: 'success',
      });
    },
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });

  const onDelete = async () => {
    setIsLoading(true);
    await removeUserBook({
      variables: { where: { id: userBook.id } },
    });
    // update shelf counts of deleted bokk
    // if (deletedBook && deletedBook.shelves && deletedBook.shelves.length > 0) {
    //   // delete from all shelves
    //   deletedBook.shelves.map((item) => {
    //     decrementShelfCount(item.shelf.name);
    //   });
    // } else {
    //   decrementLibraryCount('Unshelved');
    // }
    // decrementLibraryCount('All Books');
    setIsLoading(false);
    setOpenAlert(false);
  };
  return (
    <div>
      {view == 'gallery' && (
        <GalleryCard
          userBookId={userBook.id}
          responsive={responsive}
          book={book!}
          details={details}
          openAlert={openAlert}
          isLoading={isLoading}
          onDelete={onDelete}
          status={status}
          setOpenAlert={setOpenAlert}
          setStatus={setStatus}
          setRating={setRating}
          rating={rating}
          shelves={shelves} // Adjust accordingly if `userBook.shelves` is not the correct type
          showRemoveBook={showRemoveBook}
        />
      )}
      {view == 'list' && (
        <ListCard
          userBookId={userBook.id}
          book={book!}
          status={status}
          rating={rating}
          shelves={shelves}
          setStatus={setStatus}
          setRating={setRating}
          setOpenAlert={setOpenAlert}
          onDelete={onDelete}
          openAlert={openAlert}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Book;
