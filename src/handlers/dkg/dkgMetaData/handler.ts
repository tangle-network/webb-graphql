import { createKeygenThreshold } from './keygenThreshold';
import { createSignatureThreshold } from './signatureThreshold';
import { ModuleHandlerArgs } from '../../index';
import { DKGMethod, KeygenThresholdArgs, SignatureThresholdArgs } from './types';
import { createOrUpdateSession, currentSessionId } from '../../session';

export async function dkgHandler({ call, extrinsic }: ModuleHandlerArgs) {
  switch (call.method as DKGMethod) {
    case DKGMethod.SIGNATURE_THRESHOLD: {
      const args: SignatureThresholdArgs = call.args;
      const data = await createSignatureThreshold(extrinsic, args);
      const blockId = extrinsic.block.block.header.number.toString();
      const { sessionNumber, sessionBlock } = await currentSessionId(blockId);
      // TODO move this to event handler after implementing events on the node side
      await createOrUpdateSession({
        blockId: sessionBlock,
        sessionId: sessionNumber,
        signatureThreshold: {
          next: data.next ? Number(data.next) : 0,
          current: data.current ? Number(data.current) : 0,
          pending: data.pending ? Number(data.pending) : 0,
        },
      });
      break;
    }

    case DKGMethod.KEYGEN_THRESHOLD: {
      const args: KeygenThresholdArgs = call.args;
      // TODO move this to event handler after implementing events on the node side

      const data = await createKeygenThreshold(extrinsic, args);
      const blockId = extrinsic.block.block.header.number.toString();
      const { sessionNumber, sessionBlock } = await currentSessionId(blockId);

      // TODO move this to event handler after implementing events on the node side
      await createOrUpdateSession({
        blockId: sessionBlock,
        sessionId: sessionNumber,
        keyGenThreshold: {
          next: data.next ? Number(data.next) : 0,
          current: data.current ? Number(data.current) : 0,
          pending: data.pending ? Number(data.pending) : 0,
        },
      });
      break;
    }

    default:
      break;
  }
}
