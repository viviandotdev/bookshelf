import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth.response';
import { LogInInput } from './dto/login.input';
import { RefreshResponse } from './dto/refresh.response';
import { CurrentUser } from './decorators/currentUser.decorator';
import { RefreshTokenGuard } from './guards/refresh.guard';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from './guards/jwt.guard';
import { JwtPayload, JwtPayloadWithRefreshToken } from './types';
import { User } from '../../src/generated-db-types';
import { OAuthInput } from './dto/oauth.input';
import { hash } from 'bcryptjs';
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => User)
  async register(@Args('registerInput') registerInput: RegisterInput) {
    const hashedPassword = await hash(registerInput.password, 10);

    const user = await this.authService.createUser({
      email: registerInput.email,
      username: registerInput.username,
      hashedPassword,
    });

    await this.authService.sendVerificationEmail(user.email);

    return user;
  }

  @Mutation(() => AuthResponse)
  signin(@Args('logInInput') logInInput: LogInInput) {
    return this.authService.signin(logInInput);
  }

  @Mutation(() => Boolean)
  logout(@Args('id', { type: () => String }) id: string) {
    return this.authService.logout(id);
  }

  @Mutation(() => Boolean)
  forgotPassword(@Args('email', { type: () => String }) email: string) {
    return this.authService.forgotPassword(email);
  }

  @Mutation(() => Boolean)
  verifyToken(@Args('token', { type: () => String }) token: string) {
    return this.authService.verifyToken(token);
  }

  @Mutation(() => AuthResponse)
  async oAuthLogin(@Args('oAuthInput') oAuthInput: OAuthInput) {
    const existingUser = await this.authService.findUnique({
      where: {
        id: oAuthInput.providerAccountId,
      },
    });

    let user;
    if (!existingUser) {
      user = await this.authService.createUser({
        id: oAuthInput.providerAccountId,
        username: oAuthInput.username,
        email: oAuthInput.email,
        emailVerified: new Date(),
        image: oAuthInput.image,
      });

      await this.authService.createAccount({
        access_token: oAuthInput.access_token,
        token_type: oAuthInput.token_type, // Include other properties from the DTO as needed
        scope: oAuthInput.scope,
        provider: oAuthInput.provider,
        type: oAuthInput.type,
        providerAccountId: oAuthInput.providerAccountId,
        user: {
          connect: {
            id: user.id,
          },
        },
      });
    }
    return this.authService.generateJWTTokens(user ? user : existingUser);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => User, { name: 'me' })
  getMe(@CurrentUser() currentUser: JwtPayload) {
    const user = this.authService.findUnique({
      where: {
        id: currentUser.userId,
      },
    });

    if (!user) {
      throw new ForbiddenException('User not found');
    }
    return user;
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => RefreshResponse)
  refreshAuth(@CurrentUser() user: JwtPayloadWithRefreshToken) {
    return this.authService.refreshAuth(user.userId, user.refreshToken);
  }
}
