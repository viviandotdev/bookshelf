import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { BookService } from './book.service';
import {
  Book,
  BookCreateInput,
  BookWhereUniqueInput,
  CoverCreateInput,
  IdentifierCreateInput,
  SOURCE,
} from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { CoverService } from 'libs/cover/cover.service';
import { findBookByGoogleBookId } from './api/google.api';
import { generateSlug } from 'libs/user-book/utils';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { UserBookService } from 'libs/user-book/user-book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly coverService: CoverService,
    private readonly userBookService: UserBookService,
    private readonly identifierService: IdentifierService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  async createBook(
    @Args('data') data: BookCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const book = await this.bookService.create(data);
    await this.userBookService.create(book.id, currentUser.userId);
    return book;
  }

  @Query(() => Book, { nullable: true, name: 'book' })
  book(
    @Args('where')
    where: BookWhereUniqueInput,
  ) {
    const book = this.bookService.findUnique({
      where: {
        id: where.id,
      },
      include: {
        covers: true,
      },
    });

    if (!book) {
      throw new NotFoundException(
        `Book ${JSON.stringify(where)} does not exist`,
      );
    }
    return book;
  }
}
