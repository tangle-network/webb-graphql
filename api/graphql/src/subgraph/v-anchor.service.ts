import {Injectable} from '@nestjs/common';
import {gql, GraphQLClient} from "graphql-request";
import {VAnchorListQuery} from '../generated/graphql'

import {VAnchorQueryData} from "./types";
const vAnchorsQuery = gql`


`

@Injectable()
export class VAnchorService {
  private client:GraphQLClient;
  constructor() {
    this.client = new GraphQLClient("http://localhost:8000/subgraphs/name/VAnchor");
  }

  public  async fetchAnchors():Promise<VAnchorQueryData>{
    return await this.client.request(vAnchorsQuery) as VAnchorQueryData;
  }
}
