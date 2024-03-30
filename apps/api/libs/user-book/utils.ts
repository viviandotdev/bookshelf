import {
  findBookByGoogleQuery,
  findGoogleBookByISBN,
  getGoogleBook,
} from 'libs/book/api/google.api';
import { GoodreadsBookKeys, GoodreadsBook, BookData } from './types';
import { getOpenLibraryBook } from 'libs/book/api/open-library.api';

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
    return book;
  }

  const openLibraryBook = await getOpenLibraryBook(book);

  if (openLibraryBook) {
    book.description = openLibraryBook.description;
    book.language = openLibraryBook.language;
    book.categories = openLibraryBook.categories;

    book.imageLinks = openLibraryBook.imageLinks;
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
    imageLinks: {}, // Populate with appropriate data
    language: '', // Populate with appropriate data
    description: '',
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
export function processOpenLibraryBook(book: any, work: any): BookData | null {
  if (!book || !work) return null;

  const id: string = book.key.replace('/books/', '');
  const title: string = work.title || book.title;
  //   fix authors need to make api call
  const authors: string[] = (work.authors || book.authors).map((author: any) =>
    author.author ? author.author.key.replace('/authors/', '') : '',
  );
  const publishedDate: string = book.publish_date || '';
  const publisher: string = book.publishers ? book.publishers[0] : '';
  const imageLinks = {
    small: book.covers
      ? `http://covers.openlibrary.org/b/id/${book.covers[0]}-S.jpg`
      : '',
    medium: book.covers
      ? `http://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`
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
  const pageCount: number = book.number_of_pages || 0;
  const averageRating: number = 0; // Open Library does not provide ratings, so set to 0 or your default
  const isbn10: string = book.isbn_10 ? book.isbn_10[0] : '';
  const isbn13: string = book.isbn_13 ? book.isbn_13[0] : '';
  const categories: string[] = work.subjects
    ? work.subjects.map((subject: any) => subject)
    : [];
  const language: string = book.languages
    ? book.languages[0].key.replace('/languages/', '')
    : '';

  const bookData: BookData = {
    id,
    title,
    authors,
    averageRating,
    publishedDate,
    publisher,
    categories,
    imageLinks,
    description,
    language,
    pageCount,
    isbn10,
    isbn13,
  };

  return bookData;
}

export function processGoogleBook(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any,
): BookData | null {
  const id: string = book.id;
  const title: string = book.volumeInfo.title;
  const authors: string[] = book.volumeInfo.authors;
  // Skip processing the book if the title and author is already encountered
  const publishedDate: string = book.volumeInfo.publishedDate || '';
  const publisher: string = book.volumeInfo.publisher || '';
  const imageLinks = {
    small: book.volumeInfo.imageLinks?.thumbnail || '',
    medium: book.volumeInfo.imageLinks?.small || '',
    large: book.volumeInfo.imageLinks?.medium || '',
  };
  const description: string = book.volumeInfo.description || '';
  const pageCount: number = book.volumeInfo.pageCount || 0;
  const averageRating: number = book.volumeInfo.averageRating || 0;
  let isbn10: string = '';
  let isbn13: string = '';
  if (book.volumeInfo.industryIdentifiers) {
    book.volumeInfo.industryIdentifiers.forEach((identifier: any) => {
      if (identifier.type === 'ISBN_10') {
        isbn10 = identifier.identifier;
      } else if (identifier.type === 'ISBN_13') {
        isbn13 = identifier.identifier;
      }
    });
  }
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
    id,
    title,
    averageRating,
    authors,
    publishedDate,
    publisher,
    categories,
    imageLinks,
    description,
    language,
    pageCount,
    isbn10,
    isbn13,
  };

  return bookData;
}
