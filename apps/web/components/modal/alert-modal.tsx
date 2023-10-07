"use client";
import useAlertModal from "@/hooks/use-remove-modal";
import React, { useState } from "react";
import Modal from "./modal";
import { useRemoveUserBookMutation } from "@/graphql/graphql";
import useUserBook from "@/hooks/use-user-book";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const bodyContent = (
    <div>
      <p>
        Removing this book will clear associated ratings, reviews and reading
        activity
      </p>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onConfirm}
      title={`Are you sure you want to remove this book from your shelf?`}
      body={bodyContent}
      actionLabel="Remove"
      secondaryAction={onClose}
      secondaryActionLabel="Cancel"
    />
  );
};
export default AlertModal;
