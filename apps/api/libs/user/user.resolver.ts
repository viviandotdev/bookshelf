import {
    Resolver,
    Mutation,
    Args,
    Query,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserWhereUniqueInput } from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards, BadRequestException } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthService } from 'libs/auth/auth.service';
import { compare, hash } from 'bcryptjs';
import { UpdateEmailInput } from './dto/update-email.input';
import { UpdatePasswordInput } from './dto/update-password.input';
import { AuthResponse } from 'libs/auth/dto/auth.response';

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
            },
        });
    }


    @UseGuards(AccessTokenGuard)
    @Mutation(() => AuthResponse)
    async updateEmail(
        @Args('data') updateEmailInput: UpdateEmailInput,
        @CurrentUser() currentUser: JwtPayload,
    ) {
        const existingUser = await this.userService.findUnique({
            where: {
                id: currentUser.userId,
            },
        });

        const verifiedToken = await this.authService.verifyToken(
            updateEmailInput.code,
        );
        if (verifiedToken.token !== updateEmailInput.code) {
            throw new BadRequestException('Invalid code');
        }

        const updatedUser = await this.userService.updateUserEmail(
            existingUser.email,
            updateEmailInput.email,
        );
        // update the session when email is updated
        return this.authService.generateJWTTokens(updatedUser);
    }

    @UseGuards(AccessTokenGuard)
    @Mutation(() => User)
    async updatePassword(
        @Args('data') data: UpdatePasswordInput,
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

        const passwordsMatch = await compare(
            data.password,
            existingUser.hashedPassword,
        );

        if (!passwordsMatch) {
            throw new BadRequestException('Current password is incorrect');
        }

        const hashedPassword = await hash(data.newPassword, 10);

        return this.userService.update({
            where: {
                id: currentUser.userId,
            },
            data: {
                hashedPassword,
            },
        });
    }



    @UseGuards(AccessTokenGuard)
    @Mutation(() => Boolean)
    async sendEmailCode(
        @CurrentUser() currentUser: JwtPayload,
        @Args('email', { type: () => String }) email: string,
    ) {
        const existingUser = await this.userService.findUnique({
            where: {
                id: currentUser.userId,
            },
        });

        if (existingUser.email === email) {
            throw new BadRequestException('This is already your current email');
        }

        this.authService.sendVerificationEmailCode(
            email,
        );
        return true;
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
