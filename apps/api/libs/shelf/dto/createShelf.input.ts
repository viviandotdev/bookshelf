import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ShelfCreateInput } from '../../generated-db-types';
import { Type } from 'class-transformer';

@InputType()
export class CreateShelfInput {
  @Validator.ValidateNested()
  @Field(() => ShelfCreateInput, { nullable: true })
  @Type(() => ShelfCreateInput)
  shelf: ShelfCreateInput;

  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId: string;
}
