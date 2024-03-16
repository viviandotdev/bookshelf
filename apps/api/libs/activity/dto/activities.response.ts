import { AuditLog, UserBook } from '@bookcue/api/generated-db-types';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';

@ObjectType()
export class ActivitiesResponse {
  @IsOptional()
  @ValidateNested({ each: true }) // Validate each object within the array
  @Field(() => [AuditLog], { nullable: true })
  activities?: InstanceType<typeof AuditLog>[];
  @IsBoolean()
  @Field()
  hasMore: boolean;
  @IsNumber()
  @Field()
  totalActivities: number;
}
