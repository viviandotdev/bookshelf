import { Injectable } from '@nestjs/common';
import { UserCreateInput } from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaRepository) {}
  async create(userCreateInput: UserCreateInput) {
    return this.prisma.user.create({
      data: {
        ...userCreateInput,
      },
    });
  }
}
