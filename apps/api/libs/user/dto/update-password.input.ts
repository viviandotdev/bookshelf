import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength, Matches } from 'class-validator';

@InputType()
export class UpdatePasswordInput {
    @IsString()
    @MinLength(4)
    @Field({ nullable: true })
    password?: string;

    @IsString()
    @MinLength(4)
    @Field({ nullable: true })
    newPassword?: string;
}
