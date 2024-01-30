import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class OAuthInput {
  // create user input
  @IsString()
  @Field()
  username: string;

  @IsString()
  IsEmail;
  @Field()
  email: string;

  @IsString()
  @Field()
  image: string;

  // Account inputs
  @IsString()
  @Field()
  access_token: string;

  @Field()
  token_type: string;

  @IsString()
  @Field()
  scope: string;
  @IsString()
  @Field()
  provider: string;

  @IsString()
  @Field()
  type: string;

  @IsString()
  @Field()
  providerAccountId: string;
}
