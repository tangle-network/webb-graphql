import { SubgraphUrl } from './config';
import {
  GetVAnchorTotalValueLockedByChain,
  GetVAnchorTotalValueLockedByChainAndByToken,
  GetVAnchorsTotalValueLockedByChain,
  GetVAnchorsTotalValueLockedByChains,
} from './queries/TotalValueLocked';
import {
  GetVAnchorTotalValueLockedByChainHistory,
  GetVAnchorTotalValueLockedByChainAndByTokenHistory,
  GetVAnchorsTotalValueLockedByChainHistory,
  GetVAnchorsTotalValueLockedByChainsHistory,
} from './queries/TotalValueLockedHistory';
import { DateUtil } from './utils/date';

async function main() {
  // Get total value locked by a vAnchor on a chain
  await runTvlQueries();
  // // Total Value Locked History Queries.
  await runTvlHistoryQueries();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

async function runTvlQueries() {
  console.table(
    await GetVAnchorTotalValueLockedByChain(
      SubgraphUrl.vAnchorAthenaLocal,
      '0xDa68464c391Da8ff60b40273F2Ef0a9971694F99'
    )
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.table(
    await GetVAnchorTotalValueLockedByChainAndByToken(
      SubgraphUrl.vAnchorAthenaLocal,
      '0xDa68464c391Da8ff60b40273F2Ef0a9971694F99',
      'webbWETH'
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.table(
    await GetVAnchorsTotalValueLockedByChain(SubgraphUrl.vAnchorAthenaLocal, [
      '0xDa68464c391Da8ff60b40273F2Ef0a9971694F99',
    ])
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.table(
    await GetVAnchorsTotalValueLockedByChains(Object.values(SubgraphUrl), [
      '0xDa68464c391Da8ff60b40273F2Ef0a9971694F99',
    ])
  );
}

async function runTvlHistoryQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1689260400);
  const endDate: Date = DateUtil.fromEpochToDate(1689260400 + 60 * 60 * 24);

  // Get total value locked by a vAnchor on a chain
  console.table(
    await GetVAnchorTotalValueLockedByChainHistory(
      SubgraphUrl.vAnchorAthenaLocal,
      '0xDa68464c391Da8ff60b40273F2Ef0a9971694F99',
      startDate,
      endDate
    )
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.table(
    await GetVAnchorTotalValueLockedByChainAndByTokenHistory(
      SubgraphUrl.vAnchorAthenaLocal,
      '0xDa68464c391Da8ff60b40273F2Ef0a9971694F99',
      'webbWETH',
      startDate,
      endDate
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.table(
    await GetVAnchorsTotalValueLockedByChainHistory(
      SubgraphUrl.vAnchorAthenaLocal,
      ['0xDa68464c391Da8ff60b40273F2Ef0a9971694F99'],
      startDate,
      endDate
    )
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.table(
    await GetVAnchorsTotalValueLockedByChainsHistory(
      Object.values(SubgraphUrl),
      ['0xDa68464c391Da8ff60b40273F2Ef0a9971694F99'],
      startDate,
      endDate
    )
  );
}
