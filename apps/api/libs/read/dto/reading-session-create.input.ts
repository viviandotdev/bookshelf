import { PROGRESS_TYPE } from '@bookshelf/api/generated-db-types';
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsEnum, Min, Max } from 'class-validator';

@InputType()
export class ReadingSessionCreateInput {
    @Field()
    @IsString()
    readId: string;

    @Field(() => Int)
    @IsInt()
    @Min(1)
    capacity: number;

    @Field(() => Int)
    @IsInt()
    @Min(0)
    progress: number;

    @Field(() => PROGRESS_TYPE)
    @IsEnum(PROGRESS_TYPE)
    type: PROGRESS_TYPE;
}
