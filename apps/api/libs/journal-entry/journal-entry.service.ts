import { Injectable } from '@nestjs/common';
import { JournalEntryRepository } from './journal-entry.repository';
import { Prisma } from '@prisma/client';
import {
  UserBookIdentifierCompoundUniqueInput,
  JournalEntryCreateInput,
  JournalEntryUpdateInput,
  JournalEntryWhereUniqueInput,
} from '@bookcue/api/generated-db-types';
@Injectable()
export class JournalEntryService {
  findUnique = this.repository.findUnique;
  delete = this.repository.delete;
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
    book?: number;
    skip?: number;
    take?: number;
    orderBy?: Prisma.JournalEntryOrderByWithRelationInput;
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
            book: {
              include: {
                authors: { select: { name: true } },
                covers: { select: { size: true, url: true } },
              },
            },
          },
        },
      },
      orderBy: args.orderBy,
      skip: args.skip,
      take: args.take,
    });
    return journalEntries;
  }

  async update(args: {
    data: JournalEntryUpdateInput;
    where: JournalEntryWhereUniqueInput;
  }) {
    const updateJournalEntry = await this.repository.update({
      where: {
        id: args.where.id,
      },
      include: {
        userBook: {
          include: {
            book: true,
          },
        },
      },
      data: {
        dateRead: args.data.dateRead,
        currentPage: args.data.currentPage,
        pagesRead: args.data.pagesRead,
        currentPercent: args.data.currentPercent,
        readingNotes: args.data.readingNotes,
      },
    });
    return updateJournalEntry;
  }
}
