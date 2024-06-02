import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookModule } from 'libs/user-book/user-book.module';
import { BookRepository } from './book.repository';
import { HttpModule } from '@nestjs/axios';
import { CoverService } from 'libs/cover/cover.service';
import { CoverRepository } from 'libs/cover/cover.repository';
import { IdentifierService } from 'libs/identifier/identifier.service';

@Module({
  providers: [
    BookResolver,
    BookService,
    BookRepository,
    CoverService,
    CoverRepository,
    IdentifierService,
  ],
  imports: [PrismaModule, UserBookModule, HttpModule],
})
export class BookModule {}
