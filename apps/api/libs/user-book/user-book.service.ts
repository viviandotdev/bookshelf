import { Injectable } from '@nestjs/common';
import {
  UserBookCreateInput,
  UserBookUpdateInput,
} from '../generated-db-types';
import { PrismaService } from 'prisma/prisma.service';
import { UniqueUserBookInput } from './dto/uniqueUserBook.input';
@Injectable()
export class UserBookService {
  constructor(private readonly prisma: PrismaService) {}

  create(userBookCreateInput: UserBookCreateInput) {
    console.log(userBookCreateInput);
    return 'This action adds a new userBook';
  }

  findAll() {
    return `This action returns all userBook`;
  }

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

  update(id: string, userBookUpdateInput: UserBookUpdateInput) {
    console.log(userBookUpdateInput);
    return `This action updates a #${id} userBook`;
  }

  remove(id: string) {
    return `This action removes a #${id} userBook`;
  }
}
