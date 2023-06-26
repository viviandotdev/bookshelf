import ActionsPanel from "@/components/actions-panel";
import BookInfo from "@/components/book-info";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { dm_sefif_display } from "@/lib/fonts";
import { cn, formatDate, processBook } from "@/lib/utils";
import { BookData } from "@/types/interfaces";
import axios from "axios";
import { redirect, notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

interface BookPageProps {
  params: { bookId: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const url = `https://www.googleapis.com/books/v1/volumes/${params.bookId}?key=${process.env.GOOGLE_BOOKS_API_KEY}`;
  const book = await axios.get(url);
  const processedBook: BookData = processBook(book.data) as BookData;
  if (!processedBook) {
    notFound();
  }

  return (
    <div className="grid w-full grid-cols-5 gap-2 ">
      <section className="p-4 hidden xl:block xl:col-span-1">
         <Image
          width={184}
          height={277}
          src={processedBook.image}
          className="max-w-none w-[fill-available] rounded-lg"
          alt="Picture of the author"
    />
      <div className="mt-3 text-[12px] font-light"> <div>{processedBook.pageNum} Pages</div>
        <div>First published {formatDate(processedBook.date)}</div></div>
      </section>
      <section className=" p-4 col-span-5 xl:col-span-4 grid gap-2">
        <div className="grid gap-2">
          <div className="flex items-center">
            <h1
              className={cn(dm_sefif_display.className, "text-4xl/[1.25] mr-4")}
            >
              {processedBook.title}
            </h1>
            <span className="inline text-base">by {processedBook.author}</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <section className="flex flex-col gap-2 col-span-4 pr-4">
              <BookInfo processedBook={processedBook} />
            </section>
            <section className="col-span-2">
              <ActionsPanel />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
