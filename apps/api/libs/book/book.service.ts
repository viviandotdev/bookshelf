import { Injectable } from '@nestjs/common';
import { BookCreateInput } from 'src/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { Prisma } from '@prisma/client';
import { UserBookService } from 'libs/user-book/user-book.service';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  findUnique = this.repository.findUnique;
  constructor(
    private readonly prisma: PrismaRepository,
    private readonly userBook: UserBookService,
    private readonly repository: BookRepository,
  ) {}

  async create(data: BookCreateInput, userId: string) {
    let book = await this.prisma.book.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!book) {
      const createBookArgs: Prisma.BookCreateArgs = {
        data: {
          ...data,
        },
      };
      book = await this.prisma.book.create(createBookArgs);
    }

    await this.userBook.create(book.id, userId);
    return book;
  }
}
