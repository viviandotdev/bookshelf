import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import {
    PROGRESS_TYPE,
    Read,
} from '@bookshelf/api/generated-db-types';
import { Prisma } from '@prisma/client';
import { ReadService } from './read.service';

@Resolver(() => Read)
export class ReadResolver {
    constructor(private readonly readService: ReadService) { }

    @Query(() => [Read])
    async readDates(
        @Args('userBookIds', { type: () => [String] }) userBookIds: string[],
    ) {
        const where: Prisma.ReadWhereInput = {
            userBookId: {
                in: userBookIds,
            },
        };

        const readDates = await this.readService.findMany({
            where,
        });

        return readDates;
    }

    @Mutation(() => Read)
    async createRead(
        @Args('userBookId') userBookId: string,
        @Args('type') type: PROGRESS_TYPE,
        @Args('capacity', { type: () => Int }) capacity: number,
        @Args('startDate', { nullable: true }) startDate?: string,
        @Args('finishedDate', { nullable: true }) finishedDate?: string,
    ) {
        const data: Prisma.ReadCreateInput = {
            userBook: {
                connect: { id: userBookId }
            },
            type,
            capacity,
            startDate: startDate ? this.convertToDate(startDate) : new Date(),
            finishedDate: finishedDate ? this.convertToDate(finishedDate) : null,
            active: !finishedDate
        };

        return this.readService.create({ data });
    }

    private convertToDate(dateString: string): Date {
        const [month, day, year] = dateString.split('-').map(Number);
        return new Date(year, month - 1, day);
    }
}
