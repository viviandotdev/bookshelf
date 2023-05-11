import { User } from '@bookcue/api/generated-db-types';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class AuthResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
  @IsNotEmpty()
  @Field(() => User)
  user: User;
}
