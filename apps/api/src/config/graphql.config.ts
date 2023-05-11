import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';
@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: !this.isProd()
        ? join(process.cwd(), 'src/schema.gql')
        : false, // only auto-generate schema in dev
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      playground: !this.isProd(),
      sortSchema: !this.isProd(),
      introspection: !this.isProd(),
      typePaths: this.isProd() ? [join(__dirname, 'schema.gql')] : [], // use generated graphql schema in prod
      persistedQueries: false,
    };
  }
  isProd(): boolean {
    return this.configService.get<boolean>('isProd');
  }
}
