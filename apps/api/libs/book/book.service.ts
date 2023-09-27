import { Injectable } from '@nestjs/common';
import {
  FindUniqueBookArgs,
  UpdateOneBookArgs,
  DeleteOneBookArgs,
  BookCreateInput,
} from 'libs/generated-db-types';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}
  async create(bookCreateInput: BookCreateInput) {
    const book = await this.prisma.book.create({
      data: {
        title: bookCreateInput.title,
        isbn: bookCreateInput.isbn,
      },
    });
    return book;
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(findUniqueBookArgs: FindUniqueBookArgs) {
    return this.prisma.book.findUnique(findUniqueBookArgs);
  }

  update(updateOneBookArgs: UpdateOneBookArgs) {
    return this.prisma.book.update(updateOneBookArgs);
  }

  remove(deleteOneBookArgs: DeleteOneBookArgs) {
    return this.prisma.book.delete(deleteOneBookArgs);
  }
}
