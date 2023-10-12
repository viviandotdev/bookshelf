import { cn } from "@/lib/utils";
import { dm_sefif_display } from "@/lib/fonts";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { BooksSection } from "@/components/books-section";
import fakeBookData from "@/lib/testData/fakeBookData";

export default async function HomePage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const booksData = fakeBookData;

  const headings = [
    "New York Times Bestsellers",
    "Most Recommended Non-Fiction Books",
    "Most Recommended Fiction Books",
  ];
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-0">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1
            className={cn(
              dm_sefif_display.className,
              "text-xl/[1.25] sm:text-2xl/[1.25] md:text-3xl/[1.25] px-8 md:px-24"
            )}
          >
            Welcome Back, Vivian. Here’s what you’ve been reading ...
          </h1>
          <div>A place to track and discover your favorite books</div>
        </div>
      </section>
      <section className="container space-y-4 ">
        <h1 className={cn(dm_sefif_display.className, "text-2xl")}>
          Currently Reading
        </h1>
        <BooksSection
          details={{ progress: 90, date_started: "Sept 12" }}
          booksData={booksData}
        />
      </section>
      <section className="container space-y-4 ">
        <h1 className={cn(dm_sefif_display.className, "text-2xl")}>Up Next</h1>
        <BooksSection
          details={{ progress: 90, date_started: "Sept 12" }}
          booksData={booksData}
        />
      </section>
      <section className="container space-y-4 ">
        <h1 className={cn(dm_sefif_display.className, "text-2xl")}>
          Read This Month
        </h1>
        <BooksSection booksData={booksData} />
      </section>
      <section className="container space-y-2">
        <h1 className={cn(dm_sefif_display.className, "text-2xl")}>
          Featured Lists
        </h1>
        {headings.map((heading, idx) => (
          <BooksSection heading={heading} booksData={booksData} />
        ))}
      </section>
    </>
  );
}
