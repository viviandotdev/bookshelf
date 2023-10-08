import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserCreateInput } from 'src/generated-db-types';
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
}
