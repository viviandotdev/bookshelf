import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookResolver } from './user-book.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserBookRepository } from './user-book.repository';

@Module({
  providers: [UserBookRepository, UserBookResolver, UserBookService],
  imports: [PrismaModule],
  exports: [UserBookService],
})
export class UserBookModule {}
