import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookModule } from 'libs/user-book/user-book.module';
import { BookRepository } from './book.repository';
import { HttpModule } from '@nestjs/axios';
import { AuthorService } from 'libs/author/author.service';
import { AuthorRepository } from 'libs/author/author.repository';
import { CoverService } from 'libs/cover/cover.service';
import { CoverRepository } from 'libs/cover/cover.repository';

@Module({
  providers: [
    BookResolver,
    BookService,
    BookRepository,
    AuthorService,
    AuthorRepository,
    CoverService,
    CoverRepository,
  ],
  imports: [PrismaModule, UserBookModule, HttpModule],
})
export class BookModule {}
