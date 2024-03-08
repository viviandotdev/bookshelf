import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkResolver } from './work.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [WorkResolver, WorkService],
  imports: [PrismaModule],
  exports: [WorkService],
})
export class WorkModule {}
