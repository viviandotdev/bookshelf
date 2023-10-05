import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateShelfInput } from './dto/createShelf.input';

@Injectable()
export class ShelfService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createShelfInput: CreateShelfInput) {
    const shelf = await this.prisma.shelf.create({
      data: {
        id: createShelfInput.shelf.id,
        name: createShelfInput.shelf.name,
        userId: createShelfInput.userId,
      },
    });
    return shelf;
  }

  async findAll(userId: string) {
    const shelves = await this.prisma.shelf.findMany({
      where: {
        userId,
      },
    });
    return shelves;
  }

  findOne(id: number) {
    return `This action returns a #${id} shelf`;
  }

  //   update(id: number, updateShelfInput: UpdateShelfInput) {
  //     return `This action updates a #${id} shelf`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} shelf`;
  //   }
}
