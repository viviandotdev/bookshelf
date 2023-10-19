import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JournalEntryService } from './journal-entry.service';
import {
  BookWhereUniqueInput,
  JournalEntry,
  JournalEntryCreateInput,
  UserBookIdentifierCompoundUniqueInput,
} from '@bookcue/api/generated-db-types';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';
import { UserBookService } from 'libs/user-book/user-book.service';

@Resolver()
export class JournalEntryResolver {
  constructor(
    private readonly service: JournalEntryService,
    private readonly userBookService: UserBookService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => JournalEntry)
  async createJournalEntry(
    @Args('data') data: JournalEntryCreateInput,
    @Args('book') book: BookWhereUniqueInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const userBook: UserBookIdentifierCompoundUniqueInput = {
      bookId: book.id,
      userId: currentUser.userId,
    };

    const userBookExists = await this.userBookService.findUnique(userBook);
    if (!userBookExists) {
      throw new Error('UserBook does not exist');
    }
    return this.service.create(data, userBook);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => Int)
  async countJournalEntries(
    @Args('book', { nullable: true })
    book: BookWhereUniqueInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const userBook: UserBookIdentifierCompoundUniqueInput = {
      bookId: book.id,
      userId: currentUser.userId,
    };

    const userBookExists = await this.userBookService.findUnique(userBook);
    if (!userBookExists) {
      throw new Error('UserBook does not exist');
    }

    return this.service.count(userBook);
  }
}
