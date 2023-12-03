import { Injectable } from '@nestjs/common';
import { ReviewRepository } from './review.repository';
import {
  BookWhereUniqueInput,
  ReviewCreateInput,
} from '@bookcue/api/generated-db-types';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private readonly repository: ReviewRepository) {}
  async create(
    data: ReviewCreateInput,
    where: BookWhereUniqueInput,
    author: string,
  ) {
    const reviewCreateArgs: Prisma.ReviewCreateArgs = {
      data: {
        content: data.content,
        user: {
          connect: { id: author },
        },
        book: {
          connect: { id: where.id },
        },
      },
      include: {
        user: true,
      },
    };
    return this.repository.create(reviewCreateArgs);
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
        user: true,
      },
      skip: args.skip,
      take: args.take,
    });
  }
}
