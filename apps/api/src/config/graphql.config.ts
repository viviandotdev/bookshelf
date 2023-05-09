import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { apiEnv } from 'src/environments/environments';

const { isProd } = apiEnv;
@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: !isProd ? join(process.cwd(), 'src/schema.gql') : false, // only auto-generate schema in dev
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      playground: !isProd,
      sortSchema: !isProd,
      introspection: !isProd,
      typePaths: isProd ? [join(__dirname, 'schema.gql')] : [], // use generated graphql schema in prod
      persistedQueries: false,
    };
  }
}
