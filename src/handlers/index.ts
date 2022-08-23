import { SubstrateExtrinsic } from "@subql/types"
import { Extrinsic } from "../types"
import { CallInfo } from "../utils"

export * from "./account"
export * from "./block"
export * from "./event"
export * from "./extrinsic"
export * from "./sudo"
export * from "./dkg/publicKey"
export * from "./dkgProposals/proposerThreshold"

export type ModuleHandlerArgs = {
  call: CallInfo
  extrinsic: SubstrateExtrinsic
}
