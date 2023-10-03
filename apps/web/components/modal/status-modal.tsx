"use client";
import React, { ReactNode, use, useState } from "react";
import Modal from "./modal";
import useStatusModal from "@/hooks/use-status-modal";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { useUpdateUserBookStatusMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import useRemoveModal from "@/hooks/use-remove-modal";
import useUserBook from "@/hooks/use-user-book";

interface StatusModalProps {}

export const StatusModal: React.FC<StatusModalProps> = ({}) => {
  const statusModal = useStatusModal();
  const userBook = useUserBook();
  const removeModal = useRemoveModal();
  const [UpdateUserBookStatus] = useUpdateUserBookStatusMutation();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
  };
  const updateStatus = useUserBook((state) => state.updateStatus);
  const status = [
    "Currently Reading",
    "Want to Read",
    "Reading",
    "Read Next",
    "Did not Finish",
  ];
  const handleStatusClick = async (newStatus: string) => {
    updateStatus(newStatus);
    const { data, errors } = await UpdateUserBookStatus({
      variables: {
        input: {
          bookId: userBook.bookId,
          userId: userBook.userId,
          status: newStatus,
        },
      },
    });
    if (data) {
      toast({
        title: `Sucessfully updated book status to ${data.updateUserBookStatus.status}`,
      });
    } else {
      toast({
        title: "Error updating book!",
      });
    }
    statusModal.onClose();
    // set the book to a new status
  };

  const removeFromShelf = () => {
    statusModal.onClose();
    removeModal.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      {status.map((s: string, index: number) => (
        <Button
          key={index}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "text-md rounded-xl"
          )}
          label={s}
          onClick={() => handleStatusClick(s)}
          icon={
            userBook.status == s && (
              <Icons.check className="h-4 w-4 m-2 stroke-[4px]" />
            )
          }
        />
      ))}
      <Button
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "text-md rounded-xl border-none"
        )}
        onClick={() => removeFromShelf()}
        label={"Remove from my shelf"}
        icon={<Icons.delete className="h-4 w-4 m-2 stroke-[4px]" />}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={statusModal.isOpen}
      onClose={statusModal.onClose}
      onSubmit={onSubmit}
      title={`Choose a shelf for this book`}
      body={bodyContent}
    />
  );
};
export default StatusModal;
