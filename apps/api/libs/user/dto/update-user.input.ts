import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsEmail()
    @Field({ nullable: true })
    email?: string;

    @IsString()
    @Field({ nullable: true })
    username?: string;

    @IsString()
    @Field({ nullable: true })
    location?: string;

    @IsString()
    @Field({ nullable: true })
    name?: string;

    @IsString()
    @Field({ nullable: true })
    bio?: string;

    @IsString()
    @Field({ nullable: true })
    avatarImage?: string;
}
