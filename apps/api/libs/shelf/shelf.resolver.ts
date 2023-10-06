import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShelfService } from './shelf.service';
import { Shelf, ShelfCreateInput } from '../../src/generated-db-types';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Shelf)
export class ShelfResolver {
  constructor(private readonly shelfService: ShelfService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Shelf)
  createShelf(
    @Args('data') data: ShelfCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.shelfService.createShelf(data, currentUser.userId);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => [Shelf])
  shelves(@CurrentUser() currentUser: JwtPayload) {
    return this.shelfService.findMany(currentUser.userId);
  }
}
