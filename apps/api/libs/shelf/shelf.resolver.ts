import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShelfService } from './shelf.service';
import {
    Book,
    IdentifierWhereInput,
    Shelf,
    ShelfCreateInput,
    ShelfUpdateInput,
    ShelfWhereUniqueInput,
    UserBookShelves,
    UserBookWhereUniqueInput,
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
    constructor(private readonly service: ShelfService) { }

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
        const shelves = await this.service.findMany({
            where: {
                userId: currentUser.userId,
                NOT: [{ name: 'Favorites' }, { name: 'Owned' }],
            },
            select: {
                id: true,
                name: true,
                slug: true,
                userBooks: {
                    take: 3, // Limit to 3 books
                    select: {
                        userBook: {
                            select: {
                                id: true,
                                user: {
                                    select: {
                                        id: true,
                                    },
                                },
                                book: {
                                    select: {
                                        id: true,
                                        covers: true,
                                    },
                                },
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        userBooks: true,
                    },
                },
            },
        });
        return shelves;
    }
    @Query(() => Shelf, { nullable: true })
    async booksByShelf(
        @Args('slug') slug: string,
        @Args('username') username: string,
    ) {
        const shelf = await this.service.findUnique({
            where: {
                slug: slug,
                user: {
                    username,
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                _count: {
                    select: {
                        userBooks: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
                userBooks: {
                    select: {
                        userBook: {
                            select: {
                                book: {
                                    select: {
                                        id: true,
                                        slug: true,
                                        title: true,
                                        authors: true,
                                        covers: true,
                                        ratings: true,
                                        identifiers: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        if (!shelf) {
            throw new NotFoundException(`Shelf with slug ${slug} not found`);
        }
        //  shelf.userBooks.map((userBook) => userBook.userBook.book);
        return shelf;
    }

    @Mutation(() => Shelf)
    @UseGuards(AccessTokenGuard)
    async deleteShelf(@Args('where') where: ShelfWhereUniqueInput) {
        const shelf = await this.service.findUnique({ where: { slug: where.slug } });

        if (!shelf) {
            throw new NotFoundException(
                `Shelf ${JSON.stringify(where)} does not exist`,
            );
        }
        return this.service.delete({
            where: { slug: where.slug },
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
        console.log(where.slug)
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
            where: { slug: where.slug },
            data,
        });
    }
    @Query(() => [UserBookShelves], { nullable: true })
    @UseGuards(AccessTokenGuard)
    async getMyBookShelves(
        @Args('where', { nullable: true })
        where: UserBookWhereUniqueInput,
    ) {
        // Fetch collections that contain the book
        const shelves = await this.service.userBookShelvesFindMany({
            where: {
                userBookId: where.id,
            },
            select: {
                userBook: {
                    select: {
                        id: true,
                    },
                },
                shelf: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
        });

        // Filter owned and favorites
        const filteredShelves = shelves.filter((shelf) => {
            return shelf.shelf.name !== 'Owned' && shelf.shelf.name !== 'Favorites';
        });

        return filteredShelves;
    }
}
