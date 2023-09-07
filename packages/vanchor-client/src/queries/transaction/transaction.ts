import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

const sdk = getBuiltGraphSDK();

export interface Transaction {
  subgraphUrl: SubgraphUrl;
  txHash: string;
  tokenSymbol: string;
  tokenAddress: string;
  amount: bigint;
  timestamp: number;
}

export const GetVAnchorTransactionsByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  limit: number
): Promise<Array<Transaction>> => {
  const result = await sdk.GetVAnchorTransactions(
    { vAnchorAddress: vAnchorAddress.toLowerCase(), limit },
    { subgraphUrl }
  );

  if (!result.vanchorTransactionLogs?.length) {
    return [] as Array<Transaction>;
  }

  return result.vanchorTransactionLogs.map((transaction) => {
    return {
      subgraphUrl,
      txHash: transaction.id,
      tokenSymbol: transaction.tokenSymbol,
      tokenAddress: transaction.tokenAddress,
      amount: BigInt(transaction.amount),
      timestamp: +transaction.timestamp,
    };
  });
};

export const GetVAnchorTransactionsByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  limit: number
): Promise<Array<Transaction>> => {
  const promises: Array<Promise<Array<Transaction>>> = [];
  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTransactionsByChain(subgraphUrl, vAnchorAddress, limit)
    );
  }
  const transactionsAllChains = await Promise.all(promises);

  // merge the transactions from all chains
  const mergedArray = ([] as Array<Transaction>).concat(
    ...transactionsAllChains
  );

  // sort all transactions by timestamp
  const sortedArray = mergedArray.sort(
    (transaction1, transaction2) =>
      transaction2.timestamp - transaction1.timestamp
  );

  if (limit && sortedArray.length > limit) {
    return sortedArray.slice(0, limit);
  }

  return sortedArray;
};
