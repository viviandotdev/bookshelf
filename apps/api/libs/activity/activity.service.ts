import { Injectable } from '@nestjs/common';
import { ActivityRepository } from './activity.respository';
import { AuditLogCreateInput } from '@bookcue/api/generated-db-types';
import { ACTION, Prisma } from '@prisma/client';
@Injectable()
export class ActivityService {
  constructor(private readonly repository: ActivityRepository) {}
  //   findMany = this.repository.findMany;
  async create(data: AuditLogCreateInput, userId: string, bookId: number) {
    return this.repository.create({
      data: {
        ...data,
        book: {
          connect: {
            id: bookId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  async findMany(args: {
    where: Prisma.AuditLogWhereInput;
    action?: ACTION;
    skip?: number;
    take?: number;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput;
  }) {
    const { where, skip, take, action } = args;

    const activities = await this.repository.findMany({
      where: {
        ...where,
        ...(action && { action }),
      },
      include: {
        user: true,
        book: {
          include: {
            authors: { select: { name: true } },
            covers: { select: { size: true, url: true } },
          },
        },
      },
      orderBy: args.orderBy,
      skip,
      take,
    });

    const totalActivitiesCount = await this.repository.count({
      where,
    });
    // Calculate hasMore
    const hasMore = (skip || 0) + activities.length < totalActivitiesCount;

    return {
      activities,
      hasMore,
      totalActivities: totalActivitiesCount,
    };
  }
}
