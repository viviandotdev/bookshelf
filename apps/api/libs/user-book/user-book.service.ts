import { Injectable } from '@nestjs/common';
import {
  UserBookIdentifierCompoundUniqueInput,
  UserBookUpdateInput,
} from '../../src/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserBookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(bookId: string, userId: string) {
    const createUserBookArgs: Prisma.UserBookCreateArgs = {
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        book: {
          connect: {
            id: bookId,
          },
        },
        status: 'Want to Read',
      },
    };
    return this.prisma.userBook.create(createUserBookArgs);
  }

  async findUnique(where: UserBookIdentifierCompoundUniqueInput) {
    const { userId, bookId } = where;
    const userBook = await this.prisma.userBook.findUnique({
      where: {
        identifier: {
          userId,
          bookId,
        },
      },
    });
    return userBook;
  }

  async update(args: {
    data: UserBookUpdateInput;
    where: UserBookIdentifierCompoundUniqueInput;
  }) {
    const { userId, bookId } = args.where;
    const updateUserBook = await this.prisma.userBook.update({
      where: {
        identifier: {
          userId,
          bookId,
        },
      },
      data: {
        status: args.data.status,
      },
    });
    return updateUserBook;
  }

  async remove(where: UserBookIdentifierCompoundUniqueInput) {
    const { userId, bookId } = where;
    await this.prisma.userBook.delete({
      where: {
        identifier: {
          userId,
          bookId,
        },
      },
    });
    return true;
  }
}
