import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/jwt.strategy';
import { RefreshTokenStrategy } from './strategies/refresh.strategy';
import { PrismaRepository } from 'prisma/prisma.repository';
import { UserService } from 'libs/user/user.service';
import { UserRepository } from 'libs/user/user.repository';
import { ShelfService } from 'libs/shelf/shelf.service';
import { ShelfRepository } from 'libs/shelf/shelf.repository';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    PrismaRepository,
    JwtService,
    UserService,
    ShelfService,
    ShelfRepository,
    UserRepository,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
