import { SubstrateEvent } from "@subql/types"
import { DKGMetaDataSection, DKGSections } from "../type"
import { EventDecoder } from "../../../utils"
import { DKGMetaDataEvent } from "./types"
import { createPublicKey } from "./publicKey"
import { u16, Vec } from "@polkadot/types-codec"
import { DkgRuntimePrimitivesCryptoPublic } from "@polkadot/types/lookup"
import { ITuple } from "@polkadot/types-codec/types"
import { createOrUpdateSession } from "../../session"
import { DKGAuthority } from "../../../types"
import { AbstractInt } from "@polkadot/types-codec/abstract/Int"

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
    case DKGMetaDataSection.PublicKeySubmitted: {
      const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeySubmitted)
      logger.info(
        `PublicKeySubmitted compressedPubKey: ${eventData.uncompressedPubKey} , uncompressedPubKey: ${eventData.uncompressedPubKey}`
      )
    }
      break
    case DKGMetaDataSection.NextPublicKeySubmitted: {
      const eventData = eventDecoded.as(
        DKGMetaDataSection.NextPublicKeySubmitted
      )
      logger.info(
        `NextPublicKeySubmitted compressedPubKey: ${eventData.compressedPubKey} , uncompressedPubKey: ${eventData.uncompressedPubKey}`
      )
    }
      break
    case DKGMetaDataSection.NextPublicKeySignatureSubmitted: {
      const eventData = eventDecoded.as(
        DKGMetaDataSection.NextPublicKeySignatureSubmitted
      )
      logger.info(
        `NextPublicKeySignatureSubmitted pubKeySig: ${eventData.pubKeySig.toString()} `
      )
    }
      break
    case DKGMetaDataSection.PublicKeyChanged: {
      const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeyChanged)
      await createPublicKey({
        compressed: eventData.compressedPubKey.toString(),
        uncompressed: eventData.uncompressedPubKey.toString(),
        blockNumber: eventDecoded.blockNumber
      })
    }
      break
    case DKGMetaDataSection.PublicKeySignatureChanged: {
      const eventData = eventDecoded.as(
        DKGMetaDataSection.PublicKeySignatureChanged
      )
      logger.info(
        `PublicKeySignatureChanged pubKeySig: ${eventData.pubKeySig.toString()} `
      )
    }
      break
    case DKGMetaDataSection.MisbehaviourReportsSubmitted: {
      const eventData = eventDecoded.as(
        DKGMetaDataSection.MisbehaviourReportsSubmitted
      )

      const blockNumber = eventDecoded.blockNumber

      const authorities: Vec<DkgRuntimePrimitivesCryptoPublic> = await api.query.dkg.authorities()
      const nextAuthorities: Vec<DkgRuntimePrimitivesCryptoPublic> = await api.query.dkg.nextAuthorities()

      const bestAuthorities: Vec<ITuple<[u16, DkgRuntimePrimitivesCryptoPublic]>> = await api.query.dkg.bestAuthorities()
      const nextBestAuthorities: Vec<ITuple<[u16, DkgRuntimePrimitivesCryptoPublic]>> = await api.query.dkg.nextBestAuthorities()

      const authorityReputations = await api.query.dkg.authorityReputations.entries()
      const currentAuthoritiesAccounts = await api.query.dkg.accountToAuthority.entries()
      // Acount32 => auth Id
      const authorityId: Record<string, string> = {}
      // auth Id => auth reputation
      const authorityReputation: Record<string, string> = {}

      currentAuthoritiesAccounts.forEach(([key, val]) => {
        authorityId[key.args[0].toString().replace("0x", "")] = val.toString().replace("0x", "")
      })
      authorityReputations.forEach(([key, val]) => {
        authorityReputation[key.args[0].toString().replace("0x", "")] = val.toString()
      })


      const dkgAuthorityMapper = (id: DkgRuntimePrimitivesCryptoPublic) => {
        const accountId = id.toString().replace("0x", "")
        const authorityId = authorityId[accountId]
        return {
          accountId,
          reputation: authorityReputations[authorityId]
          authorityId
        }
      }
      const dkgAuthorities: DKGAuthority[] = authorities.map(dkgAuthorityMapper)
      const nextDkgAuthorities: DKGAuthority[] = nextAuthorities.map(dkgAuthorityMapper)
      const bestDkgAuthorities: DKGAuthority[] = bestAuthorities.sort((a, b) => {
        const aOrder = (a[0] as AbstractInt).toNumber()
        const bOrder = (b[0] as AbstractInt).toNumber()
        return aOrder > bOrder ? 1 : aOrder < bOrder ? -1 : 0
      }).map(([order, key]) => {
        return dkgAuthorityMapper(key)
      })

      const nextBestDkgAuthorities: DKGAuthority[] = nextBestAuthorities.sort((a, b) => {
        const aOrder = (a[0] as AbstractInt).toNumber()
        const bOrder = (b[0] as AbstractInt).toNumber()
        return aOrder > bOrder ? 1 : aOrder < bOrder ? -1 : 0
      }).map(([order, key]) => {
        return dkgAuthorityMapper(key)
      })

      await createOrUpdateSession({
        blockId: blockNumber,
        authorities: dkgAuthorities,
        nextAuthorities: nextDkgAuthorities,
        bestAuthorities: bestDkgAuthorities,
        nextBestAuthorities: nextBestDkgAuthorities
      })

    }
      break
    case DKGMetaDataSection.RefreshKeysFinished: {
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
