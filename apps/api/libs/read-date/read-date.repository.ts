import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class ReadDateRepository {
  update = this.prisma.readDate.update;
  findUnique = this.prisma.readDate.findUnique;
  findMany = this.prisma.readDate.findMany;
  create = this.prisma.readDate.create;
  count = this.prisma.readDate.count;
  delete = this.prisma.readDate.delete;
  findFirst = this.prisma.readDate.findFirst;
  updateProgress = this.prisma.readingProgress.update;
  constructor(private readonly prisma: PrismaRepository) {}
}
