import { Injectable } from '@nestjs/common';
import {
  CreateOneBookArgs,
  FindUniqueBookArgs,
  UpdateOneBookArgs,
  DeleteOneBookArgs,
} from 'libs/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOneBookArgs: CreateOneBookArgs) {
    return this.prisma.book.create(createOneBookArgs);
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(findUniqueBookArgs: FindUniqueBookArgs) {
    return this.prisma.book.findUnique(findUniqueBookArgs);
  }

  update(updateOneBookArgs: UpdateOneBookArgs) {
    return this.prisma.book.update(updateOneBookArgs);
  }

  remove(deleteOneBookArgs: DeleteOneBookArgs) {
    return this.prisma.book.delete(deleteOneBookArgs);
  }
}
