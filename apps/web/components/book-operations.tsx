"use client";
import React, { useState } from "react";
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
  Shelf,
  UserBookShelves,
  useRemoveUserBookMutation,
  useUpdateUserBookMutation,
} from "@/graphql/graphql";
import useAddToShelfModal from "@/hooks/use-add-to-shelf-modal";
import useUserBook from "@/hooks/use-user-book";

interface BookOperationsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  rating: number;
  setRating: (rating: number) => void;
  book: Book;
  shelves: UserBookShelves[];
}

export const BookOperations: React.FC<BookOperationsProps> = ({
  open,
  setOpen,
  rating,
  setRating,
  book,
  shelves,
}) => {
  const addToShelfModal = useAddToShelfModal();
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const [removeUserBook] = useRemoveUserBookMutation();
  const updateStatus = useUserBook((state) => state.updateStatus);
  const updateBookId = useUserBook((state) => state.updateBookId);
  const initShelves = useUserBook((state) => state.initShelves);
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
  };
  const onDelete = async () => {
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
      toast({
        title: "Sucessfylly deleted book",
      });
    }
  };
  return (
    <div>
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
              onClick={() => {
                onUpdate("Want to Read");
              }}
            >
              <Icons.bookPlus className="h-5 w-5 mr-2" />
              Want to Read
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                onUpdate("Want to Read");
              }}
            >
              <Icons.bookOpen className="h-5 w-5 mr-2" />
              Currently Reading
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.read className="h-5 w-5 mr-2" />
              Read
            </DropdownMenuItem>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem>
              <BookRating rating={rating} setRating={setRating} />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                console.log("shelves", shelves);
                initShelves(shelves);
                updateBookId(book.id);

                addToShelfModal.onOpen();
              }}
            >
              <Icons.shelf className="h-5 w-5 mr-2" />
              Add to shelf
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.plus className="h-5 w-5 mr-2" />
              Log book
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => {
                onDelete();
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
