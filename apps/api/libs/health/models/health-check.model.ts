import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HealthCheck {
  @Field()
  status: string;

  @Field()
  message: string;

  @Field()
  timestamp: string;
}
