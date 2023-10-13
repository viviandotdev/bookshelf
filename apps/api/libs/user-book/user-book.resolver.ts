import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  BookWhereUniqueInput,
  UserBook,
  UserBookWhereInput,
} from '../../src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { UserBookUpdateInput } from './models/user-book-update.input';

@Resolver(() => UserBook)
export class UserBookResolver {
  constructor(private readonly userBookService: UserBookService) {}
  @UseGuards(AccessTokenGuard)
  @Query(() => UserBook, { nullable: true, name: 'userBook' })
  userBook(
    @Args('where')
    where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.findUnique({
      userId: user.userId,
      bookId: where.id,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => [UserBook], { nullable: true })
  userBooks(
    @Args('where', { nullable: true })
    where: UserBookWhereInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.findMany({
      where,
      userId: user.userId,
      skip: offset,
      take: limit,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => Int)
  countUserBooks(
    @Args('where', { nullable: true })
    where: UserBookWhereInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.count({
      where,
      userId: user.userId,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  updateUserBook(
    @Args('data')
    data: UserBookUpdateInput,
    @Args('where') where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = this.userBookService.findUnique({
      userId: user.userId,
      bookId: where.id,
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where)} does not exist`,
      );
    }
    console.log('userBook', data);
    return this.userBookService.update({
      data,
      where: {
        userId: user.userId,
        bookId: where.id,
      },
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  removeUserBook(
    @Args('where')
    where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = this.userBookService.findUnique({
      userId: user.userId,
      bookId: where.id,
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where)} does not exist`,
      );
    }
    return this.userBookService.remove({
      userId: user.userId,
      bookId: where.id,
    });
  }
}
