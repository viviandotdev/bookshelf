import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LogInInput {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;
}
