import { Injectable } from '@nestjs/common';
import {
  BookCreateInput,
  CoverCreateInput,
  IdentifierCreateInput,
} from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';
import { BookRepository } from './book.repository';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { BookData } from 'libs/user-book/types';
import { generateSlug } from 'libs/user-book/utils';
import { CoverService } from 'libs/cover/cover.service';
@Injectable()
export class BookService {
  findUnique = this.repository.findUnique;

  findFirst = this.repository.findFirst;

  constructor(
    private readonly prisma: PrismaRepository,
    private readonly coverService: CoverService,
    private readonly identifierService: IdentifierService,
    private readonly repository: BookRepository,
  ) {}

  async createBookInputFromBookData(book: BookData) {
    const bookInput: BookCreateInput = {
      title: book.title,
      pageCount: book.pageCount,
      authors: book.authors ?? [],
      publisher: book.publisher,
      publishedDate: book.publishedDate,
      averageRating: book.averageRating,
      description: book.description,
      language: book.language,
      categories: book.categories,
      slug: generateSlug(book.title + ' ' + book.authors.join(' ')),
    };
    return bookInput;
  }
  async create(
    bookInput: BookCreateInput,
    identifiersInput?: IdentifierCreateInput[],
    coversInput?: CoverCreateInput[],
  ) {
    let existingBook =
      await this.identifierService.findBookByIdentifiers(identifiersInput);
    if (!existingBook) {
      // Prepare the identifiers connection
      const identifiers = await this.identifierService.createMany(
        identifiersInput ?? [],
      );
      // Prepare the covers connection if covers exist
      const covers = await this.coverService.createMany(coversInput ?? []);
      // Create the book with conditional covers connection

      const createBookArgs: Prisma.BookCreateArgs = {
        data: {
          ...bookInput,
          covers: {
            connect: covers?.length
              ? covers.map((cover) => ({ url: cover.url }))
              : undefined,
          },
          identifiers: {
            connect: identifiers?.length
              ? identifiers.map((identifier) => ({
                  id: {
                    source: identifier.source,
                    sourceId: identifier.sourceId,
                  },
                }))
              : undefined,
          },
        },
        include: {
          covers: true,
        },
      };
      return await this.prisma.book.create(createBookArgs);
    }
    return existingBook;
  }
}
