import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsDateString } from 'class-validator';

@InputType()
export class ReadUpdateInput {
    @Field({ nullable: true })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsDateString()
    finishedDate?: string;
}
