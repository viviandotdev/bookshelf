import {
  StringFilter,
  IntFilter,
  DateTimeFilter,
  UserRelationFilter,
  BookRelationFilter,
  UserBookShelvesListRelationFilter,
  JournalEntryListRelationFilter,
} from '@bookcue/api/generated-db-types';
import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class WhereUserBookInput {
  @IsOptional()
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @IsOptional()
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @IsOptional()
  @Field(() => StringFilter, { nullable: true })
  bookId?: InstanceType<typeof StringFilter>;
  @IsOptional()
  @Field(() => StringFilter, { nullable: true })
  status?: InstanceType<typeof StringFilter>;
  @IsOptional()
  @Field(() => IntFilter, { nullable: true })
  rating?: InstanceType<typeof IntFilter>;
  @IsOptional()
  @Field(() => DateTimeFilter, { nullable: true })
  dataAdded?: InstanceType<typeof DateTimeFilter>;
  @IsOptional()
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @IsOptional()
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
  @IsOptional()
  @Field(() => UserBookShelvesListRelationFilter, { nullable: true })
  shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
  @IsOptional()
  @Field(() => JournalEntryListRelationFilter, { nullable: true })
  journalEntry?: InstanceType<typeof JournalEntryListRelationFilter>;
}
