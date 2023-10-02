import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UpdateUserBookStatusInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  bookId!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
}
