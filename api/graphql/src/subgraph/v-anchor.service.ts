import {Injectable} from '@nestjs/common';
import {gql, GraphQLClient} from "graphql-request";

const vAnchorsQuery = gql`
  query VAnchorListing {
    vanchors{
      id
      volumeComposition{
        id
        token {
          id
        }
        valueLocked
      }
    }

  }


`

@Injectable()
export class VAnchorService {
  private client:GraphQLClient;
  constructor() {
    this.client = new GraphQLClient("http://localhost:8000/subgraphs/name/VAnchor");
  }

  public  async fetchAnchors(){
    return await this.client.request(vAnchorsQuery);
  }
}
