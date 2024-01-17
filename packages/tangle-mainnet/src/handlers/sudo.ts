import { SubstrateExtrinsic } from '@subql/types';
import { createExtrinsic } from './extrinsic';

export async function createSudoCall(extrinsic: SubstrateExtrinsic) {
  await createExtrinsic(extrinsic);
}
