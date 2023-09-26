import { Injectable } from '@nestjs/common';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs,
} from 'libs/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOneUserArgs: CreateOneUserArgs) {
    console.log(createOneUserArgs.data);
    return this.prisma.user.create(createOneUserArgs);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(findUniqueUserArgs);
  }

  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }

  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prisma.user.delete(deleteOneUserArgs);
  }
}
