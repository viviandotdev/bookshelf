import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class WorkRepository {
  update = this.prisma.work.update;
  findUnique = this.prisma.work.findUnique;
  findMany = this.prisma.work.findMany;
  create = this.prisma.work.create;
  count = this.prisma.work.count;
  delete = this.prisma.work.delete;
  findFirst = this.prisma.work.findFirst;

  constructor(private readonly prisma: PrismaRepository) {}
}
