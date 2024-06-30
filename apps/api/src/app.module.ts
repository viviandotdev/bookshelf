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
import { ReviewModule } from 'libs/review/review.module';
import { CommentModule } from 'libs/comment/comment.module';
import { ActivityModule } from '../libs/activity/activity.module';
import { IdentifierModule } from 'libs/identifier/identifier.module';

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
    CommentModule,
    ActivityModule,
    IdentifierModule,
  ],
  providers: [PrismaRepository],
})
export class AppModule {}
