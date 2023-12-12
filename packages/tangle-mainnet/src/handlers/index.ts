import '@webb-tools/tangle-substrate-types';
import { SubstrateExtrinsic } from '@subql/types';

export * from './account';
export * from './block';
export * from './event';
export * from './extrinsic';
export * from './sudo';

export type ModuleHandlerArgs = {
  extrinsic: SubstrateExtrinsic;
};
