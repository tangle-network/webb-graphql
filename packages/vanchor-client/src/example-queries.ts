import { SubgraphUrl } from './config';
import {
  GetVAnchorsTotalValueLockedByChains,
  GetVAnchorsTVLByChainsByDateRange,
} from './queries/tvl';
import { GetVAnchorsDepositByChainsByDateRange } from './queries/deposit';
import { GetVAnchorsWithdrawalByChainsByDateRange } from './queries/withdrawal';
import {
  GetVAnchorsVolumeByChains,
  GetVAnchorsVolumeByChains15MinsInterval,
} from './queries/volume';
import { DateUtil } from './utils/date';

const vAnchorAddress = '0x91eb86019fd8d7c5a9e31143d422850a13f670a3';
const subgraphUrl = SubgraphUrl.vAnchorAthenaLocal;

async function main() {
  // query for Overview Chips
  // console.log(
  //   await GetVAnchorsTotalValueLockedByChains([subgraphUrl], [vAnchorAddress])
  // );
  // console.log(await GetVAnchorsVolumeByChains([subgraphUrl], [vAnchorAddress]));

  // query for Overview Charts
  console.log(await GetVAnchorsVolumeByChains15MinsInterval(
    [subgraphUrl],
    [vAnchorAddress],
    DateUtil.fromEpochToDate(
      DateUtil.fromDateToEpoch(new Date()) - 2 * 24 * 60 * 60
    ),
    DateUtil.fromEpochToDate(
      DateUtil.fromDateToEpoch(new Date()) - 24 * 60 * 60
    )
  ));
  // await runTvlDateRangeQueries();
  // await runDepositDateRangeQueries();
  // await runWithdrawalDateRangeQueries();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

async function runTvlDateRangeQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692057600);

  console.log(
    await GetVAnchorsTVLByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      startDate,
      3
    )
  );
}

async function runDepositDateRangeQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692057600);

  // Get total value locked by a vAnchor on a chain
  console.log(
    await GetVAnchorsDepositByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      startDate,
      3
    )
  );
}

async function runWithdrawalDateRangeQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692057600);

  // Get total value locked by a vAnchor on a chain
  console.log(
    await GetVAnchorsWithdrawalByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      startDate,
      3
    )
  );
}
