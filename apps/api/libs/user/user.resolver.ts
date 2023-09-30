import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  User,
  UserCreateInput,
  UserUpdateInput,
  BookWhereUniqueInput,
} from 'libs/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => User)
  createUser(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
  }

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  user(
    @Args('bookWhereUniqueInput') bookWhereUniqueInput: BookWhereUniqueInput,
  ) {
    return this.userService.findOne(bookWhereUniqueInput.id);
  }

  @Mutation(() => User)
  updateUser(@Args('userUpdateInput') userUpdateInput: UserUpdateInput) {
    return this.userService.update(userUpdateInput.id, userUpdateInput);
  }

  @Mutation(() => User)
  removeUser(
    @Args('bookWhereUniqueInput') bookWhereUniqueInput: BookWhereUniqueInput,
  ) {
    return this.userService.remove(bookWhereUniqueInput.id);
  }
}
