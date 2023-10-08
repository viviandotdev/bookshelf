import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookResolver } from './user-book.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [UserBookResolver, UserBookService],
  imports: [PrismaModule],
  exports: [UserBookService],
})
export class UserBookModule {}
