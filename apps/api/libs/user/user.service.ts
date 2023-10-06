import { Injectable } from '@nestjs/common';
import { UserCreateInput } from 'src/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(userCreateInput: UserCreateInput) {
    return this.prisma.user.create({
      data: {
        ...userCreateInput,
      },
    });
  }
}
