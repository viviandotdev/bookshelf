"use client";
import React from "react";
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

interface BookDropdownProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  rating: number;
  setRating: (rating: number) => void;
}

export const BookDropdown: React.FC<BookDropdownProps> = ({
  open,
  setOpen,
  rating,
  setRating,
}) => {
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
            <DropdownMenuItem>
              <Icons.bookPlus className="h-5 w-5 mr-2" />
              Want to Read
            </DropdownMenuItem>
            <DropdownMenuItem>
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
            <DropdownMenuItem>
              <Icons.shelf className="h-5 w-5 mr-2" />
              Add to shelf
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.plus className="h-5 w-5 mr-2" />
              Log or reivew book
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => {}}>
              <Icons.delete className="h-5 w-5 mr-2" />
              Remove...
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default BookDropdown;
