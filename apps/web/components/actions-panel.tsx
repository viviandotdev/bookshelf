"use client";
import React, { use, useCallback, useEffect, useState } from "react";
import { Icons } from "./icons";
import { Rating, Star } from "@smastrom/react-rating";
import { BookData } from "@/types/interfaces";
import { UserBook, useSaveBookMutation } from "@/graphql/graphql";
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import useSheleveModal from "@/hooks/use-shelve-modal";
import useStatusModal from "@/hooks/use-status-modal";
import { stat } from "fs/promises";
import { useFirstRender } from "@/hooks/use-first-render";
interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#F4CC49",
  inactiveFillColor: "#c6cdd6",
};

function ActionItem({ icon, label, onClick }: ActionItemProps) {
  return (
    <div className="grid place-items-center cursor-pointer" onClick={onClick}>
      {icon}
      <button className="p-1">{label}</button>
    </div>
  );
}

function ActionGroup() {
  const shelfModal = useSheleveModal();
  const onShelveClick = () => {
    shelfModal.onOpen();
  };
  return (
    <div className="grid grid-cols-3 gap-4 bg-secondary rounded-lg p-3">
      <ActionItem icon={<Icons.log className="h-8 w-8 " />} label="Log" />
      <ActionItem
        onClick={onShelveClick}
        icon={<Icons.library className="h-8 w-8" />}
        label="Shelve"
      />
      <ActionItem icon={<Icons.heart className="h-8 w-8" />} label="Like" />
    </div>
  );
}

interface ActionsPanelProps {
  book: BookData;
  userBookId: string;
  bookStatus: string | undefined;
}
export default function ActionsPanel({ book, bookStatus }: ActionsPanelProps) {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState(bookStatus);
  const { data: session } = useSession();
  const statusModal = useStatusModal();
  const updateUserId = useStatusModal((state) => state.updateUserId);
  const updateStatus = useStatusModal((state) => state.updateStatus);
  const updateBookId = useStatusModal((state) => state.updateBookId);
  const [SaveBook] = useSaveBookMutation();
  const firstRender = useFirstRender();
  useEffect(() => {
    updateStatus(bookStatus as string);
  }, []);

  useEffect(() => {
    // Check if statusModal.status is different from the current status state
    if (!firstRender && statusModal.status !== status) {
      setStatus(statusModal.status); // Update the status in ActionsPanel
      //   console.log(`Status updated in ActionsPanel: ${statusModal.status}`);
    }
  }, [statusModal.status]); // Run the effect whenever statusModal.status changes

  async function saveBook(book: BookData) {
    const { data, errors } = await SaveBook({
      variables: {
        input: {
          book: {
            id: book.id,
            title: book.title,
            author: book.author,
            publisher: book.publisher,
          },
          userId: session?.user.id,
        },
      },
    });
    setStatus("Want to Read");
    if (data) {
      toast({
        title: "Sucessfully saved book!",
      });
    } else {
      toast({
        title: "Error saving book!",
      });
    }
  }

  async function openUpdateStatusModal() {
    updateUserId(session?.user.id as string);
    updateBookId(book.id);
    updateStatus(status as string);
    statusModal.onOpen();
  }

  return (
    <>
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
          {status ? (
            <button
              onClick={() => openUpdateStatusModal()}
              className="bg-secondary inline-flex justify-center items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer"
            >
              <Icons.edit className="mr-2 h-4 w-4 " />
              {status}
            </button>
          ) : (
            <button
              onClick={() => saveBook(book)}
              className="bg-primary text-white items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer"
            >
              Want to Read
            </button>
          )}
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
    </>
  );
}
