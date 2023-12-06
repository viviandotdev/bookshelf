import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { ReviewService } from 'libs/review/review.service';
import { ReviewRepository } from 'libs/review/review.repository';
import { CommentRepository } from './comment.repository';

@Module({
  providers: [
    CommentResolver,
    CommentService,
    CommentRepository,
    ReviewService,
    ReviewRepository,
  ],
  imports: [PrismaModule],
  exports: [CommentService],
})
export class CommentModule {}
