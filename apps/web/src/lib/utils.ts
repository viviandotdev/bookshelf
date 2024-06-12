import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_BOOKCOVER_PLACEHOLDER, GOODREADS_BASE_URL } from './constants';
import { Book, Cover, Size } from '@/graphql/graphql';
import { add, split } from 'rambda';
import { BookData, BookParts } from '@/modules/bookshelves/types';
import { SIZE, SOURCE } from '@prisma/client';
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

export function getCoverUrl(book: BookParts, size: string) {
  if (!book || !book.covers || book.covers.length === 0) {
    return DEFAULT_BOOKCOVER_PLACEHOLDER;
  }

  const cover = book.covers.filter((cover: Cover) => cover.size == size)[0];
  if (cover) {
    return cover.url;
  } else {
    return null;
  }
}

export const formatAuthors = (authors: string[]) => {
  if (!authors || authors.length === 0) {
    return '';
  }
  if (authors.length === 1) {
    return authors[0];
  }
  console.log(authors);
  // Join all authors except the last with ', '
  const allButLast = authors
    .slice(0, -1)
    .map((author) => author)
    .join(', ');

  // Add the last author with ' and '
  const lastAuthor = authors[authors.length - 1];

  return `${allButLast} and ${lastAuthor}`;
};

export const mergeBookData = (
  baseBook: Book,
  additionalData: Partial<BookData>
): BookData => {
  return {
    id: baseBook.id,
    title: baseBook.title,
    subtitle: baseBook.subtitle ?? additionalData.subtitle ?? '',
    authors:
      additionalData.authors && additionalData.authors.length > 0
        ? additionalData.authors
        : baseBook.authors || [],
    ratings: {
      goodreads:
        baseBook.ratings?.find((rating) => rating.source === SOURCE.GOODREADS)
          ?.score || undefined,
      google: additionalData.ratings?.google,
    },
    urls: {
      goodreads:
        GOODREADS_BASE_URL +
        baseBook.identifiers?.find((id) => id.source === SOURCE.GOODREADS)
          ?.sourceId,

      google: additionalData.urls?.google,
    },
    pageCount: baseBook.pageCount ?? additionalData.pageCount ?? 0,
    publishedDate:
      additionalData.publishedDate?.length === 10
        ? additionalData.publishedDate?.slice(0, 4)
        : additionalData.publishedDate,
    publisher: additionalData.publisher ?? '',
    coverImage:
      baseBook.covers?.find((cover) => cover.size == SIZE.LARGE)?.url ||
      additionalData.coverImage ||
      DEFAULT_BOOKCOVER_PLACEHOLDER,
    description: additionalData.description ?? '',
    language: additionalData.language ?? '',
    isbn:
      additionalData.isbn ||
      baseBook.identifiers?.find(
        (id) => id.source === SOURCE.ISBN_13 || id.source === SOURCE.ISBN_10
      )?.sourceId,
  };
};

export function processGoogleBook(book: any): BookData | null {
  const isbn =
    book.volumeInfo.industryIdentifiers[0]?.identifier ||
    book.volumeInfo.industryIdentifiers[1]?.identifier;
  const bookData: BookData = {
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    authors: book.volumeInfo.authors,
    publishedDate: book.volumeInfo.publishedDate || undefined,
    publisher: book.volumeInfo.publisher || undefined,
    description: book.volumeInfo.description || undefined,
    language: book.volumeInfo.language || undefined,
    pageCount: book.volumeInfo.pageCount || 0,
    coverImage:
      book.volumeInfo.imageLinks?.small ||
      book.volumeInfo.imageLinks?.large ||
      DEFAULT_BOOKCOVER_PLACEHOLDER,
    ratings: {
      google: book.volumeInfo.averageRating,
    },
    isbn: isbn,
    urls: {
      google: book.volumeInfo.previewLink,
    },
  };
  return bookData;
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
