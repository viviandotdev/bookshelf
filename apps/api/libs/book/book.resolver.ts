import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import {
  Book,
  CreateOneBookArgs,
  FindUniqueBookArgs,
  UpdateOneBookArgs,
  DeleteOneBookArgs,
} from 'libs/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  createBook(@Args() createOneBookArgs: CreateOneBookArgs) {
    console.log(createOneBookArgs);
    return this.bookService.create(createOneBookArgs);
  }

  @Query(() => [Book], { name: 'book' })
  books() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  book(@Args() findUniqueBookArgs: FindUniqueBookArgs) {
    return this.bookService.findOne(findUniqueBookArgs);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  updateBook(@Args() updateOneBookArgs: UpdateOneBookArgs) {
    return this.bookService.update(updateOneBookArgs);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  removeBook(@Args() deleteOneBookArgs: DeleteOneBookArgs) {
    return this.bookService.remove(deleteOneBookArgs);
  }
}
