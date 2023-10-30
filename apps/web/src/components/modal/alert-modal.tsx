"use client";
import React from "react";
import { Modal } from "@/src/components/ui/modal";
import { Button } from "../ui/button";
interface AlertModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button
          label="Cancel"
          disabled={loading}
          variant="outline"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          label="Continue"
          disabled={loading}
          variant="default"
          onClick={onConfirm}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};
export default AlertModal;
