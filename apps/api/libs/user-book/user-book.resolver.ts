import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  BookWhereUniqueInput,
  IdentifierWhereInput,
  READING_STATUS,
  User,
  UserBook,
  UserBookOrderByWithRelationInput,
  UserBookWhereInput,
  UserBookWhereUniqueInput,
} from '../../src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { UserBookUpdateInput } from './models/user-book-update.input';
import {
  buildBook,
  generateSlug,
  getShelves,
  getUserBookInfo,
  parseLineWithQuotes,
  processCSVLine,
} from './utils';
import { UserBookUpdateOrderInput } from './models/user-book-update-order.input';
import { UserBooksResponse } from './models/user-books.response';
import { PrismaRepository } from 'prisma/prisma.repository';
import { render } from '@react-email/components';
import ImportSummaryEmail from '../../email/import-result';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';
import { IdentifierService } from 'libs/identifier/identifier.service';
import { GoodreadsBookData } from './types';
import { getGoodreadsCover } from 'libs/book/api/book-cover.api';
import { BookCountsResponse } from './models/book-counts.response';
import { BookService } from 'libs/book/book.service';
import { Prisma } from '@prisma/client';
import { BookDataInput } from 'libs/book/dto/book-data.input';
@Resolver(() => UserBook)
export class UserBookResolver {
  private readonly resend = new Resend(
    this.configService.get<string>('resend.api'),
  );
  private readonly domain = this.configService.get<string>('web.url');

  constructor(
    private readonly userBookService: UserBookService,
    private readonly bookService: BookService,
    private readonly prisma: PrismaRepository,
    private configService: ConfigService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook, { name: 'addBookToShelf' })
  async addBookToShelf(
    @Args('where') where: UserBookWhereUniqueInput,
    @Args('shelf', { type: () => String }) shelf: string,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.addBookToShelf(where.id, user.userId, shelf);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean, { name: 'removeBookFromShelf' })
  async removeUserBookFromShelf(
    @Args('where') where: UserBookWhereUniqueInput,
    @Args('shelf', { type: () => String }) shelf: string,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = await this.userBookService.removeBookFromShelf(
      where.id,
      user.userId,
      shelf,
    );
    console.log(userBook);
    return true;
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  async createUserBook(
    @Args('data')
    data: BookDataInput,
    @CurrentUser() user: JwtPayload,
  ) {
    // Create the book
    const newBook = await this.userBookService.createBook(data);

    const createUserBookArgs: Prisma.UserBookCreateArgs = {
      data: {
        book: {
          connect: {
            id: newBook.id,
          },
        },
        user: {
          connect: {
            id: user.userId,
          },
        },
        status: READING_STATUS.WANT_TO_READ,
      },
      include: {
        book: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    };
    return await this.prisma.userBook.create(createUserBookArgs);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => UserBook, { nullable: true, name: 'userBook' })
  async userBook(
    @Args('where')
    where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = await this.userBookService.findUnique({
      where: {
        identifier: {
          userId: user.userId,
          bookId: where.id,
        },
      },
    });

    return userBook;
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => UserBooksResponse)
  getUserBooks(
    @Args('where', { nullable: true })
    where: UserBookWhereInput,
    @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
    @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
    @Args('orderBy', { nullable: true })
    orderBy: UserBookOrderByWithRelationInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.findMany({
      where,
      userId: user.userId,
      skip: offset,
      take: limit,
      orderBy: orderBy,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => Int)
  countUserBooks(
    @Args('where', { nullable: true })
    where: UserBookWhereInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.count({
      where,
      userId: user.userId,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  async updateUserBook(
    @Args('data')
    data: UserBookUpdateInput,
    @Args('where') where: UserBookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    console.log(data);
    const userBook = await this.userBookService.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where.id)} does not exist`,
      );
    }
    //  move recently updated to the top
    return this.userBookService.update({
      data,
      where: {
        id: where.id,
      },
      userId: user.userId,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => [UserBook])
  updateUserBookOrder(
    @Args('data')
    data: UserBookUpdateOrderInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const { items } = data;
    return this.userBookService.updateOrder(items, user.userId);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  async importUserBooks(
    @Args('content')
    content: string,
    @CurrentUser() user: JwtPayload,
  ) {
    const lines = content.split('\n'); // -1 for empty last line, -1 for the top row
    const mappings = parseLineWithQuotes(lines[0]);
    const failedBooks = [];
    const totalBooks = lines.length - 2;
    async function limitConcurrency(tasks, concurrencyLimit) {
      const results = [];
      let currentIndex = 0;

      async function nextBatch() {
        const batchTasks = tasks.slice(
          currentIndex,
          currentIndex + concurrencyLimit,
        );
        currentIndex += concurrencyLimit;
        await Promise.all(batchTasks.map((task) => task()));
        results.push(...(await Promise.all(batchTasks)));
      }

      while (currentIndex < tasks.length) {
        await nextBatch();
      }

      return results;
    }
    const allShelves = new Set();
    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i];
      const goodreadsBook = processCSVLine(line, mappings);
      const shelves = getShelves(goodreadsBook);
      shelves.forEach((shelf) => allShelves.add(shelf));
      console.log('Create user shelves');
    }

    // Prepare data for Prisma's createMany
    const shelvesData = Array.from(allShelves).map((shelf: string) => ({
      userId: user.userId,
      name: shelf,
      slug: generateSlug(shelf),
    }));

    // Use Prisma's createMany to insert the shelves
    await this.prisma.shelf.createMany({
      data: shelvesData,
      skipDuplicates: true, // This option skips inserting duplicates if any
    });

    // Example usage
    const importTasks = lines.slice(1, -1).map((line) => async () => {
      const goodreadsBook = processCSVLine(line, mappings);
      const book: GoodreadsBookData = buildBook(goodreadsBook);
      const imageLinks = await getGoodreadsCover(goodreadsBook['Book Id']);
      // on the client get all the covers,  then send list of covers to the server to add in one go
      const userInfo = getUserBookInfo(goodreadsBook);
      await this.userBookService.createImportedBook(
        userInfo,
        book,
        imageLinks,
        user,
      );
      console.log('Imported book', goodreadsBook['Title']);
    });

    const startTime = performance.now(); // Start measuring time
    await limitConcurrency(importTasks, 30);
    const endTime = performance.now(); // End measuring time
    const duration = endTime - startTime; // Calculate the duration in milliseconds

    console.log(`Import process took ${duration} milliseconds`);

    // if successful send email
    await this.resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: user.email,
      subject: 'Confirm your email',
      html: render(
        ImportSummaryEmail({
          totalBooks: totalBooks.toString(),
          successBooks: (totalBooks - failedBooks.length).toString(),
          failedBooks: failedBooks.length.toString(), // Replace with the actual number of failed imports
          summaryLink: 'https://example.com/import-summary', // Replace with the actual link to the import summary
          username: user.username, // Replace with the actual username
          importId: 'import_123456', // Replace with the actual import ID
        }),
      ),
    });

    return true;
  }
  @UseGuards(AccessTokenGuard)
  @Mutation(() => Boolean)
  async removeUserBook(
    @Args('where') where: UserBookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = await this.userBookService.findUnique({
      where: {
        id: where.id,
      },
    });

    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where)} does not exist`,
      );
    }

    const { userId, bookId } = userBook;

    if (userId !== user.userId) {
      throw new NotFoundException(
        `Unauthorized to delete user book ${JSON.stringify(where)}`,
      );
    }

    // Step 1: Delete dependent records in the AuditLog table, remove when we remove auditlogs
    await this.prisma.auditLog.deleteMany({
      where: { bookId },
    });

    await this.bookService.delete({
      where: {
        id: bookId,
      },
    });
    return true;
  }

  @Query(() => BookCountsResponse)
  async bookCountsByUserId(
    @Args('userId', { type: () => String }) userId: string,
  ) {
    const wantsToReadCount = await this.userBookService.count({
      where: {
        status: READING_STATUS.WANT_TO_READ,
      },
      userId: userId,
    });
    const readingCount = await this.userBookService.count({
      where: {
        status: READING_STATUS.READING,
      },
      userId: userId,
    });

    const finishedCount = await this.userBookService.count({
      where: {
        status: READING_STATUS.FINISHED,
      },
      userId: userId,
    });
    const upNextCount = await this.userBookService.count({
      where: {
        status: READING_STATUS.UP_NEXT,
      },
      userId: userId,
    });
    return {
      wantsToReadCount,
      readingCount,
      finishedCount,
      upNextCount,
    };
  }
}
