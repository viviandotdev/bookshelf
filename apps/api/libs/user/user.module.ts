import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserRepository } from './user.repository';
import { AuthService } from 'libs/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    UserResolver,
    UserService,
    UserRepository,
    AuthService,
    JwtService,
  ],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
