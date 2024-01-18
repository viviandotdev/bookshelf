import { Module } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryResolver } from './journal-entry.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { JournalEntryRepository } from './journal-entry.repository';
import { UserBookService } from 'libs/user-book/user-book.service';
import { UserBookRepository } from 'libs/user-book/user-book.repository';
import { ActivityRepository } from 'libs/activity/activity.respository';
import { ActivityService } from 'libs/activity/activity.service';

@Module({
  providers: [
    JournalEntryResolver,
    JournalEntryService,
    JournalEntryRepository,
    UserBookRepository,
    UserBookService,
    ActivityRepository,
    ActivityService,
  ],
  imports: [PrismaModule],
  exports: [JournalEntryService],
})
export class JournalEntryModule {}
