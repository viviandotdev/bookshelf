import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookService } from './book.service';
import {
  Book,
  BookCreateInput,
  BookWhereUniqueInput,
  BookUpdateInput,
} from 'libs/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { SaveBookInput } from 'libs/dto/saveBook.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  saveBook(@Args('saveBookInput') saveBookInput: SaveBookInput) {
    console.log(saveBookInput);
    return this.bookService.saveBook(saveBookInput.userId, saveBookInput.book);
  }
  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  createBook(@Args('bookCreateInput') bookCreateInput: BookCreateInput) {
    return this.bookService.create(bookCreateInput);
  }

  @Query(() => [Book], { name: 'book' })
  books() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  book(
    @Args('bookWhereUniqueInput') bookWhereUniqueInput: BookWhereUniqueInput,
  ) {
    return this.bookService.findOne(bookWhereUniqueInput.id);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  updateBook(@Args('bookUpdateInput') bookUpdateInput: BookUpdateInput) {
    return this.bookService.update(bookUpdateInput.id, bookUpdateInput);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  removeBook(
    @Args('bookWhereUniqueInput') bookWhereUniqueInput: BookWhereUniqueInput,
  ) {
    return this.bookService.remove(bookWhereUniqueInput.id);
  }
}
