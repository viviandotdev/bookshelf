import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookModule } from 'libs/user-book/user-book.module';
import { BookRepository } from './book.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [BookResolver, BookService, BookRepository],
  imports: [PrismaModule, UserBookModule, HttpModule],
})
export class BookModule {}
