import { Module } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryResolver } from './journal-entry.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { JournalEntryRepository } from './journal-entry.repository';
import { UserBookService } from 'libs/user-book/user-book.service';
import { UserBookRepository } from 'libs/user-book/user-book.repository';

@Module({
  providers: [
    JournalEntryResolver,
    JournalEntryService,
    JournalEntryRepository,
    UserBookRepository,
    UserBookService,
  ],
  imports: [PrismaModule],
  exports: [JournalEntryService],
})
export class JournalEntryModule {}
