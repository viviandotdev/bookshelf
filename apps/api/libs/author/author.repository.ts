import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class AuthorRepository {
  update = this.prisma.author.update;
  findUnique = this.prisma.author.findUnique;
  findMany = this.prisma.author.findMany;
  create = this.prisma.author.create;
  count = this.prisma.author.count;
  delete = this.prisma.author.delete;
  findFirst = this.prisma.author.findFirst;

  constructor(private readonly prisma: PrismaRepository) {}
}
