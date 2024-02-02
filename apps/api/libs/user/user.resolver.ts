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
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { OptionalAccessTokenGuard } from 'libs/auth/guards/optional-jwt.guard';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthService } from 'libs/auth/auth.service';
import { compare, hash } from 'bcryptjs';
import { UpdateEmailInput } from './dto/update-email.input';
// import DataLoader from 'dataloader';
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => User)
  async updateUser(
    @Args('data') data: UpdateUserInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const existingUser = await this.userService.findUnique({
      where: {
        id: currentUser.userId,
      },
    });

    if (!existingUser) {
      throw new NotFoundException(`User does not exist`);
    }
    if (data.email && data.email !== existingUser.email) {
      await this.authService.sendVerificationEmailCode(
        data.email,
        existingUser.email,
      );

      return existingUser;
    }

    if (data.newPassword && existingUser.hashedPassword) {
      const passwordsMatch = await compare(
        data.password,
        existingUser.hashedPassword,
      );

      if (!passwordsMatch) {
        throw new Error('Password does not match');
      }

      const hashedPassword = await hash(data.newPassword, 10);
      data.newPassword = hashedPassword;
    }

    return this.userService.update({
      where: {
        id: currentUser.userId,
      },
      data: {
        hashedPassword: data.newPassword,
        email: data.email,
        username: data.username,
      },
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => User)
  async updateEmail(
    @Args('data') updateEmailInput: UpdateEmailInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const verifiedToken = await this.authService.verifyToken(
      updateEmailInput.code,
    );
    if (verifiedToken.token === updateEmailInput.code) {
      const updatedUser = await this.userService.updateUserEmail(
        currentUser.email,
        updateEmailInput.email,
      );
      return updatedUser;
    }
  }

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
