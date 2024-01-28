import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserCreateInput } from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { UserRepository } from './user.repository';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly prisma: PrismaRepository,
  ) {}
  findUnique = this.repository.findUnique;
  update = this.repository.update;

  async createUser(createUserInput: UserCreateInput) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserInput.email,
      },
    });

    if (existingUser) {
      throw new ForbiddenException('Email already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserInput,
      },
    });

    return user;
  }

  async getFollowerCount(userId: string): Promise<number> {
    const count = await this.repository.count({
      where: {
        following: {
          some: {
            id: userId,
          },
        },
      },
    });
    return count;
  }

  async getFollowingCount(userId: string): Promise<number> {
    const count = await this.repository.count({
      where: {
        followers: {
          some: {
            id: userId,
          },
        },
      },
    });
    return count;
  }
  //  Check if user with `userId` is following user with `byUserId`.
  async isFollowing(userId: string, byUserId: string) {
    const result = await this.repository
      .findUnique({
        where: { id: userId },
      })
      .followers({
        select: { id: true },
        where: { id: byUserId },
        take: 1,
      });
    return result.length > 0;
  }

  /**
   * Add or remove follower for user matching to `where` conditions.
   */

  async follow(
    where: Prisma.UserWhereUniqueInput,
    follower: Prisma.UserWhereUniqueInput,
    value: boolean,
  ) {
    const followersOperation = value
      ? { connect: follower }
      : { disconnect: follower };
    return this.repository.update({
      where,
      data: {
        followers: followersOperation,
      },
    });
  }
}
