import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { BookService } from './book.service';
import {
  Book,
  BookCreateInput,
  BookWhereUniqueInput,
  CoverCreateInput,
  WorkCreateInput,
} from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { WorkService } from 'libs/work/work.service';
import { AuthorService } from 'libs/author/author.service';
import { CoverService } from 'libs/cover/cover.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly authorService: AuthorService,
    private readonly coverService: CoverService,
    private readonly workService: WorkService,
  ) {}

  @Query(() => Book, { nullable: true, name: 'getGoogleBook' })
  async getGoogleBook(
    @Args('id')
    id: string,
  ) {
    const googleBook = await this.bookService.getGoogleBook(id);
    // Search for an Identifier with the matching googleBooksId
    const identifier = await this.bookService.findByIdentifier({
      where: {
        googleBooks: googleBook.id,
      },
      include: {
        book: true, // Include related book information if needed
      },
    });

    if (!identifier) {
      // Step 1: Get the existing work and its mainEditionId
      const existingWork = await this.workService.findFirst({
        where: {
          title: googleBook.title,
          authors: {
            some: {
              name: googleBook.authors[0],
            },
          },
        },
      });
      let book;
      const authors = await this.authorService.createAuthors(
        googleBook.authors,
      );

      const coverInput: CoverCreateInput[] = this.coverService.createCoverInput(
        googleBook.imageLinks,
      );

      const covers = await this.coverService.createCovers(coverInput);

      if (!existingWork) {
        const workData: WorkCreateInput = {
          title: googleBook.title,
          authors: {
            connect: authors.map((author) => ({ id: author.id })),
          },
          description: googleBook.description,
          categories: googleBook.categories,
          averageRating: googleBook.averageRating,
          ratingsCount: googleBook.ratingsCount,
        };
        const work = await this.workService.createUniqueWork(workData, authors);
        const bookData: BookCreateInput = {
          //   id: bookIdentifier.bookId,
          title: googleBook.title,
          pageCount: googleBook.pageCount,
          authors: {
            connect: authors.map((author) => ({ id: author.id })),
          },
          publisher: googleBook.publisher,
          publishedDate: googleBook.publishedDate,
          description: googleBook.description,
          covers: {
            connect: covers.map((cover) => ({ id: cover.id })),
          },
          work: {
            connect: {
              id: work.id,
            },
          },
        };
        book = await this.bookService.create(bookData, null, {
          isbn10: googleBook.isbn,
          isbn13: googleBook.isbn13,
          googleBooks: googleBook.id,
        });

        if (!work.mainEditionId) {
          // update mainEditionId if not exixts
          await this.workService.update({
            where: {
              id: work.id,
            },
            data: {
              mainEditionId: book.id,
            },
          });
        }

        return book;

        // create the work and book and set this book as the main edition
      } else {
        const bookData: BookCreateInput = {
          title: googleBook.title,
          pageCount: googleBook.pageCount,
          authors: {
            connect: authors.map((author) => ({ id: author.id })),
          },
          publisher: googleBook.publisher,
          publishedDate: googleBook.publishedDate,
          description: googleBook.description,
          covers: {
            connect: covers.map((cover) => ({ id: cover.id })),
          },
          work: {
            connect: {
              id: existingWork.id,
            },
          },
        };

        book = await this.bookService.create(bookData, null, {
          isbn10: googleBook.isbn,
          isbn13: googleBook.isbn13,
          googleBooks: googleBook.id,
        });
      }

      return book;
    }
    return identifier.book;

    // get the google book,
    // create check if there already exist a book with the this googleBookId
    // if there is just return the book else
    // then return the create the book,
    // check if there is a matching work, same title and author if there is add it as a edition
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  createBook(
    @Args('data') data: BookCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    console.log(data);
    return this.bookService.create(data, currentUser.userId);
  }

  @Query(() => Book, { nullable: true, name: 'book' })
  book(
    @Args('where')
    where: BookWhereUniqueInput,
  ) {
    return this.bookService.findUnique({
      where: {
        id: where.id,
      },
      include: {
        work: true,
        authors: true,
        covers: true,
      },
    });
  }
}
