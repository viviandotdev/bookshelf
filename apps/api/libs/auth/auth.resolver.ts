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
} from '@nestjs/common';
import { AccessTokenGuard } from './guards/jwt.guard';
import { JwtPayload, JwtPayloadWithRefreshToken } from './types';
import { User } from '../../src/generated-db-types';
import { OAuthInput } from './dto/oauth.input';
import { hash, compare } from 'bcryptjs';
import { UserService } from 'libs/user/user.service';
import { ResetPasswordInput } from './dto/reset-password.input';
import { MeResponse } from './dto/me.response';
import { ShelfService } from 'libs/shelf/shelf.service';
import { generateSlug } from 'libs/user-book/utils';
const DEFAULT_AVATAR =
  'https://webgradients.com/public/webgradients_png/029%20Everlasting%20Sky.png';
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly shelfService: ShelfService,
  ) {}

  @Mutation(() => User)
  async register(@Args('registerInput') registerInput: RegisterInput) {
    const hashedPassword = await hash(registerInput.password, 10);

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

    // await this.authService.sendVerificationEmail(user.email, user.email);

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

    // if (!user.emailVerified) {
    //   await this.authService.sendVerificationEmail(user.email, user.email);
    //   throw new ForbiddenException('Email not verified');
    // }
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
  logout(@Args('id', { type: () => String }) id: string) {
    return this.authService.logout(id);
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

  //   Only allow this route, auth
  @Mutation(() => AuthResponse)
  async verifyToken(@Args('token', { type: () => String }) token: string) {
    const verifiedToken = await this.authService.verifyToken(token);
    // update email verfied field on user
    const updatedUser = await this.userService.updateUserEmail(
      verifiedToken.email,
      verifiedToken.email,
    );

    if (updatedUser) {
      return this.authService.generateJWTTokens(updatedUser);
    }
  }

  @Mutation(() => AuthResponse)
  async oAuth(@Args('oAuthInput') oAuthInput: OAuthInput) {
    const existingUser = await this.userService.findUnique({
      where: {
        id: oAuthInput.providerAccountId,
      },
    });

    let user;
    if (!existingUser) {
      user = await this.userService.createUser({
        id: oAuthInput.providerAccountId,
        username: oAuthInput.username,
        email: oAuthInput.email,
        emailVerified: new Date(),
        avatarImage: oAuthInput.image,
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
  @Query(() => MeResponse, { name: 'me' })
  async me(@CurrentUser() currentUser: JwtPayload) {
    // Sometimes apollo just gets from the cache
    const user = await this.userService.findUnique({
      where: {
        id: currentUser.userId,
      },
    });

    const existingAccount = await this.authService.findAccountById({
      where: {
        userId: currentUser.userId,
      },
    });

    if (!user) {
      throw new ForbiddenException('User not found');
    }
    return {
      ...user,
      isOAuth: !!existingAccount,
    };
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
    return this.authService.generateJWTTokens(user);
  }
}
