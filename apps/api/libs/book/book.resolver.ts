import {
  Book,
  BookCreateInput,
  BookWhereUniqueInput,
} from '@bookcue/api/generated-db-types';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Prisma, READING_STATUS } from '@prisma/client';
import { PrismaRepository } from 'prisma/prisma.repository';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { BookDataInput } from './dto/book-data.input';
import { UserBookService } from 'libs/user-book/user-book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly userBookService: UserBookService,
    private readonly prisma: PrismaRepository,
  ) {}
  @Query(() => Book, { nullable: true, name: 'book' })

//   input an identifier not a slug
  async book(@Args('where') where: BookWhereUniqueInput) {
    const book = await this.bookService.findUnique({
      where: {
        slug: where.slug,
        id: where.id,
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
