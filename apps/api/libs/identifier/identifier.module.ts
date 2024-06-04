import { Module } from '@nestjs/common';
import { IdentifierService } from './identifier.service';
import { IdentifierResolver } from './identifier.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [IdentifierResolver, IdentifierService],
  imports: [PrismaModule],
  exports: [IdentifierService],
})
export class IdentifierModule {}
