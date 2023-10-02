"use client";
import useSheleveModal from "@/hooks/use-shelve-modal";
import { useRouter } from "next/navigation";
import React, { ReactNode, use, useState } from "react";
import Modal from "./modal";
import useStatusModal from "@/hooks/use-status-modal";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

interface StatusModalProps {
  title: string;
}

export const StatusModal: React.FC<StatusModalProps> = ({ title }) => {
  const router = useRouter();
  const statusModal = useStatusModal();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
  };
  const [currentStatus, setCurrentStatus] = useState("Reading");
  const status = [
    "Currently Reading",
    "Want to Read",
    "Reading",
    "Read Next",
    "Did not Finish",
  ];
  const handleStatusClick = (newStatus: string) => {
    setCurrentStatus(newStatus);
    statusModal.onClose();
    // set the book to a new status
  };

  const removeFromShelf = () => {
    statusModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      {status.map((s: string) => (
        <Button
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "text-md rounded-xl"
          )}
          label={s}
          onClick={() => handleStatusClick(s)}
          icon={
            currentStatus == s && (
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
