import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateEmailInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  code: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  token: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  email: string;
}
