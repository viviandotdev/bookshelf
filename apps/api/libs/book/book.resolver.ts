import {
  Book,
  BookWhereUniqueInput,
  IdentifierCreateInput,
} from '@bookcue/api/generated-db-types';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { BookService } from './book.service';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  async addIdentifierToBook(
    @Args('where') where: BookWhereUniqueInput,
    @Args('identifier') identifier: IdentifierCreateInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const book = await this.bookService.findFirst({
      where: {
        id: where.id,
        userBook: {
          userId: user.userId,
        },
      },
    });

    if (!book) {
      throw new Error('Book not found or you do not have access to this book');
    }
    return this.bookService.update({
      where: {
        id: where.id,
      },
      data: {
        identifiers: {
          create: identifier,
        },
      },
      include: {
        identifiers: true,
      },
    });
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => Book, { nullable: true })
  async findBookByIdentifier(
    @Args('identifier') identifier: IdentifierCreateInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const book = await this.bookService.findFirst({
      where: {
        userBook: {
          userId: user.userId,
        },
        identifiers: {
          some: {
            source: identifier.source,
            sourceId: identifier.sourceId,
          },
        },
      },
      include: {
        userBook: {
          select: {
            id: true,
            status: true,
            rating: true,
            shelves: {
              select: {
                shelf: {
                  select: {
                    id: true,
                    name: true,
                    slug: true,
                  },
                },
              },
            },
          },
        },
        identifiers: true,
        covers: true,
        ratings: true,
      },
    });
    return book;
  }
}
