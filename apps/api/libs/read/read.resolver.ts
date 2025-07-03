import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards, NotFoundException } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { Prisma } from '@prisma/client';

import { ReadService } from './read.service';
import { PrismaRepository } from 'prisma/prisma.repository';

import {
    Read,
    ReadingSession,
    ReadWhereInput,
    ReadWhereUniqueInput,
    ReadOrderByWithRelationInput,
    ReadingSessionWhereInput,
    ReadingSessionOrderByWithRelationInput,
    PROGRESS_TYPE,
    UserBook,
} from '../../src/generated-db-types';

@Resolver(() => Read)
export class ReadResolver {
    constructor(
        private readonly readService: ReadService,
        private readonly prisma: PrismaRepository,
    ) { }

    @UseGuards(AccessTokenGuard)
    @Query(() => [UserBook], { name: 'getCurrentlyReadingBooksWithReads' })
    async getCurrentlyReadingBooksWithReads(
        @CurrentUser() user: JwtPayload,
    ) {
        // Get all currently reading books with their latest reads
        const userBooks = await this.prisma.userBook.findMany({
            where: {
                userId: user.userId,
                status: 'READING',
            },
            include: {
                book: {
                    include: {
                        covers: true,
                        ratings: true,
                    },
                },
                read: {
                    include: {
                        readingSessions: {
                            orderBy: {
                                createdAt: 'desc',
                            },
                            take: 1,
                        },
                    },
                    orderBy: {
                        startDate: 'desc',
                    },
                    take: 1,
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });

        return userBooks;
    }

    @UseGuards(AccessTokenGuard)
    @Query(() => Read, { name: 'getLatestRead', nullable: true })
    async getLatestRead(
        @Args('userBookId', { type: () => String }) userBookId: string,
        @CurrentUser() user: JwtPayload,
    ) {
        // Verify the userBook belongs to the current user
        const userBook = await this.prisma.userBook.findUnique({
            where: { id: userBookId },
        });

        if (!userBook || userBook.userId !== user.userId) {
            throw new NotFoundException('User book not found');
        }

        // Get the latest read for this user book
        const latestRead = await this.prisma.read.findFirst({
            where: {
                userBookId: userBookId,
            },
            include: {
                readingSessions: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: 1,
                },
            },
            orderBy: {
                startDate: 'desc',
            },
        });

        return latestRead;
    }


    @UseGuards(AccessTokenGuard)
    @Query(() => [Read], { name: 'reads' })
    async reads(
        @Args('where', { nullable: true }) where: ReadWhereInput,
        @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @Args('orderBy', { nullable: true })
        orderBy: ReadOrderByWithRelationInput,
        @CurrentUser() user: JwtPayload,
    ) {
        return this.readService.findMany({
            where: {
                ...where,
                UserBook: {
                    userId: user.userId,
                },
            },
            skip: offset,
            take: limit,
            orderBy,
        });
    }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => Read, { name: 'createRead' })
    async createRead(
        @Args('userBookId', { type: () => String }) userBookId: string,
        @CurrentUser() user: JwtPayload,
    ) {
        // Verify the userBook belongs to the current user
        const userBook = await this.prisma.userBook.findUnique({
            where: { id: userBookId },
        });

        if (!userBook || userBook.userId !== user.userId) {
            throw new NotFoundException('User book not found');
        }

        return this.readService.create({
            data: {
                UserBook: {
                    connect: { id: userBookId },
                },
            },
        });
    }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => ReadingSession, { name: 'createReadingSession' })
    async createReadingSession(
        @Args('readId', { type: () => String }) readId: string,
        @Args('capacity', { type: () => Int }) capacity: number,
        @Args('progress', { type: () => Int }) progress: number,
        @Args('type', { type: () => PROGRESS_TYPE }) type: PROGRESS_TYPE,
        @CurrentUser() user: JwtPayload,
    ) {
        const read = await this.readService.findUnique({
            where: { id: readId },
            include: { UserBook: true },
        });

        if (!read || read.UserBook.userId !== user.userId) {
            throw new NotFoundException('Read not found');
        }

        return this.readService.createReadingSession({
            data: {
                capacity,
                progress,
                type,
                read: {
                    connect: { id: readId },
                },
            },
            include: {
                read: true
            },
        });
    }

    @UseGuards(AccessTokenGuard)
    @Query(() => [ReadingSession], { name: 'readingSessions' })
    async readingSessions(
        @Args('where', { nullable: true }) where: ReadingSessionWhereInput,
        @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @Args('orderBy', { nullable: true })
        orderBy: ReadingSessionOrderByWithRelationInput,
        @CurrentUser() user: JwtPayload,
    ) {
        return this.readService.findReadingSessions({
            where: {
                ...where,
                read: {
                    UserBook: {
                        userId: user.userId,
                    },
                },
            },
            skip: offset,
            take: limit,
            orderBy,
        });
    }
}
