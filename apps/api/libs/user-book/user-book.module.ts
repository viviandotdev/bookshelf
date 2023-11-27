import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookResolver } from './user-book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookRepository } from './user-book.repository';
import { BookService } from 'libs/book/book.service';
import { BookRepository } from 'libs/book/book.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [
    UserBookRepository,
    UserBookResolver,
    UserBookService,
    BookService,
    BookRepository,
  ],
  imports: [PrismaModule, HttpModule],
  exports: [UserBookService],
})
export class UserBookModule {}
