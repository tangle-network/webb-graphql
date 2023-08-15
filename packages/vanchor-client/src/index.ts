import {
  GetVAnchorTotalValueLockedByChain,
  GetVAnchorTotalValueLockedByChains,
  GetVAnchorsTotalValueLockedByChain,
  GetVAnchorsTotalValueLockedByChains,
  GetVAnchorTotalValueLockedByChainAndByToken,
  GetVAnchorTotalValueLockedByChainsAndByToken,
  GetVAnchorTotalValueLockedByChain15MinsInterval,
  GetVAnchorTotalValueLockedByChains15MinsInterval,
  GetVAnchorsTotalValueLockedByChain15MinsInterval,
  GetVAnchorsTotalValueLockedByChains15MinsInterval,
  GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval,
  GetVAnchorTotalValueLockedByChainsAndByToken15MinsInterval,
  GetVAnchorTotalValueLockedByChainDayInterval,
  GetVAnchorTotalValueLockedByChainsDayInterval,
  GetVAnchorsTotalValueLockedByChainDayInterval,
  GetVAnchorsTotalValueLockedByChainsDayInterval,
  GetVAnchorTotalValueLockedByChainAndByTokenDayInterval,
  GetVAnchorTotalValueLockedByChainsAndByTokenDayInterval,
} from './queries/tvl';
import {
  GetVAnchorDepositByChain,
  GetVAnchorDepositByChainAndByToken,
  GetVAnchorsDepositByChain,
  GetVAnchorsDepositByChains,
} from './queries/Deposit';
import {
  GetVAnchorDepositByChainHistory,
  GetVAnchorDepositByChainAndByTokenHistory,
  GetVAnchorsDepositByChainHistory,
  GetVAnchorsDepositByChainsHistory,
} from './queries/DepositHistory';
import {
  GetVAnchorWithdrawalByChain,
  GetVAnchorWithdrawalByChainAndByToken,
  GetVAnchorsWithdrawalByChain,
  GetVAnchorsWithdrawalByChains,
} from './queries/Withdrawal';
import {
  GetVAnchorWithdrawalByChainHistory,
  GetVAnchorWithdrawalByChainAndByTokenHistory,
  GetVAnchorsWithdrawalByChainHistory,
  GetVAnchorsWithdrawalByChainsHistory,
} from './queries/WithdrawalHistory';
import {
  GetVAnchorTotalRelayerFeeByChain,
  GetVAnchorTotalRelayerFeeByChainAndByToken,
  GetVAnchorsTotalRelayerFeeByChain,
  GetVAnchorsTotalRelayerFeeByChains,
} from './queries/RelayerFee';
import {
  GetVAnchorRelayerFeeByChainHistory,
  GetVAnchorRelayerFeeByChainAndByTokenHistory,
  GetVAnchorsRelayerFeeByChainHistory,
  GetVAnchorsRelayerFeeByChainsHistory,
} from './queries/RelayerFeeHistory';
import {
  GetVAnchorTotalWrappingFeeByChain,
  GetVAnchorTotalWrappingFeeByChainAndByToken,
  GetVAnchorsTotalWrappingFeeByChain,
  GetVAnchorsTotalWrappingFeeByChains,
} from './queries/WrappingFee';
import {
  GetVAnchorWrappingFeeByChainHistory,
  GetVAnchorWrappingFeeByChainAndByTokenHistory,
  GetVAnchorsWrappingFeeByChainHistory,
  GetVAnchorsWrappingFeeByChainsHistory,
} from './queries/WrappingFeeHistory';
import { SubgraphUrl } from './config';

const result = {
  SubgraphUrl,
  RelayerFee: {
    GetVAnchorTotalRelayerFeeByChain,
    GetVAnchorTotalRelayerFeeByChainAndByToken,
    GetVAnchorsTotalRelayerFeeByChain,
    GetVAnchorsTotalRelayerFeeByChains,
  },
  RelayerFeeHistory: {
    GetVAnchorRelayerFeeByChainHistory,
    GetVAnchorRelayerFeeByChainAndByTokenHistory,
    GetVAnchorsRelayerFeeByChainHistory,
    GetVAnchorsRelayerFeeByChainsHistory,
  },
  WrappingFee: {
    GetVAnchorTotalWrappingFeeByChain,
    GetVAnchorTotalWrappingFeeByChainAndByToken,
    GetVAnchorsTotalWrappingFeeByChain,
    GetVAnchorsTotalWrappingFeeByChains,
  },
  WrappingFeeHistory: {
    GetVAnchorWrappingFeeByChainHistory,
    GetVAnchorWrappingFeeByChainAndByTokenHistory,
    GetVAnchorsWrappingFeeByChainHistory,
    GetVAnchorsWrappingFeeByChainsHistory,
  },
  Deposit: {
    GetVAnchorDepositByChain,
    GetVAnchorDepositByChainAndByToken,
    GetVAnchorsDepositByChain,
    GetVAnchorsDepositByChains,
  },
  DepositHistory: {
    GetVAnchorDepositByChainHistory,
    GetVAnchorDepositByChainAndByTokenHistory,
    GetVAnchorsDepositByChainHistory,
    GetVAnchorsDepositByChainsHistory,
  },
  Withdrawal: {
    GetVAnchorWithdrawalByChain,
    GetVAnchorWithdrawalByChainAndByToken,
    GetVAnchorsWithdrawalByChain,
    GetVAnchorsWithdrawalByChains,
  },
  WithdrawalHistory: {
    GetVAnchorWithdrawalByChainHistory,
    GetVAnchorWithdrawalByChainAndByTokenHistory,
    GetVAnchorsWithdrawalByChainHistory,
    GetVAnchorsWithdrawalByChainsHistory,
  },
  TotalValueLocked: {
    GetVAnchorTotalValueLockedByChain,
    GetVAnchorTotalValueLockedByChains,
    GetVAnchorsTotalValueLockedByChain,
    GetVAnchorsTotalValueLockedByChains,
    GetVAnchorTotalValueLockedByChainAndByToken,
    GetVAnchorTotalValueLockedByChainsAndByToken,
    GetVAnchorTotalValueLockedByChain15MinsInterval,
    GetVAnchorTotalValueLockedByChains15MinsInterval,
    GetVAnchorsTotalValueLockedByChain15MinsInterval,
    GetVAnchorsTotalValueLockedByChains15MinsInterval,
    GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval,
    GetVAnchorTotalValueLockedByChainsAndByToken15MinsInterval,
    GetVAnchorTotalValueLockedByChainDayInterval,
    GetVAnchorTotalValueLockedByChainsDayInterval,
    GetVAnchorsTotalValueLockedByChainDayInterval,
    GetVAnchorsTotalValueLockedByChainsDayInterval,
    GetVAnchorTotalValueLockedByChainAndByTokenDayInterval,
    GetVAnchorTotalValueLockedByChainsAndByTokenDayInterval,
  },
};

export default result;
