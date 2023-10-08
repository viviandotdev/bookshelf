import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
