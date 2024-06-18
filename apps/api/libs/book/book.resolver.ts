import { Book, BookWhereUniqueInput } from '@bookcue/api/generated-db-types';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { BookService } from './book.service';
import { ShelfService } from 'libs/shelf/shelf.service';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => Book, { nullable: true, name: 'book' })
  async book(@Args('where') where: BookWhereUniqueInput) {
    const book = await this.bookService.findUnique({
      where: {
        slug: where.slug,
        id: where.id,
      },
      include: {
        identifiers: true,
        covers: true,
        ratings: true,
      },
    });
    return book;
  }
}
