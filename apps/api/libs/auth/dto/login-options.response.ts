import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOptionsResponse {
    @Field(() => Boolean)
    hasAccount: boolean;

    @Field(() => Boolean)
    passwordSignIn: boolean;
}
