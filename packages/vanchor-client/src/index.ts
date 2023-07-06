import { GetTotalValueLocked } from './queries/SchieldedTransactions'

async function main() {
    const value: number = await GetTotalValueLocked();
    console.table(value)
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})