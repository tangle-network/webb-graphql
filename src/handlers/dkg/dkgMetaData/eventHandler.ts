import { SubstrateEvent } from '@subql/types';
import { DKGMetaDataSection, DKGSections } from '../type';
import { EventDecoder } from '../../../utils';
import { DKGMetaDataEvent } from './types';
import { keyGenerated, updatePublicKeyStatus } from './publicKey';
import {
  createOrUpdateSession,
  currentSessionId,
  ensureSession,
  fetchSessionAuthorizes,
  nextSessionId,
  setSessionKey,
} from '../../session';
import { KeygenThreshold, SessionKeyStatus } from '../../../types';
import { ensureBlock } from '../../block';
import { getCurrentKeygenThreshold } from '../../../utils/keygenThreshold/getCurrent';
import { getCurrentSignatureThreshold } from '../../../utils/signatureThreshold/getCurrent';
import { AccountId32 } from '@polkadot/types/interfaces/runtime';
import { Vec } from '@polkadot/types-codec';

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
  const eventDecoded = new EventDecoder<DKGMetaDataEvent>(event);

  switch (method) {
    case DKGMetaDataSection.PublicKeySubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeySubmitted);
        const { sessionNumber: sessionId, sessionBlock } = await currentSessionId(eventDecoded.blockNumber);
        const uncompressedPubKey = eventData.uncompressedPubKey.toString();
        await ensureSession(sessionId, sessionBlock);
        const block = await ensureBlock(eventDecoded.blockNumber);

        const key = await keyGenerated({
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          uncompressedPubKey: uncompressedPubKey,
          timestamp: block.timestamp ?? new Date(),
        });
        await setSessionKey(sessionId, sessionBlock, key.id);
        /*        const KeygenThresholds = await getCurrentKeygenThreshold()
        const signatureThresholds = await getCurrentSignatureThreshold()
        await createOrUpdateSession({
          blockId: sessionId,
          keyGenThreshold: {
            next: KeygenThresholds.next,
            current: KeygenThresholds.current,
            pending: KeygenThresholds.pending,
          },
          signatureThreshold: {
            next: signatureThresholds.next,
            current: signatureThresholds.current,
            pending: signatureThresholds.pending,
          },
        })*/
        const authorites = await fetchSessionAuthorizes(eventDecoded.blockNumber);
        const providersAccounts: Vec<AccountId32> = (await api.query.dkgProposals.authorityProposers()) as any;
        const proposers = providersAccounts.map((i) => i.toString());
        logger.info(`Update proposers for ${sessionId} ${JSON.stringify(proposers, null, 2)}`);
        logger.info(
          `Update authorites for ${sessionId} ${JSON.stringify(
            {
              ...authorites,
              proposers,
              proposersCount: proposers.length,
            },
            null,
            2
          )}`
        );
        await createOrUpdateSession({
          ...authorites,
          proposers,
          proposersCount: proposers.length,
        });
        logger.info(
          `PublicKeySubmitted
			compressedPubKey: ${eventData.compressedPubKey}
			blockNumber: ${eventDecoded.blockNumber}
			uncompressedPubKey: ${eventData.uncompressedPubKey}`
        );
      }
      break;
    case DKGMetaDataSection.NextPublicKeySubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.NextPublicKeySubmitted);
        const { sessionNumber: sessionId, sessionBlock } = await nextSessionId(eventDecoded.blockNumber);
        const uncompressedPubKey = eventData.uncompressedPubKey.toString();
        await ensureSession(sessionId, sessionBlock);
        const block = await ensureBlock(eventDecoded.blockNumber);
        const key = await keyGenerated({
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          uncompressedPubKey: uncompressedPubKey,
          timestamp: block.timestamp ?? new Date(),
        });
        await setSessionKey(sessionId, sessionBlock, key.id);
        logger.info(
          `NextPublicKeySubmitted
			compressedPubKey: ${eventData.compressedPubKey}
			blockNumber: ${eventDecoded.blockNumber}
			uncompressedPubKey: ${eventData.uncompressedPubKey}
			`
        );
      }
      break;
    case DKGMetaDataSection.NextPublicKeySignatureSubmitted:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.NextPublicKeySignatureSubmitted);
        const blockId = eventDecoded.blockNumber;
        const block = await ensureBlock(blockId);
        await updatePublicKeyStatus({
          status: SessionKeyStatus.Signed,
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          uncompressedPubKey: eventData.uncompressedPubKey.toString(),
          timestamp: block.timestamp ?? new Date(),
        });
        logger.info(
          `NextPublicKeySignatureSubmitted
					pubKeySig: ${eventData.pubKeySig.toString()}
					compressedPubKey: ${eventData.compressedPubKey.toString()}
					uncompressedPubKey: ${eventData.uncompressedPubKey.toString()}
           `
        );
      }
      break;
    case DKGMetaDataSection.PublicKeyChanged:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeyChanged);
        logger.info(
          `PublicKeyChanged
			compressedPubKey: ${eventData.compressedPubKey}
			blockNumber: ${eventDecoded.blockNumber}
			uncompressedPubKey: ${eventData.uncompressedPubKey}
			`
        );
      }
      break;
    case DKGMetaDataSection.PublicKeySignatureChanged:
      {
        const eventData = eventDecoded.as(DKGMetaDataSection.PublicKeySignatureChanged);
        logger.info(`PublicKeySignatureChanged pubKeySig: ${eventData.pubKeySig.toString()} `);
        const blockNumber = eventDecoded.blockNumber;
        const sessionAuthorities = await fetchSessionAuthorizes(blockNumber);

        await createOrUpdateSession({
          ...sessionAuthorities,
        });
        const block = await ensureBlock(eventDecoded.blockNumber);
        await updatePublicKeyStatus({
          status: SessionKeyStatus.Rotated,
          blockNumber: eventDecoded.blockNumber,
          composedPubKey: eventData.compressedPubKey.toString(),
          uncompressedPubKey: eventData.uncompressedPubKey.toString(),
          timestamp: block.timestamp ?? new Date(),
        });
      }
      break;
    case DKGMetaDataSection.MisbehaviourReportsSubmitted:
      {
        const blockNumber = eventDecoded.blockNumber;

        const sessionAuthorities = await fetchSessionAuthorizes(blockNumber);

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
