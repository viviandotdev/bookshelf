import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { ReviewRepository } from './review.repository';
import { BookService } from 'libs/book/book.service';
import { UserBookService } from 'libs/user-book/user-book.service';
import { BookRepository } from 'libs/book/book.repository';
import { UserBookRepository } from 'libs/user-book/user-book.repository';
import { ActivityService } from 'libs/activity/activity.service';
import { ActivityRepository } from 'libs/activity/activity.respository';
import { Identifier } from '@bookcue/api/generated-db-types';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { CoverService } from 'libs/cover/cover.service';

@Module({
  providers: [
    ReviewResolver,
    ReviewService,
    ReviewRepository,
    UserBookService,
    UserBookRepository,
    BookRepository,
    BookService,
    ActivityRepository,
    ActivityService,
    IdentifierService,
    CoverService,
  ],
  imports: [PrismaModule],
  exports: [ReviewService],
})
export class ReviewModule {}
