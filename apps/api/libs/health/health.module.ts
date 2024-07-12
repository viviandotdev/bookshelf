import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaHealthIndicator } from './prismaHealthIndicator';
import { PrismaModule } from '../../prisma/prisma.module';
import { HealthResolver } from './health.resolver';

@Module({
  imports: [PrismaModule, TerminusModule],
  providers: [PrismaHealthIndicator, HealthResolver],
})
export class HealthModule {}
