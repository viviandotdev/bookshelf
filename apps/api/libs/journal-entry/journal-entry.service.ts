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
        totalPages: data.totalPages,
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
    console.log(createJournalEntryArgs);
    return this.repository.create(createJournalEntryArgs);
  }
}
