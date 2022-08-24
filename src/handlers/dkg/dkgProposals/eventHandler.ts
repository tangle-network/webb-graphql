import { SubstrateEvent } from "@subql/types"
import {
  DKGMetaDataSection,
  DKGProposalHandlerSection,
  DKGSections,
} from "../type"

export async function dkgProposalEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposals) {
    logger.error(
      `dkgProposalEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposals`
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
