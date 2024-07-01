import { Injectable } from '@nestjs/common';
import {
  BookCreateInput,
  CoverCreateInput,
  IdentifierCreateInput,
} from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma, SOURCE } from '@prisma/client';
import { BookRepository } from './book.repository';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { CoverService } from 'libs/cover/cover.service';
@Injectable()
export class BookService {
  findUnique = this.repository.findUnique;
  delete = this.repository.delete;
  update = this.repository.update;
  findFirst = this.repository.findFirst;

  constructor(
    private readonly prisma: PrismaRepository,
    private readonly coverService: CoverService,
    private readonly identifierService: IdentifierService,
    private readonly repository: BookRepository,
  ) {}

  async createBook(book) {
    const identifiers = await this.identifierService.createMany(
      book.identifiers ?? [],
    );

    const covers = await this.coverService.createMany(book.covers ?? []);

    const sources = [
      SOURCE.GOOGLE,
      SOURCE.ISBN_13,
      SOURCE.ISBN_10,
      SOURCE.GOODREADS,
    ];

    const slug = (() => {
      for (const source of sources) {
        const identifier = identifiers.find(
          (identifier) => identifier.source === source,
        );
        if (identifier) {
          return `${source}-${identifier.sourceId}`;
        }
      }
      return `${identifiers[0].source}-${identifiers[0].sourceId}`;
    })();

    const createBookArgs: Prisma.BookCreateArgs = {
      data: {
        title: book.title,
        slug: slug,
        subtitle: book.subtitle || undefined,
        authors: book.authors,
        pageCount: book.pageCount,
        yearPublished: book.yearPublished,
        ratings: {
          create: book.ratings.map((rating) => ({
            score: rating.score,
            maxScore: rating.maxScore,
            source: rating.source,
          })),
        },
        covers: {
          connect: covers?.length
            ? covers.map((cover) => ({ url: cover.url }))
            : undefined,
        },
        identifiers: {
          connect: identifiers?.length
            ? identifiers.map((identifier) => ({
                id: identifier.id,
              }))
            : undefined,
        },
      },
    };

    return this.prisma.book.create(createBookArgs);
  }
}
