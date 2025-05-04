// read-date.service.ts
import { Injectable } from '@nestjs/common';
import { ReadDate } from '@bookshelf/api/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { ReadRepository } from './read.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReadService {
    constructor(
        private readonly prisma: PrismaRepository,
        private readonly repository: ReadRepository
    ) { }

    findMany = this.repository.findMany;
    update = this.repository.update;
    create = this.repository.create;

    async findByUserBookId(userBookId: string): Promise<ReadDate[]> {
        return this.prisma.readDate.findMany({
            where: {
                userBookId,
            },
        });
    }

    async updateProgress(params: {
        where: Prisma.ReadingProgressWhereUniqueInput;
        data: Prisma.ReadingProgressUpdateInput;
    }) {
        return this.prisma.readingProgress.update(params);
    }
}
