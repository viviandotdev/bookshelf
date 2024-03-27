import { GoodreadsBookKeys, GoodreadsBook, BookData } from './types';

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
    imageLinks: {}, // Populate with appropriate data
    language: '', // Populate with appropriate data
    description: '',
    pageCount: parseInt(goodreadsBook['Number of Pages'] ?? '0', 10),
    isbn: goodreadsBook.ISBN ?? '',
    categories: [], // Populate with appropriate data if available
    isbn13: goodreadsBook.ISBN13 ?? '',
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

export function processBook(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any,
  uniqueBooks?: Set<string>,
): BookData | null {
  const id: string = book.id;
  const title: string = book.volumeInfo.title;
  const authors: string[] = book.volumeInfo.authors;
  const titleAndAuthor = `${title} ${book.volumeInfo.authors?.join(', ')}`;
  // Skip processing the book if the title and author is already encountered
  if (uniqueBooks && uniqueBooks.has(titleAndAuthor)) return null;
  if (uniqueBooks) uniqueBooks.add(titleAndAuthor);
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
  let isbn: string = '';
  let isbn13: string = '';
  if (book.volumeInfo.industryIdentifiers) {
    const identifier1 = book.volumeInfo.industryIdentifiers[0]?.identifier;
    const identifier2 = book.volumeInfo.industryIdentifiers[1]?.identifier;

    if (identifier1) isbn = identifier1;
    if (identifier2) isbn13 = identifier2;
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
    isbn,
    isbn13,
  };

  return bookData;
}
