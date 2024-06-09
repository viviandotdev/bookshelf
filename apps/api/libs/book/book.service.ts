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

  async create(
    bookInput: BookCreateInput,
    identifiersInput?: IdentifierCreateInput[],
    coversInput?: CoverCreateInput[],
  ) {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        return await this.prisma.$transaction(async (prisma) => {
          let existingBook =
            await this.identifierService.findBookByIdentifiers(
              identifiersInput,
            );

          if (!existingBook) {
            // Prepare the identifiers connection
            const identifiers = await this.identifierService.createMany(
              identifiersInput ?? [],
            );
            // Prepare the covers connection if covers exist
            const covers = await this.coverService.createMany(
              coversInput ?? [],
            );

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
                        id: identifier.id,
                      }))
                    : undefined,
                },
              },
              include: {
                covers: true,
              },
            };

            return await prisma.book.create(createBookArgs);
          }

          return existingBook;
        });
      } catch (error) {
        if (error.code === 'P2002' || error.code === 'P2034') {
          // Prisma unique constraint violation or deadlock error codes
          attempt++;
          if (attempt >= maxRetries) {
            throw new Error('Failed to create book after multiple attempts');
          }
        } else {
          throw error;
        }
      }
    }
  }
}
