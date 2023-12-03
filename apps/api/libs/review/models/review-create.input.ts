import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

/**
 * Create review input.
 */
@InputType()
export class ReviewCreateInput {
  @IsOptional()
  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  content?: string;

  @IsOptional()
  @Min(0)
  @Max(5)
  @IsInt()
  @Field(() => Number, { nullable: true })
  rating?: number;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  spoilers: boolean;
}
