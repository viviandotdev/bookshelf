import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth.response';
import { LogInInput } from './dto/login.input';
import { Public } from './decorators/public.decorator';
import { RefreshResponse } from './dto/refresh.response';
import { CurrentUser } from './decorators/current-user.decorator';
import { RefreshTokenGuard } from './guards/refresh.guard';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from './guards/jwt.guard';
import { JwtPayloadWithRefreshToken } from './types';
import { User } from '../generated-db-types';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Mutation(() => AuthResponse)
  signup(@Args('registerInput') registerInput: RegisterInput) {
    return this.authService.signup(registerInput);
  }

  @Public()
  @Mutation(() => AuthResponse)
  signin(@Args('logInInput') logInInput: LogInInput) {
    return this.authService.signin(logInInput);
  }

  @Public()
  @Mutation(() => Boolean)
  logout(@Args('id', { type: () => String }) id: string) {
    return this.authService.logout(id);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => User, { name: 'me' })
  getMe(@CurrentUser() accessToken: string) {
    return this.authService.getMe(accessToken);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => RefreshResponse)
  refreshAuth(@CurrentUser('refreshToken') user: JwtPayloadWithRefreshToken) {
    return this.authService.refreshAuth(user.userId, user.refreshToken);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Query(() => String)
  hello() {
    return 'hello';
  }
}
