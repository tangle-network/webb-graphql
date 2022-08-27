import { SubstrateEvent } from "@subql/types"
import { DKGMetaDataSection, DKGSections } from "../type"

import { PalletDkgMetadataEvent } from "@polkadot/types/lookup"
export async function dkgMetaDataEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGMetaData) {
    logger.error(
      `dkgProposalsEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGMetaData`
    )
    return
  }

  const method = event.event.method as DKGMetaDataSection
  const dkgEvent = (event as unknown) as PalletDkgMetadataEvent
  const eventRoot = api.registry.createType("PalletDkgMetadataEvent", event)
  const eventRoot1 = api.registry.createType("PalletDkgMetadataEvent", event)
  logger.info(`DKGEventType eventRoot :${eventRoot1.type}`)
  logger.info(`DKGEventType eventRoot1 :${eventRoot1.type}`)
  switch (method) {
    case DKGMetaDataSection.PublicKeySubmitted:
      break
    case DKGMetaDataSection.NextPublicKeySubmitted:
      {
        const nextPublicKey = dkgEvent.asNextPublicKeySubmitted
        logger.info(`DKGEventType :${dkgEvent.type}`)
        const compressedKey = nextPublicKey.compressedPubKey.toHex()
        const unCompressedKey = nextPublicKey.uncompressedPubKey.toHex()
        logger.info(
          `NextPublicKeySubmitted: Next Public Key compressedKey => ${compressedKey} & uncompressedPubKey => ${unCompressedKey}`
        )
      }
      break
    case DKGMetaDataSection.NextPublicKeySignatureSubmitted:
      break
    case DKGMetaDataSection.PublicKeyChanged:
      {
        const nextPublicKey = dkgEvent.asPublicKeyChanged
        const compressedKey = nextPublicKey.compressedPubKey.toHex()
        const unCompressedKey = nextPublicKey.uncompressedPubKey.toHex()
        logger.info(
          `PublicKeyChanged: Next Public Key compressedKey => ${compressedKey} & uncompressedPubKey => ${unCompressedKey}`
        )
      }
      break
    case DKGMetaDataSection.PublicKeySignatureChanged:
      break
    case DKGMetaDataSection.MisbehaviourReportsSubmitted:
      break
    case DKGMetaDataSection.RefreshKeysFinished:
      break
  }
}
