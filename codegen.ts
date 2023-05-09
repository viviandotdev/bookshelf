import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'apps/api/dist/schema.gql',
  documents: 'apps/web/graphql/**/*.graphql',
  generates: {
    'apps/web/graphql/graphql.tsx': {
      // preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
}

export default config
