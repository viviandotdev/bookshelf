"use client";
import React, { useState } from "react";
import { Icons } from "./icons";
import BookCover from "./book-cover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BookRating } from "./book-card";

interface BookProps {
  image: string;
  details?: {
    progress: number;
    date_started: string;
  };
  responsive?: boolean;
}

export const Book: React.FC<BookProps> = ({ image, details, responsive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [rating, setRating] = useState(0);
  return (
    <div
      className={`${
        responsive && "hidden md:block"
      } cursor-pointer group/item relative transition shadow-md duration-300 ease-in-out transform ${
        isHovered ? "scale-95 " : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setOpenMenu(false);
        setIsHovered(false);
      }}
    >
      <div className={`flex-row cursor-pointer `}>
        <div>
          <BookCover src={image} size={"dynamic"} />
          <div className="top-0 absolute"></div>
        </div>
        {details && (
          <BookDetails
            progress={details.progress}
            dateStarted={details.date_started}
          />
        )}
      </div>

      <div
        className={`${details ? "mb-10" : "mb-2"}   ${
          isHovered || openMenu ? "block" : "hidden"
        } flex inset-2 items-end justify-center opacity-90 absolute`}
      >
        <div className="flex-col justify-end">
          <div
            onMouseLeave={() => {
              setOpenMenu(false);
            }}
            className="flex gap-3 bg-secondary text-primary font-bold py-2 px-4 rounded mx-2"
          >
            <Icons.book className="cursor-pointer h-6 w-6 text-primary" />
            <Icons.heart className="cursor-pointer h-6 w-6 text-primary" />
            <DropdownMenu open={openMenu} modal={false}>
              <DropdownMenuTrigger asChild>
                <Icons.more
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                  className="stroke-1 fill-current stroke-primary cursor-pointer rotate-90 h-6 w-6 text-primary"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseLeave={() => {
                  setOpenMenu(false);
                }}
                align={"start"}
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
                    <BookRating rating={0} setRating={setRating} />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.shelf className="h-5 w-5 mr-2" />
                    Add to shelf
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.plus className="h-5 w-5 mr-2" />
                    Log or reivew book
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Icons.delete className="h-5 w-5 mr-2" />
                    Remove...
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
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
    <div className="pt-1.5 pb-1.5 pl-3 pr-3 bg-secondary rounded-sm text-xs text-muted-foreground">
      <div className="flex justify-between">
        <div className="flex items-center text-primary">
          <div className="align-middle">
            <Icons.pieChart className="h-3 w-3 opacity-50" />
          </div>
          <span className="ml-1.5 text-muted-foreground">{progress}%</span>
        </div>
        <div className="text-muted-foreground hidden lg:block">
          {dateStarted}
        </div>
      </div>
    </div>
  );
};

export default Book;
