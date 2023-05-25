
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  documents:["src/subgraph/graphql/**/*.graphql"],
  schema: "http://localhost:8000/subgraphs/name/VAnchor",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ['typescript', 'typescript-operations',

        'typescript-graphql-request',
        'typed-document-node'],
      config: {
        rawRequest: true,
      },

    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
