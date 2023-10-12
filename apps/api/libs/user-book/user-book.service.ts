import { Injectable } from '@nestjs/common';
import {
  UserBookIdentifierCompoundUniqueInput,
  UserBookUpdateInput,
} from '../../src/generated-db-types';
import { Prisma } from '@prisma/client';
import { UserBookRepository } from './user-book.repository';
@Injectable()
export class UserBookService {
  constructor(private readonly repository: UserBookRepository) {}

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
    return this.repository.create(createUserBookArgs);
  }

  async findUnique(where: UserBookIdentifierCompoundUniqueInput) {
    const { userId, bookId } = where;
    const userBook = await this.repository.findUnique({
      where: {
        identifier: {
          userId,
          bookId,
        },
      },
    });
    return userBook;
  }

  async findMany(args: {
    where: Prisma.UserBookWhereInput;
    userId: string;
    skip?: number;
    take?: number;
  }) {
    const { userId } = args;
    const userBooks = await this.repository.findMany({
      where: {
        ...args.where,
        userId,
      },
      include: {
        book: true,
      },
      skip: args.skip,
      take: args.take,
    });

    return userBooks;
  }

  async count(args: { where: Prisma.UserBookWhereInput; userId: string }) {
    const { userId } = args;
    const userBooksCount = await this.repository.count({
      where: {
        ...args.where,
        userId,
      },
    });
    return userBooksCount;
  }

  async update(args: {
    data: UserBookUpdateInput;
    where: UserBookIdentifierCompoundUniqueInput;
  }) {
    const { userId, bookId } = args.where;
    const updateUserBook = await this.repository.update({
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
    await this.repository.delete({
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
