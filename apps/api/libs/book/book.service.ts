import { Injectable } from '@nestjs/common';
import { BookCreateInput, BookUpdateInput } from 'libs/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async saveBook(userId: string, bookCreateInput: BookCreateInput) {
    console.log(bookCreateInput);
    let book = await this.prisma.book.findUnique({
      where: {
        id: bookCreateInput.id,
      },
    });

    if (!book) {
      book = await this.create(bookCreateInput);
    }

    await this.prisma.userBook.create({
      data: {
        userId,
        bookId: bookCreateInput.id,
        status: 'Want to Read',
      },
    });
    return book;
  }

  async create(bookCreateInput: BookCreateInput) {
    const book = await this.prisma.book.create({
      data: {
        ...bookCreateInput,
      },
    });
    return book;
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} book`;
  }

  update(id: string, bookUpdateInput: BookUpdateInput) {
    console.log(bookUpdateInput);
    return `This action updates a #${id} book`;
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}
