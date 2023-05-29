const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { join } = require('path');
const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: [join(process.cwd(), 'src', 'gql', '**/*.graphql')],
  path: join(process.cwd(), 'gql', 'graphql.ts'),
  outputAs: 'interface',
});
