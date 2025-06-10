import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_BOOKCOVER_PLACEHOLDER, GOODREADS_BASE_URL } from './constants';
import {
    Book,
    Cover,
    CoverCreateInput,
    IdentifierCreateInput,
    RatingCreateInput,
    Size,
    Source,
} from '@/graphql/graphql';
import { split } from 'rambda';
import { BookData } from '@/modules/bookshelves/types';
import ShortUniqueId from 'short-uuid';

export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};

export const repeat = (times: number) => {
    return Array.from(Array(times).keys());
};
function generateShortUUID(length: number): string {
    const translator = ShortUniqueId();
    const uuid = translator.new().substring(0, length);
    return uuid;
}

export function generateSlug(title: string): string {
    // Step 1: Convert the title to lowercase
    let slug = title.toLowerCase();

    // Step 2: Replace spaces and non-alphanumeric characters with hyphens
    slug = slug.replace(/[^a-z0-9]+/g, '-');

    // Step 3: Remove leading and trailing hyphens
    slug = slug.replace(/^-+|-+$/g, '');

    // Step 4: Append the unique identifier
    const id = generateShortUUID(6);
    slug = `${slug}-${id}`;

    return slug;
}

export const convertTitleToUnderscore = (title: string) => {
    return title
        .trim()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '_');
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
    if (!book || !book.covers || book.covers.length === 0) {
        return DEFAULT_BOOKCOVER_PLACEHOLDER;
    }

    const cover = book.covers.filter((cover: Cover) => cover.size == size)[0];
    if (cover) {
        return cover.url;
    } else {
        return book.covers[0].url;
    }
}

export const formatAuthors = (authors: string[]) => {
    if (!authors || authors.length === 0) {
        return '';
    }
    if (authors.length === 1) {
        return authors[0];
    }
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
        slug: additionalData.id,
        subtitle: baseBook.subtitle ?? additionalData.subtitle ?? '',
        authors:
            additionalData.authors && additionalData.authors.length > 0
                ? additionalData.authors
                : baseBook.authors || [],
        urls: {
            goodreads:
                GOODREADS_BASE_URL +
                baseBook.identifiers?.find((id) => id.source === Source.Goodreads)
                    ?.sourceId,

            google: additionalData.urls?.google,
        },
        identifiers: [
            ...((baseBook.identifiers as IdentifierCreateInput[]) ?? []),
            ...(additionalData.identifiers ?? []),
        ],
        pageCount: baseBook.pageCount ?? additionalData.pageCount ?? 0,
        yearPublished: additionalData.yearPublished,
        publisher: additionalData.publisher ?? '',
        covers: [
            ...((baseBook.covers as CoverCreateInput[]) ?? []),
            ...(additionalData.covers ?? []),
        ],
        ratings: [
            ...((baseBook.ratings as RatingCreateInput[]) ?? []),
            ...(additionalData.ratings ?? []),
        ],
        description: additionalData.description ?? '',
        language: additionalData.language ?? '',
        isbn:
            additionalData.isbn ||
            baseBook.identifiers?.find(
                (id) => id.source === Source.Isbn_10 || id.source === Source.Isbn_13
            )?.sourceId,
    };
};

export function processGoogleBook(book: any): BookData | null {
    const industryIdentifiers = book.volumeInfo.industryIdentifiers || [];
    const isbn =
        industryIdentifiers[0]?.identifier || industryIdentifiers[1]?.identifier;
    const bookData: BookData = {
        slug: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors,
        yearPublished:
            book.volumeInfo.publishedDate?.length === 10
                ? book.volumeInfo.publishedDate?.slice(0, 4)
                : book.volumeInfo.publishedDate,
        publisher: book.volumeInfo.publisher || undefined,
        description: book.volumeInfo.description || undefined,
        language: book.volumeInfo.language || undefined,
        pageCount: book.volumeInfo.pageCount || 0,
        covers: [
            ...(book.volumeInfo.imageLinks?.thumbnail
                ? [
                    {
                        source: Source.Google,
                        size: Size.Small,
                        url: book.volumeInfo.imageLinks.thumbnail,
                    },
                ]
                : []),
            ...(book.volumeInfo.imageLinks?.large
                ? [
                    {
                        source: Source.Google,
                        size: Size.Large,
                        url: book.volumeInfo.imageLinks.large,
                    },
                ]
                : []),
        ],
        ratings: [
            ...(book.volumeInfo.averageRating
                ? [
                    {
                        maxScore: 5,
                        source: Source.Google,
                        score: book.volumeInfo.averageRating,
                    },
                ]
                : []),
        ],
        identifiers: [
            {
                source: Source.Google,
                sourceId: book.id,
            },
        ],
        isbn: isbn,
        urls: {
            google: book.volumeInfo.previewLink,
        },
    };
    return bookData;
}

// const formatDate = (date: Date): string => {
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const day = date.getDate().toString().padStart(2, '0');
//   const year = date.getFullYear();
//   return `${month}-${day}-${year}`;
// };

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

// CSV Parsing utils
export function parseLineWithQuotes(csvContent: string) {
    const pattern = /(?:,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^",\r\n]*))/gi;
    const matches = csvContent.matchAll(pattern);
    const values: any[] = [];

    const matchesArray = Array.from(matches);
    for (const match of matchesArray) {
        const [, quotedValue, unquotedValue] = match;
        const value =
            quotedValue !== undefined
                ? quotedValue.replace(/""/g, '"')
                : unquotedValue;
        values.push(value ? value : '');
    }

    return values;
}

export const processCSVLine = (line: string, mappings: any[]) => {
    const parsedData = parseLineWithQuotes(line);
    const goodreadsData: {
        [key: string]: any
    } = {};
    mappings.forEach((key: any, index) => {
        if (key === 'ISBN' || key === 'ISBN13') {
            goodreadsData[key] = cleanText(parsedData[index]) as any;
        } else {
            goodreadsData[key] = parsedData[index] as any;
        }
    });

    return goodreadsData as GoodreadsBook;
};

export interface GoodreadsBook {
    'Additional Authors': string;
    Author: string;
    'Author l-f': string;
    'Average Rating': string;
    Binding: string;
    'Book Id': string;
    Bookshelves: string;
    'Bookshelves with positions': string;
    'Date Added': string;
    'Date Read': string;
    'Exclusive Shelf': string;
    ISBN?: string;
    ISBN13?: string;
    'My Rating': string;
    'My Review': string;
    'Number of Pages': string;
    'Original Publication Year': string;
    'Owned Copies': string;
    'Private Notes': string;
    Publisher: string;
    'Read Count': string;
    Spoiler: string;
    Title: string;
    'Year Published': string;
    [key: string]: any; // This allows for other string keys
}

export type GoodreadsBookKeys =
    | 'Additional Authors'
    | 'Author'
    | 'Author l-f'
    | 'Average Rating'
    | 'Binding'
    | 'Book Id'
    | 'Bookshelves'
    | 'Bookshelves with positions'
    | 'Date Added'
    | 'Date Read'
    | 'Exclusive Shelf'
    | 'ISBN'
    | 'ISBN13'
    | 'My Rating'
    | 'My Review'
    | 'Number of Pages'
    | 'Original Publication Year'
    | 'Owned Copies'
    | 'Private Notes'
    | 'Publisher'
    | 'Read Count'
    | 'Spoiler'
    | 'Title'
    | 'Year Published';

