import { SubgraphUrl } from './config';
import {
  GetVAnchorTotalValueLockedByChain,
  GetVAnchorTotalValueLockedByChainAndByToken,
  GetVAnchorsTotalValueLockedByChain,
  GetVAnchorsTotalValueLockedByChains,
  GetVAnchorTotalValueLockedByChain15MinsInterval,
  GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval,
  GetVAnchorsTotalValueLockedByChain15MinsInterval,
  GetVAnchorsTotalValueLockedByChains15MinsInterval,
  GetVAnchorTotalValueLockedByChainDayInterval,
  GetVAnchorTotalValueLockedByChainAndByTokenDayInterval,
  GetVAnchorsTotalValueLockedByChainDayInterval,
  GetVAnchorsTotalValueLockedByChainsDayInterval,
  GetVAnchorsTVLByChainByDateRange,
  GetVAnchorsTVLByChainsByDateRange,
} from './queries/tvl';
import {
  GetVAnchorDepositByChainDayInterval,
  GetVAnchorDepositByChainAndByTokenDayInterval,
  GetVAnchorsDepositByChainDayInterval,
  GetVAnchorsDepositByChainsDayInterval,
  GetVAnchorsDepositByChainByDateRange,
} from './queries/deposit';
import {
  GetVAnchorsVolumeByChainByDateRange,
  GetVAnchorsVolumeByChainsByDateRange,
} from './queries/volume';
import { DateUtil } from './utils/date';

const vAnchorAddress = '0x91eb86019fd8d7c5a9e31143d422850a13f670a3';
const subgraphUrl = SubgraphUrl.vAnchorAthenaLocal;

async function main() {
  // // Get total value locked by a vAnchor on a chain
  // await runTvlQueries();
  // // TVL Day Interval
  // await runTvlDayIntervalQueries();
  // Deposit Day Interval
  // await runDepositDayIntervalQueries();

  await runTvl15MinsIntervalQueries();
  // await runDepositDateRangeQueries();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

async function runTvlQueries() {
  console.log(
    await GetVAnchorTotalValueLockedByChain(subgraphUrl, vAnchorAddress)
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.log(
    await GetVAnchorTotalValueLockedByChainAndByToken(
      subgraphUrl,
      vAnchorAddress,
      'webbtTNT'
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.log(
    await GetVAnchorsTotalValueLockedByChain(subgraphUrl, [vAnchorAddress])
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsTotalValueLockedByChains([subgraphUrl], [vAnchorAddress])
  );
}

async function runTvl15MinsIntervalQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692066601);
  const endDate: Date = DateUtil.fromEpochToDate(1692066601 + 60 * 60 * 24);

  // Get total value locked by a vAnchor on a chain
  // console.log(
  //   await GetVAnchorTotalValueLockedByChain15MinsInterval(
  //     subgraphUrl,
  //     vAnchorAddress,
  //     startDate,
  //     endDate
  //   )
  // );

  // // Get total value locked by a vAnchor on a chain and by a token
  // console.log(
  //   await GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval(
  //     subgraphUrl,
  //     vAnchorAddress,
  //     'webbtTNT',
  //     startDate,
  //     endDate
  //   )
  // );

  // // Get total value locked by a multiple vAnchors on a chain
  // console.log(
  //   await GetVAnchorsTotalValueLockedByChain15MinsInterval(
  //     subgraphUrl,
  //     [vAnchorAddress],
  //     startDate,
  //     endDate
  //   )
  // );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsTotalValueLockedByChains15MinsInterval(
      [subgraphUrl],
      [vAnchorAddress],
      startDate,
      endDate
    )
  );
}

async function runTvlDayIntervalQueries() {
  const date = DateUtil.fromEpochToDate(1692057600);
  // Get total value locked by a vAnchor on a chain
  console.log(
    await GetVAnchorTotalValueLockedByChainDayInterval(
      subgraphUrl,
      vAnchorAddress,
      date
    )
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.log(
    await GetVAnchorTotalValueLockedByChainAndByTokenDayInterval(
      subgraphUrl,
      vAnchorAddress,
      'webbtTNT',
      date
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.log(
    await GetVAnchorsTotalValueLockedByChainDayInterval(
      subgraphUrl,
      [vAnchorAddress],
      date
    )
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsTotalValueLockedByChainsDayInterval(
      [subgraphUrl],
      [vAnchorAddress],
      date
    )
  );
}

async function runTvlDateRangeQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692057600);

  console.log(
    await GetVAnchorsTVLByChainByDateRange(
      subgraphUrl,
      [vAnchorAddress],
      startDate,
      1
    )
  );

  console.log(
    await GetVAnchorsTVLByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      startDate,
      1
    )
  );
}

async function runVolumeDateRangeQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692057600);

  console.log(
    await GetVAnchorsVolumeByChainByDateRange(
      subgraphUrl,
      [vAnchorAddress],
      startDate,
      1
    )
  );

  console.log(
    await GetVAnchorsVolumeByChainsByDateRange(
      [subgraphUrl],
      [vAnchorAddress],
      startDate,
      1
    )
  );
}

async function runDepositDayIntervalQueries() {
  const date = DateUtil.fromEpochToDate(1692057600);
  // Get deposit by a vAnchor on a chain
  console.log(
    await GetVAnchorDepositByChainDayInterval(subgraphUrl, vAnchorAddress, date)
  );

  // Get deposit by a vAnchor on a chain and by a token
  console.log(
    await GetVAnchorDepositByChainAndByTokenDayInterval(
      subgraphUrl,
      vAnchorAddress,
      'ETH',
      date
    )
  );

  // Get deposit by a multiple vAnchors on a chain
  console.log(
    await GetVAnchorsDepositByChainDayInterval(
      subgraphUrl,
      [vAnchorAddress],
      date
    )
  );

  // Get deposit by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsDepositByChainsDayInterval(
      [subgraphUrl],
      [vAnchorAddress],
      date
    )
  );
}

async function runDepositDateRangeQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1692057600);

  // Get total value locked by a vAnchor on a chain
  console.log(
    await GetVAnchorsDepositByChainByDateRange(
      subgraphUrl,
      [vAnchorAddress],
      startDate,
      1
    )
  );
}
