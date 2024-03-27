import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CoverService } from './cover.service';
import { Cover, CoverCreateInput } from '../../src/generated-db-types';

@Resolver(() => Cover)
export class CoverResolver {
  constructor(private readonly coverService: CoverService) {}

  @Mutation(() => Cover)
  createCover(@Args('data') createCoverInput: CoverCreateInput) {
    return this.coverService.create(createCoverInput);
  }
}
