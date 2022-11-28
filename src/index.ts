import '@polkadot/api-augment';
import { DKGMethod, KeygenThresholdArgs, SignatureThresholdArgs } from './handlers/dkg/dkgMetaData/types';
import { ensureSource } from './handlers/source';
// eslint-disable-next-line @typescript-eslint/no-floating-promises
ensureSource('0').then(() => {
  logger.info('Source created');
});
//Exports all handler functions
export * from './mappings/mappingHandlers';

/**
 * System module and method
 */
export const ModuleMethods = {
  dkg: DKGMethod,
};

/**
 * The module type
 */
export type Module = keyof typeof ModuleMethods;

/**
 * Union type of multiple modules methods
 */
export type Method = DKGMethod;

/**
 * Union type of multiple methods arguments
 */
export type Args = SignatureThresholdArgs | KeygenThresholdArgs;
