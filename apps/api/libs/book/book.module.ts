import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookModule } from 'libs/user-book/user-book.module';

@Module({
  providers: [BookResolver, BookService],
  imports: [PrismaModule, UserBookModule],
})
export class BookModule {}
