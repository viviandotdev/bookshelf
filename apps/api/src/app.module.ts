import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './config/graphql.config';
import { PrismaRepository } from '../prisma/prisma.repository';
import configuration from './config/env.config';
import { ShelfModule } from 'libs/shelf/shelf.module';
import { HealthModule } from 'libs/health/health.module';
import { UserModule } from 'libs/user/user.module';
import { BookModule } from 'libs/book/book.module';
import { UserBookModule } from 'libs/user-book/user-book.module';
import { AuthModule } from 'libs/auth/auth.module';
import { IdentifierModule } from 'libs/identifier/identifier.module';
import { ReadDateModule } from 'libs/read-date/read-date.module';
import { ReadModule } from 'libs/read/read.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            useClass: GqlConfigService,
        }),
        HealthModule,
        UserModule,
        AuthModule,
        BookModule,
        UserBookModule,
        ShelfModule,
        ReadDateModule,
        ReadModule,
        IdentifierModule,
    ],
    providers: [PrismaRepository],
})
export class AppModule { }
