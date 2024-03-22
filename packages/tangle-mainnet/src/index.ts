import { ensureSource } from './handlers/source';
// eslint-disable-next-line @typescript-eslint/no-floating-promises
ensureSource('0').then(() => {
  logger.info('Source created');
});
//Exports all handler functions
export * from './mappings/mappingHandlers';
