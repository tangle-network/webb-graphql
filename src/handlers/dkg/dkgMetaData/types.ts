import type { Codec } from "@polkadot/types-codec/types"
import { PalletDkgMetadataEvent } from "@polkadot/types/lookup"
import { Bytes, Struct, u16 } from "@polkadot/types-codec"

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
  NextPublicKeySignatureSubmitted: PalletDkgMetadataEvent["asNextPublicKeySignatureSubmitted"] &
    PalletDkgMetadataEvent["asPublicKeySubmitted"]
  PublicKeyChanged: PalletDkgMetadataEvent["asPublicKeyChanged"]
  PublicKeySignatureChanged: PalletDkgMetadataEvent["asPublicKeySignatureChanged"] &
    PalletDkgMetadataEvent["asPublicKeySubmitted"]
  MisbehaviourReportsSubmitted: PalletDkgMetadataEvent["asMisbehaviourReportsSubmitted"]
  RefreshKeysFinished: PalletDkgMetadataEvent["asRefreshKeysFinished"]
  NextKeygenThresholdUpdated: Struct & {
    nextKeygenThreshold: u16
  }
  NextSignatureThresholdUpdated: Struct & {
    nextSignatureThreshold: u16
  }
}
