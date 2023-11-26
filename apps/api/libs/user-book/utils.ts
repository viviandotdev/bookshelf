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

export const processCSVLine = (line: string, mappings: GoodreadsBookKeys[]) => {
  const parsedData = parseLineWithQuotes(line);
  const objectFromCSV: GoodreadsBook = {};

  mappings.forEach((key: GoodreadsBookKeys, index) => {
    if (key === 'ISBN' || key === 'ISBN13') {
      objectFromCSV[key] = cleanText(parsedData[index]);
    } else {
      objectFromCSV[key] = parsedData[index];
    }
  });

  return objectFromCSV;
};

export function processBook(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any,
  uniqueBooks?: Set<string>,
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
  const image: string =
    book.volumeInfo.imageLinks?.thumbnail || '/images/bkcover.jpg';
  const preview: string = book.volumeInfo.previewLink;
  const description: string = book.volumeInfo.description || 'N/A';
  const pageCount: string = book.volumeInfo.pageCount?.toString() || 'N/A';
  const averageRating: number = book.volumeInfo.averageRating || 0;
  let isbn: string = 'N/A';
  let isbn13: string = 'N/A';
  if (book.volumeInfo.industryIdentifiers) {
    const identifier1 = book.volumeInfo.industryIdentifiers[0]?.identifier;
    const identifier2 = book.volumeInfo.industryIdentifiers[1]?.identifier;

    if (identifier1) isbn = identifier1;
    if (identifier2) isbn13 = identifier2;
  }
  const ratingsCount = book.volumeInfo.ratingsCount || 0;
  const allCategories =
    book.volumeInfo.categories?.flatMap((category: string) =>
      category.split(' / '),
    ) || [];
  const categories = allCategories.filter(
    (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    },
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
    image,
    preview,
    description,
    pageCount,
    isbn,
    isbn13,
  };

  return bookData;
}
