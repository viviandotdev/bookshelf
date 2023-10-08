import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class ShelfRepository {
  update = this.prisma.shelf.update;
  findUnique = this.prisma.shelf.findUnique;
  findMany = this.prisma.shelf.findMany;
  create = this.prisma.shelf.create;
  count = this.prisma.shelf.count;
  delete = this.prisma.shelf.delete;

  constructor(private readonly prisma: PrismaRepository) {}
}
