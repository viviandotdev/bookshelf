import { PROGRESS_TYPE } from '@bookshelf/api/generated-db-types';
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, IsEnum, Min } from 'class-validator';

@InputType()
export class ReadingSessionUpdateInput {
    @Field(() => Int, { nullable: true })
    @IsOptional()
    @IsInt()
    @Min(1)
    capacity?: number;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    @IsInt()
    @Min(0)
    progress?: number;

    @Field(() => PROGRESS_TYPE, { nullable: true })
    @IsOptional()
    @IsEnum(PROGRESS_TYPE)
    type?: PROGRESS_TYPE;
}
