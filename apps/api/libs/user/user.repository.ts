import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class UserRepository {
  update = this.prisma.user.update;
  findUnique = this.prisma.user.findUnique;
  findMany = this.prisma.user.findMany;
  create = this.prisma.user.create;
  count = this.prisma.user.count;
  delete = this.prisma.user.delete;
  findFirst = this.prisma.user.findFirst;
  constructor(private readonly prisma: PrismaRepository) {}
}
