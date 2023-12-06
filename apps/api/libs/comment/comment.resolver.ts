import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import {
  Comment,
  CommentCreateInput,
  ReviewWhereUniqueInput,
} from '@bookcue/api/generated-db-types';
import { ReviewService } from 'libs/review/review.service';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    private readonly service: CommentService,
    private readonly reviewService: ReviewService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Comment)
  async createComment(
    @Args('data') data: CommentCreateInput,
    @Args('where') where: ReviewWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const reviewExists = await this.reviewService.findUnique({
      where: {
        id: where.id,
      },
      include: {
        user: true,
      },
    });
    if (!reviewExists) {
      throw new Error('Cannot comment on a review that does not exist');
    }
    return this.service.create(data, where, user.userId);
  }

  @Query(() => [Comment])
  async comments(
    @Args('where') where: ReviewWhereUniqueInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
  ) {
    const reviewExists = await this.reviewService.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!reviewExists) {
      throw new Error('Cannot load comments for a review that does not exist');
    }
    const comments = await this.service.findMany({
      where: {
        reviewId: {
          equals: where.id,
        },
      },
      include: {
        user: true,
      },
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc', // Order by createdAt field in descending order (most recent first)
      },
    });
    console.log(comments);
    return comments;
  }
}
