import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsDateString } from 'class-validator';

@InputType()
export class ReadCreateInput {
    @Field()
    @IsString()
    userBookId: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsDateString()
    finishedDate?: string;
}
