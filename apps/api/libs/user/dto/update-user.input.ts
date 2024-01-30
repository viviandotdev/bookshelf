import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @Field({ nullable: true })
  password?: string;

  @IsString()
  @Field({ nullable: true })
  newPassword?: string;

  @IsString()
  @IsEmail()
  @Field({ nullable: true })
  email?: string;

  @IsString()
  @Field({ nullable: true })
  username?: string;
}
