import React from "react";
import { getBook } from "@/modules/book/api/getBook";
import { notFound } from "next/navigation";
import BookTemplate from "@/modules/book/templates";
import { getShelves } from "@/modules/bookshelves/api/getShelves";
import { getReviews } from "@/hooks/review/queries";
import { getCurrentUser } from "@/lib/auth/session";

interface BookPageProps {
    params: { bookId: string };
}

export default async function BookPage({ params }: BookPageProps) {
    const book = await getBook(params.bookId);
    if (!book) {
        notFound();
    }
    const { shelves } = await getShelves();
    const { reviews } = await getReviews(params.bookId);
    const user = await getCurrentUser();
    return (
        <>
            <BookTemplate book={book} shelves={shelves} reviews={reviews} user={user} />
        </>
    );
}
