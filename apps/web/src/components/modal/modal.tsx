"use client";

import { useCallback, useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import { dm_sefif_display } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none

            "
            >
              {/*header*/}
              <div
                className="
                items-center
                p-8
                pb-0
                rounded-t
                justify-center
                relative
                "
              >
                <button
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    right-9
                  "
                  onClick={handleClose}
                >
                  <Icons.close size={18} />
                </button>
                <div
                  className={cn(
                    dm_sefif_display.className,
                    "text-xl font-semibold"
                  )}
                >
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-8 flex-auto">{body}</div>
              {/*footer*/}
              {(actionLabel || secondaryActionLabel) && (
                <div className="flex flex-col gap-2 p-8 pt-0">
                  <div
                    className="
                      flex
                      flex-row
                      items-center
                      gap-6
                      w-full
                      justify-end
                    "
                  >
                    {secondaryAction && secondaryActionLabel && (
                      <Button
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" })
                        )}
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                      />
                    )}
                    {actionLabel && (
                      <Button
                        className={cn(
                          buttonVariants({ variant: "default", size: "lg" })
                        )}
                        disabled={disabled}
                        label={actionLabel}
                        onClick={handleSubmit}
                      />
                    )}
                  </div>
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
