# WEBB Graphql api

A nestjs backend graphql server aggregating [thegraph](https://thegraph.com/) subgraphs,Exposing a single graphql api for clients to consume

### Structure

#### Consuming subgraphs

The backend server depends on the subgraph configurations `network.json` this will inform the backend with the available networks graphs

```json
{
  "networks": [
    {
      "subgraphUri": "http://localhost:8000/subgraphs/name/ScrollAlphaVAnchor",
      "chainName": "ScrollAlpha"
    },
    {
      "subgraphUri": "http://localhost:8000/subgraphs/name/SepoliaVAnchor",
      "chainName": "Sepolia"
    },
    {
      "subgraphUri": "http://localhost:8000/subgraphs/name/FujiVAnchor",
      "chainName": "Fuji"
    }
  ]
}
```

A subgraph exposes a graphql api, this backend will consume it using `graphql-request`
Code generation is used to make it easier to deal with schemas,types and reduce the boilerplate

Graphql schema that interacts with the sub-graphs is under `api/graphql/src/subgraph/graphql/subgraph.graphql`.
changing it and then the code generation can be trigger with `yarn codegen`

### Exposing the api

The backend is exposing a graphql server as well, the schema for this server is defined at `api/graphql/src/gql/schema.graphql`. Changed it will effect the exposed server
and a regeneration for types is required `yarn gen-gql-ts`,
and a change for the logic is maybe required as well.

Find more about how to use nestjs and graphql [nestjs graphql docs](https://docs.nestjs.com/graphql/quick-start)

### Running the backend

- Make sure that the subgraph in the network.json is up
- The backend can be launched in dev mode via `yarn start:dev`
- The Graphql server can be found at `localhost:3000/graphql`

## Examples

A list of graphql quires can be found at the examples directory
