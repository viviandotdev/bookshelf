import { Injectable } from '@nestjs/common';
import { ActivityRepository } from './activity.respository';
import { AuditLogCreateInput } from '@bookcue/api/generated-db-types';

@Injectable()
export class ActivityService {
  constructor(private readonly repository: ActivityRepository) {}
  findMany = this.repository.findMany;
  async create(data: AuditLogCreateInput, userId: string) {
    return this.repository.create({
      data: {
        ...data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
