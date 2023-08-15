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
} from './queries/tvl';
import { DateUtil } from './utils/date';

async function main() {
  // Get total value locked by a vAnchor on a chain
  await runTvlQueries();
  // Total Value Locked Queries of 15 mins interval
  await runTvl15MinsIntervalQueries();
  // Day Interval
  await runTvlDayIntervalQueries();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

async function runTvlQueries() {
  console.log(
    await GetVAnchorTotalValueLockedByChain(
      SubgraphUrl.vAnchorOrbitAthena,
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973'
    )
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.log(
    await GetVAnchorTotalValueLockedByChainAndByToken(
      SubgraphUrl.vAnchorOrbitAthena,
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973',
      'webbtTNT'
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.log(
    await GetVAnchorsTotalValueLockedByChain(SubgraphUrl.vAnchorOrbitAthena, [
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973',
    ])
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsTotalValueLockedByChains(
      [SubgraphUrl.vAnchorOrbitAthena],
      ['0x7aa556dd0af8bed063444e14a6a9af46c9266973']
    )
  );
}

async function runTvl15MinsIntervalQueries() {
  const startDate: Date = DateUtil.fromEpochToDate(1691661600);
  const endDate: Date = DateUtil.fromEpochToDate(1691661600 + 60 * 60 * 24);

  // Get total value locked by a vAnchor on a chain
  console.log(
    await GetVAnchorTotalValueLockedByChain15MinsInterval(
      SubgraphUrl.vAnchorOrbitAthena,
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973',
      startDate,
      endDate
    )
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.log(
    await GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval(
      SubgraphUrl.vAnchorOrbitAthena,
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973',
      'webbtTNT',
      startDate,
      endDate
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.log(
    await GetVAnchorsTotalValueLockedByChain15MinsInterval(
      SubgraphUrl.vAnchorOrbitAthena,
      ['0x7aa556dd0af8bed063444e14a6a9af46c9266973'],
      startDate,
      endDate
    )
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsTotalValueLockedByChains15MinsInterval(
      [SubgraphUrl.vAnchorOrbitAthena],
      ['0x7aa556dd0af8bed063444e14a6a9af46c9266973'],
      startDate,
      endDate
    )
  );
}

async function runTvlDayIntervalQueries() {
  const date = DateUtil.fromEpochToDate(1691625600);
  // Get total value locked by a vAnchor on a chain
  console.log(
    await GetVAnchorTotalValueLockedByChainDayInterval(
      SubgraphUrl.vAnchorOrbitAthena,
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973',
      date
    )
  );

  // Get total value locked by a vAnchor on a chain and by a token
  console.log(
    await GetVAnchorTotalValueLockedByChainAndByTokenDayInterval(
      SubgraphUrl.vAnchorOrbitAthena,
      '0x7aa556dd0af8bed063444e14a6a9af46c9266973',
      'webbtTNT',
      date
    )
  );

  // Get total value locked by a multiple vAnchors on a chain
  console.log(
    await GetVAnchorsTotalValueLockedByChainDayInterval(
      SubgraphUrl.vAnchorOrbitAthena,
      ['0x7aa556dd0af8bed063444e14a6a9af46c9266973'],
      date
    )
  );

  // Get total value locked by a multiple vAnchors on a multiple chains
  console.log(
    await GetVAnchorsTotalValueLockedByChainsDayInterval(
      [SubgraphUrl.vAnchorOrbitAthena],
      ['0x7aa556dd0af8bed063444e14a6a9af46c9266973'],
      date
    )
  );
}
