import { Injectable } from '@nestjs/common';
import { ReviewRepository } from './review.repository';
import {
  BookWhereUniqueInput,
  UserBookIdentifierCompoundUniqueInput,
} from '@bookcue/api/generated-db-types';
import { Prisma } from '@prisma/client';
import { ReviewDataInput } from './models/review-create.input';

@Injectable()
export class ReviewService {
  constructor(private readonly repository: ReviewRepository) {}
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

  async update(args: {
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
      skip: args.skip,
      take: args.take,
    });
  }
}
