import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class BookRepository {
  update = this.prisma.book.update;
  findUnique = this.prisma.book.findUnique;
  findMany = this.prisma.book.findMany;
  create = this.prisma.book.create;
  count = this.prisma.book.count;
  delete = this.prisma.book.delete;
  findFirst = this.prisma.book.findFirst;
  findByIdentifier = this.prisma.identifier.findFirst;

  constructor(private readonly prisma: PrismaRepository) {}
}
