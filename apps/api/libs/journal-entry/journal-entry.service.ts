import { Injectable } from '@nestjs/common';
import { JournalEntryRepository } from './journal-entry.repository';
import { Prisma } from '@prisma/client';
import {
  UserBookIdentifierCompoundUniqueInput,
  JournalEntryCreateInput,
} from '@bookcue/api/generated-db-types';
@Injectable()
export class JournalEntryService {
  findUnique = this.repository.findUnique;
  findFirst = this.repository.findFirst;
  constructor(private readonly repository: JournalEntryRepository) {}

  async create(
    data: JournalEntryCreateInput,
    userBook: UserBookIdentifierCompoundUniqueInput,
  ) {
    const createJournalEntryArgs: Prisma.JournalEntryCreateArgs = {
      data: {
        readingNotes: data.readingNotes,
        dateRead: data.dateRead,
        currentPage: data.currentPage,
        pagesRead: data.pagesRead,
        currentPercent: data.currentPercent,
        user: {
          connect: {
            id: userBook.userId,
          },
        },
        userBook: {
          connect: {
            identifier: {
              bookId: userBook.bookId,
              userId: userBook.userId,
            },
          },
        },
      },
    };
    return this.repository.create(createJournalEntryArgs);
  }

  async count({ bookId, userId }: UserBookIdentifierCompoundUniqueInput) {
    const journalEntryCount = await this.repository.count({
      where: {
        userBook: {
          bookId,
          userId,
        },
      },
    });
    return journalEntryCount;
  }

  async findMany(args: {
    user: string;
    book?: string;
    skip?: number;
    take?: number;
  }) {
    const whereJournalEntryArgs: Prisma.JournalEntryFindManyArgs = {
      where: args.book
        ? {
            userBook: {
              bookId: args.book,
              userId: args.user,
            },
          }
        : {
            user: {
              id: args.user,
            },
          },
    };
    const journalEntries = await this.repository.findMany({
      where: whereJournalEntryArgs.where,
      include: {
        userBook: {
          include: {
            book: true,
          },
        },
      },
      skip: args.skip,
      take: args.take,
    });
    return journalEntries;
  }
}
