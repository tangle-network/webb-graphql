import { SubstrateExtrinsic } from '@subql/types';
import { getInsideCalls } from '../utils';
import { createExtrinsic } from './extrinsic';
import { dkgHandler } from './dkg/dkgMetaData/handler';

export async function createSudoCall(extrinsic: SubstrateExtrinsic) {
  await createExtrinsic(extrinsic);

  const insideCalls = getInsideCalls(extrinsic);

  await Promise.all(
    insideCalls.map(async (call) => {
      switch (call.module) {
        case 'dkg': {
          await dkgHandler({ call, extrinsic });
          break;
        }

        default:
          break;
      }
    })
  );
}
