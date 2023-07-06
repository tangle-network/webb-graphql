import { SubgaraphNames } from '../config';
import { GetTotalValueLocked } from './queries/VAnchor'

async function main() {
    const value: number = await GetTotalValueLocked(SubgaraphNames[0], "0x4b09f48cecd2b15a7d1756284369e17db5f70d2b");
    console.table(value)
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})