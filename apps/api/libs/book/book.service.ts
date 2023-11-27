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
  constructor(
    private readonly prisma: PrismaRepository,
    private readonly userBook: UserBookService,
    private readonly repository: BookRepository,
  ) {}

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

  async create(data: BookCreateInput, userId: string) {
    let book = await this.prisma.book.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!book) {
      const createBookArgs: Prisma.BookCreateArgs = {
        data: {
          ...data,
        },
      };
      book = await this.prisma.book.create(createBookArgs);
    }

    await this.userBook.create(book.id, userId);
    return book;
  }
}
