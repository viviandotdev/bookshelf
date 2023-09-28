import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  UserBook,
  UserBookCreateInput,
  UserBookUpdateInput,
  UserBookWhereUniqueInput,
} from '../generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => UserBook)
export class UserBookResolver {
  constructor(private readonly userBookService: UserBookService) {}

  @Mutation(() => UserBook)
  createUserBook(
    @Args('userBookCreateInput') userBookCreateInput: UserBookCreateInput,
  ) {
    return this.userBookService.create(userBookCreateInput);
  }

  @Query(() => [UserBook], { name: 'userBook' })
  books() {
    return this.userBookService.findAll();
  }

  @Query(() => UserBook, { name: 'userBook' })
  book(
    @Args('bookWhereUniqueInput')
    bookWhereUniqueInput: UserBookWhereUniqueInput,
  ) {
    return this.userBookService.findOne(bookWhereUniqueInput.id);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  updateBook(
    @Args('userBookUpdateInput') userBookUpdateInput: UserBookUpdateInput,
  ) {
    return this.userBookService.update(
      userBookUpdateInput.id,
      userBookUpdateInput,
    );
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  removeBook(
    @Args('userBookWhereUniqueInput')
    userBookWhereUniqueInput: UserBookWhereUniqueInput,
  ) {
    return this.userBookService.remove(userBookWhereUniqueInput.id);
  }
}
