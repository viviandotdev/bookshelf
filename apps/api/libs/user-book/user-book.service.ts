import { Injectable } from '@nestjs/common';
import { UserBookIdentifierCompoundUniqueInput } from '../../src/generated-db-types';
import { Prisma } from '@prisma/client';
import { UserBookRepository } from './user-book.repository';
import { UserBookUpdateInput } from './models/user-book-update.input';
@Injectable()
export class UserBookService {
  constructor(private readonly repository: UserBookRepository) {}

  async create(bookId: string, userId: string, status?: string) {
    const lastUserBook = await this.repository.findFirst({
      where: { status: status || 'Want to Read', userId: userId },
      orderBy: { order: 'desc' },
      select: { order: true },
    });

    const newOrder = lastUserBook ? lastUserBook.order + 1 : 1;

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
        order: newOrder,
        status: status || 'Want to Read',
      },
    };
    //create books withorder
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
      include: {
        shelves: {
          include: {
            shelf: true,
          },
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
    orderBy?: Prisma.UserBookOrderByWithRelationInput;
  }) {
    const { userId } = args;

    const userBooks = await this.repository.findMany({
      where: {
        ...args.where,
        userId,
      },
      include: {
        _count: {
          select: {
            shelves: true,
            reviews: true,
            journalEntry: true,
          },
        },
        book: {
          include: {
            _count: {
              select: {
                userBook: true,
                reviews: true,
              },
            },
          },
        },
        shelves: {
          include: {
            shelf: true,
          },
        },
        journalEntry: {
          orderBy: {
            dateRead: 'desc', // Order by dateRead in descending order
          },
          take: 1, // Take only the last element
        },
      },
      orderBy: args.orderBy,
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

    const origin = await this.findUnique(args.where);
    const shelfList = args.data.shelves;
    let newOrder;
    // if status is updated, update order number in the new status
    if (args.data.status) {
      const lastUserBook = await this.repository.findFirst({
        where: { status: args.data.status, userId: userId },
        orderBy: { order: 'desc' },
        select: { order: true },
      });

      newOrder = lastUserBook ? lastUserBook.order + 1 : 1;
    }

    const updateUserBook = await this.repository.update({
      where: {
        identifier: {
          userId,
          bookId,
        },
      },
      data: {
        order: newOrder,
        status: args.data.status,
        rating: args.data.rating,
        shelves: shelfList
          ? {
              deleteMany: { userBookId: origin.id },
              create: shelfList.map((name: string) => ({
                shelf: {
                  connectOrCreate: {
                    where: { identifier: { userId, name } },
                    create: { userId, name },
                  },
                },
              })),
            }
          : undefined,
      },
      include: {
        book: true,
        shelves: {
          include: {
            shelf: true,
          },
        },
      },
    });
    return updateUserBook;
  }

  async remove(where: UserBookIdentifierCompoundUniqueInput) {
    const { userId, bookId } = where;
    const userBook = await this.repository.delete({
      where: {
        identifier: {
          userId,
          bookId,
        },
      },
      include: {
        shelves: {
          include: {
            shelf: true,
          },
        },
      },
    });
    return userBook;
  }
}
