import type { Codec } from "@polkadot/types-codec/types"
import type { Extrinsic } from "@polkadot/types/interfaces"
import type { SubstrateExtrinsic } from "@subql/types"
import { Args, Method, Module } from ".."

export interface CallInfo {
  module: Module
  method: Method
  args: Args
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
    }, {} as Args)

    return {
      method: method as Method,
      module: section as Module,
      args,
    }
  })
}
