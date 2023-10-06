import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  UserBook,
  UserBookCreateInput,
  UserBookUniqueUserBookCompoundUniqueInput,
  UserBookWhereUniqueInput,
} from '../../src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { UniqueUserBookInput } from './dto/uniqueUserBook.input';
import { UpdateUserBookStatusInput } from './dto/updateUserBookStatus.input';

@Resolver(() => UserBook)
export class UserBookResolver {
  constructor(private readonly userBookService: UserBookService) {}

  @Mutation(() => UserBook)
  createUserBook(
    @Args('userBookCreateInput') userBookCreateInput: UserBookCreateInput,
  ) {
    return this.userBookService.create(userBookCreateInput);
  }

  @Query(() => UserBook, { nullable: true, name: 'userBook' })
  userBook(
    @Args('uniqueUserBookInput')
    uniqueUserBookInput: UniqueUserBookInput,
  ) {
    return this.userBookService.findOne(uniqueUserBookInput);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  updateUserBookStatus(
    @Args('updateUserBookStatusInput')
    updateUserBookStatusInput: UpdateUserBookStatusInput,
  ) {
    return this.userBookService.update(updateUserBookStatusInput);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  removeUserBook(
    @Args('userBookUniqueUserBookCompoundUniqueInput')
    userBookUniqueUserBookCompoundUniqueInput: UserBookUniqueUserBookCompoundUniqueInput,
  ) {
    return this.userBookService.remove(
      userBookUniqueUserBookCompoundUniqueInput,
    );
  }
}
