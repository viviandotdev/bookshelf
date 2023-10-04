import { Module } from '@nestjs/common';
import { ShelfService } from './shelf.service';
import { ShelfResolver } from './shelf.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [ShelfResolver, ShelfService],
  imports: [PrismaModule],
})
export class ShelfModule {}
