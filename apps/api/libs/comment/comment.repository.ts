import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class CommentRepository {
  update = this.prisma.comment.update;
  findUnique = this.prisma.comment.findUnique;
  findMany = this.prisma.comment.findMany;
  create = this.prisma.comment.create;
  count = this.prisma.comment.count;
  delete = this.prisma.comment.delete;
  findFirst = this.prisma.comment.findFirst;
  constructor(private readonly prisma: PrismaRepository) {}
}
