import { Injectable } from '@nestjs/common';
import { BookCreateInput } from 'src/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserBookService } from 'libs/user-book/user-book.service';

@Injectable()
export class BookService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userBook: UserBookService,
  ) {}

  async createBook(data: BookCreateInput, userId: string) {
    const createBookArgs: Prisma.BookCreateArgs = {
      data: {
        ...data,
      },
    };
    const book = await this.prisma.book.create(createBookArgs);
    await this.userBook.create(book.id, userId);
    return book;
  }
}
