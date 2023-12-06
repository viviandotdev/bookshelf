import { Injectable } from '@nestjs/common';
import {
  ReviewWhereUniqueInput,
  CommentCreateInput,
} from '@bookcue/api/generated-db-types';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly repository: CommentRepository) {}
  findMany = this.repository.findMany;
  create(
    data: CommentCreateInput,
    where: ReviewWhereUniqueInput,
    userId: string,
  ) {
    const commentCreateArgs = {
      data: {
        content: data.content,
        user: {
          connect: {
            id: userId,
          },
        },
        review: {
          connect: {
            id: where.id,
          },
        },
      },

      include: {
        review: true,
      },
    };
    return this.repository.create(commentCreateArgs);
  }
}
