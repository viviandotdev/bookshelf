"use client";
import useSheleveModal from "@/hooks/use-shelve-modal";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import Modal from "./modal";

interface ShelveModalProps {}

export const ShelveModal: React.FC<ShelveModalProps> = ({}) => {
  const router = useRouter();
  const shelveModal = useSheleveModal();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
  };

  const bodyContent = (
    <div>
      <div>Add 'Book' to shelves</div>
      <div>Search bar to find shelves</div>
      <div>List of user shelves</div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={shelveModal.isOpen}
      onClose={shelveModal.onClose}
      onSubmit={onSubmit}
      title={"Reading Status"}
      body={bodyContent}
      actionLabel={"Add"}
    />
  );
};
export default ShelveModal;
