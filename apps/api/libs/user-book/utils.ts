import { getGoogleBook } from 'libs/book/api/google.api';
import { GoodreadsBookKeys, GoodreadsBook, BookData } from './types';
import { getOpenLibraryBook } from 'libs/book/api/open-library.api';

import ShortUniqueId from 'short-uuid';
import { SOURCE } from '@bookcue/api/generated-db-types';

export function getColumnData(csvContent, mappings) {
  // Split the CSV content into lines
  const lines = csvContent.split('\n');

  // Extract the data from the specified column
  const columnData = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    console.log(line);
    const parsedData = parseLineWithQuotes(line);
    const shelves = [];
    mappings.forEach((key: GoodreadsBookKeys, index) => {
      if (key === 'Bookshelves') {
        shelves.push(parsedData[index].split(',').map((shelf) => shelf.trim()));
      }
    });


    // if (line) {
    //   // Ignore empty lines
    //   const cells = line.split(',');
    //   columnData.push(cells[columnIndex]);
    // }
  }

  return 
}

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

export const buildBook = async (
  baseBook: GoodreadsBook,
): Promise<BookData | null> => {
  //   const googleBook = await getGoogleBook(baseBook);

  //   if (googleBook) {
  //     return mergeBookData(baseBook, googleBook, SOURCE.GOOGLE);
  //   }

  return {
    title: baseBook.Title ?? '',
    subtitle: '',
    authors: [baseBook.Author],
    averageRating: parseFloat(baseBook['Average Rating'] ?? '0'),
    publishedDate: baseBook['Original Publication Year'] ?? '',
    publisher: baseBook.Publisher ?? '',
    pageCount: parseInt(baseBook['Number of Pages'] ?? '0', 10),
    isbn10: baseBook.ISBN ?? '',
    isbn13: baseBook.ISBN13 ?? '',
    id: '',
    description: '',
    language: '',
    categories: [],
    imageLinks: null,
  };
};

const mergeBookData = (
  baseBook: GoodreadsBook,
  additionalData: Partial<BookData>,
  source: SOURCE,
): BookData => {
  return {
    title: additionalData.title ?? baseBook.Title ?? '',
    subtitle: additionalData.subtitle ?? '',
    authors:
      additionalData.authors && additionalData.authors.length > 0
        ? additionalData.authors
        : [baseBook.Author],
    averageRating: parseFloat(baseBook['Average Rating'] ?? '0'),
    publishedDate: baseBook['Original Publication Year'] ?? '',
    publisher: baseBook.Publisher ?? '',
    pageCount: parseInt(baseBook['Number of Pages'] ?? '0', 10),
    isbn10: baseBook.ISBN ?? additionalData.isbn10 ?? '',
    isbn13: baseBook.ISBN13 ?? additionalData.isbn13 ?? '',
    id: additionalData.id,
    description: additionalData.description ?? '',
    language: additionalData.language ?? '',
    categories: additionalData.categories ?? [],
    imageLinks: additionalData.imageLinks,
    source,
  };
};
export const processCSVLine = (line: string, mappings: GoodreadsBookKeys[]) => {
  const parsedData = parseLineWithQuotes(line);
  const objectFromCSV = {};
  mappings.forEach((key: GoodreadsBookKeys, index) => {
    if (key === 'ISBN' || key === 'ISBN13') {
      objectFromCSV[key] = cleanText(parsedData[index]);
    } else {
      objectFromCSV[key] = parsedData[index];
    }
  });

  return objectFromCSV as GoodreadsBook;
};
