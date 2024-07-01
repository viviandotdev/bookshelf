import { Module } from '@nestjs/common';
import { ReadDateService } from './read-date.service';
import { ReadDateResolver } from './read-date.resolver';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'prisma/prisma.module';
import { ReadDateRepository } from './read-date.repository';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [ReadDateResolver, ReadDateService, ReadDateRepository],
  exports: [ReadDateService],
})
export class ReadDateModule {}
