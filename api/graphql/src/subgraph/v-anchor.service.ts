import {Injectable} from '@nestjs/common';
import {gql} from "graphql-request";

import {VAnchorQueryData} from "./types";
import {GqlClientService} from "./gql-client.service";

const vAnchorsQuery = gql`


`


export type Subgraph = {
  uri:string
}
@Injectable()
export class VAnchorService {
  constructor(private gqlClientService:GqlClientService) {
  }

  public  async fetchAnchorOfSubGraph(subgraph:Subgraph):Promise<VAnchorQueryData>{
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    sdk
    return await this.client.request(vAnchorsQuery) as VAnchorQueryData;
  }
}
