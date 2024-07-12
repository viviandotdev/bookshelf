import { Module } from '@nestjs/common';
import { ShelfService } from './shelf.service';
import { ShelfResolver } from './shelf.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { ShelfRepository } from './shelf.repository';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [ShelfRepository, ShelfResolver, ShelfService, ConfigService],
  imports: [PrismaModule],
  exports: [ShelfService],
})
export class ShelfModule {}
