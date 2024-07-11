import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookResolver } from './user-book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookRepository } from './user-book.repository';
import { BookService } from 'libs/book/book.service';
import { BookRepository } from 'libs/book/book.repository';
import { HttpModule } from '@nestjs/axios';
import { CoverService } from 'libs/cover/cover.service';
import { CoverRepository } from 'libs/cover/cover.repository';
import { IdentifierService } from 'libs/identifier/identifier.service';

@Module({
  providers: [
    UserBookRepository,
    UserBookResolver,
    UserBookService,
    BookService,
    BookRepository,
    CoverService,
    CoverRepository,
    IdentifierService,
  ],
  imports: [PrismaModule, HttpModule],
  exports: [UserBookService],
})
export class UserBookModule {}
