import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from './constants';
import { Book, Cover, Size } from '@/graphql/graphql';
import { split } from 'rambda';
export const repeat = (times: number) => {
  return Array.from(Array(times).keys());
};

export const buildSortQuery = (sortParam: string) => {
  const sortBy = split('.', sortParam)[0];
  const sortOrder = split('.', sortParam)[1];

  if (sortBy == 'title' || sortBy == 'author') {
    return {
      orderBy: {
        book: {
          [sortBy]: sortOrder,
        },
      },
    };
  }
  return {
    orderBy: {
      [sortBy]: sortOrder,
    },
  };
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function cleanText(text: string) {
  // Remove any non-alphanumeric characters from the
  let cleanText = text.replace(/[^a-zA-Z0-9]/g, '');
  return cleanText;
}

export function getCoverUrl(book: Book, size: string) {
  console.log(book);
  if (!book || !book.covers || book.covers.length === 0) {
    return DEFAULT_BOOKCOVER_PLACEHOLDER;
  }
  //   print(book.covers);
  return book.covers.filter((cover: Cover) => cover.size == size)[0].url;
}

export const formatAuthors = (book: Book) => {
  if (!book || !book.authors || book.authors.length === 0) {
    return '';
  }
  const authors = book.authors;
  if (authors.length === 1) {
    return authors[0];
  }

  // Join all authors except the last with ', '
  const allButLast = authors
    .slice(0, -1)
    .map((author) => author)
    .join(', ');

  // Add the last author with ' and '
  const lastAuthor = authors[authors.length - 1].name;

  return `${allButLast} and ${lastAuthor}`;
};

export function processBook(
  book: any,
  uniqueBooks?: Set<String>
): BookData | null {
  const id: string = book.id;
  const title: string = book.volumeInfo.title;
  const author: string = book.volumeInfo.authors?.join(', ') || 'N/A';
  const titleAndAuthor = `${title} ${author}`;
  // Skip processing the book if the title and author is already encountered
  if (uniqueBooks && uniqueBooks.has(titleAndAuthor)) return null;
  if (uniqueBooks) uniqueBooks.add(titleAndAuthor);
  const publishedDate: string = book.volumeInfo.publishedDate || 'N/A';
  const publisher: string = book.volumeInfo.publisher || 'N/A';
  const coverImage: string =
    book.volumeInfo.imageLinks?.thumbnail || DEFAULT_BOOKCOVER_PLACEHOLDER;
  const description: string = book.volumeInfo.description || 'N/A';
  const pageCount: number = book.volumeInfo.pageCount || 0;
  const averageRating: number = book.volumeInfo.averageRating || 0;
  let isbn: string = 'N/A';
  let isbn13: string = 'N/A';
  if (book.volumeInfo.industryIdentifiers) {
    let isbn10;
    let isbn13;
    book.volumeInfo.industryIdentifiers.forEach((identifier: any) => {
      if (identifier.type === 'ISBN_10') {
        isbn10 = identifier.identifier;
      } else if (identifier.type === 'ISBN_13') {
        isbn13 = identifier.identifier;
      }
    });
  }
  const ratingsCount = book.volumeInfo.ratingsCount || 0;
  const allCategories =
    book.volumeInfo.categories?.flatMap((category: string) =>
      category.split(' / ')
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
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export function timeAgo(createdAt: number) {
  if (!createdAt || isNaN(createdAt) || createdAt <= 0) {
    return 'Invalid date';
  }

  const now = Date.now();
  const diff = now - createdAt;
  const minutes = Math.round(diff / 1000 / 60);

  let unit;
  let timeAgo;
  if (minutes < 60) {
    unit = minutes > 1 ? 'minutes' : 'minute';
    timeAgo = `${minutes} ${unit} ago`;
  } else if (Math.round(minutes / 60) < 24) {
    unit = Math.round(minutes / 60) > 1 ? 'hours' : 'hour';
    timeAgo = `${Math.round(minutes / 60)} ${unit} ago`;
  } else if (Math.round(minutes / 60 / 24) < 30) {
    unit = Math.round(minutes / 60 / 24) > 1 ? 'days' : 'day';
    timeAgo = `${Math.round(minutes / 60 / 24)} ${unit} ago`;
  } else {
    unit = 'months';
    timeAgo = `${Math.round(minutes / 60 / 24 / 30)} ${unit} ago`;
  }

  return timeAgo;
}
