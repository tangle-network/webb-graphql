import { SubstrateExtrinsic } from '@subql/types';
import { Extrinsic } from '../types';
import { ensureAccount } from './account';
import { ensureBlock } from './block';

export async function ensureExtrinsic(extrinsic: SubstrateExtrinsic): Promise<Extrinsic> {
  const block = await ensureBlock(extrinsic.block.block.header.number.toString());

  const index = extrinsic.idx;
  const recordId = `${block.id}-${index}`;
  let data = await Extrinsic.get(recordId);

  if (!data) {
    data = new Extrinsic(recordId);
    data.hash = extrinsic.extrinsic.hash.toString();
    data.blockId = block.id;
    data.blockNumber = block.number;
    data.index = index;
    await data.save();
  }

  return data;
}

export async function createExtrinsic(extrinsic: SubstrateExtrinsic) {
  const extrincsic = await ensureExtrinsic(extrinsic);

  const isSigned = extrinsic.extrinsic.isSigned;
  extrincsic.isSigned = isSigned;

  if (isSigned) {
    const signerAccount = extrinsic.extrinsic.signer.toString();
    const signer = await ensureAccount(signerAccount);
    extrincsic.signerId = signer.id;
  }

  extrincsic.arguments = extrinsic.extrinsic.args.toString();
  extrincsic.module = extrinsic.extrinsic.method.section;
  extrincsic.method = extrinsic.extrinsic.method.method;
  extrincsic.isSuccess = extrinsic.success;

  await extrincsic.save();

  return extrincsic;
}
