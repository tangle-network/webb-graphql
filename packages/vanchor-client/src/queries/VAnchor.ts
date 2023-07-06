import { execute } from "../../.graphclient"

export const GetTotalValueLocked = async (chainName: string, vanchorAddress: string): Promise<number> => {
  const query = `
  query TotalValueLocked {
  vanchorTotalValueLocked(id: "${vanchorAddress}"){
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorTotalValueLocked.totalValueLocked;
}