"use client";

import { useEffect, useState } from "react";

import { AddToShelfModal } from "@/modules/bookshelves/components/add-to-shelf-modal";
import LogBookModal from "@/components/modals/log-book-modal";
import { JouranlEntryModal } from "@/modules/journal/components/journal-entry-modal";
import { CreateReviewModal } from "@/components/modals/create-review-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AddToShelfModal />
            <LogBookModal />
            <JouranlEntryModal />
            <CreateReviewModal />
        </>
    );
}
