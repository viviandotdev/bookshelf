import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth.response';
import { LogInInput } from './dto/login.input';
import { RefreshResponse } from './dto/refresh.response';
import { CurrentUser } from './decorators/currentUser.decorator';
import { RefreshTokenGuard } from './guards/refresh.guard';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from './guards/jwt.guard';
import { JwtPayload, JwtPayloadWithRefreshToken } from './types';
import { User } from '../../src/generated-db-types';
import { OAuthInput } from './dto/oauth.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => User)
  signup(@Args('registerInput') registerInput: RegisterInput) {
    return this.authService.signup(registerInput);
  }

  @Mutation(() => AuthResponse)
  signin(@Args('logInInput') logInInput: LogInInput) {
    return this.authService.signin(logInInput);
  }

  @Mutation(() => Boolean)
  logout(@Args('id', { type: () => String }) id: string) {
    return this.authService.logout(id);
  }

  @Mutation(() => AuthResponse)
  oAuthLogin(@Args('oAuthInput') oAuthInput: OAuthInput) {
    return this.authService.oAuthLogin(oAuthInput);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => User, { name: 'me' })
  getMe(@CurrentUser() user: JwtPayload) {
    return this.authService.getMe(user.userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => RefreshResponse)
  refreshAuth(@CurrentUser() user: JwtPayloadWithRefreshToken) {
    return this.authService.refreshAuth(user.userId, user.refreshToken);
  }
}
