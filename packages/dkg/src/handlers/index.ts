import '@webb-tools/tangle-substrate-types';
import { SubstrateExtrinsic } from '@subql/types';
import { CallInfo } from '../utils';

export * from './account';
export * from './block';
export * from './event';
export * from './extrinsic';
export * from './sudo';
export * from './dkg';
export type ModuleHandlerArgs = {
  call: CallInfo;
  extrinsic: SubstrateExtrinsic;
};
