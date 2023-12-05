import { SubstrateExtrinsic } from '@subql/types';
// import { getInsideCalls } from '../utils';
import { createExtrinsic } from './extrinsic';

export async function createSudoCall(extrinsic: SubstrateExtrinsic) {
  await createExtrinsic(extrinsic);

  // const insideCalls = getInsideCalls(extrinsic);
}
