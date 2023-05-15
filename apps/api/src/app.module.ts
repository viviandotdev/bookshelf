import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './config/graphql.config';
import { HealthModule } from '@bookcue/api/health';
import { UserModule } from '@bookcue/api/user';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from 'libs/auth';
import configuration from './config/env.config';
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
  ],
  providers: [PrismaService],
})
export class AppModule {}
