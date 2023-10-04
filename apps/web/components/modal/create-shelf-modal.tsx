"use client";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./modal";
import useCreateShelfModal from "@/hooks/use-create-shelf-moda";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";

interface CreateShelfModalProps {}

export const CreateShelfModal: React.FC<CreateShelfModalProps> = ({}) => {
  const createShelfModal = useCreateShelfModal();
  const [shelfName, setShelfName] = useState(""); // State to manage the input value
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // Ref for the input element

  useEffect(() => {
    // Reset shelfName and focus input when the modal opens
    if (createShelfModal.isOpen && inputRef.current) {
      setShelfName("");
      inputRef.current.focus(); // Focus on the input element
    }
  }, [createShelfModal.isOpen]);

  const bodyContent = (
    <div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className=" text-right font-semibold">
          Shelf Name
        </Label>
        <Input
          ref={inputRef} // Assign the inputRef to the input element
          id="name"
          className="col-span-3"
          value={shelfName}
          onChange={(e) => setShelfName(e.target.value)}
        />
      </div>
    </div>
  );
  const onSubmit = async () => {
    createShelfModal.onClose();

    console.log(shelfName);
  };
  return (
    <Modal
      disabled={isLoading}
      isOpen={createShelfModal.isOpen}
      onClose={createShelfModal.onClose}
      onSubmit={onSubmit}
      title={`Enter a name for this shelf`}
      body={bodyContent}
      actionLabel="Add Shelf "
      secondaryAction={createShelfModal.onClose}
      secondaryActionLabel="Cancel"
    />
  );
};
export default CreateShelfModal;
