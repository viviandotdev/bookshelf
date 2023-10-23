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

  @UseGuards(AccessTokenGuard)
  @Query(() => [JournalEntry])
  async journalEntries(
    @Args('book', { nullable: true })
    book: BookWhereUniqueInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    if (book.id) {
      const userBook: UserBookIdentifierCompoundUniqueInput = {
        bookId: book.id,
        userId: currentUser.userId,
      };
      const userBookExists = await this.userBookService.findUnique(userBook);
      if (!userBookExists) {
        throw new Error('UserBook does not exist');
      }
      return this.service.findMany({
        book: book.id,
        user: currentUser.userId,
        skip: offset,
        take: limit,
      });
    } else {
      return this.service.findMany({
        user: currentUser.userId,
        skip: offset,
        take: limit,
      });
    }
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => JournalEntry, { nullable: true })
  async getMostRecentJournalEntry(
    @Args('book', { nullable: true })
    book: BookWhereUniqueInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const mostRecentEntry = await this.service.findFirst({
      where: {
        userBook: {
          userId: currentUser.userId,
          bookId: book.id,
        },
      },
      orderBy: {
        dateRead: 'desc',
      },
      take: 1,
    });

    return mostRecentEntry;
  }
}
