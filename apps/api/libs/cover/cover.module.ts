import { Module } from '@nestjs/common';
import { CoverService } from './cover.service';
import { CoverResolver } from './cover.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [CoverResolver, CoverService],
  imports: [PrismaModule],
  exports: [CoverService],
})
export class CoverModule {}
