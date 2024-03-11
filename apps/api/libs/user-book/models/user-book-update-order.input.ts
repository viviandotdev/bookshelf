import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';

@InputType() // Assuming this class represents an object type
export class BookItemInput {
  @IsInt()
  @Field()
  id: number;
  @IsString()
  @Field()
  status: string;
  @IsString()
  @Field()
  title: string;
  @IsInt()
  @Field()
  order: number;
}

/**
 * Update userBook input type.
 */
@InputType()
export class UserBookUpdateOrderInput {
  @IsOptional()
  @ValidateNested({ each: true }) // Validate each object within the array
  @Field(() => [BookItemInput], { nullable: true })
  items?: InstanceType<typeof BookItemInput>[];
}
