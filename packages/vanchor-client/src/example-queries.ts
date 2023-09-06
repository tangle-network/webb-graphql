import { SubgraphUrl } from './config';
import {
  GetVAnchorsTVLByChainsByDateRange,
  GetVAnchorsTotalValueLockedByChains,
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
import { DateUtil } from './utils/date';

const epochStart = 1692057600;
const vAnchorAddress = '0x91eB86019FD8D7c5a9E31143D422850A13F670A3';
const subgraphUrl = SubgraphUrl.vAnchorAthenaLocal;
const subgraphUrl1 = SubgraphUrl.vAnchorDemeterLocal;
const tokenSymbol = 'ETH';

async function main() {
  await getPoolOverviewTableData();
  await getPoolWrappingTableData();
}

async function getOverviewChipsData() {
  console.log(
    await GetVAnchorsTotalValueLockedByChains([subgraphUrl], [vAnchorAddress])
  );
  console.log(
    await GetVAnchorsDepositByChains([subgraphUrl], [vAnchorAddress])
  );
}

async function getOverviewChartsData() {
  console.log(
    await GetVAnchorsDepositByChains15MinsInterval(
      [subgraphUrl],
      [vAnchorAddress],
      DateUtil.fromEpochToDate(
        DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
      ),
      DateUtil.fromEpochToDate(DateUtil.fromDateToEpoch(new Date()))
    )
  );
  console.log(
    await GetVAnchorsTVLByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      epochStart,
      3
    )
  );
  console.log(
    await GetVAnchorsDepositByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      epochStart,
      3
    )
  );
  console.log(
    await GetVAnchorsWithdrawalByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      epochStart,
      3
    )
  );
}

async function getKeyMetricData() {
  console.log(
    await GetVAnchorsRelayerFeeByChains([subgraphUrl], [vAnchorAddress])
  );
  console.log(
    await GetVAnchorsWrappingFeeByChains([subgraphUrl], [vAnchorAddress])
  );
}

async function getPoolOverviewTableData() {
  console.log(
    await GetVAnchorDepositByChainAndByToken15MinsInterval(
      subgraphUrl,
      vAnchorAddress,
      tokenSymbol,
      DateUtil.fromEpochToDate(
        DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
      ),
      DateUtil.fromEpochToDate(DateUtil.fromDateToEpoch(new Date()))
    )
  );

  console.log(
    await GetVAnchorWithdrawalByChainAndByToken15MinsInterval(
      subgraphUrl1,
      vAnchorAddress,
      tokenSymbol,
      DateUtil.fromEpochToDate(
        DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
      ),
      DateUtil.fromEpochToDate(DateUtil.fromDateToEpoch(new Date()))
    )
  );

  console.log(
    await GetVAnchorRelayerFeeByChainAndByToken(
      subgraphUrl,
      vAnchorAddress,
      tokenSymbol
    )
  );
}

async function getPoolWrappingTableData() {
  console.log(
    await GetVAnchorTWLByChainAndByToken(
      subgraphUrl,
      vAnchorAddress,
      tokenSymbol
    )
  );

  console.log(
    await GetVAnchorWrappingFeeByChainAndByToken(
      subgraphUrl,
      vAnchorAddress,
      tokenSymbol
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
