import { Module } from '@nestjs/common';
import { ShelfService } from './shelf.service';
import { ShelfResolver } from './shelf.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { ShelfRepository } from './shelf.repository';

@Module({
  providers: [ShelfRepository, ShelfResolver, ShelfService],
  imports: [PrismaModule],
  exports: [ShelfService],
})
export class ShelfModule {}
