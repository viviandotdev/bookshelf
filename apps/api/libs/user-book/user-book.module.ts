import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookResolver } from './user-book.resolver';

@Module({
  providers: [UserBookResolver, UserBookService],
})
export class UserBookModule {}
