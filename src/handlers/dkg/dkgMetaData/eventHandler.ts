import { SubstrateEvent } from "@subql/types"
import { DKGMetaDataSection, DKGSections } from "../type"
import { EventDecoder } from "../../../utils"
import { DKGMetaDataEvent } from "./types"
import { createPublicKey, keyGenerated } from "./publicKey"
import {
  createOrUpdateSession,
  fetchSessionAuthorizes,
  nextSession,
  setSessionKey,
} from "../../session"

/**
 *
 * <b> Public key event sequence <b/>
 *  NextPublicKeySubmitted (For next session)-> NextPublicKeySig  -> PublicKeyChanged (For current session)
 * */
export const dkgMetaDataEventHandler = async (event: SubstrateEvent) => {
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
          `PublicKeySubmitted
			compressedPubKey: ${eventData.compressedPubKey}
			blockNumber: ${eventDecoded.blockNumber}
			uncompressedPubKey: ${eventData.uncompressedPubKey}`
        )
      }
      break
    case DKGMetaDataSection.NextPublicKeySubmitted:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.NextPublicKeySubmitted
        )
        const nextSessionId = nextSession(eventDecoded.blockNumber)
        const key = await keyGenerated({
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          uncompressedPubKey: eventData.uncompressedPubKey.toString(),
        })
        await setSessionKey(nextSessionId, key.id)
        logger.info(
          `NextPublicKeySubmitted
			compressedPubKey: ${eventData.compressedPubKey}
			blockNumber: ${eventDecoded.blockNumber}
			uncompressedPubKey: ${eventData.uncompressedPubKey}
			`
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
          `PublicKeyChanged
			compressedPubKey: ${eventData.compressedPubKey}
			blockNumber: ${eventDecoded.blockNumber}
			uncompressedPubKey: ${eventData.uncompressedPubKey}
			`
        )

        await createPublicKey({
          compressed: eventData.compressedPubKey.toString(),
          uncompressed: eventData.uncompressedPubKey.toString(),
          blockNumber: eventDecoded.blockNumber,
        })
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
        const blockNumber = eventDecoded.blockNumber
        const sessionAuthorities = await fetchSessionAuthorizes(blockNumber)

        await createOrUpdateSession({
          ...sessionAuthorities,
        })
      }
      break
    case DKGMetaDataSection.MisbehaviourReportsSubmitted:
      {
        const blockNumber = eventDecoded.blockNumber

        const sessionAuthorities = await fetchSessionAuthorizes(blockNumber)

        await createOrUpdateSession({
          ...sessionAuthorities,
        })
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
    case DKGMetaDataSection.NextSignatureThresholdUpdated:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.NextSignatureThresholdUpdated
        )
        logger.info(
          `NextSignatureThresholdUpdated nextSignatureThreshold: ${eventData.nextSignatureThreshold} `
        )
      }
      break
    case DKGMetaDataSection.NextKeygenThresholdUpdated:
      {
        const eventData = eventDecoded.as(
          DKGMetaDataSection.NextKeygenThresholdUpdated
        )
        logger.info(
          `NextKeygenThresholdUpdated nextKeygenThreshold: ${eventData.nextKeygenThreshold} `
        )
      }
      break
  }
}
