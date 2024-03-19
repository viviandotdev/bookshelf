import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookModule } from 'libs/user-book/user-book.module';
import { BookRepository } from './book.repository';
import { HttpModule } from '@nestjs/axios';
import { WorkService } from 'libs/work/work.service';
import { WorkRepository } from 'libs/work/work.repository';
import { AuthorService } from 'libs/author/author.service';
import { AuthorRepository } from 'libs/author/author.repository';

@Module({
  providers: [
    BookResolver,
    BookService,
    BookRepository,
    WorkService,
    WorkRepository,
    AuthorService,
    AuthorRepository,
  ],
  imports: [PrismaModule, UserBookModule, HttpModule],
})
export class BookModule {}
