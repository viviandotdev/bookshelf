import { Injectable } from '@nestjs/common';
import { BookCreateInput } from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';
import { UserBookService } from 'libs/user-book/user-book.service';
import { BookRepository } from './book.repository';
import { processBook } from 'libs/user-book/utils';
import { BookData } from 'libs/user-book/types';
import axiosInstance from 'src/config/axios.config';
@Injectable()
export class BookService {
  findUnique = this.repository.findUnique;
  findByIdentifier = this.repository.findByIdentifier;
  findFirst = this.repository.findFirst;
  constructor(
    private readonly prisma: PrismaRepository,
    private readonly userBook: UserBookService,
    private readonly repository: BookRepository,
  ) {}

  async getGoogleBook(bookId: string) {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
      const response = await axiosInstance.get(url);
      // console.log("response", response);
      // Check if the response status is successful (status code 2xx)
      if (response.status >= 200 && response.status < 300) {
        const book: BookData = response.data; // Assuming response.data contains the book data
        const processedBook: BookData = processBook(book) as BookData;
        //  also get user book if it exists
        console.log('processed', processedBook);
        return processedBook;
      } else {
        // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
        return null;
      }
    } catch (error) {
      // Handle Axios errors here
      console.error('Error fetching book:', error);
      return null;
    }
  }

  async findBookByISBN(isbn: string) {
    try {
      // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas
      // Check if the number of requests exceeds the limit (10 requests per second)
      // Wait for 100 ms before making the next request
      // wait 300ms after every request
      const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
      const response = await axiosInstance.get(url);
      await new Promise((resolve) => setTimeout(resolve, 300));
      // Check if the response status is successful (status code 2xx)
      if (response.status >= 200 && response.status < 300) {
        const data = response.data.items;
        if (data.length > 0) {
          const processedBook: BookData = processBook(data[0]) as BookData;
          //  also get user book if it exists
          return processedBook;
        }
      }
      // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
      return null;
    } catch (error) {
      // Handle Axios errors here
      console.error('Error fetching book:', error);
      return null;
    }
  }
  async findBookByTitleAndAuthor(title: string) {
    try {
      // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas
      // Check if the number of requests exceeds the limit (10 requests per second)
      // Wait for 100 ms before making the next request
      // wait 300ms after every request
      const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
      const response = await axiosInstance.get(url);
      await new Promise((resolve) => setTimeout(resolve, 300));
      // Check if the response status is successful (status code 2xx)
      if (response.status >= 200 && response.status < 300) {
        const data = response.data.items;
        if (data.length > 0) {
          const fullBookUrl = `https://www.googleapis.com/books/v1/volumes/${data[0].id}`;
          const fullBook = await axiosInstance.get(fullBookUrl);
          const processedBook: BookData = processBook(
            fullBook.data,
          ) as BookData;
          return processedBook;
        }
      }
      // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
      return null;
    } catch (error) {
      // Handle Axios errors here
      console.error('Error fetching book:', error);
      return null;
    }
  }

  async findBook(identifiers) {
    // Check if 'identifiers' is defined and has properties
    if (!identifiers) {
      return null;
    }

    let searchConditions = [
      { isbn10: identifiers.isbn10 },
      { isbn13: identifiers.isbn13 },
      { googleBooks: identifiers.googleBooks },
      { openLibrary: identifiers.openLibrary },
      { goodreads: identifiers.goodreads },
      { amazon: identifiers.amazon },
      { bookId: identifiers.bookId },
    ];

    // Filter out any conditions with undefined or empty string values
    searchConditions = searchConditions.filter((identifier) => {
      const value = identifier[Object.keys(identifier)[0]];
      return value !== undefined && value !== '';
    });

    // If no valid identifiers are provided, return null or handle as required
    if (searchConditions.length === 0) {
      console.log('No valid identifiers provided.');
      return null;
    }

    // Use the filtered search conditions in the query
    const book = await this.prisma.book.findFirst({
      where: {
        identifier: {
          OR: searchConditions,
        },
      },
    });

    return book;
  }

  async create(
    data: BookCreateInput,
    userId?: string,
    identifiers?: any,
    status?: string,
  ) {
    // check if any of of the identifiers are already in the database
    let book = await this.findBook(identifiers);

    if (!book) {
      const createBookArgs: Prisma.BookCreateArgs = {
        data: {
          ...data,
          ...(identifiers && { identifier: { create: identifiers } }),
        },
      };

      book = await this.prisma.book.create(createBookArgs);
    }
    if (userId) {
      await this.userBook.create(book.id, userId, status);
    }

    return book;
  }
}
