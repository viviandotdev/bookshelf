import { Injectable } from '@nestjs/common';
import { ShelfCreateInput } from '../../src/generated-db-types';
import { Prisma } from '@prisma/client';
import { ShelfRepository } from './shelf.repository';

@Injectable()
export class ShelfService {
  findUnique = this.repository.findUnique;
  findMany = this.repository.findMany;
  delete = this.repository.delete;
  constructor(private readonly repository: ShelfRepository) {}
  async create(input: ShelfCreateInput, userId: string) {
    const shelfCreateArgs: Prisma.ShelfCreateArgs = {
      data: {
        name: input.name,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    };
    const shelf = await this.repository.create(shelfCreateArgs);
    return shelf;
  }
  async update(args: {
    where: Prisma.ShelfWhereUniqueInput;
    data: Prisma.ShelfUpdateInput;
  }) {
    const shelf = await this.repository.update(args);
    return shelf;
  }
}
