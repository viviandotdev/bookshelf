import { User } from 'src/generated-db-types';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class AuthResponse {
    @IsString()
    @Field({ nullable: true })
    accessToken?: string;

    @Field({ nullable: true })
    refreshToken?: string;

    @Field({ nullable: true })
    expiresIn?: number;

    @IsNotEmpty()
    @Field(() => User)
    user: User;

    @Field({ nullable: true })
    isNewUser: boolean;
}
