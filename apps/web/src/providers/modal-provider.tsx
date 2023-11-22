"use client";

import { useEffect, useState } from "react";

import { AddToShelfModal } from "@/modules/bookshelves/components/add-to-shelf-modal";
import LogBookModal from "@/components/modals/log-book-modal";

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
        </>
    );
}
