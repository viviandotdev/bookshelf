import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ResetPasswordInput {
    @IsNotEmpty()
    @IsString()
    @Field()
    token: string;
    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;
}
