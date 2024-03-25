import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ReviewService } from './review.service';
import {
  BookCreateInput,
  BookWhereUniqueInput,
  Review,
  ReviewWhereUniqueInput,
  UserBookIdentifierCompoundUniqueInput,
} from '@bookcue/api/generated-db-types';
import assert from 'node:assert';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';
import { BookService } from 'libs/book/book.service';
import { ReviewDataInput } from './models/review-create.input';
import { UserBookService } from 'libs/user-book/user-book.service';
import { UserBookUpdateInput } from 'libs/user-book/models/user-book-update.input';
import { PrismaRepository } from 'prisma/prisma.repository';
import { OptionalAccessTokenGuard } from 'libs/auth/guards/optional-jwt.guard';
import { ActivityService } from 'libs/activity/activity.service';
import { ReviewUniqueInput } from './models/review-unique.input';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(
    private readonly service: ReviewService,
    private readonly bookService: BookService,
    private readonly userBookService: UserBookService,
    private readonly activityService: ActivityService,
    private readonly prisma: PrismaRepository,
  ) {}

  @UseGuards(OptionalAccessTokenGuard)
  @Query(() => Review)
  async bookReview(
    @Args('where') where: ReviewUniqueInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    let reviewExists;
    if (!currentUser) {
      reviewExists = await this.service.findUnique({
        where: {
          id: where.id,
        },
      });
    } else {
      reviewExists = await this.service.findFirst({
        where: {
          userId: currentUser.userId,
          bookId: where.bookId,
        },
      });
    }

    if (!reviewExists) {
      throw new Error('Review does not exist');
    }
    return this.service.findUnique({
      where: {
        id: where.id,
      },
      include: {
        user: true,
        book: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  /**
   * Checks if review is liked by current user.
   */
  @ResolveField(() => Int)
  async commentCount(@Parent() review: Review): Promise<number> {
    const comments = review.comments; // Assuming comments is the field containing the list of comments

    if (Array.isArray(comments)) {
      return comments.length;
    } else {
      const commentsCount = await this.prisma.comment.count({
        where: {
          reviewId: review.id, // Assuming 'reviewId' is the field linking comments to reviews
        },
      });
      return commentsCount;
    }
  }

  @ResolveField(() => Boolean)
  async liked(
    @Parent() review: Review,
    @CurrentUser() currentUser: JwtPayload,
  ): Promise<boolean> {
    if (!currentUser) {
      return false;
    }
    assert(review.id);

    return this.service.isLiked(review.id, currentUser.userId);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Review)
  async likeReview(
    @Args('where') where: ReviewWhereUniqueInput,
    @Args('value') value: boolean,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const review = await this.service.findUnique({
      where: {
        id: where.id,
      },
      include: {
        likedBy: {
          take: 1,
          where: { id: currentUser.userId }, // Assuming 'likedBy' is the relation field with users who liked the review
        },
      },
    });

    if (!review) {
      throw new Error(`Review with ID ${where.id} does not exist.`);
    }

    if (!value && review.likedBy.length === 0) {
      throw new Error(`Review with ID ${where.id} is not in liked list.`);
    }
    const updatedReview = await this.service.likeReview({
      where,
      likedByUserId: currentUser.userId,
      value,
    });

    return updatedReview;
  }

  @UseGuards(OptionalAccessTokenGuard)
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
      return [];
    }
    const reviews = await this.service.findMany({
      where,
      skip: offset,
      take: limit,
    });
    // console.log(reviews);
    return reviews;
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Review)
  async updateReview(
    @Args('where') where: ReviewWhereUniqueInput,
    @Args('data') data: ReviewDataInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const review = await this.service.findUnique({
      where: {
        id: where.id,
      },
    });

    if (!review) {
      throw new Error('Review does not exist');
    }

    const userBook: UserBookIdentifierCompoundUniqueInput = {
      bookId: review.bookId,
      userId: currentUser.userId,
    };
    const userBookExists = await this.userBookService.findUnique(userBook);
    if (!userBookExists) {
      await this.userBookService.create(userBook.bookId, userBook.userId);
    }

    const userBookData: UserBookUpdateInput = {
      rating: Number(data.rating),
    };
    // Update userbook status and rating
    await this.userBookService.update({
      data: userBookData,
      where: {
        userId: userBook.userId,
        bookId: userBook.bookId,
      },
    });

    const updatedReview = await this.service.updateReview({
      where: { id: where.id },
      data,
    });

    return updatedReview;
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Review)
  async createReview(
    @Args('data') data: ReviewDataInput,
    @Args('where') where: BookWhereUniqueInput,

    @CurrentUser() currentUser: JwtPayload,
  ) {
    const bookExists = await this.bookService.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!bookExists) {
      throw new Error('Book does not exist');
    }

    const userBook: UserBookIdentifierCompoundUniqueInput = {
      bookId: where.id,
      userId: currentUser.userId,
    };
    // const userBookExists = await this.userBookService.findUnique(userBook);
    // if (!userBookExists) {
    //   await this.userBookService.create(userBook.bookId, userBook.userId);
    // }

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
    // update audit logs
    this.activityService.create(
      {
        action: 'REVIEW',
        actionContent: review.content,
      },
      userBook.userId,
      userBook.bookId,
    );
    return review;
  }
}
