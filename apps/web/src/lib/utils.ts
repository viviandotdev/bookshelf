import { BookData } from "@/types/interfaces";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const repeat = (times: number) => {
  return Array.from(Array(times).keys());
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function cleanText(text: string) {
  // Remove any non-alphanumeric characters from the
  let cleanText = text.replace(/[^a-zA-Z0-9]/g, "");
  return cleanText;
}

export function processBook(
  book: any,
  uniqueBooks?: Set<String>
): BookData | null {
  const id: string = book.id;
  const title: string = book.volumeInfo.title;
  const author: string = book.volumeInfo.authors?.join(", ") || "N/A";
  const titleAndAuthor = `${title} ${author}`;
  // Skip processing the book if the title and author is already encountered
  if (uniqueBooks && uniqueBooks.has(titleAndAuthor)) return null;
  if (uniqueBooks) uniqueBooks.add(titleAndAuthor);
  const publishedDate: string = book.volumeInfo.publishedDate || "N/A";
  const publisher: string = book.volumeInfo.publisher || "N/A";
  const coverImage: string =
    book.volumeInfo.imageLinks?.thumbnail || "/images/bkcover.jpg";
  const description: string = book.volumeInfo.description || "N/A";
  const pageCount: string = book.volumeInfo.pageCount?.toString() || "N/A";
  const averageRating: Number = book.volumeInfo.averageRating || 0;
  let isbn: string = "N/A";
  let isbn13: string = "N/A";
  if (book.volumeInfo.industryIdentifiers) {
    const identifier1 = book.volumeInfo.industryIdentifiers[0]?.identifier;
    const identifier2 = book.volumeInfo.industryIdentifiers[1]?.identifier;

    if (identifier1) isbn = identifier1;
    if (identifier2) isbn13 = identifier2;
  }
  let ratingsCount = book.volumeInfo.ratingsCount || 0;
  const allCategories =
    book.volumeInfo.categories?.flatMap((category: string) =>
      category.split(" / ")
    ) || [];
  const categories = allCategories.filter(
    (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    }
  );
  const bookData: BookData = {
    id,
    title,
    averageRating,
    ratingsCount,
    author,
    publishedDate,
    publisher,
    categories,
    coverImage,
    description,
    pageCount,
    isbn,
    isbn13,
  };

  return bookData;
}

export function processBookData(bookInfo: any[]): BookData[] {
  const processedData: BookData[] = [];
  const uniqueBooks = new Set<string>();

  bookInfo.forEach((book) => {
    const bookData = processBook(book, uniqueBooks);
    if (bookData != null) {
      processedData.push(bookData);
    }
  });
  return processedData;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
