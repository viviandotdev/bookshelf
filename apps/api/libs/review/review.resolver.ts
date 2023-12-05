import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import {
  BookWhereUniqueInput,
  Review,
  ReviewWhereUniqueInput,
  UserBookIdentifierCompoundUniqueInput,
} from '@bookcue/api/generated-db-types';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';
import { BookService } from 'libs/book/book.service';
import { ReviewCreateInput } from './models/review-create.input';
import { UserBookService } from 'libs/user-book/user-book.service';
import { UserBookUpdateInput } from 'libs/user-book/models/user-book-update.input';

@Resolver()
export class ReviewResolver {
  constructor(
    private readonly service: ReviewService,
    private readonly bookService: BookService,
    private readonly userBookService: UserBookService,
  ) {}

  @Query(() => Review)
  async bookReview(@Args('where') where: ReviewWhereUniqueInput) {
    const reviewExists = await this.service.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!reviewExists) {
      throw new Error('Review does not exist');
    }
    return this.service.findUnique({
      where: {
        id: where.id,
      },
      include: {
        userBook: {
          include: {
            user: true,
          },
        },
        book: true,
      },
    });
  }

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

    const userBook: UserBookIdentifierCompoundUniqueInput = {
      bookId: where.id,
      userId: currentUser.userId,
    };
    const userBookExists = await this.userBookService.findUnique(userBook);
    if (!userBookExists) {
      await this.userBookService.create(userBook.bookId, userBook.userId);
    }

    const userBookData: UserBookUpdateInput = {
      rating: Number(data.rating),
      status: 'Read',
    };
    // Update userbook status and rating
    await this.userBookService.update({
      data: userBookData,
      where: {
        userId: userBook.userId,
        bookId: userBook.bookId,
      },
    });
    // Create review
    const review = await this.service.create(data, userBook);
    return review;
  }
}
