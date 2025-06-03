import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth.response';
import { LogInInput } from './dto/login.input';
import { RefreshResponse } from './dto/refresh.response';
import { CurrentUser } from './decorators/currentUser.decorator';
import { RefreshTokenGuard } from './guards/refresh.guard';
import {
    ForbiddenException,
    NotFoundException,
    UseGuards,
    ConflictException,
} from '@nestjs/common';
import { JwtPayloadWithRefreshToken } from './types';
import { User } from '../../src/generated-db-types';
import { hash, compare } from 'bcryptjs';
import { UserService } from 'libs/user/user.service';
import { ResetPasswordInput } from './dto/reset-password.input';
import { ShelfService } from 'libs/shelf/shelf.service';
import { generateSlug } from 'libs/user-book/utils';
import { JwtService } from '@nestjs/jwt';
const DEFAULT_AVATAR =
    'https://webgradients.com/public/webgradients_png/029%20Everlasting%20Sky.png';
@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly shelfService: ShelfService,
        private readonly jwtService: JwtService,
    ) { }

    @Mutation(() => User)
    async register(@Args('registerInput') registerInput: RegisterInput) {
        const hashedPassword = await hash(registerInput.password, 10);

        const existingEmail = await this.userService.findUnique({
            where: {
                email: registerInput.email,
            },
        });

        if (existingEmail) {
            throw new ConflictException('Email already exists');
        }
        const existingUser = await this.userService.findUnique({
            where: {
                username: registerInput.username,
            },
        });

        if (existingUser) {
            throw new ConflictException('Username already exists');
        }

        const user = await this.userService.createUser({
            email: registerInput.email,
            username: registerInput.username,
            avatarImage: DEFAULT_AVATAR,
            hashedPassword,
            emailVerified: new Date(),
        });

        // Create default shelves
        this.shelfService.create(
            { name: 'Favorites', slug: generateSlug('Favorites') },
            user.id,
        );
        this.shelfService.create(
            { name: 'Owned', slug: generateSlug('Owned') },
            user.id,
        );

        return user;
    }

    @Mutation(() => AuthResponse)
    async login(@Args('logInInput') logInInput: LogInInput) {
        const user = await this.userService.findUnique({
            where: {
                email: logInInput.email,
            },
        });

        if (!user || !user.email) {
            throw new NotFoundException('User not found');
        }
        const doPasswordsMatch = await compare(
            logInInput.password,
            user.hashedPassword,
        );

        if (!doPasswordsMatch) {
            throw new ForbiddenException('Invalid credentials');
        }

        return this.authService.generateJWTTokens(user);
    }

    @Mutation(() => Boolean)
    async forgotPassword(@Args('email', { type: () => String }) email: string) {
        const user = await this.userService.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            throw new ForbiddenException('Invalid Email');
        }

        this.authService.sendPasswordResetEmail(user.email);
        return true;
    }

    @Mutation(() => Boolean)
    async resetPassword(
        @Args('resetPasswordInput') resetPasswordInput: ResetPasswordInput,
    ) {
        return this.authService.resetPassword(
            resetPasswordInput.token,
            resetPasswordInput.password,
        );
    }


    @UseGuards(RefreshTokenGuard)
    @Mutation(() => RefreshResponse)
    async refreshAuth(@CurrentUser() currentUser: JwtPayloadWithRefreshToken) {
        const user = await this.userService.findUnique({
            where: {
                id: currentUser.userId,
            },
        });

        if (!user) {
            throw new ForbiddenException('Invalid credentials');
        }

        const doRefreshTokensMatch = await compare(
            currentUser.refreshToken,
            user.hashedRefreshToken,
        );

        if (!doRefreshTokensMatch) {
            throw new ForbiddenException('Invalid credentials');
        }

        // Decode and verify refresh token expiration
        const payload = this.jwtService.decode(currentUser.refreshToken) as { exp: number };
        if (!payload?.exp || payload.exp * 1000 < Date.now()) {
            throw new ForbiddenException('Refresh token has expired');
        }

        return this.authService.generateJWTTokens(user);
    }
    @Mutation(() => Boolean)
    async logout(@Args('id', { type: () => String }) id: string) {
        const user = await this.userService.findUnique({
            where: {
                id: id,
            },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        await this.userService.update({
            where: {
                id: id,
                hashedRefreshToken: { not: null },
            },
            data: { hashedRefreshToken: null },
        });
        return true;
    }
}
