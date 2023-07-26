import { SubstrateEvent } from '@subql/types';
import { DKGProposalHandlerSection, DKGSections } from '../type';
import { EventDecoder } from '../../../utils';
import { DKGProposalHandlerEvent } from './types';


export async function dkgProposalHandlerEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposalHandler) {
    logger.error(
      `dkgProposalHandlerEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposalHandler`
    );
    return;
  }

  const method = event.event.method as DKGProposalHandlerSection;

  const eventDecoder = new EventDecoder<DKGProposalHandlerEvent>(event);

  switch (method) {
    case DKGProposalHandlerSection.InvalidProposalBatchSignature:
      break;
    case DKGProposalHandlerSection.ProposalAdded:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalAdded);

        logger.info(`Unsigned Proposal Added 🔵: data:${eventData.data.toString()}`);
      }
      break;
    case DKGProposalHandlerSection.ProposalBatchRemoved:
      break;
    case DKGProposalHandlerSection.ProposalBatchExpired:
      break;
    case DKGProposalHandlerSection.ProposalBatchSigned:
      break;
  }
}
