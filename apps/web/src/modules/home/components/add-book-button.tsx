import { Plus } from "lucide-react";
import { useState } from "react";
import { SearchBookModal } from "../modals/search-book-modal";
import { Button } from "@/components/ui/button";

export const AddBookButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100"
            >
                <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                        <Plus className="h-4 w-4" />
                    </div>
                    Add a book
                </div>
            </Button>
            <SearchBookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
