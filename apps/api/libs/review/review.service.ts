import { Injectable } from '@nestjs/common';
import { ReviewRepository } from './review.repository';
import {
  BookWhereUniqueInput,
  ReviewWhereUniqueInput,
  UserBookIdentifierCompoundUniqueInput,
} from '@bookcue/api/generated-db-types';
import { Prisma } from '@prisma/client';
import { ReviewDataInput } from './models/review-create.input';
import { ActivityService } from 'libs/activity/activity.service';

@Injectable()
export class ReviewService {
  constructor(
    private readonly repository: ReviewRepository,
  ) // private readonly activityService: ActivityService,
  {}
  findUnique = this.repository.findUnique;
  async create(
    data: ReviewDataInput,
    where: UserBookIdentifierCompoundUniqueInput,
  ) {
    const reviewCreateArgs: Prisma.ReviewCreateArgs = {
      data: {
        content: data.content,
        spoilers: data.spoilers,
        user: {
          connect: { id: where.userId },
        },
        book: {
          connect: { id: where.bookId },
        },
        userBook: {
          connect: {
            identifier: {
              userId: where.userId,
              bookId: where.bookId,
            },
          },
        },
      },
      include: {
        user: true,
      },
    };

    return this.repository.create(reviewCreateArgs);
  }

  /**
   * Checks if review with {id} liked by user {userId}.
   */
  async isLiked(reviewId: string, userId: string) {
    const count = await this.repository.count({
      take: 1,
      where: { id: reviewId, likedBy: { some: { id: userId } } },
    });
    return count > 0;
  }

  async likeReview(args: {
    where?: ReviewWhereUniqueInput;
    likedByUserId: string;
    value: boolean;
  }) {
    const review =
      args.where &&
      (await this.findUnique({
        where: {
          id: args.where.id,
        },
      }));

    if (!review) {
      throw new Error('Review not found');
    }

    const user = { id: args.likedByUserId };
    const liked = args.value ? { connect: user } : { disconnect: user };
    const updatedLikeCount = review.likeCount + (args.value ? 1 : -1);

    return this.repository.update({
      where: { id: review.id },
      data: {
        likedBy: liked,
        likeCount: updatedLikeCount,
      },
    });
  }

  async updateReview(args: {
    where: { id: string }; // Assuming the ID is a string
    data: ReviewDataInput; // Assuming ReviewUpdateInput model includes update fields
  }) {
    const reviewUpdateArgs: Prisma.ReviewUpdateArgs = {
      where: { id: args.where.id },
      data: {
        // Fields that can be updated
        content: args.data.content,
        spoilers: args.data.spoilers,
        // Include other fields to be updated based on ReviewUpdateInput
        // For instance: rating, updatedAt, etc.
      },
    };

    return this.repository.update(reviewUpdateArgs);
  }

  async findMany(args: {
    where: BookWhereUniqueInput;
    skip?: number;
    take?: number;
  }) {
    return this.repository.findMany({
      where: {
        book: {
          id: args.where.id,
        },
      },
      include: {
        userBook: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: args.skip,
      take: args.take,
    });
  }
}
