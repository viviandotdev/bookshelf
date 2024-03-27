import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  BookCreateInput,
  BookWhereUniqueInput,
  CoverCreateInput,
  UserBook,
  UserBookOrderByWithRelationInput,
  UserBookWhereInput,
} from '../../src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { UserBookUpdateInput } from './models/user-book-update.input';
import { getUserBookInfo, parseLineWithQuotes, processCSVLine } from './utils';
import { BookService } from 'libs/book/book.service';
import { UserBookUpdateOrderInput } from './models/user-book-update-order.input';
import { UserBooksResponse } from './models/user-books.response';
import { PrismaRepository } from 'prisma/prisma.repository';
import { BookData } from './types';
import { CoverService } from 'libs/cover/cover.service';

@Resolver(() => UserBook)
export class UserBookResolver {
  constructor(
    private readonly userBookService: UserBookService,
    private readonly bookService: BookService,
    private readonly coverService: CoverService,
    private readonly prisma: PrismaRepository,
  ) {}

  containsNonNumeric(str: string) {
    return /\D/.test(str);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook, { name: 'addBookToShelf' })
  async addBookToShelf(
    @Args('bookId', { type: () => Int }) bookId: number,
    @Args('shelf', { type: () => String }) shelf: string,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.addBookToShelf(bookId, user.userId, shelf);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook, { name: 'removeBookFromShelf' })
  async removeUserBookFromShelf(
    @Args('bookId', { type: () => Int }) bookId: number,
    @Args('shelf', { type: () => String }) shelf: string,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.removeBookFromShelf(bookId, user.userId, shelf);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook, { nullable: true, name: 'createUserBook' })
  async createUserBook(
    @Args('id')
    id: string,
    @CurrentUser() user: JwtPayload,
  ) {
    let bookId;
    if (this.containsNonNumeric(id)) {
      const identifier = await this.bookService.findByIdentifier({
        where: {
          googleBooks: id,
        },
        include: {
          book: true, // Include related book information if needed
        },
      });
      bookId = identifier.bookId;
    } else {
      bookId = id;
    }
    return this.userBookService.create(parseInt(bookId), user.userId);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => UserBook, { nullable: true, name: 'userBook' })
  userBook(
    @Args('where')
    where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.userBookService.findUnique({
      userId: user.userId,
      bookId: where.id,
    });
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
  updateUserBook(
    @Args('data')
    data: UserBookUpdateInput,
    @Args('where') where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = this.userBookService.findUnique({
      userId: user.userId,
      bookId: where.id,
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where)} does not exist`,
      );
    }
    //  move recently updated to the top
    return this.userBookService.update({
      data,
      where: {
        userId: user.userId,
        bookId: where.id,
      },
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
    const lines = content.split('\n');
    const mappings = parseLineWithQuotes(lines[0]);
    const failedBooks = [];
    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i];
      const objectFromCSV = processCSVLine(line, mappings);
      const titleAuthor = `${objectFromCSV['Title']} ${objectFromCSV['Author']}`;
      // const book = await this.bookService.findBookByISBN(isbn);
      const book = await this.bookService.findBookByTitleAndAuthor(titleAuthor);
      // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas

      if (book) {
        const { shelves, status, rating } = getUserBookInfo(objectFromCSV);

        const coverInput: CoverCreateInput[] =
          this.coverService.createCoverInput(book.imageLinks);

        const covers = await this.coverService.createCovers(coverInput);

        const bookData: BookCreateInput = {
          title: book.title,
          pageCount: book.pageCount,
          authors: book.authors,
          publisher: book.publisher,
          publishedDate: book.publishedDate,
          description: book.description,
          covers: {
            connect: covers.map((cover) => ({ id: cover.id })),
          },
          categories: book.categories,
          averageRating:
            Number(objectFromCSV['Average Rating']) || book.averageRating,
          ratingsCount: book.ratingsCount,
        };

        try {
          const currentBook = await this.bookService.create(
            bookData,
            user.userId,
            {
              isbn10: book.isbn,
              isbn13: book.isbn13,
              googleBooks: book.id,
              goodreads: objectFromCSV['Book Id'],
            },
          );

          const userBookData: UserBookUpdateInput = {
            status,
            rating: Number(rating),
            shelves,
          };
          await this.userBookService.update({
            data: userBookData,
            where: {
              userId: user.userId,
              bookId: currentBook.id,
            },
            isImport: true,
          });
        } catch (error) {
          failedBooks.push(titleAuthor);
          console.log(error);
        }
      } else {
        failedBooks.push(titleAuthor);
        console.log('Book not found');
      }
    }
    // this.userBookService.importBook(objectFromCSV, isbn, user.userId);
    console.log(failedBooks);
    return true;
    // email user once import is done
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => UserBook)
  removeUserBook(
    @Args('where')
    where: BookWhereUniqueInput,
    @CurrentUser() user: JwtPayload,
  ) {
    const userBook = this.userBookService.findUnique({
      userId: user.userId,
      bookId: where.id,
    });
    if (!userBook) {
      throw new NotFoundException(
        `User book ${JSON.stringify(where)} does not exist`,
      );
    }
    return this.userBookService.remove({
      userId: user.userId,
      bookId: where.id,
    });
  }
}
