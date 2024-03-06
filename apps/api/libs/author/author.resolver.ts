import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author, AuthorCreateInput } from '../../src/generated-db-types';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => Author)
  createAuthor(@Args('data') createAuthorInput: AuthorCreateInput) {
    return this.authorService.create(createAuthorInput);
  }
}
