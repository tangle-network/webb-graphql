import {Injectable} from "@nestjs/common";
import {DocumentNode} from 'graphql';
import {GraphQLErrors} from "@apollo/client/errors";
import {getSdk, Requester} from "../generated/graphql";
class ApolloRequestError extends Error {
  constructor(public readonly errors: GraphQLErrors) {
    const message = errors.map(e => e.message);
    super(message.join('/n'));

  }
}

export type ApolloRequesterOptions<V, R> =
  | Omit<QueryOptions<V>, 'variables' | 'query'>
  | Omit<MutationOptions<R, V>, 'variables' | 'mutation'>;

const validDocDefOps = ['mutation', 'query', 'subscription'];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

@Injectable()
export class ApolloService {

  public addNewClient(uri: string) {
    if (this.clients.has(uri)) {
      return false
    }
    const link  =ApolloLink.empty()
    const newClient = new ApolloClient({
      cache: undefined,
      link:new HttpLink()
    })


  }

  private clients = new Map<string, ApolloClient<any>>();


  private getSdk<C>(client: ApolloClient<C>) {
    const requester: Requester = async <R, V>(
      doc: DocumentNode,
      variables: V,
      options?: ApolloRequesterOptions<V, R>,
    ): Promise<R> => {
      // Valid document should contain *single* query or mutation unless it's has a fragment
      if (
        doc.definitions.filter(
          d =>
            d.kind === 'OperationDefinition' &&
            validDocDefOps.includes(d.operation),
        ).length !== 1
      ) {
        throw new Error(
          'DocumentNode passed to Apollo Client must contain single query or mutation',
        );
      }

      const definition = doc.definitions[0];

      // Valid document should contain *OperationDefinition*
      if (definition.kind !== 'OperationDefinition') {
        throw new Error(
          'DocumentNode passed to Apollo Client must contain single query or mutation',
        );
      }

      switch (definition.operation) {
        case 'mutation': {
          const response = await client.mutate<R, V>({
            mutation: doc,
            variables,
            ...options,
          });

          if (response.errors) {
            throw new ApolloRequestError(response.errors);
          }

          if (response.data === undefined || response.data === null) {
            throw new Error('No data presented in the GraphQL response');
          }

          return response.data;
        }
        case 'query': {
          const response = await client.query<R, V>({
            query: doc,
            variables,
            ...options,
          });

          if (response.errors) {
            throw new ApolloRequestError(response.errors);
          }

          if (response.data === undefined || response.data === null) {
            throw new Error('No data presented in the GraphQL response');
          }

          return response.data;
        }
        case 'subscription': {
          throw new Error(
            'Subscription requests through SDK interface are not supported',
          );
        }
      }
    };

    return getSdk(requester);
  }


}

export type Sdk = ReturnType<ApolloService['getSdk']>;
