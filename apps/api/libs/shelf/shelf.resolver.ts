import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShelfService } from './shelf.service';
import { Shelf } from '../generated-db-types';
import { CreateShelfInput } from './dto/createShelf.input';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';

@Resolver(() => Shelf)
export class ShelfResolver {
  constructor(private readonly shelfService: ShelfService) {}

  @Mutation(() => Shelf)
  createShelf(@Args('createShelfInput') createShelfInput: CreateShelfInput) {
    return this.shelfService.create(createShelfInput);
  }

  //   @Query(() => [Shelf], { name: 'shelves' })
  //   shelves(@Args('userId', { type: () => String }) userId: string) {
  //     return this.shelfService.findAll(userId);
  //   }

  @Query(() => Shelf, { name: 'shelf' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shelfService.findOne(id);
  }
}
