import { SubstrateEvent } from "@subql/types"
import { DKGProposalHandlerSection, DKGSections } from "../type"
import "@webb-tools/types"
import { EventDecoder } from "../../../utils"
import { DKGProposalHandlerEvent } from "./types"
import { StorageKey } from "@polkadot/types"
import {
  DkgRuntimePrimitivesProposalDkgPayloadKey,
  WebbProposalsHeaderTypedChainId,
} from "@polkadot/types/lookup"

export async function dkgProposalHandlerEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposalHandler) {
    logger.error(
      `dkgProposalHandlerEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposalHandler`
    )
    return
  }
  const method = event.event.method as DKGProposalHandlerSection
  const eventDecoder = new EventDecoder<DKGProposalHandlerEvent>(event)
  switch (method) {
    case DKGProposalHandlerSection.InvalidProposalSignature:
      break
    case DKGProposalHandlerSection.ProposalSigned:
      {
        const eventData = eventDecoder.as(
          DKGProposalHandlerSection.ProposalSigned
        )
        const proposalKey = eventData.key
        const proposalData = eventData.data
        const signature = eventData.signature
        const targetChainId = eventData.targetChain
        const id = proposalKey.toHex()

        const storeKey = (api.registry.createType(
          "StorageKey<[WebbProposalsHeaderTypedChainId,DkgRuntimePrimitivesProposalDkgPayloadKey>",
          [targetChainId, proposalKey]
        ) as unknown) as StorageKey<
          [
            WebbProposalsHeaderTypedChainId,
            DkgRuntimePrimitivesProposalDkgPayloadKey
          ]
        >

        logger.info(
          `DKGProposalHandlerSection.ProposalSigned: ${eventData.toString()} storageId: ${storeKey.toString()}`
        )
      }
      break
  }
}

/*
*
*
			const storeKey = api.registry
				.createType<StorageKey<[WebbProposalsHeaderTypedChainId, DkgRuntimePrimitivesProposalDkgPayloadKey]>>
				("StorageKey<[WebbProposalsHeaderTypedChainId,DkgRuntimePrimitivesProposalDkgPayloadKey>", [targetChainId, proposalKey])

			console.log({
				stringId: storeKey?.toString()
			});
* */
