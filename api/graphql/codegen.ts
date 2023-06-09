import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  documents: ['src/subgraph/graphql/**/*.graphql'],
  schema: 'http://localhost:8000/subgraphs/name/VAnchorTest',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',

        'typescript-graphql-request',
      ],
      config: {
        rawRequest: true,
        extensionsType: 'unknown',
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
