import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ReadRepository } from './read.repository';
import { PrismaRepository } from 'prisma/prisma.repository';

@Injectable()
export class ReadService {
    findUnique = this.repository.findUnique;
    delete = this.repository.delete;

    constructor(
        private readonly repository: ReadRepository,
        private readonly prisma: PrismaRepository,
    ) { }

    async create(data: Prisma.ReadCreateArgs) {
        return this.repository.create(data);
    }

    async findMany(args: {
        where: Prisma.ReadWhereInput;
        skip?: number;
        take?: number;
        orderBy?: Prisma.ReadOrderByWithRelationInput;
    }) {
        return this.repository.findMany({
            ...args,
            include: {
                readingSessions: true,
                UserBook: {
                    include: {
                        book: {
                            include: {
                                covers: true,
                                identifiers: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async update(args: {
        data: Prisma.ReadUpdateInput;
        where: Prisma.ReadWhereUniqueInput;
    }) {
        return this.repository.update(args);
    }

    async count(args: { where: Prisma.ReadWhereInput }) {
        return this.repository.count(args);
    }

    async createReadingSession(data: Prisma.ReadingSessionCreateArgs) {
        return this.prisma.readingSession.create(data);
    }

    async updateReadingSession(args: {
        data: Prisma.ReadingSessionUpdateInput;
        where: Prisma.ReadingSessionWhereUniqueInput;
    }) {
        return this.prisma.readingSession.update(args);
    }

    async deleteReadingSession(where: Prisma.ReadingSessionWhereUniqueInput) {
        return this.prisma.readingSession.delete({ where });
    }

    async findReadingSessions(args: {
        where: Prisma.ReadingSessionWhereInput;
        skip?: number;
        take?: number;
        orderBy?: Prisma.ReadingSessionOrderByWithRelationInput;
    }) {
        return this.prisma.readingSession.findMany({
            ...args,
            include: {
                read: {
                    include: {
                        UserBook: {
                            include: {
                                book: {
                                    include: {
                                        covers: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }

    async getReadWithSessions(readId: string) {
        return this.repository.findUnique({
            where: { id: readId },
            include: {
                readingSessions: {
                    orderBy: { createdAt: 'desc' },
                },
                UserBook: {
                    include: {
                        book: {
                            include: {
                                covers: true,
                                identifiers: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async getUserReads(userId: string, args?: {
        skip?: number;
        take?: number;
        orderBy?: Prisma.ReadOrderByWithRelationInput;
    }) {
        return this.repository.findMany({
            where: {
                UserBook: {
                    userId,
                },
            },
            include: {
                readingSessions: {
                    orderBy: { createdAt: 'desc' },
                },
                UserBook: {
                    include: {
                        book: {
                            include: {
                                covers: true,
                                identifiers: true,
                            },
                        },
                    },
                },
            },
            ...args,
        });
    }
}
