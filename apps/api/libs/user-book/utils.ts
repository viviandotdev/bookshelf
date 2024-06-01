import { getGoogleBook } from 'libs/book/api/google.api';
import {
  GoodreadsBookKeys,
  GoodreadsBook,
  BookData,
  AdditionalBookData,
} from './types';
import { getOpenLibraryBook } from 'libs/book/api/open-library.api';

import ShortUniqueId from 'short-uuid';

function generateShortUUID(length: number): string {
  const translator = ShortUniqueId();
  const uuid = translator.new().substring(0, length);
  return uuid;
}

export function generateSlug(name: string): string {
  // Step 1: Convert the name to lowercase
  let slug = name.toLowerCase();

  // Step 2: Replace spaces and non-alphanumeric characters with hyphens
  slug = slug.replace(/[^a-z0-9]+/g, '-');

  // Step 3: Remove leading and trailing hyphens
  slug = slug.replace(/^-+|-+$/g, '');

  // Step 4: Append the unique identifier
  const id = generateShortUUID(6);
  slug = `${slug}-${id}`;

  return slug;
}

export function getUserBookInfo(objectFromCSV: GoodreadsBook) {
  let shelves: string[] = []; // get shelves
  if (objectFromCSV['Bookshelves']) {
    const cleanShelves = objectFromCSV['Bookshelves']
      .split(',')
      .map((shelf) => shelf.trim());
    const excludedShelves = ['to-read', 'currently-reading', 'read'];
    shelves = cleanShelves.filter((shelf) => !excludedShelves.includes(shelf));
  }
  let status;
  if (objectFromCSV['Exclusive Shelf']) {
    // get status
    if (objectFromCSV['Exclusive Shelf'] == 'to-read') {
      status = 'Want to Read';
    } else if (objectFromCSV['Exclusive Shelf'] == 'currently-reading') {
      status = 'Currently Reading';
    } else if (objectFromCSV['Exclusive Shelf'] == 'read') {
      status = 'Read';
    }
  }

  let rating; // get rating
  if (objectFromCSV['My Rating']) {
    rating = objectFromCSV['My Rating'];
  }

  return { shelves, status, rating };
}
export function parseLineWithQuotes(csvContent: string) {
  const pattern = /(?:,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^",\r\n]*))/gi;
  const matches = csvContent.matchAll(pattern);
  const values = [];

  for (const match of matches) {
    const [, quotedValue, unquotedValue] = match;
    const value =
      quotedValue !== undefined
        ? quotedValue.replace(/""/g, '"')
        : unquotedValue;
    values.push(value ? value : '');
  }

  return values;
}

export function cleanText(text: string) {
  // Remove any non-alphanumeric characters from the
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, '');
  return cleanText;
}

export const buildBook = async (book: BookData) => {
  // try to find book by google
  const googleBook = await getGoogleBook(book);

  if (googleBook) {
    book.description = googleBook.description;
    book.language = googleBook.language;
    book.categories = googleBook.categories;
    book.imageLinks = googleBook.imageLinks;
    book.id = googleBook.id;
    book.type = 'GOOGLE';
    return book;
  }

  const openLibraryBook = await getOpenLibraryBook(book);

  if (openLibraryBook) {
    book.description = openLibraryBook.description;
    book.language = openLibraryBook.language;
    book.categories = openLibraryBook.categories;

    book.imageLinks = openLibraryBook.imageLinks;
    book.id = openLibraryBook.id;
    book.type = 'OPENLIBRARY';
    return book;
  }
  return null;
};
// Function to map GoodreadsBook to BookData
export const getGoodreadsBookInfo = (
  goodreadsBook: GoodreadsBook,
): BookData => {
  return {
    id: goodreadsBook['Book Id'] ?? '',
    title: goodreadsBook.Title ?? '',
    authors: goodreadsBook.Author ? [goodreadsBook.Author] : [],
    averageRating: parseFloat(goodreadsBook['Average Rating'] ?? '0'),
    publishedDate: goodreadsBook['Original Publication Year'] ?? '',
    publisher: goodreadsBook.Publisher ?? '',
    pageCount: parseInt(goodreadsBook['Number of Pages'] ?? '0', 10),
    isbn10: goodreadsBook.ISBN ?? '',
    isbn13: goodreadsBook.ISBN13 ?? '',
    imageLinks: {
      small: '',
      medium: '',
      large: '',
    }, // Populate with appropriate data
    language: '', // Populate with appropriate data
    description: '', // Populate with appropriate data
    categories: [], // Populate with appropriate data if available
  };
};

export const processCSVLine = (line: string, mappings: GoodreadsBookKeys[]) => {
  const parsedData = parseLineWithQuotes(line);
  const objectFromCSV = {};
  //
  mappings.forEach((key: GoodreadsBookKeys, index) => {
    if (key === 'ISBN' || key === 'ISBN13') {
      objectFromCSV[key] = cleanText(parsedData[index]);
    } else {
      objectFromCSV[key] = parsedData[index];
    }
  });

  return objectFromCSV as GoodreadsBook;
};

export function processOpenLibraryBook(
  book: any,
  work: any,
): AdditionalBookData | null {
  if (!book || !work) return null;
  const imageLinks = {
    small: book.covers
      ? `http://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`
      : '',
    medium: book.covers
      ? `http://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
      : '',
    large: book.covers
      ? `http://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
      : '',
  };
  const description: string = work.description
    ? typeof work.description === 'string'
      ? work.description
      : work.description.value
    : '';
  const categories: string[] = work.subjects
    ? work.subjects.map((subject: any) => subject)
    : [];
  const language: string = book.languages
    ? book.languages[0].key.replace('/languages/', '')
    : '';
  const id = book.key.replace('/languages/', '');

  const bookData: AdditionalBookData = {
    id,
    description,
    language,
    categories,
    imageLinks,
  };

  return bookData;
}

export function processGoogleBook(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any,
): AdditionalBookData | null {
  const imageLinks = {
    small: book.volumeInfo.imageLinks?.thumbnail || '',
    medium: book.volumeInfo.imageLinks?.small || '',
    large: book.volumeInfo.imageLinks?.medium || '',
  };

  const description: string = book.volumeInfo.description || '';
  const allCategories =
    book.volumeInfo.categories?.flatMap((category: string) =>
      category.split(' / '),
    ) || [];
  const categories = allCategories.filter(
    (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    },
  );
  const language = book.volumeInfo.language || '';
  const bookData: AdditionalBookData = {
    id: book.id,
    description,
    language,
    categories,
    imageLinks,
  };
  return bookData;
}

export function processBook(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any,
): BookData | null {
  const title: string = book.volumeInfo.title;
  const authors: string[] = book.volumeInfo.authors;
  // Skip processing the book if the title and author is already encountered
  const publishedDate: string = book.volumeInfo.publishedDate || 'N/A';
  const publisher: string = book.volumeInfo.publisher || 'N/A';
  const description: string = book.volumeInfo.description || 'N/A';
  const pageCount: number = book.volumeInfo.pageCount || 0;
  const averageRating: number = book.volumeInfo.averageRating || 0;
  let isbn10: string = 'N/A';
  let isbn13: string = 'N/A';
  if (book.volumeInfo.industryIdentifiers) {
    const identifier1 = book.volumeInfo.industryIdentifiers[0]?.identifier;
    const identifier2 = book.volumeInfo.industryIdentifiers[1]?.identifier;

    if (identifier1) isbn10 = identifier1;
    if (identifier2) isbn13 = identifier2;
  }
  const imageLinks = {
    small: book.volumeInfo.imageLinks?.thumbnail || '',
    medium: book.volumeInfo.imageLinks?.small || '',
    large: book.volumeInfo.imageLinks?.medium || '',
  };
  const allCategories =
    book.volumeInfo.categories?.flatMap((category: string) =>
      category.split(' / '),
    ) || [];
  const categories = allCategories.filter(
    (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    },
  );
  const language = book.volumeInfo.language || '';
  const bookData: BookData = {
    id: book.id,
    title,
    averageRating,
    authors,
    publishedDate,
    publisher,
    categories,
    imageLinks,
    description,
    pageCount,
    isbn10,
    isbn13,
    language,
  };
  return bookData;
}
