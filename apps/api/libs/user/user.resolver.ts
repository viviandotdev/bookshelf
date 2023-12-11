import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  User,
  UserCreateInput,
  UserWhereUniqueInput,
} from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
// import DataLoader from 'dataloader';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => User)
  createUser(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
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
