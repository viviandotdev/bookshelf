import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivityService } from './activity.service';
import {
  AudtiLog,
  AudtiLogCreateInput,
  AudtiLogWhereInput,
} from '@bookcue/api/generated-db-types';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';

@Resolver()
export class ActivityResolver {
  constructor(private readonly activityService: ActivityService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => AudtiLog)
  createAuditLog(
    @Args('data') data: AudtiLogCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    console.log(data);
    return this.activityService.create(data, currentUser.userId);
  }

  @Query(() => [AudtiLog])
  async auditLogs(
    @Args('where') where: AudtiLogWhereInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
  ) {
    // Based on the user book
    return this.activityService.findMany({
      where: {
        userId: where.userId,
      },
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc', // Order by createdAt field in descending order (most recent first)
      },
    });
  }
}
