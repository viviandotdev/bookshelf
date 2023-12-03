import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import {
  BookWhereUniqueInput,
  Review,
  ReviewCreateInput,
} from '@bookcue/api/generated-db-types';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';
import { BookService } from 'libs/book/book.service';

@Resolver()
export class ReviewResolver {
  constructor(
    private readonly service: ReviewService,
    private readonly bookService: BookService,
  ) {}
  @Query(() => [Review])
  async bookReviews(
    @Args('where') where: BookWhereUniqueInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
  ) {
    const bookExists = await this.bookService.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!bookExists) {
      throw new Error('Cannot review a book that does not exist');
    }
    return this.service.findMany({
      where,
      skip: offset,
      take: limit,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Review)
  async createReview(
    @Args('data') data: ReviewCreateInput,
    @Args('where') where: BookWhereUniqueInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const bookExists = await this.bookService.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!bookExists) {
      throw new Error('Cannot review a book that does not exist');
    }
    const review = await this.service.create(data, where, currentUser.userId);
    return review;
  }
}
