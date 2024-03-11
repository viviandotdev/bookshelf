import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PrismaModule } from 'prisma/prisma.module';
@Module({
  providers: [AuthorResolver, AuthorService],
  imports: [PrismaModule],
  exports: [AuthorService],
})
export class AuthorModule {}
