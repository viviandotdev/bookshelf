import { Resolver, Query, Args } from '@nestjs/graphql';
import { ReadDateService } from './read-date.service';
import { ReadDate } from '@bookcue/api/generated-db-types';
import { Prisma } from '@prisma/client';

@Resolver(() => ReadDate)
export class ReadDateResolver {
  constructor(private readonly readDateService: ReadDateService) {}

  @Query(() => [ReadDate])
  async readDates(
    @Args('userBookIds', { type: () => [String] }) userBookIds: string[],
    @Args('active', { type: () => Boolean, nullable: true }) active?: boolean,
  ) {
    console.log(userBookIds);
    const where: Prisma.ReadDateWhereInput = {
      userBookId: {
        in: userBookIds,
      },
    };

    if (active !== undefined) {
      where.active = active;
    }

    const readDates = await this.readDateService.findMany({
      where,
      include: {
        readingProgress: true,
      },
    });

    return readDates;
  }
}
