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

  const booksData = fakeBookData;

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-0">
        Journal Page
      </section>
    </>
  );
}
