import { SubstrateEvent } from "@subql/types"
import { DKGMetaDataSection, DKGSections } from "../type"

export async function dkgMetaDataEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGMetaData) {
    logger.error(
      `dkgProposalsEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGMetaData`
    )
    return
  }
  const method = event.event.method as DKGMetaDataSection
  switch (method) {
    case DKGMetaDataSection.PublicKeySubmitted:
      break
    case DKGMetaDataSection.NextPublicKeySubmitted:
      break
    case DKGMetaDataSection.NextPublicKeySignatureSubmitted:
      break
    case DKGMetaDataSection.PublicKeyChanged:
      break
    case DKGMetaDataSection.PublicKeySignatureChanged:
      break
    case DKGMetaDataSection.MisbehaviourReportsSubmitted:
      break
    case DKGMetaDataSection.RefreshKeysFinished:
      break
  }
}
