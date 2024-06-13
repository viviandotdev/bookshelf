import { Book, BookWhereUniqueInput } from '@bookcue/api/generated-db-types';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => Book, { nullable: true, name: 'book' })
  async book(@Args('where') where: BookWhereUniqueInput) {
    const book = await this.bookService.findUnique({
      where: {
        slug: where.slug,
        id: where.id,
      },
      include: {
        identifiers: true,
        covers: true,
        ratings: true,
      },
    });
    return book;
  }
}
