import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'prisma/prisma.repository';

/**
 * Repository to work with database.
 */
@Injectable()
export class ReadRepository {
    update = this.prisma.read.update;
    findUnique = this.prisma.read.findUnique;
    findMany = this.prisma.read.findMany;
    create = this.prisma.read.create;
    count = this.prisma.read.count;
    delete = this.prisma.read.delete;
    findFirst = this.prisma.read.findFirst;
    transaction = this.prisma.$transaction;
    updateMany = this.prisma.read.updateMany;

    constructor(private readonly prisma: PrismaRepository) { }
}
