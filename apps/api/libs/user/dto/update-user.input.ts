import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @MinLength(4)
  @Field({ nullable: true })
  password?: string;

  @IsString()
  @MinLength(4)
  @Field({ nullable: true })
  newPassword?: string;

  @IsString()
  @IsEmail()
  @Field({ nullable: true })
  email?: string;

  @IsString()
  @Field({ nullable: true })
  username?: string;

  // Add the missing properties below
  @IsString()
  @Field({ nullable: true })
  location?: string;

  @IsString()
  @Field({ nullable: true })
  name?: string;

  @IsString()
  @Field({ nullable: true })
  bio?: string;

  @IsDateString()
  @Field({ nullable: true })
  dob?: string;
}
