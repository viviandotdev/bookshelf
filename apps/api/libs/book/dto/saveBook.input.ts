import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { BookCreateInput } from '../../../src/generated-db-types';
import { Type } from 'class-transformer';

@InputType()
export class SaveBookInput {
  @Validator.ValidateNested()
  @Field(() => BookCreateInput, { nullable: true })
  @Type(() => BookCreateInput)
  book: BookCreateInput;

  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId: string;
}
