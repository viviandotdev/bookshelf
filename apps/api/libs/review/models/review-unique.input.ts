import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

/**
 * Create review input.
 */
@InputType()
export class ReviewUniqueInput {
  @IsOptional()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bookId?: string;
}
