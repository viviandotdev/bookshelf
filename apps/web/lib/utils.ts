import { BookData } from '@/types/interfaces';
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function processBook(book: any, uniqueBooks?: Set<String>): BookData | null {
  const id: string = book.id;
  const title: string = book.volumeInfo.title;
  const author: string = book.volumeInfo.authors?.join(", ") || "N/A";
  const titleAndAuthor = `${title} ${author}`;
  // Skip processing the book if the title and author is already encountered
  if (uniqueBooks && uniqueBooks.has(titleAndAuthor)) return null;
  if (uniqueBooks) uniqueBooks.add(titleAndAuthor);
  const date: string = book.volumeInfo.publishedDate || "N/A";
  const publisher: string = book.volumeInfo.publisher || "N/A";
  const image: string =
    book.volumeInfo.imageLinks?.thumbnail || "images/bkcover.jpg";
  const preview: string = book.volumeInfo.previewLink;
  const plot: string = book.volumeInfo.description || "N/A";
  const pageNum: string = book.volumeInfo.pageCount?.toString() || "N/A";

  let isbn: string = "N/A";
  let isbn13: string = "N/A";
  if (book.volumeInfo.industryIdentifiers) {
    const identifier1 = book.volumeInfo.industryIdentifiers[0]?.identifier;
    const identifier2 = book.volumeInfo.industryIdentifiers[1]?.identifier;

    if (identifier1) isbn = identifier1;
    if (identifier2) isbn13 = identifier2;
  }

  let price: string = "N/A";
  let currency: string = "";
  let buyLink: string = "";
  if (book.saleInfo.saleability === "FOR_SALE") {
    price = book.saleInfo.retailPrice?.amount || "N/A";
    currency = book.saleInfo.retailPrice?.currencyCode || "";
    buyLink = book.saleInfo.buyLink || "";
  }

  const bookData: BookData = {
    id,
    title,
    author,
    date,
    publisher,
    image,
    preview,
    plot,
    pageNum,
    isbn,
    isbn13,
    price,
    currency,
    buyLink
  };

  return bookData
}


export function processBookData(bookInfo: any[]): BookData[] {
  const processedData: BookData[] = [];
  const uniqueBooks =  new Set<string>();

  bookInfo.forEach((book) => {
    const bookData = processBook(book, uniqueBooks);
    if (bookData != null) {
      processedData.push(bookData);
    }
  });
  console.log(processedData);
  return processedData;
}