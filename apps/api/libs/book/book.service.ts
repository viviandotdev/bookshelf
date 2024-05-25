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
}
