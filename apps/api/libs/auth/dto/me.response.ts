import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@ObjectType()
export class MeResponse {
  @IsString()
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @IsBoolean()
  @Field({ nullable: true })
  isOAuth?: boolean;
}
