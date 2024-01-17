import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ActivityService } from './activity.service';
import {
  AuditLog,
  UserBookWhereUniqueInput,
} from '@bookcue/api/generated-db-types';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { JwtPayload } from 'libs/auth/types';

@Resolver()
export class ActivityResolver {
  constructor(private readonly activityService: ActivityService) {}

  @UseGuards(AccessTokenGuard)
  @Query(() => [AuditLog])
  async auditLogs(
    @CurrentUser() currentUser: JwtPayload,
    @Args({
      name: 'where',
      type: () => UserBookWhereUniqueInput,
      nullable: true,
    })
    where?: UserBookWhereUniqueInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
  ) {
    // Based on the user book

    return this.activityService.findMany({
      where: {
        userId: currentUser.userId,
        // userBook id, get all the activities for this book
        bookId: where.id,
      },
      include: {
        user: true,
        book: true,
      },
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc', // Order by createdAt field in descending order (most recent first)
      },
    });
  }
}
