import '@webb-tools/tangle-substrate-types';
import { SubstrateExtrinsic } from '@subql/types';

export * from './block';
export * from './claim';
export * from './event';
export * from './extrinsic';
export * from './identity';
export * from './jobs';
export * from './profile';
export * from './sudo';

export type ModuleHandlerArgs = {
  extrinsic: SubstrateExtrinsic;
};
