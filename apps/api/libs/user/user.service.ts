import { Injectable } from '@nestjs/common';
import { UserCreateInput, UserUpdateInput } from 'src/generated-db-types';
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

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, userUpdateInput: UserUpdateInput) {
    console.log(userUpdateInput);
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
