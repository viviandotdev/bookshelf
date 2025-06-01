import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginWithCodeInput {
    @IsNotEmpty()
    @IsString()
    @Field()
    code: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    email: string;
}
