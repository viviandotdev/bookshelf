import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class JournalEntryRepository {
  update = this.prisma.journalEntry.update;
  findUnique = this.prisma.journalEntry.findUnique;
  findMany = this.prisma.journalEntry.findMany;
  create = this.prisma.journalEntry.create;
  count = this.prisma.journalEntry.count;
  delete = this.prisma.journalEntry.delete;
  findFirst = this.prisma.journalEntry.findFirst;
  constructor(private readonly prisma: PrismaRepository) {}
}
