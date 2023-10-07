"use client";
import useRemoveModal from "@/hooks/use-remove-modal";
import React, { useState } from "react";
import Modal from "./modal";
import { useRemoveUserBookMutation } from "@/graphql/graphql";
import useUserBook from "@/hooks/use-user-book";

interface RemoveShelfProps {}

export const RemoveShelf: React.FC<RemoveShelfProps> = ({}) => {
  const alertModal = useRemoveModal();
  const userBook = useUserBook();
  const [isLoading, setIsLoading] = useState(false);
  const [removeUserBook] = useRemoveUserBookMutation();
  const updateUserId = useUserBook((state) => state.updateUserId);
  const updateStatus = useUserBook((state) => state.updateStatus);
  const updateBookId = useUserBook((state) => state.updateBookId);

  const bodyContent = (
    <div>
      <p>
        Removing this book will clear associated ratings, reviews and reading
        activity
      </p>
    </div>
  );
  const onSubmit = async () => {
    setIsLoading(true);
    await removeUserBook({
      variables: {
        where: {
          bookId: userBook.bookId,
          userId: userBook.userId,
        },
      },
    });

    alertModal.onClose();
  };
  return (
    <Modal
      disabled={isLoading}
      isOpen={alertModal.isOpen}
      onClose={alertModal.onClose}
      onSubmit={onSubmit}
      title={`Are you sure you want to remove this book from your shelf?`}
      body={bodyContent}
      actionLabel="Remove"
      secondaryAction={alertModal.onClose}
      secondaryActionLabel="Cancel"
    />
  );
};
export default RemoveShelf;
