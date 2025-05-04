import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'prisma/prisma.module';
import { ReadResolver } from './read.resolver';
import { ReadService } from './read.service';
import { ReadRepository } from './read.repository';

@Module({
    imports: [PrismaModule, HttpModule],
    providers: [ReadResolver, ReadService, ReadRepository],
    exports: [ReadService],
})
export class ReadModule { }
