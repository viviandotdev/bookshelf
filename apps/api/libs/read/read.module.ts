import { Module } from '@nestjs/common';
import { ReadService } from './read.service';
import { ReadResolver } from './read.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { ReadRepository } from './read.repository';

@Module({
    providers: [
        ReadRepository,
        ReadResolver,
        ReadService,
    ],
    imports: [PrismaModule],
    exports: [ReadService],
})
export class ReadModule { }
