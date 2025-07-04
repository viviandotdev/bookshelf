import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards, NotFoundException } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';

import { ReadService } from './read.service';
import { PrismaRepository } from 'prisma/prisma.repository';

import {
    Read,
    ReadingSession,
    ReadWhereInput,
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
    @Query(() => [UserBook], { name: 'getCurrentlyReadingBooksWithLatestReads' })
    async getCurrentlyReadingBooksWithLatestReads(
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
    @Query(() => [Read], { name: 'reads' })
    async reads(
        @Args('where', { nullable: true }) where: ReadWhereInput,
        @CurrentUser() user: JwtPayload,
        @Args({ name: 'offset', type: () => Int, nullable: true }) offset?: number,
        @Args({ name: 'limit', type: () => Int, nullable: true }) limit?: number,
        @Args('orderBy', { nullable: true })
        orderBy?: ReadOrderByWithRelationInput,
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
        @Args('capacity', { type: () => Int }) capacity: number,
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
                capacity,
            },
        });
    }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => ReadingSession, { name: 'createReadingSession' })
    async createReadingSession(
        @Args('readId', { type: () => String }) readId: string,
        @Args('startPage', { type: () => Int }) startPage: number,
        @Args('endPage', { type: () => Int }) endPage: number,
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
                startPage,
                endPage,
                progress: endPage,
                pagesRead: endPage - startPage + 1,
                type: 'PAGES',
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
    @Mutation(() => ReadingSession, { name: 'updateReadingSession' })
    async updateReadingSession(
        @Args('sessionId', { type: () => String }) sessionId: string,
        @CurrentUser() user: JwtPayload,
        @Args('startPage', { type: () => Int, nullable: true }) startPage?: number,
        @Args('endPage', { type: () => Int, nullable: true }) endPage?: number,
        @Args('date', { type: () => String, nullable: true }) date?: string,
    ) {
        const sessions = await this.readService.findReadingSessions({
            where: { id: sessionId },
        });

        if (!sessions.length || sessions[0].read.UserBook.userId !== user.userId) {
            throw new NotFoundException('Reading session not found');
        }

        const updateData: any = {};
        if (startPage !== undefined) updateData.startPage = startPage;
        if (endPage !== undefined) updateData.endPage = endPage;
        if (date !== undefined) updateData.createdAt = new Date(date);

        return this.readService.updateReadingSession({
            where: { id: sessionId },
            data: updateData,
        });
    }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => Boolean, { name: 'removeReadingSession' })
    async removeReadingSession(
        @Args('sessionId', { type: () => String }) sessionId: string,
        @CurrentUser() user: JwtPayload,
    ) {
        const sessions = await this.readService.findReadingSessions({
            where: { id: sessionId },
        });

        if (!sessions.length || sessions[0].read.UserBook.userId !== user.userId) {
            throw new NotFoundException('Reading session not found');
        }

        await this.readService.deleteReadingSession({ id: sessionId });
        return true;
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
