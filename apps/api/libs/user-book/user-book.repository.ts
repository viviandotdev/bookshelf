import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class UserBookRepository {
  update = this.prisma.userBook.update;
  findUnique = this.prisma.userBook.findUnique;
  findMany = this.prisma.userBook.findMany;
  create = this.prisma.userBook.create;
  count = this.prisma.userBook.count;
  delete = this.prisma.userBook.delete;

  constructor(private readonly prisma: PrismaRepository) {}
}
