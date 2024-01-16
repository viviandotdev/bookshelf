import { Injectable } from '@nestjs/common';
import { ActivityRepository } from './activity.respository';
import { AudtiLogCreateInput } from '@bookcue/api/generated-db-types';

@Injectable()
export class ActivityService {
  constructor(private readonly repository: ActivityRepository) {}
  findMany = this.repository.findMany;
  async create(data: AudtiLogCreateInput, userId: string) {
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
