import { getBuiltGraphSDK } from '../.graphclient'

async function main() {
    const sdk = getBuiltGraphSDK({
        chainName: 'VAnchorAthenaLocal', // We can provide a default value here
    })
    // Second parameter is the context value
    const results = await Promise.all([
        sdk
            .ShieldedTransactions(
                {},
                {
                    chainName: 'VAnchorAthenaLocal', // And override it in here
                },
            )
            .then((data) => {
                console.log(data)
                return data.shieldedTransactions
            }),
        sdk
            .ShieldedTransactions(
                {},
                {
                    chainName: 'VAnchorDemeterLocal', // And override it in here
                },
            )
            .then((data) => {
                console.log(data)
                return data.shieldedTransactions
            }),
        sdk
            .ShieldedTransactions(
                {},
                {
                    chainName: 'VAnchorHermesLocal', // And override it in here
                },
            )
            .then((data) => {
                console.log(data)
                return data.shieldedTransactions
            })
    ])

    console.table(results.flat())
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})