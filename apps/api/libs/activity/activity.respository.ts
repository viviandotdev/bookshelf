import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class ActivityRepository {
  update = this.prisma.auditLog.update;
  findUnique = this.prisma.auditLog.findUnique;
  findMany = this.prisma.auditLog.findMany;
  create = this.prisma.auditLog.create;
  count = this.prisma.auditLog.count;
  delete = this.prisma.auditLog.delete;

  constructor(private readonly prisma: PrismaRepository) {}
}
