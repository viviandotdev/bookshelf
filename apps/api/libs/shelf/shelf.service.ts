import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ShelfCreateInput } from '../../src/generated-db-types';
import { Prisma } from '@prisma/client';

@Injectable()
export class ShelfService {
  constructor(private readonly prisma: PrismaService) {}
  async createShelf(input: ShelfCreateInput, userId: string) {
    const shelfCreateArgs: Prisma.ShelfCreateArgs = {
      data: {
        id: input.id,
        name: input.name,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    };
    const shelf = await this.prisma.shelf.create(shelfCreateArgs);
    return shelf;
  }

  async findMany(userId: string) {
    const shelves = await this.prisma.shelf.findMany({
      where: {
        userId,
      },
    });
    return shelves;
  }
}
