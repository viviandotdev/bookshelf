import { Injectable } from '@nestjs/common';
import { ActivityRepository } from './activity.respository';
import { AuditLogCreateInput } from '@bookcue/api/generated-db-types';

@Injectable()
export class ActivityService {
  constructor(private readonly repository: ActivityRepository) {}
  findMany = this.repository.findMany;
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
}
