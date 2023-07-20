
import { GetVAnchorTotalValueLockedByChain, GetVAnchorTotalValueLockedByChainAndByToken, GetVAnchorsTotalValueLockedByChain, GetVAnchorsTotalValueLockedByChains } from './queries/TotalValueLocked'
import { GetVAnchorTotalValueLockedByChainHistory, GetVAnchorTotalValueLockedByChainAndByTokenHistory, GetVAnchorsTotalValueLockedByChainHistory, GetVAnchorsTotalValueLockedByChainsHistory } from './queries/TotalValueLockedHistory'
import { GetVAnchorDepositByChain, GetVAnchorDepositByChainAndByToken, GetVAnchorsDepositByChain, GetVAnchorsDepositByChains } from './queries/Deposit'
import { GetVAnchorDepositByChainHistory, GetVAnchorDepositByChainAndByTokenHistory, GetVAnchorsDepositByChainHistory, GetVAnchorsDepositByChainsHistory } from './queries/DepositHistory'
import { GetVAnchorWithdrawalByChain, GetVAnchorWithdrawalByChainAndByToken, GetVAnchorsWithdrawalByChain, GetVAnchorsWithdrawalByChains } from './queries/Withdrawal'
import { GetVAnchorWithdrawalByChainHistory, GetVAnchorWithdrawalByChainAndByTokenHistory, GetVAnchorsWithdrawalByChainHistory, GetVAnchorsWithdrawalByChainsHistory } from './queries/WithdrawalHistory'
import { GetVAnchorTotalRelayerFeeByChain, GetVAnchorTotalRelayerFeeByChainAndByToken, GetVAnchorsTotalRelayerFeeByChain, GetVAnchorsTotalRelayerFeeByChains } from './queries/RelayerFee'
import { GetVAnchorRelayerFeeByChainHistory, GetVAnchorRelayerFeeByChainAndByTokenHistory, GetVAnchorsRelayerFeeByChainHistory, GetVAnchorsRelayerFeeByChainsHistory } from './queries/RelayerFeeHistory'
import { GetVAnchorTotalWrappingFeeByChain, GetVAnchorTotalWrappingFeeByChainAndByToken, GetVAnchorsTotalWrappingFeeByChain, GetVAnchorsTotalWrappingFeeByChains } from './queries/WrappingFee'
import { GetVAnchorWrappingFeeByChainHistory, GetVAnchorWrappingFeeByChainAndByTokenHistory, GetVAnchorsWrappingFeeByChainHistory, GetVAnchorsWrappingFeeByChainsHistory } from './queries/WrappingFeeHistory'

const result = {
    RelayerFee: {
        GetVAnchorTotalRelayerFeeByChain, GetVAnchorTotalRelayerFeeByChainAndByToken, GetVAnchorsTotalRelayerFeeByChain, GetVAnchorsTotalRelayerFeeByChains
    },
    RelayerFeeHistory: {
        GetVAnchorRelayerFeeByChainHistory, GetVAnchorRelayerFeeByChainAndByTokenHistory, GetVAnchorsRelayerFeeByChainHistory, GetVAnchorsRelayerFeeByChainsHistory
    },
    WrappingFee: {
        GetVAnchorTotalWrappingFeeByChain, GetVAnchorTotalWrappingFeeByChainAndByToken, GetVAnchorsTotalWrappingFeeByChain, GetVAnchorsTotalWrappingFeeByChains
    },
    WrappingFeeHistory: {
        GetVAnchorWrappingFeeByChainHistory, GetVAnchorWrappingFeeByChainAndByTokenHistory, GetVAnchorsWrappingFeeByChainHistory, GetVAnchorsWrappingFeeByChainsHistory
    },
    Deposit: {
        GetVAnchorDepositByChain, GetVAnchorDepositByChainAndByToken, GetVAnchorsDepositByChain, GetVAnchorsDepositByChains
    },
    DepositHistory: {
        GetVAnchorDepositByChainHistory, GetVAnchorDepositByChainAndByTokenHistory, GetVAnchorsDepositByChainHistory, GetVAnchorsDepositByChainsHistory
    },
    Withdrawal: {
        GetVAnchorWithdrawalByChain, GetVAnchorWithdrawalByChainAndByToken, GetVAnchorsWithdrawalByChain, GetVAnchorsWithdrawalByChains
    },
    WithdrawalHistory: {
        GetVAnchorWithdrawalByChainHistory, GetVAnchorWithdrawalByChainAndByTokenHistory, GetVAnchorsWithdrawalByChainHistory, GetVAnchorsWithdrawalByChainsHistory
    },
    TotalValueLocked: {
        GetVAnchorTotalValueLockedByChain, GetVAnchorTotalValueLockedByChainAndByToken, GetVAnchorsTotalValueLockedByChain, GetVAnchorsTotalValueLockedByChains
    },
    TotalValueLockedHistory: {
        GetVAnchorTotalValueLockedByChainHistory, GetVAnchorTotalValueLockedByChainAndByTokenHistory, GetVAnchorsTotalValueLockedByChainHistory, GetVAnchorsTotalValueLockedByChainsHistory
    }
}

export default result;