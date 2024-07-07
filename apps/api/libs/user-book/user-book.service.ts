import { Injectable } from '@nestjs/common';
import {
  CoverCreateInput,
  IdentifierCreateInput,
  IdentifierWhereInput,
  READING_STATUS,
  UserBookIdentifierCompoundUniqueInput,
  UserBookWhereUniqueInput,
} from '../../src/generated-db-types';
import { PROGRESS_TYPE, Prisma, SOURCE } from '@prisma/client';
import { UserBookRepository } from './user-book.repository';
import { UserBookUpdateInput } from './models/user-book-update.input';
import { BookItemInput } from './models/user-book-update-order.input';
import { PrismaRepository } from 'prisma/prisma.repository';
import { ActivityService } from 'libs/activity/activity.service';
import { generateSlug, getUserBookInfo } from './utils';
import { CoverService } from 'libs/cover/cover.service';
import { BookService } from 'libs/book/book.service';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { BookDataInput } from 'libs/book/dto/book-data.input';
@Injectable()
export class UserBookService {
  findUnique = this.repository.findUnique;
  delete = this.repository.delete;
  constructor(
    private readonly repository: UserBookRepository,
    private readonly bookService: BookService,
    private readonly coverService: CoverService,
    private readonly prisma: PrismaRepository,
  ) {}
  async removeBookFromShelf(id: string, userId: string, shelf: string) {
    // Retrieve the userBook to see if it exists and to get the current shelves
    const userBook = await this.repository.findUnique({
      where: {
        id: id,
      },
      include: {
        shelves: {
          include: {
            shelf: true,
          },
        },
      },
    });

    // If the userBook exists, check if the shelf is associated with it
    if (userBook) {
      const shelfList = userBook.shelves.map((shelfRelation) => ({
        name: shelfRelation.shelf.name,
        id: shelfRelation.shelf.id,
      }));
      if (shelfList.some((shelfObj) => shelfObj.name === shelf)) {
        // Remove the shelf from the list
        const updatedShelfList = shelfList.filter(
          (shelfObj) => shelfObj.name !== shelf,
        );
        return this.repository.update({
          data: {
            shelves: {
              deleteMany: { userBookId: userBook.id },
              create: updatedShelfList.map((shelfObj) => ({
                shelf: {
                  connectOrCreate: {
                    where: { identifier: { userId, name: shelfObj.name } },
                    create: {
                      userId,
                      name: shelfObj.name,
                      slug: generateSlug(shelfObj.name),
                    },
                  },
                },
              })),
            },
          },
          where: {
            id,
          },
        });
      }
    } else {
      ('Book not found on user shelf.');
      // If the userBook does not exist, throw an error or handle accordingly
      throw new Error('Book not found on user shelf.');
    }
  }
  async addBookToShelf(id: string, userId: string, shelf: string) {
    // Check if the book is already associated with the user
    const userBook = await this.repository.findUnique({
      where: {
        id,
      },
      include: {
        shelves: {
          include: {
            shelf: true,
          },
        },
      },
    });

    // If the userBook exists, update it to include the "favorites" shelf
    const shelfList = userBook?.shelves.map((shelf) => shelf.shelf.name);
    if (userBook) {
      return this.update({
        data: { shelves: [...shelfList, shelf] }, // Assuming shelves is an array of shelf names
        where: { id },
        userId,
      });
    }
  }

  async create(bookId: string, userId: string, status?: READING_STATUS) {
    const lastUserBook = await this.repository.findFirst({
      where: { status: status || READING_STATUS.WANT_TO_READ, userId: userId },
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
        status: status || READING_STATUS.WANT_TO_READ,
      },
    };

    return this.repository.create(createUserBookArgs);
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
        user: {
          select: {
            id: true,
          },
        },
        _count: {
          select: {
            shelves: true,
          },
        },
        shelves: {
          include: {
            shelf: true,
          },
        },
        book: {
          include: {
            covers: true,
            identifiers: true,
            ratings: true,
          },
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
      throw new Error('Error updating order');
    }
    return updatedCards;
  }

  async update(args: {
    data: UserBookUpdateInput;
    where: UserBookWhereUniqueInput;
    userId: string;
    isImport?: boolean;
  }) {
    const userBookId = args.where.id;
    const userId = args.userId;

    const origin = await this.repository.findUnique({
      where: {
        id: args.where.id,
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

    // Use a transaction to ensure atomicity
    return await this.prisma.$transaction(async (prisma) => {
      // if status is updated, update order number in the new status
      if (args.data.status) {
        // Increment the 'order' field by 1 for all matched records.
        await prisma.userBook.updateMany({
          where: {
            userId: userId,
            status: args.data.status,
          },
          data: {
            order: {
              increment: 1,
            },
          },
        });

        // Set the new order for the updated book to 0.
        newOrder = 0;

        if (
          origin.status !== READING_STATUS.READING &&
          args.data.status == READING_STATUS.READING
        ) {
          // Mark the previously active read dates as inactive
          await this.prisma.readDate.updateMany({
            where: {
              userBookId,
              active: true,
            },
            data: {
              active: false,
            },
          });
          const readDate = await this.prisma.readDate.create({
            data: {
              userBook: {
                connect: {
                  id: userBookId,
                },
              },
              active: true,
            },
          });

          await this.prisma.readingProgress.create({
            data: {
              readDate: {
                connect: {
                  id: readDate.id,
                },
              },
              capacity: origin.book.pageCount,
              progress: 0,
              type: PROGRESS_TYPE.PAGES,
            },
          });
          // status changed to reading
        }
      }
      // Update the UserBook record within the transaction
      const updateUserBook = await prisma.userBook.update({
        where: {
          id: userBookId,
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
                      create: { userId, name, slug: generateSlug(name) },
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
    });
  }

  async createImportedBook(userInfo, book, imageLinks, user) {
    const { shelves, status, rating } = userInfo;
    const { userId } = user;

    const coverInput: CoverCreateInput[] = this.coverService.createCoverInput({
      small: imageLinks && imageLinks.small,
      large: imageLinks && imageLinks.large,
    });

    const identifiersInput: IdentifierCreateInput[] = [
      {
        source: SOURCE.GOODREADS,
        sourceId: book.id,
      },
      ...(book.isbn10
        ? [{ source: SOURCE.ISBN_10, sourceId: book.isbn10 }]
        : []),
      ...(book.isbn13
        ? [{ source: SOURCE.ISBN_13, sourceId: book.isbn13 }]
        : []),
    ];

    // Check if there already exists a userBook with these identifiers, in the userbook
    if (identifiersInput.length > 0) {
      const existingUserBook = await this.prisma.userBook.findFirst({
        where: {
          userId: userId,
          book: {
            identifiers: {
              some: {
                OR: identifiersInput.map(({ source, sourceId }) => ({
                  source,
                  sourceId,
                })),
              },
            },
          },
        },
      });

      if (existingUserBook) {
        // update the existing user book with new rating, status, shelves
        return existingUserBook;
      }
    }

    const newBook = await this.bookService.createBook({
      ...book,
      identifiers: identifiersInput,
      covers: coverInput,
      ratings: [
        {
          score: Number(book.rating),
          maxScore: 5,
          source: SOURCE.GOODREADS,
        },
      ],
    });

    const createUserBookArgs: Prisma.UserBookCreateArgs = {
      data: {
        book: {
          connect: {
            id: newBook.id,
          },
        },
        shelves: shelves
          ? {
              create: shelves.map((name: string) => ({
                shelf: {
                  connectOrCreate: {
                    where: { identifier: { userId, name } },
                    create: { userId, name, slug: generateSlug(name) },
                  },
                },
              })),
            }
          : undefined,
        user: {
          connect: {
            id: userId,
          },
        },
        status: status || READING_STATUS.WANT_TO_READ,
        rating: Number(rating),
      },
    };

    const userBook = await this.prisma.userBook.create(createUserBookArgs);
    // Create reading progress for currently reading books
    if (status == READING_STATUS.READING) {
      const readDate = await this.prisma.readDate.create({
        data: {
          userBook: {
            connect: {
              id: userBook.id,
            },
          },
          active: true,
        },
      });

      await this.prisma.readingProgress.create({
        data: {
          readDate: {
            connect: {
              id: readDate.id,
            },
          },
          capacity: newBook.pageCount,
          progress: 0,
          type: PROGRESS_TYPE.PAGES,
        },
      });
    }
  }
}
