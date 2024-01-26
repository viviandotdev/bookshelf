import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserWhereUniqueInput } from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { OptionalAccessTokenGuard } from 'libs/auth/guards/optional-jwt.guard';
// import DataLoader from 'dataloader';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(OptionalAccessTokenGuard)
  @Query(() => User)
  user(@Args('where') where: UserWhereUniqueInput) {
    return this.userService.findUnique({
      where: {
        username: where.username,
      },
    });
  }

  /**
   * Check if current user is follow some user.
   */
  @ResolveField(() => Boolean)
  async isFollowing(
    @Parent() user: User,
    @CurrentUser() currentUser: JwtPayload,
  ): Promise<boolean> {
    if (!currentUser) {
      return false;
    }
    // assert(user.userId);
    return this.userService.isFollowing(user.id, currentUser.userId);
  }

  /**
   * Resolve field to get the follower count for a user.
   */
  @ResolveField(() => Number)
  async followerCount(@Parent() user: User): Promise<number> {
    return this.userService.getFollowerCount(user.id);
  }

  /**
   * Resolve field to get the follower count for a user.
   */
  @ResolveField(() => Number)
  async followingCount(@Parent() user: User): Promise<number> {
    return this.userService.getFollowingCount(user.id);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => User)
  async follow(
    @CurrentUser() currentUser: JwtPayload,
    @Args('where') where: UserWhereUniqueInput,
    @Args('value') value: boolean,
  ) {
    await this.userService.findUnique({
      where: { id: currentUser.userId },
      select: { id: true },
      //   rejectOnNotFound: true,
    });
    const follower = { id: currentUser.userId };
    return this.userService.follow(
      {
        id: where.id,
      },
      follower,
      value,
    );
  }
}
