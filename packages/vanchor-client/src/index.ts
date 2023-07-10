import { SubgaraphNames } from '../config';
import { GetVAnchorTotalValueLockedByChain, GetVAnchorTotalValueLockedByChainAndByToken, GetVAnchorsTotalValueLockedByChain, GetVAnchorsTotalValueLockedByChains } from './queries/TotalValueLocked'

async function main() {
    // console.table(await GetVAnchorTotalValueLockedByChainAndByToken(SubgaraphNames[0], "0x2b5c3cc8fcea8a7efc86e56bbfd9fcc9cdff215e", "ETH"))

    // console.table(await GetVAnchorsTotalValueLockedByChains([SubgaraphNames[0]], ["0x2b5c3cc8fcea8a7efc86e56bbfd9fcc9cdff215e"]))

}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})