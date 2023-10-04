import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShelfService } from './shelf.service';
import { Shelf } from '../generated-db-types';
import { CreateShelfInput } from './dto/createShelf.input';

@Resolver(() => Shelf)
export class ShelfResolver {
  constructor(private readonly shelfService: ShelfService) {}

  @Mutation(() => Shelf)
  createShelf(@Args('createShelfInput') createShelfInput: CreateShelfInput) {
    return this.shelfService.create(createShelfInput);
  }

  @Query(() => [Shelf], { name: 'shelf' })
  findAll() {
    return this.shelfService.findAll();
  }

  @Query(() => Shelf, { name: 'shelf' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shelfService.findOne(id);
  }

  //   @Mutation(() => Shelf)
  //   updateShelf(@Args('updateShelfInput') updateShelfInput: UpdateShelfInput) {
  //     return this.shelfService.update(updateShelfInput.id, updateShelfInput);
  //   }

  //   @Mutation(() => Shelf)
  //   removeShelf(@Args('id', { type: () => Int }) id: number) {
  //     return this.shelfService.remove(id);
  //   }
}
