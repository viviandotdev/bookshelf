"use client";
import React, { useState } from "react";
import { Icons } from "./icons";
import { Rating, Star } from "@smastrom/react-rating";
import { BookData } from "@/types/interfaces";
import { useCreateBookMutation } from "@/graphql/graphql";

interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
}

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#F4CC49",
  inactiveFillColor: "#c6cdd6",
};

function ActionItem({ icon, label }: ActionItemProps) {
  return (
    <div className="grid place-items-center cursor-pointer">
      {icon}
      <button className="p-1">{label}</button>
    </div>
  );
}

function ActionGroup() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-secondary rounded-lg p-3">
      <ActionItem icon={<Icons.log className="h-8 w-8 " />} label="Log" />
      <ActionItem icon={<Icons.library className="h-8 w-8" />} label="Shelve" />
      <ActionItem icon={<Icons.heart className="h-8 w-8" />} label="Like" />
    </div>
  );
}

interface ActionsPanelProps {
  book: BookData;
}
export default function ActionsPanel({ book }: ActionsPanelProps) {
  const [rating, setRating] = useState(0);
  const [createBook] = useCreateBookMutation(); // Initial value
  async function addBook(book: BookData) {
    const { errors } = await createBook({
      variables: {
        input: {
          title: book.title,
          isbn: book.isbn,
          author: book.author,
          publisher: book.publisher,
        },
      },
    });
    console.log("book sucessfully added");
  }

  return (
    <>
      <div className="rounded-lg flex flex-col gap-1 items-center text-sm text-muted-foreground font-light">
        <div className="grid items-center grid-cols-3 w-[fill-available]">
          <div className="col-span-3">
            <ActionGroup />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          <span>Rating</span>
          <Rating
            halfFillMode="box"
            itemStyles={myStyles}
            style={{ maxWidth: 200 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <button
          onClick={() => addBook(book)}
          className="bg-primary text-white items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer"
        >
          Want to Read
        </button>
        <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          Review
        </div>
        <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          Add to lists
        </div>
        <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          Edit my activity
        </div>
      </div>
    </>
  );
}
