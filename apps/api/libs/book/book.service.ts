import { Injectable } from '@nestjs/common';
import { BookCreateInput } from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';
import { UserBookService } from 'libs/user-book/user-book.service';
import { BookRepository } from './book.repository';
import axiosInstance from 'src/config/axios.config';
import { format, subDays } from 'date-fns';
import { ConfigService } from '@nestjs/config';
import { getGoogleBook } from './api/google.api';
@Injectable()
export class BookService {
  findUnique = this.repository.findUnique;
  findByIdentifier = this.repository.findByIdentifier;
  findFirst = this.repository.findFirst;
  constructor(
    private readonly prisma: PrismaRepository,
    private readonly userBook: UserBookService,
    private configService: ConfigService,
    private readonly repository: BookRepository,
  ) {}

  async findBookByIdentifiers(identifiers) {
    // Check if 'identifiers' is defined and has properties
    if (!identifiers) {
      return null;
    }

    let searchConditions = [
      { isbn10: identifiers.isbn10 },
      { isbn13: identifiers.isbn13 },
      { google: identifiers.google },
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
    let book = await this.findBookByIdentifiers(identifiers);

    if (!book) {
      const createBookArgs: Prisma.BookCreateArgs = {
        data: {
          ...data,
          ...(identifiers && { identifier: { create: identifiers } }),
        },
        include: {
          covers: true,
        },
      };

      book = await this.prisma.book.create(createBookArgs);
    }

    if (userId) {
      await this.userBook.create(book.id, userId, status);
    }

    return book;
  }
  async getBestsellers(list: string) {
    // Get the current date
    const currentDate = new Date();

    // Find the closest Sunday before the current date
    const closestSunday = subDays(currentDate, currentDate.getDay());

    // Format the closest Sunday date to YYYY-MM-DD
    const publishedDate = format(closestSunday, 'yyyy-MM-dd');

    // Check if the database includes books on that published date
    const existingBooks = await this.prisma.bestseller.findMany({
      where: { publishedDate, listName: list },
    });

    if (existingBooks.length === 0) {
      // Delete previous bestsellers
      await this.prisma.bestseller.deleteMany({
        where: { publishedDate, listName: list },
      });
      // Call the NYT Books API
      const API_KEY = this.configService.get<string>('nyt.api');

      const url = `https://api.nytimes.com/svc/books/v3/lists/${publishedDate}/${list}.json?api-key=${API_KEY}`;
      const response = await axiosInstance.get(url);
      const books = response.data.results.books;

      // Loop through the returned results and add them to the Prisma database
      for (const book of books) {
        //   Get google book?
        const { id } = await getGoogleBook({
          isbn: book.primary_isbn10,
          isbn13: book.primary_isbn13,
          title: book.title,
          authors: [book.author],
        });
        await this.prisma.bestseller.create({
          data: {
            title: book.title,
            author: book.author,
            bookImage: book.book_image,
            description: book.description,
            publishedDate: publishedDate,
            listName: list,
            googleId: id,
          },
        });
      }
    }

    // Return the new bestsellers
    return this.prisma.bestseller.findMany({
      where: { publishedDate, listName: list },
    });
  }
}
