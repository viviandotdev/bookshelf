import { Injectable } from '@nestjs/common';
import {
  UserBookCreateInput,
  UserBookUniqueUserBookCompoundUniqueInput,
} from '../generated-db-types';
import { PrismaService } from 'prisma/prisma.service';
import { UniqueUserBookInput } from './dto/uniqueUserBook.input';
import { UpdateUserBookStatusInput } from './dto/updateUserBookStatus.input';
@Injectable()
export class UserBookService {
  constructor(private readonly prisma: PrismaService) {}

  create(userBookCreateInput: UserBookCreateInput) {
    console.log(userBookCreateInput);
    return 'This action adds a new userBook';
  }

  //   async findAll(userId: string) {
  //     const userBooks = await this.prisma.userBook.findMany({
  //       where: {
  //         userId,
  //       },
  //     });
  //     return userBooks;
  //   }

  async findOne(uniqueUserBookInput: UniqueUserBookInput) {
    let uniqueInput;

    if (uniqueUserBookInput.id) {
      uniqueInput = {
        id: uniqueUserBookInput.id,
      };
    } else {
      uniqueInput = {
        uniqueUserBook: {
          userId: uniqueUserBookInput.userId,
          bookId: uniqueUserBookInput.bookId,
        },
      };
    }

    const userBook = await this.prisma.userBook.findUnique({
      where: {
        ...uniqueInput,
      },
    });
    return userBook;
  }

  async update(updateUserBookStatusInput: UpdateUserBookStatusInput) {
    const updateUserBook = await this.prisma.userBook.update({
      where: {
        uniqueUserBook: {
          userId: updateUserBookStatusInput.userId,
          bookId: updateUserBookStatusInput.bookId,
        },
      },
      data: {
        status: updateUserBookStatusInput.status,
      },
    });
    return updateUserBook;
  }

  async remove(
    userBookUniqueUserBookCompoundUniqueInput: UserBookUniqueUserBookCompoundUniqueInput,
  ) {
    await this.prisma.userBook.delete({
      where: {
        uniqueUserBook: {
          ...userBookUniqueUserBookCompoundUniqueInput,
        },
      },
    });
    return true;
  }
}
