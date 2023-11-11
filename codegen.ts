import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "apps/api/src/schema.gql",
  documents: "apps/web/src/graphql/**/*.graphql",
  generates: {
    "apps/web/src/graphql/graphql.tsx": {
      // preset: 'client',
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
