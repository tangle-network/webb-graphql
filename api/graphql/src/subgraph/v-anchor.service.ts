import { Injectable } from '@nestjs/common';

import { VAnchorQueryData } from './types';
import { GqlClientService } from './gql-client.service';
import {
  DayDetailsQueryVariables,
  DepositTxDetailsQueryVariables,
  DepositTXesListingQueryVariables,
  VAnchorDetailsQueryVariables,
  VAnchorListQueryVariables,
  WithdrawTxDetailsQueryVariables,
  WithdrawTXesListingQueryVariables,
} from '../generated/graphql';

export type Subgraph = {
  uri: string;
  network: string;
};

@Injectable()
export class VAnchorService {
  constructor(private gqlClientService: GqlClientService) {}

  public async fetchVAnchorsOfSubGraph(
    subgraph: Subgraph,
    variables?: VAnchorListQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    return (await sdk.vAnchorList(variables)).data;
  }

  public async fetchVAnchorDetails(
    subgraph: Subgraph,
    queryVariables: VAnchorDetailsQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.vAnchorDetails(queryVariables);
    return response.data;
  }

  public async fetchDepositTransactions(
    subgraph: Subgraph,
    queryVariables?: DepositTXesListingQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.depositTXesListing(queryVariables);
    return response.data;
  }

  public async fetchWithdrawTransactions(
    subgraph: Subgraph,
    queryVariables?: WithdrawTXesListingQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.withdrawTXesListing(queryVariables);
    return response.data;
  }

  public async fetchDepositTransactionDetails(
    subgraph: Subgraph,
    queryVariables?: DepositTxDetailsQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.depositTXDetails(queryVariables);
    return response.data;
  }

  public async fetchWithdrawTransactionDetails(
    subgraph: Subgraph,
    queryVariables?: WithdrawTxDetailsQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.withdrawTXDetails(queryVariables);
    return response.data;
  }

  public async fetchDayData(
    subgraph: Subgraph,
    queryVariables: DayDetailsQueryVariables,
  ) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.dayDetails(queryVariables);
    return response.data;
  }

  public async discoverVAnchorsOfSubgraph(subgraph: Subgraph) {
    const url = subgraph.uri;
    const sdk = this.gqlClientService.getSdkOfClient(url);
    const response = await sdk.discoverVAnchors(undefined);
    return response.data;
  }
}
