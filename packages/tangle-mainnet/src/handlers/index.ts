import '@webb-tools/tangle-substrate-types';
import { SubstrateExtrinsic } from '@subql/types';

export * from './account';
export * from './block';
export * from './claim';
export * from './event';
export * from './extrinsic';
export * from './profile';
export * from './jobs';
export * from './sudo';

export type ModuleHandlerArgs = {
  extrinsic: SubstrateExtrinsic;
};
