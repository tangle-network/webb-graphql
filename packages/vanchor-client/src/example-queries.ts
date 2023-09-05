import { SubgraphUrl } from './config';
import {
  GetVAnchorsTVLByChainsByDateRange,
  GetVAnchorsTotalValueLockedByChains,
} from './queries/tvl';
import {
  GetVAnchorsDepositByChains,
  GetVAnchorsDepositByChains15MinsInterval,
  GetVAnchorsDepositByChainsByDateRange,
} from './queries/deposit';
import { GetVAnchorsWithdrawalByChainsByDateRange } from './queries/withdrawal';
import { GetVAnchorsRelayerFeeByChains } from './queries/relayerFee';
import { GetVAnchorsWrappingFeeByChains } from './queries/wrappingFee';
import { DateUtil } from './utils/date';

const epochStart = 1692057600;
const vAnchorAddress = '0x9b5404eBc174a7eE36b0d248b2735382B320EC76';
const subgraphUrl = SubgraphUrl.vAnchorTangleTestnet;

async function main() {
  await getOverviewChipsData();
  await getOverviewChartsData();
  await getKeyMetricData();
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

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
