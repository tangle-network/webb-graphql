import { SubstrateEvent } from '@subql/types';
import { DKGMetaDataSection, DKGSections } from '../type';
import { EventDecoder } from '../../../utils';
import { keyGenerated, updatePublicKeyStatus } from './publicKey';
import {
  createOrUpdateSession,
  currentSessionId,
  ensureSession,
  fetchSessionAuthorities,
  nextSessionId,
  setSessionKey,
} from '../../session';
import { SessionKeyStatus } from '../../../types';
import { ensureBlock } from '../../block';

/**
 *
 * <b> Public key event sequence <b/>
 *  NextPublicKeySubmitted (For next session)-> NextPublicKeySig  -> PublicKeyChanged (For current session)
 * */
export const dkgMetaDataEventHandler = async (event: SubstrateEvent) => {
  if (event.event.section !== DKGSections.DKGMetaData) {
    logger.error(`dkgProposalsEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGMetaData`);
    return;
  }

  const method = event.event.method as DKGMetaDataSection;

  const eventDecoded = new EventDecoder(event);

  switch (method) {
    case DKGMetaDataSection.PublicKeySubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeySubmitted);
        const { sessionNumber: sessionId, sessionBlock } = await currentSessionId(eventDecoded.blockNumber);
        const block = await ensureBlock(eventDecoded.blockNumber);

        await ensureSession(sessionId, sessionBlock);

        const key = await keyGenerated({
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          timestamp: block.timestamp ?? new Date(),
        });

        await setSessionKey(sessionId, sessionBlock, key.id);

        const authorites = await fetchSessionAuthorities(eventDecoded.blockNumber);

        logger.info(
          `Update authorites for ${sessionId} ${JSON.stringify(
            {
              ...authorites,
            },
            null,
            2
          )}`
        );

        await createOrUpdateSession({
          ...authorites,
        });

        logger.info(
          `PublicKeySubmitted
           compressedPubKey: ${eventData.compressedPubKey}
			     blockNumber: ${eventDecoded.blockNumber}`
        );
      }
      break;
    case DKGMetaDataSection.NextPublicKeySubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.NextPublicKeySubmitted);
        const { sessionNumber: sessionId, sessionBlock } = await nextSessionId(eventDecoded.blockNumber);
        const block = await ensureBlock(eventDecoded.blockNumber);

        await ensureSession(sessionId, sessionBlock);

        const key = await keyGenerated({
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          timestamp: block.timestamp ?? new Date(),
        });

        await setSessionKey(sessionId, sessionBlock, key.id);

        logger.info(
          `NextPublicKeySubmitted
			     compressedPubKey: ${eventData.compressedPubKey}
			     blockNumber: ${eventDecoded.blockNumber}`
        );
      }
      break;
    case DKGMetaDataSection.NextPublicKeySignatureSubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.NextPublicKeySignatureSubmitted);
        const block = await ensureBlock(eventDecoded.blockNumber);

        if (eventData.compressedPubKey) {
          await updatePublicKeyStatus({
            status: SessionKeyStatus.Signed,
            blockNumber: eventDecoded.blockNumber,
            composedPubKey: eventData.compressedPubKey.toString(),
            timestamp: block.timestamp ?? new Date(),
          });
        }

        logger.info(
          `NextPublicKeySignatureSubmitted
        	 pubKeySig: ${eventData.pubKey.toString()}
        	 `
        );
      }
      break;
    case DKGMetaDataSection.PublicKeyChanged:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeyChanged);
        const block = await ensureBlock(eventDecoded.blockNumber);

        await updatePublicKeyStatus({
          status: SessionKeyStatus.Rotated,
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          timestamp: block.timestamp ?? new Date(),
        });

        logger.info(
          `PublicKeyChanged
			     compressedPubKey: ${eventData.compressedPubKey}
			     blockNumber: ${eventDecoded.blockNumber}`
        );
      }
      break;
    case DKGMetaDataSection.PublicKeySignatureChanged:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeySignatureChanged);

        const blockNumber = eventDecoded.blockNumber;
        const sessionAuthorities = await fetchSessionAuthorities(blockNumber);

        await createOrUpdateSession({
          ...sessionAuthorities,
        });

        logger.info(
          `PublicKeySignatureChanged
        	 pubKeySig: ${eventData.signature.toString()}
        	 compressedPubKey: ${eventData.pubKey.toString()}`
        );
      }
      break;
    case DKGMetaDataSection.MisbehaviourReportsSubmitted:
      {
        const blockNumber = eventDecoded.blockNumber;

        const sessionAuthorities = await fetchSessionAuthorities(blockNumber);

        await createOrUpdateSession({
          ...sessionAuthorities,
        });
      }
      break;
    case DKGMetaDataSection.RefreshKeysFinished:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.RefreshKeysFinished);

        logger.info(`RefreshKeysFinished nextAuthoritySetId: ${eventData.nextAuthoritySetId} `);
      }
      break;
    case DKGMetaDataSection.NextSignatureThresholdUpdated:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.NextSignatureThresholdUpdated);

        logger.info(`NextSignatureThresholdUpdated nextSignatureThreshold: ${eventData.nextSignatureThreshold} `);
      }
      break;
    case DKGMetaDataSection.NextKeygenThresholdUpdated:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.NextKeygenThresholdUpdated);

        logger.info(`NextKeygenThresholdUpdated nextKeygenThreshold: ${eventData.nextKeygenThreshold} `);
      }
      break;
  }
};
