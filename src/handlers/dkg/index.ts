import { SubstrateEvent } from "@subql/types"
import { DKGSections } from "./type"
import { dkgMetaDataEventHandler } from "./dkgMetaData/eventHandler"
import { dkgProposalEventHandler } from "./dkgProposals/eventHandler"
import { dkgProposalHandlerEventHandler } from "./dkgProposalHandler/eventHandler"
export async function handleDkgEvents(event: SubstrateEvent) {
  const section = event.event.section as DKGSections
  switch (section) {
    case DKGSections.DKGMetaData:
      return dkgMetaDataEventHandler(event)
    case DKGSections.DKGProposals:
      return dkgProposalEventHandler(event)
    case DKGSections.DKGProposalHandler:
      return dkgProposalHandlerEventHandler(event)
    default:
      logger.info(`dkgEventHandler:Invalid (${event.event.section}) `)
  }
}
