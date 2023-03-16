import { SubstrateExtrinsic } from '@subql/types';
import { ensureBlock } from '../../block';
import { KeygenThreshold } from '../../../types';
import { KeygenThresholdArgs } from './types';

export async function ensureKeygenThreshold(extrinsic: SubstrateExtrinsic) {
  const block = await ensureBlock(extrinsic.block.block.header.number.toString());

  const recordId = `${block.id}-${extrinsic.idx}`;
  const data = new KeygenThreshold(recordId);

  data.blockId = block.id;

  await data.save();

  return data;
}

export async function createKeygenThreshold(extrinsic: SubstrateExtrinsic, args: KeygenThresholdArgs) {
  const data = await ensureKeygenThreshold(extrinsic);

  const pendingThreshold = args.newThreshold;
  const currentThreshold = await api.query.dkg.keygenThreshold();
  const nextThreshold = await api.query.dkg.nextKeygenThreshold();

  data.pending = parseInt(pendingThreshold.toString());
  data.current = parseInt(currentThreshold.toString());
  data.next = parseInt(nextThreshold.toString());

  await data.save();

  return data;
}
