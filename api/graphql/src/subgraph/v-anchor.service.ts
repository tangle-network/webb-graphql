import {Injectable} from '@nestjs/common';
import {gql, GraphQLClient} from "graphql-request";
import {} from '../generated/graphql'
import {VAnchorQueryData} from "./types";
const vAnchorsQuery = gql`
  query  vAnchorList {
    vanchors{
      id
      chainId
      typedChainId
      contractAddress
      token{
        id
        contractAddress
      }

      volumeComposition {
        id
        token{
          id
          address

        }
        finalValueLocked
        valueLocked
        totalFees
        totalWrappingFees
      }

      numberOfDeposits
      numberOfWithdraws

      minDepositAmount
      maxDepositAmount

      averageDepositAmount

    }
  }


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
