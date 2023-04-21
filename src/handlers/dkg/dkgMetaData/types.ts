/* eslint-disable @typescript-eslint/no-var-requires */
import type { Codec } from '@polkadot/types-codec/types';
const { PalletDkgMetadataEvent } = require('@webb-tools/dkg-substrate-types/interfaces/lookup');
import { Struct, u16 } from '@polkadot/types-codec';

export enum DKGMethod {
  SIGNATURE_THRESHOLD = 'setSignatureThreshold',
  KEYGEN_THRESHOLD = 'setKeygenThreshold',
}

export interface SignatureThresholdArgs {
  newThreshold: Codec;
}

export interface KeygenThresholdArgs {
  newThreshold: Codec;
}

export type DKGMetaDataEvent = {
  PublicKeySubmitted: (typeof PalletDkgMetadataEvent)['asPublicKeySubmitted'];
  NextPublicKeySubmitted: (typeof PalletDkgMetadataEvent)['asNextPublicKeySubmitted'];
  NextPublicKeySignatureSubmitted: (typeof PalletDkgMetadataEvent)['asNextPublicKeySignatureSubmitted'] &
    (typeof PalletDkgMetadataEvent)['asPublicKeySubmitted'];
  PublicKeyChanged: (typeof PalletDkgMetadataEvent)['asPublicKeyChanged'];
  PublicKeySignatureChanged: (typeof PalletDkgMetadataEvent)['asPublicKeySignatureChanged'] &
    (typeof PalletDkgMetadataEvent)['asPublicKeySubmitted'];
  MisbehaviourReportsSubmitted: (typeof PalletDkgMetadataEvent)['asMisbehaviourReportsSubmitted'];
  RefreshKeysFinished: (typeof PalletDkgMetadataEvent)['asRefreshKeysFinished'];
  NextKeygenThresholdUpdated: Struct & {
    nextKeygenThreshold: u16;
  };
  NextSignatureThresholdUpdated: Struct & {
    nextSignatureThreshold: u16;
  };
};
