import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class CoverRepository {
  update = this.prisma.cover.update;
  findUnique = this.prisma.cover.findUnique;
  findMany = this.prisma.cover.findMany;
  create = this.prisma.cover.create;
  count = this.prisma.cover.count;
  delete = this.prisma.cover.delete;
  findFirst = this.prisma.cover.findFirst;

  constructor(private readonly prisma: PrismaRepository) {}
}
