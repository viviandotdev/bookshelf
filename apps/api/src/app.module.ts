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
import { JournalEntryModule } from '../libs/journal-entry/journal-entry.module';
import { ReviewModule } from 'libs/review/review.module';
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
    ReviewModule,
    ShelfModule,
    JournalEntryModule,
  ],
  providers: [PrismaRepository],
})
export class AppModule {}
