import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserBookService } from './user-book.service';
import {
  BookCreateInput,
  BookWhereUniqueInput,
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

@Resolver(() => UserBook)
export class UserBookResolver {
  constructor(
    private readonly userBookService: UserBookService,
    private readonly bookService: BookService,
  ) {}
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
  @Query(() => [UserBook], { nullable: true })
  userBooks(
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
    const mappings = parseLineWithQuotes(lines[0]); // Extract mappings/headers
    const failedBooks = [];
    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i];
      const objectFromCSV = processCSVLine(line, mappings);
      // Get isbn
      let isbn =
        objectFromCSV['ISBN'] && objectFromCSV['ISBN'].length > 0
          ? objectFromCSV['ISBN']
          : null;
      if (!isbn) {
        isbn =
          objectFromCSV['ISBN13'] && objectFromCSV['ISBN13'].length > 0
            ? objectFromCSV['ISBN13']
            : null;
      }

      const titleAuthor = `${objectFromCSV['Title']} ${objectFromCSV['Author']}`;
      // const book = await this.bookService.findBookByISBN(isbn);
      const book = await this.bookService.findBookByTitleAndAuthor(titleAuthor);
      // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas
      // Check if the number of requests exceeds the limit (10 requests per second)
      console.log(book);
      if (book) {
        const { shelves, status, rating } = getUserBookInfo(objectFromCSV);
        const bookData: BookCreateInput = {
          id: book.id,
          title: book.title,
          pageCount: book.pageCount,
          author: book.author,
          publisher: book.publisher,
          coverImage: book.coverImage,
        };

        try {
          await this.bookService.create(bookData, user.userId);
          const userBookData: UserBookUpdateInput = {
            status,
            rating: Number(rating),
            shelves,
          };
          await this.userBookService.update({
            data: userBookData,
            where: {
              userId: user.userId,
              bookId: book.id,
            },
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
