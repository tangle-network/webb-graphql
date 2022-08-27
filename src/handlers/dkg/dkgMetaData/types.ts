import type { Codec } from "@polkadot/types-codec/types"
import { PalletDkgMetadataEvent } from "@polkadot/types/lookup"

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

export type DKGMetaDataEvent = {
  PublicKeySubmitted: PalletDkgMetadataEvent["asPublicKeySubmitted"]
  NextPublicKeySubmitted: PalletDkgMetadataEvent["asNextPublicKeySubmitted"]
  NextPublicKeySignatureSubmitted: PalletDkgMetadataEvent["asNextPublicKeySignatureSubmitted"]
  PublicKeyChanged: PalletDkgMetadataEvent["asPublicKeyChanged"]
  PublicKeySignatureChanged: PalletDkgMetadataEvent["asPublicKeySignatureChanged"]
  MisbehaviourReportsSubmitted: PalletDkgMetadataEvent["asMisbehaviourReportsSubmitted"]
  RefreshKeysFinished: PalletDkgMetadataEvent["asRefreshKeysFinished"]
}
