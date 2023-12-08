import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class ReviewRepository {
  update = this.prisma.review.update;
  findUnique = this.prisma.review.findUnique;
  findMany = this.prisma.review.findMany;
  create = this.prisma.review.create;
  count = this.prisma.review.count;
  delete = this.prisma.review.delete;
  findFirst = this.prisma.review.findFirst;

  constructor(private readonly prisma: PrismaRepository) {}
}
