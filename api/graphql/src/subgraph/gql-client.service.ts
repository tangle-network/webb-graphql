import {Injectable} from "@nestjs/common";
import {getSdk} from "../generated/graphql";
import {GraphQLClient} from "graphql-request";

@Injectable()
export class GqlClientService {
  private clients: Map<string, GraphQLClient> = new Map<string, GraphQLClient>();

  private ensureClient(uri: string) {
    if (this.clients.has(uri)) {
      return this.clients.get(uri)
    }
    const newClient = new GraphQLClient(uri);
    this.clients.set(uri, newClient)
    return newClient
  }


  getSdkOfClient(uri): ReturnType<typeof getSdk> {
    const client =  this.ensureClient(uri) ;
    return getSdk()
  }


}

export type Sdk = ReturnType<GqlClientService['getSdk']>;
