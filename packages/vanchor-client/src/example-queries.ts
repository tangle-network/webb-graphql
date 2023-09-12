import { SubgraphUrl } from './config';
import {
  GetVAnchorsTVLByChainsByDateRange,
  GetVAnchorsTotalValueLockedByChains,
  GetVAnchorsByChainsLatestTVLInTimeRange,
} from './queries/tvl';
import { GetVAnchorTWLByChainAndByToken } from './queries/twl';
import {
  GetVAnchorsDepositByChains,
  GetVAnchorsDepositByChains15MinsInterval,
  GetVAnchorsDepositByChainsByDateRange,
  GetVAnchorDepositByChainAndByToken15MinsInterval,
} from './queries/deposit';
import {
  GetVAnchorsWithdrawalByChainsByDateRange,
  GetVAnchorWithdrawalByChainAndByToken15MinsInterval,
} from './queries/withdrawal';
import {
  GetVAnchorsRelayerFeeByChains,
  GetVAnchorRelayerFeeByChainAndByToken,
} from './queries/relayerFee';
import {
  GetVAnchorWrappingFeeByChainAndByToken,
  GetVAnchorsWrappingFeeByChains,
} from './queries/wrappingFee';
import { GetVAnchorTransactionsByChains } from './queries/transaction';
import { DateUtil } from './utils/date';

const epochStart = 1692057600;
const localVAnchorAddress = '0x91eB86019FD8D7c5a9E31143D422850A13F670A3';
const liveVAnchorAddress = '0x9b5404eBc174a7eE36b0d248b2735382B320EC76';

const tangleTestnetSubgraph = SubgraphUrl.vAnchorTangleTestnet;
const liveSubgraphUrls = [
  SubgraphUrl.vAnchorTangleTestnet,
  SubgraphUrl.vAnchorOrbitAthena,
  SubgraphUrl.vAnchorOrbitDemeter,
  SubgraphUrl.vAnchorOrbitHermes,
];

const tokenSymbol = 'ETH';

async function main() {
  // await getPoolOverviewTableData();
  // await getPoolWrappingTableData();
  // await getTransactions();
  await getLatestTVLByTimeRange();
}

async function getOverviewChipsData() {
  console.log(
    await GetVAnchorsTotalValueLockedByChains(
      [tangleTestnetSubgraph],
      [localVAnchorAddress]
    )
  );
  console.log(
    await GetVAnchorsDepositByChains(
      [tangleTestnetSubgraph],
      [localVAnchorAddress]
    )
  );
}

async function getOverviewChartsData() {
  console.log(
    await GetVAnchorsDepositByChains15MinsInterval(
      [tangleTestnetSubgraph],
      [localVAnchorAddress],
      DateUtil.fromEpochToDate(
        DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
      ),
      DateUtil.fromEpochToDate(DateUtil.fromDateToEpoch(new Date()))
    )
  );
  console.log(
    await GetVAnchorsTVLByChainsByDateRange(
      [tangleTestnetSubgraph],
      [localVAnchorAddress],
      epochStart,
      3
    )
  );
  console.log(
    await GetVAnchorsDepositByChainsByDateRange(
      [tangleTestnetSubgraph],
      [localVAnchorAddress],
      epochStart,
      3
    )
  );
  console.log(
    await GetVAnchorsWithdrawalByChainsByDateRange(
      [tangleTestnetSubgraph],
      [localVAnchorAddress],
      epochStart,
      3
    )
  );
}

async function getKeyMetricData() {
  console.log(
    await GetVAnchorsRelayerFeeByChains(
      [tangleTestnetSubgraph],
      [localVAnchorAddress]
    )
  );
  console.log(
    await GetVAnchorsWrappingFeeByChains(
      [tangleTestnetSubgraph],
      [localVAnchorAddress]
    )
  );
}

async function getPoolOverviewTableData() {
  console.log(
    await GetVAnchorDepositByChainAndByToken15MinsInterval(
      tangleTestnetSubgraph,
      localVAnchorAddress,
      tokenSymbol,
      DateUtil.fromEpochToDate(
        DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
      ),
      DateUtil.fromEpochToDate(DateUtil.fromDateToEpoch(new Date()))
    )
  );

  console.log(
    await GetVAnchorWithdrawalByChainAndByToken15MinsInterval(
      tangleTestnetSubgraph,
      localVAnchorAddress,
      tokenSymbol,
      DateUtil.fromEpochToDate(
        DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
      ),
      DateUtil.fromEpochToDate(DateUtil.fromDateToEpoch(new Date()))
    )
  );

  console.log(
    await GetVAnchorRelayerFeeByChainAndByToken(
      tangleTestnetSubgraph,
      localVAnchorAddress,
      tokenSymbol
    )
  );
}

async function getPoolWrappingTableData() {
  console.log(
    await GetVAnchorTWLByChainAndByToken(
      tangleTestnetSubgraph,
      localVAnchorAddress,
      tokenSymbol
    )
  );

  console.log(
    await GetVAnchorWrappingFeeByChainAndByToken(
      tangleTestnetSubgraph,
      localVAnchorAddress,
      tokenSymbol
    )
  );
}

async function getTransactions() {
  console.log(
    await GetVAnchorTransactionsByChains(
      [tangleTestnetSubgraph],
      localVAnchorAddress,
      100
    )
  );
}

async function getLatestTVLByTimeRange() {
  console.log(
    await GetVAnchorsByChainsLatestTVLInTimeRange(
      liveSubgraphUrls,
      [liveVAnchorAddress],
      1692144000,
      1694439930
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
