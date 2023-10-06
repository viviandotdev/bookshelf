import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  UserBook,
  UserBookIdentifierCompoundUniqueInput,
  UserBookUpdateInput,
} from '../../src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => UserBook)
export class UserBookResolver {
  constructor(private readonly userBookService: UserBookService) {}

  @UseGuards(AccessTokenGuard)
  @Query(() => UserBook, { nullable: true, name: 'userBook' })
  userBook(
    @Args('where')
    where: UserBookIdentifierCompoundUniqueInput,
  ) {
    return this.userBookService.findUnique(where);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  updateUserBook(
    @Args('data')
    data: UserBookUpdateInput,
    @Args('where') where: UserBookIdentifierCompoundUniqueInput,
  ) {
    return this.userBookService.update({ data, where });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  removeUserBook(
    @Args('where')
    where: UserBookIdentifierCompoundUniqueInput,
  ) {
    return this.userBookService.remove(where);
  }
}
