import { Module } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryResolver } from './journal-entry.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { JournalEntryRepository } from './journal-entry.repository';
import { UserBookService } from 'libs/user-book/user-book.service';
import { UserBookRepository } from 'libs/user-book/user-book.repository';
import { ActivityRepository } from 'libs/activity/activity.respository';
import { ActivityService } from 'libs/activity/activity.service';
import { CoverService } from 'libs/cover/cover.service';
import { BookService } from 'libs/book/book.service';
import { Identifier } from '@bookcue/api/generated-db-types';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { BookRepository } from 'libs/book/book.repository';

@Module({
  providers: [
    JournalEntryResolver,
    JournalEntryService,
    JournalEntryRepository,
    UserBookRepository,
    UserBookService,
    ActivityRepository,
    ActivityService,
    CoverService,
    BookService,
    IdentifierService,
    BookRepository,
  ],
  imports: [PrismaModule],
  exports: [JournalEntryService],
})
export class JournalEntryModule {}
