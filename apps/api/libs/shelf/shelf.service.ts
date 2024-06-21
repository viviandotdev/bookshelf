import { Injectable } from '@nestjs/common';
import { ShelfCreateInput } from '../../src/generated-db-types';
import { Prisma } from '@prisma/client';
import { ShelfRepository } from './shelf.repository';
import { generateSlug } from 'libs/user-book/utils';

@Injectable()
export class ShelfService {
  findUnique = this.repository.findUnique;
  findMany = this.repository.findMany;
  delete = this.repository.delete;
  userBookShelvesFindMany = this.repository.userBookShelvesFindMany;
  constructor(private readonly repository: ShelfRepository) {}
  async create(input: ShelfCreateInput, userId: string) {
    const shelfCreateArgs: Prisma.ShelfCreateArgs = {
      data: {
        name: input.name,
        slug: generateSlug(input.name),
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        _count: {
          select: {
            userBooks: true,
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
    const shelf = await this.repository.update({
      ...args,
      include: {
        _count: {
          select: {
            userBooks: true,
          },
        },
      },
    });
    return shelf;
  }
}
