import type { Codec } from "@polkadot/types-codec/types"

export enum DKGMethod {
  SIGNATURE_THRESHOLD = "setSignatureThreshold",
  KEYGEN_THRESHOLD = "setKeygenThreshold",
}

export interface SignatureThresholdArgs {
  newThreshold: Codec
}

export interface KeygenThresholdArgs {
  newThreshold: Codec
}
