import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserResolver, UserService, UserRepository],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
