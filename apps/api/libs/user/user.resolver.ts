import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs,
  User,
} from 'libs/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => User)
  createUser(@Args() createOneUserArgs: CreateOneUserArgs) {
    return this.userService.create(createOneUserArgs);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  user(@Args() findUniqueUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
    return this.userService.update(updateOneUserArgs);
  }

  @Mutation(() => User)
  removeUser(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
    return this.userService.remove(deleteOneUserArgs);
  }
}
