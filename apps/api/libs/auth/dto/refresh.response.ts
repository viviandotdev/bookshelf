import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RefreshResponse {
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
  @Field()
  expiresIn: number;
}
