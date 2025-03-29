'use client';
import React, { useState } from 'react';
import { UserBook } from '@/graphql/graphql';
import CurrentlyReadingItem from './currently-reading-item';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { SearchBookModal } from './search-book-modal';

interface CurrentlyReadingSectionProps {
    currentlyReading: UserBook[];
}

const AddBookButton = () => {
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

export const CurrentlyReadingSection: React.FC<CurrentlyReadingSectionProps> = ({
    currentlyReading,
}) => {
    return (
        <section className="bg-white">
            <div className="flex flex-col justify-between gap-4">
                {currentlyReading.map((book, idx) => (
                    <CurrentlyReadingItem key={idx} userBook={book} />
                ))}
                <div>
                    <div className="flex items-center justify-center rounded-md border border-dashed border-gray-300 p-4">
                        <AddBookButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentlyReadingSection;
