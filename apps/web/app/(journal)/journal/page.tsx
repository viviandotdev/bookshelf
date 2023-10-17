import { cn } from "@/lib/utils";
import { dm_sefif_display } from "@/lib/fonts";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { BooksSection } from "@/components/books-section";
import fakeBookData from "@/lib/testData/fakeBookData";

export default async function JournalPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  type Entry = {
    id: string;
    readingNotes: string;
    dateRead: string;
    startPage: number;
    endPage: number;
    userBookId: string;
  };

  const journalEntries: Entry[] = [
    {
      id: "4",
      readingNotes: "Couldn't put the book down!",
      dateRead: "2023-10-17T14:20:00Z",
      startPage: 1,
      endPage: 150,
      userBookId: "sadfasdf",
    },
    {
      id: "5",
      readingNotes: "A bit slow in the middle, but picked up later.",
      dateRead: "2023-10-18T11:10:00Z",
      startPage: 100,
      endPage: 250,
      userBookId: "sadfasdf",
    },
    {
      id: "6",
      readingNotes: "Unexpected plot twists!",
      dateRead: "2023-10-19T16:45:00Z",
      startPage: 200,
      endPage: 350,
      userBookId: "2",
    },
    {
      id: "7",
      readingNotes: "Emotionally engaging storyline.",
      dateRead: "2023-10-20T09:00:00Z",
      startPage: 1,
      endPage: 200,
      userBookId: "1",
    },
  ];

  const booksData = fakeBookData;

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-0">
        Journal Page
      </section>
    </>
  );
}
