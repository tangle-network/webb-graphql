import type { SubstrateExtrinsic } from "@subql/types"
import type { Extrinsic } from "@polkadot/types/interfaces"
import type { Codec } from "@polkadot/types-codec/types"

export interface CallInfo {
  module: string
  method: string
  args: Record<string, Codec>
}

/**
 *
 * @param extrinsic
 * @returns array of calls inside the extrinsic, each call contains `module`, `method`, and `args`
 */
export function getInsideCalls(extrinsic: SubstrateExtrinsic): CallInfo[] {
  const extrinsics = extrinsic.extrinsic.args.map(
    (value) => value
  ) as Extrinsic[]

  return extrinsics.map((ex) => {
    const { method, section } = ex.registry.findMetaCall(ex.callIndex)
    const params = ex.meta.args.map((m) => m.name.toString())
    const values = ex.args.map((v) => v)
    const args = params.reduce((prev, current, idx) => {
      prev[current] = values[idx]
      return prev
    }, {} as Record<string, Codec>)

    return {
      method,
      module: section,
      args,
    }
  })
}
