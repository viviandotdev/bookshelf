import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import {
  Identifier,
  IdentifierCreateInput,
} from '../../src/generated-db-types';
import { IdentifierService } from './identifier.service';

@Resolver(() => Identifier)
export class IdentifierResolver {
  constructor(private readonly identifierService: IdentifierService) {}

  @Mutation(() => [Identifier])
  createIdentifiers(
    @Args('identifiers', { type: () => [IdentifierCreateInput] })
    identifiers: IdentifierCreateInput[],
  ) {
    return this.identifierService.createMany(identifiers);
  }

  @Query(() => [Identifier])
  getBookByIdentifiers(
    @Args('identifiers', { type: () => [IdentifierCreateInput] })
    identifiers: IdentifierCreateInput[],
  ) {
    return this.identifierService.findBookByIdentifiers(identifiers);
  }
}
