import { SubstrateEvent } from "@subql/types"
import { DKGMetaDataSection, DKGSections } from "../type"
import { EventDecoder } from "../../../utils"
import { DKGMetaDataEvent } from "./types"

export const dkgMetaDataEventHandler = (event: SubstrateEvent) => {
  if (event.event.section !== DKGSections.DKGMetaData) {
    logger.error(
      `dkgProposalsEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGMetaData`
    )
    return
  }

  const method = event.event.method as DKGMetaDataSection
  const eventDecoded = new EventDecoder<DKGMetaDataEvent>(event)

  switch (method) {
    case DKGMetaDataSection.PublicKeySubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeySubmitted)
        logger.info(
          `PublicKeySubmitted compressedPubKey: ${eventData.uncompressedPubKey} , uncompressedPubKey: ${eventData.uncompressedPubKey}`
        )
      }
      break
    case DKGMetaDataSection.NextPublicKeySubmitted:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.NextPublicKeySubmitted
        )
        logger.info(
          `NextPublicKeySubmitted compressedPubKey: ${eventData.compressedPubKey} , uncompressedPubKey: ${eventData.uncompressedPubKey}`
        )
      }
      break
    case DKGMetaDataSection.NextPublicKeySignatureSubmitted:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.NextPublicKeySignatureSubmitted
        )
        logger.info(
          `NextPublicKeySignatureSubmitted pubKeySig: ${eventData.pubKeySig.toString()} `
        )
      }
      break
    case DKGMetaDataSection.PublicKeyChanged:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeyChanged)
        logger.info(
          `PublicKeyChanged compressedPubKey: ${eventData.uncompressedPubKey} , uncompressedPubKey: ${eventData.uncompressedPubKey}`
        )
      }
      break
    case DKGMetaDataSection.PublicKeySignatureChanged:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.PublicKeySignatureChanged
        )
        logger.info(
          `PublicKeySignatureChanged pubKeySig: ${eventData.pubKeySig.toString()} `
        )
      }
      break
    case DKGMetaDataSection.MisbehaviourReportsSubmitted:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.MisbehaviourReportsSubmitted
        )
        logger.info(
          `MisbehaviourReportsSubmitted
          report: ${JSON.stringify(
            eventData.misbehaviourType.toHuman(),
            null,
            2
          )}
          reporters: ${eventData.reporters.map((r) => r.toString())} `
        )
      }
      break
    case DKGMetaDataSection.RefreshKeysFinished:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.RefreshKeysFinished
        )
        logger.info(
          `RefreshKeysFinished nextAuthoritySetId: ${eventData.nextAuthoritySetId} `
        )
      }
      break
  }
}
