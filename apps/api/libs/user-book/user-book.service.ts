import { Injectable } from '@nestjs/common';
import {
  UserBookCreateInput,
  UserBookUpdateInput,
} from '../generated-db-types';

@Injectable()
export class UserBookService {
  create(userBookCreateInput: UserBookCreateInput) {
    console.log(userBookCreateInput);
    return 'This action adds a new userBook';
  }

  findAll() {
    return `This action returns all userBook`;
  }

  findOne(id: string) {
    return `This action returns a #${id} userBook`;
  }

  update(id: string, userBookUpdateInput: UserBookUpdateInput) {
    console.log(userBookUpdateInput);
    return `This action updates a #${id} userBook`;
  }

  remove(id: string) {
    return `This action removes a #${id} userBook`;
  }
}
