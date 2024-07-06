import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards, NotFoundException } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';
import { render } from '@react-email/components';
import { Prisma } from '@prisma/client';

import { UserBookService } from './user-book.service';
import { BookService } from 'libs/book/book.service';
import { PrismaRepository } from 'prisma/prisma.repository';

import {
  BookWhereUniqueInput,
  READING_STATUS,
  UserBook,
  UserBookOrderByWithRelationInput,
  UserBookWhereInput,
  UserBookWhereUniqueInput,
} from '../../src/generated-db-types';
import { UserBookUpdateInput } from './models/user-book-update.input';
import { UserBookUpdateOrderInput } from './models/user-book-update-order.input';
import { UserBooksResponse } from './models/user-books.response';
import { BookCountsResponse } from './models/book-counts.response';
import { BookDataInput } from 'libs/book/dto/book-data.input';

import ImportSummaryEmail from '../../email/import-result';
import {
  buildBook,
  generateSlug,
  getShelves,
  getUserBookInfo,
  parseLineWithQuotes,
  processCSVLine,
} from './utils';
import { getGoodreadsCover } from 'libs/book/api/book-cover.api';
import { GoodreadsBookData } from './types';

@Resolver(() => UserBook)
export class UserBookResolver {
  private readonly resend: Resend;
  private readonly domain: string;

  constructor(
    private readonly userBookService: UserBookService,
    private readonly bookService: BookService,
    private readonly prisma: PrismaRepository,
    private configService: ConfigService,
  ) {
    this.resend = new Resend(this.configService.get<string>('resend.api'));
    this.domain = this.configService.get<string>('web.url');
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook, { name: 'addBookToShelf' })
  async addBookToShelf(
    @Args('where') where: UserBookWhereUniqueInput,
    @Args('shelf', { type: () => String }) shelf: string,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.addBookToShelf(where.id, user.userId, shelf);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean, { name: 'removeBookFromShelf' })
  async removeUserBookFromShelf(
    @Args('where') where: UserBookWhereUniqueInput,
    @Args('shelf', { type: () => String }) shelf: string,
    @CurrentUser() user: JwtPayload,
  ) {
    await this.userBookService.removeBookFromShelf(
      where.id,
      user.userId,
      shelf,
    );
    return true;
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  async createUserBook(
    @Args('data') data: BookDataInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const newBook = await this.bookService.createBook(data);
    const createUserBookArgs: Prisma.UserBookCreateArgs = {
      data: {
        book: { connect: { id: newBook.id } },
        user: { connect: { id: user.userId } },
        status: READING_STATUS.WANT_TO_READ,
      },
      include: { book: { select: { id: true, title: true } } },
    };
    return this.prisma.userBook.create(createUserBookArgs);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => UserBook, { nullable: true, name: 'userBook' })
  async userBook(
    @Args('where') where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.findUnique({
      where: { identifier: { userId: user.userId, bookId: where.id } },
    });
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => UserBooksResponse)
  getUserBooks(
    @Args('where', { nullable: true }) where: UserBookWhereInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
    @Args('orderBy', { nullable: true })
    orderBy: UserBookOrderByWithRelationInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.findMany({
      where,
      userId: user.userId,
      skip: offset,
      take: limit,
      orderBy,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => Int)
  countUserBooks(
    @Args('where', { nullable: true }) where: UserBookWhereInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.count({ where, userId: user.userId });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  async updateUserBook(
    @Args('data') data: UserBookUpdateInput,
    @Args('where') where: UserBookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = await this.userBookService.findUnique({
      where: { id: where.id },
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where.id)} does not exist`,
      );
    }
    return this.userBookService.update({
      data,
      where: { id: where.id },
      userId: user.userId,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => [UserBook])
  updateUserBookOrder(
    @Args('data') data: UserBookUpdateOrderInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.updateOrder(data.items, user.userId);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  async importUserBooks(
    @Args('content') content: string,
    @CurrentUser() user: JwtPayload,
  ) {
    // ... (importUserBooks implementation)
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  async removeUserBook(
    @Args('where') where: UserBookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = await this.userBookService.findUnique({
      where: { id: where.id },
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where)} does not exist`,
      );
    }
    if (userBook.userId !== user.userId) {
      throw new NotFoundException(
        `Unauthorized to delete user book ${JSON.stringify(where)}`,
      );
    }
    await this.prisma.auditLog.deleteMany({
      where: { bookId: userBook.bookId },
    });
    await this.bookService.delete({ where: { id: userBook.bookId } });
    return true;
  }

  @Query(() => BookCountsResponse)
  async bookCountsByUserId(
    @Args('userId', { type: () => String }) userId: string,
  ) {
    const countByStatus = async (status: READING_STATUS) =>
      this.userBookService.count({ where: { status }, userId });

    const [wantsToReadCount, readingCount, finishedCount, upNextCount] =
      await Promise.all([
        countByStatus(READING_STATUS.WANT_TO_READ),
        countByStatus(READING_STATUS.READING),
        countByStatus(READING_STATUS.FINISHED),
        countByStatus(READING_STATUS.UP_NEXT),
      ]);

    return { wantsToReadCount, readingCount, finishedCount, upNextCount };
  }

}
