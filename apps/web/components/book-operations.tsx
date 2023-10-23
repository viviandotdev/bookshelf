"use client";
import React, { useEffect, useState } from "react";
import { BookRating } from "./book-card";
import { Icons } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import {
  Book,
  UserBookShelves,
  useRemoveUserBookMutation,
  useUpdateUserBookMutation,
} from "@/graphql/graphql";
import useAddToShelfModal from "@/hooks/use-add-to-shelf-modal";
import useUserBook from "@/hooks/use-user-book";
import useJouranlEntryModal from "@/hooks/use-journal-entry-modal";
import AlertModal from "./modal/alert-modal";
interface BookOperationsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  rating: number;
  bookStatus: string;
  setRating: (rating: number) => void;
  book: Book;
  shelves: UserBookShelves[];
}

export const BookOperations: React.FC<BookOperationsProps> = ({
  open,
  setOpen,
  rating,
  bookStatus,
  setRating,
  book,
  shelves,
}) => {
  const jouranlEntryModal = useJouranlEntryModal();
  const [openAlert, setOpenAlert] = useState(false);
  const addToShelfModal = useAddToShelfModal();
  const [isLoading, setIsLoading] = useState(false);
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const [removeUserBook] = useRemoveUserBookMutation();
  const updateBookId = useUserBook((state) => state.updateBookId);
  const updateUserBook = useUserBook((state) => state.updateUserBook);
  const initShelves = useUserBook((state) => state.initShelves);
  const [status, setStatus] = useState(bookStatus);
  const onUpdate = async (status: string) => {
    const { data, errors } = await UpdateUserBook({
      variables: {
        data: {
          status: status,
        },
        where: {
          id: book.id,
        },
      },
      errorPolicy: "all",
    });

    if (errors) {
      toast({
        title: "Error updating book",
        variant: "destructive",
      });
    }

    if (data) {
      toast({
        title: `Sucessfully updated book status to ${data.updateUserBook.status}`,
      });
    }
    setStatus(status);
  };

  const onDelete = async () => {
    setIsLoading(true);
    const { data, errors } = await removeUserBook({
      variables: {
        where: {
          id: book.id,
        },
      },
      errorPolicy: "all",
    });

    if (errors) {
      toast({
        title: errors[0].message,
        variant: "destructive",
      });
    }
    if (data && !errors) {
      setIsLoading(false);
      setOpenAlert(false);
      toast({
        title: "Sucessfylly deleted book",
      });
    }
  };

  return (
    <div>
      <AlertModal
        title={"Are you sure you want to remove this book from your shelf?"}
        description={
          "Removing this book will clear associated ratings, reviews and reading activity"
        }
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
        onConfirm={onDelete}
        loading={isLoading}
      />
      <DropdownMenu open={open} modal={false}>
        <DropdownMenuTrigger
          asChild
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Icons.more className="stroke-1 fill-current stroke-primary cursor-pointer rotate-90 h-6 w-6 text-primary" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onMouseLeave={() => {
            setOpen(false);
          }}
          align={"start"}
          sideOffset={8}
          side={"top"}
          className="w-56"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem
              className={`${
                status === "Want to Read" && "bg-accent text-primary"
              }`}
              onClick={() => {
                onUpdate("Want to Read");
              }}
            >
              <Icons.bookPlus className="h-5 w-5 mr-2" />
              Want to Read
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`${
                status === "Currently Reading" && "bg-accent text-primary"
              }`}
              onClick={() => {
                onUpdate("Currently Reading");
              }}
            >
              <Icons.bookOpen className={`h-5 w-5 mr-2`} />
              Currently Reading
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`${status === "Read" && "bg-accent text-primary"}`}
              onClick={() => {
                onUpdate("Read");
              }}
            >
              <Icons.read className="h-5 w-5 mr-2" />
              Read
            </DropdownMenuItem>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem>
              <BookRating rating={rating} setRating={setRating} />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                initShelves(shelves);
                updateBookId(book.id);

                addToShelfModal.onOpen();
              }}
            >
              <Icons.shelf className="h-5 w-5 mr-2" />
              Add to shelf
            </DropdownMenuItem>
            {status == "Currently Reading" && (
              <DropdownMenuItem
                onClick={() => {
                  updateUserBook(book);
                  jouranlEntryModal.onOpen();
                }}
              >
                <Icons.plus className="h-5 w-5 mr-2" />
                Update Progress
              </DropdownMenuItem>
            )}

            <DropdownMenuItem
              onClick={() => {
                setOpenAlert(true);
              }}
            >
              <Icons.delete className="h-5 w-5 mr-2" />
              Remove...
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default BookOperations;
