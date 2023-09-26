import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [BookResolver, BookService],
  imports: [PrismaModule],
})
export class BookModule {}
