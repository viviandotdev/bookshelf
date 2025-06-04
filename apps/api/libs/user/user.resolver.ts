import {
    Resolver,
    Mutation,
    Args,
    Query,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserWhereUniqueInput } from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthService } from 'libs/auth/auth.service';
import { compare, hash } from 'bcryptjs';
import { UpdateEmailInput } from './dto/update-email.input';
@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => User)
    async updateUser(
        @Args('data') data: UpdateUserInput,
        @CurrentUser() currentUser: JwtPayload,
    ) {
        const existingUser = await this.userService.findUnique({
            where: {
                id: currentUser.userId,
            },
        });

        if (!existingUser) {
            throw new NotFoundException(`User does not exist`);
        }
        // if (data.email && data.email !== existingUser.email) {
        //     await this.authService.sendVerificationEmailCode(
        //         data.email,
        //     );

        //     return existingUser;
        // }

        // if (data.newPassword && existingUser.hashedPassword) {
        //     const passwordsMatch = await compare(
        //         data.password,
        //         existingUser.hashedPassword,
        //     );

        //     if (!passwordsMatch) {
        //         throw new Error('Password does not match');
        //     }

        //     const hashedPassword = await hash(data.newPassword, 10);
        //     data.newPassword = hashedPassword;
        // }

        return this.userService.update({
            where: {
                id: currentUser.userId,
            },
            data: {
                name: data.name,
                username: data.username,
                location: data.location,
                avatarImage: data.avatarImage,
                bio: data.bio,
                // hashedPassword: data.newPassword,
            },
        });
    }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => User)
    async updateEmail(
        @Args('data') updateEmailInput: UpdateEmailInput,
        @CurrentUser() currentUser: JwtPayload,
    ) {
        const verifiedToken = await this.authService.verifyToken(
            updateEmailInput.code,
        );
        if (verifiedToken.token === updateEmailInput.code) {
            const updatedUser = await this.userService.updateUserEmail(
                currentUser.email,
                updateEmailInput.email,
            );
            return updatedUser;
        }
    }

    @Query(() => User, { nullable: true })
    async user(@Args('where') where: UserWhereUniqueInput) {
        const prismaWhere = {
            ...(where.id && { id: where.id }),
            ...(where.email && { email: where.email }),
            ...(where.username && { username: where.username }),
        };

        return this.userService.findUnique({
            where: prismaWhere,
        });
    }
}
