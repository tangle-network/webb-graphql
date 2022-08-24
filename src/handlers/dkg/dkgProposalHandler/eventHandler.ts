import { SubstrateEvent } from "@subql/types"
import {
  DKGMetaDataSection,
  DKGProposalHandlerSection,
  DKGSections,
} from "../type"

export async function dkgProposalHandlerEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposalHandler) {
    logger.error(
      `dkgProposalHandlerEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposalHandler`
    )
    return
  }
  const method = event.event.method as DKGProposalHandlerSection
  switch (method) {
    case DKGProposalHandlerSection.InvalidProposalSignature:
      break
    case DKGProposalHandlerSection.ProposalSigned:
      break
  }
}
