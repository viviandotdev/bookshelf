import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { WorkService } from './work.service';
import { Work, WorkCreateInput } from '@bookcue/api/generated-db-types';

@Resolver(() => Work)
export class WorkResolver {
  constructor(private readonly workService: WorkService) {}

  @Mutation(() => Work)
  createWork(@Args('data') createWorkInput: WorkCreateInput) {
    // return this.workService.createUniqueWork(createWorkInput, );
  }
}
