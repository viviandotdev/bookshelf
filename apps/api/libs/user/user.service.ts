import { Injectable } from '@nestjs/common';
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
  async create(userCreateInput: UserCreateInput) {
    return this.prisma.user.create({
      data: {
        ...userCreateInput,
      },
    });
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
