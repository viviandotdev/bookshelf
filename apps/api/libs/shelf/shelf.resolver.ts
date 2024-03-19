import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShelfService } from './shelf.service';
import {
  Shelf,
  ShelfCreateInput,
  ShelfUpdateInput,
  ShelfWhereUniqueInput,
} from '../../src/generated-db-types';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import {
  ConflictException,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';

@Resolver(() => Shelf)
export class ShelfResolver {
  constructor(private readonly service: ShelfService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Shelf)
  async createShelf(
    @Args('data') data: ShelfCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    //unique by use and shelf
    const shelf = await this.service.findUnique({
      where: {
        identifier: {
          userId: currentUser.userId,
          name: data.name,
        },
      },
    });
    if (shelf) {
      throw new ConflictException(
        `Shelf ${JSON.stringify(data.name)} already exists`,
      );
    }
    return this.service.create(data, currentUser.userId);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => [Shelf], { nullable: true })
  async shelves(@CurrentUser() currentUser: JwtPayload) {
    const faves = await this.service.findMany({
      where: {
        userId: currentUser.userId,
        OR: [{ name: 'Favorites' }, { name: 'Owned' }],
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            userBooks: true,
          },
        },
      },
    });

    const allShelves = await this.service.findMany({
      where: {
        userId: currentUser.userId,
        NOT: [{ name: 'Favorites' }, { name: 'Owned' }],
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            userBooks: true,
          },
        },
      },
    });
    return [...faves, ...allShelves];
  }

  @Mutation(() => Shelf)
  @UseGuards(AccessTokenGuard)
  async deleteShelf(@Args('where') where: ShelfWhereUniqueInput) {
    const shelf = await this.service.findUnique({ where: { id: where.id } });

    if (!shelf) {
      throw new NotFoundException(
        `Shelf ${JSON.stringify(where)} does not exist`,
      );
    }
    return this.service.delete({
      where: { id: where.id },
      include: {
        _count: {
          select: {
            userBooks: true,
          },
        },
      },
    });
  }

  @Mutation(() => Shelf)
  @UseGuards(AccessTokenGuard)
  async updateShelf(
    @Args('data') data: ShelfUpdateInput,
    @Args('where') where: ShelfWhereUniqueInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    //unique by use and shelf
    const shelf = await this.service.findUnique({
      where: {
        identifier: {
          userId: currentUser.userId,
          name: data.name,
        },
      },
    });
    if (shelf) {
      throw new ConflictException(
        `Failed to update shelf, shelf name already in use.`,
      );
    }
    return this.service.update({
      where: { id: where.id },
      data,
    });
  }
}
