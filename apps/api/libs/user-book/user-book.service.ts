import { Injectable } from '@nestjs/common';
import { UserBookIdentifierCompoundUniqueInput } from '../../src/generated-db-types';
import { Prisma } from '@prisma/client';
import { UserBookRepository } from './user-book.repository';
import { UserBookUpdateInput } from './models/user-book-update.input';
import { BookItemInput } from './models/user-book-update-order.input';
import { PrismaRepository } from 'prisma/prisma.repository';
import { ActivityService } from 'libs/activity/activity.service';
@Injectable()
export class UserBookService {
  constructor(
    private readonly repository: UserBookRepository,
    private readonly activityService: ActivityService,
    private readonly prisma: PrismaRepository,
  ) {}

  async create(bookId: number, userId: string, status?: string) {
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
    //create books with order

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
            authors: { select: { name: true } },
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
    const totalBooksCount = await this.count({
      where: args.where,
      userId,
    });

    // Calculate hasMore
    const hasMore = args.skip + userBooks.length < totalBooksCount;

    return {
      userBooks,
      hasMore,
      totalBooks: totalBooksCount,
    };
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
  async updateOrder(items: BookItemInput[], userId: string) {
    let updatedCards = [];

    try {
      const transaction = items.map((book) =>
        this.repository.update({
          where: {
            identifier: {
              userId,
              bookId: book.id,
            },
          },
          data: {
            order: book.order,
            status: book.status,
          },
        }),
      );
      updatedCards = await this.prisma.$transaction(transaction);
    } catch (error) {
      console.log(error);
      throw new Error('Error updating order');
    }
    return updatedCards;
  }
  async update(args: {
    data: UserBookUpdateInput;
    where: UserBookIdentifierCompoundUniqueInput;
  }) {
    const { userId, bookId } = args.where;

    // const origin = await this.findUnique(args.where);

    const origin = await this.repository.findUnique({
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
        book: true,
      },
    });

    const shelfList = args.data.shelves;
    let newOrder;
    // if status is updated, update order number in the new status
    if (args.data.status) {
      // with the given status for the user.
      await this.repository.updateMany({
        where: {
          userId: userId,
          status: args.data.status,
          // Optionally, you may want to exclude the book that's being updated from this increment.
          // NOT: { bookId: currentBookId }
        },
        data: {
          // Increment the 'order' field by 1 for all matched records.
          order: {
            increment: 1,
          },
        },
      });

      // Set the new order for the updated book to 0.
      newOrder = 0;

      //   const lastUserBook = await this.repository.findFirst({
      //     where: { status: args.data.status, userId: userId },
      //     orderBy: { order: 'desc' },
      //     select: { order: true },
      //   });

      //   newOrder = lastUserBook ? lastUserBook.order + 1 : 1;
      // Create status update activity
      this.activityService.create(
        {
          action: 'STATUS_UPDATE',
          actionContent: args.data.status,
        },
        userId,
        origin.book.id,
      );
    }
    // if rating is updated, create rating activity
    if (args.data.rating) {
      this.activityService.create(
        {
          action: 'RATE',
          actionContent: args.data.rating.toString(),
        },
        userId,
        origin.book.id,
      );
    }
    // Create activty for shelfing a book
    if (args.data.shelves) {
      this.activityService.create(
        {
          action: 'SHELVE',
          actionContent: args.data.shelves.join(', '),
        },
        userId,
        origin.book.id,
      );
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
