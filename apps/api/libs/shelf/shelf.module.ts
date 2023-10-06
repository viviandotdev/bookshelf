import { Module } from '@nestjs/common';
import { ShelfService } from './shelf.service';
import { ShelfResolver } from './shelf.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ShelfResolver, ShelfService, JwtService],
  imports: [PrismaModule],
  exports: [ShelfService],
})
export class ShelfModule {}
