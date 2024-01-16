import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class ActivityRepository {
  update = this.prisma.audtiLog.update;
  findUnique = this.prisma.audtiLog.findUnique;
  findMany = this.prisma.audtiLog.findMany;
  create = this.prisma.audtiLog.create;
  count = this.prisma.audtiLog.count;
  delete = this.prisma.audtiLog.delete;

  constructor(private readonly prisma: PrismaRepository) {}
}
