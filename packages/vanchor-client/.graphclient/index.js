import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from '@graphql-mesh/cache-localforage';
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from '@graphql-mesh/graphql';
import { parse } from 'graphql';
import BareMerger from '@graphql-mesh/merger-bare';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from './sources/vanchor/introspectionSchema.js';
import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(
  pathModule.dirname(fileURLToPath(import.meta.url)),
  '..'
);
const importFn = (moduleId) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '');
  switch (relativeModuleId) {
    case '.graphclient/sources/vanchor/introspectionSchema.js':
      return Promise.resolve(importedModule$0);
    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`)
      );
  }
};
const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: 'js',
  }),
  {
    readonly: true,
    validate: false,
  }
);
export const rawServeConfig = undefined;
export async function getMeshOptions() {
  const pubsub = new PubSub();
  const sourcesStore = rootStore.child('sources');
  const logger = new DefaultLogger('GraphClient');
  const cache = new MeshCache({
    ...{},
    importFn,
    store: rootStore.child('cache'),
    pubsub,
    logger,
  });
  const sources = [];
  const transforms = [];
  const additionalEnvelopPlugins = [];
  const vanchorTransforms = [];
  const vanchorHandler = new GraphqlHandler({
    name: 'vanchor',
    config: {
      endpoint:
        '{context.subgraphUrl:http://localhost:8000/subgraphs/name/VAnchorAthenaLocal}',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('vanchor'),
    logger: logger.child('vanchor'),
    importFn,
  });
  sources[0] = {
    name: 'vanchor',
    handler: vanchorHandler,
    transforms: vanchorTransforms,
  };
  const additionalTypeDefs = [
    parse('extend type ShieldedTransaction {\n  subgraphUrl: String!\n}'),
  ];
  const additionalResolvers = await Promise.all([
    import('../src/resolvers.ts').then((m) => m.resolvers || m.default || m),
  ]);
  const merger = new BareMerger({
    cache,
    pubsub,
    logger: logger.child('bareMerger'),
    store: rootStore.child('bareMerger'),
  });
  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [];
    },
    fetchFn,
  };
}
export function createBuiltMeshHTTPHandler() {
  return createMeshHTTPHandler({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  });
}
let meshInstance$;
export function getBuiltGraphClient() {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh(meshOptions))
      .then((mesh) => {
        const id = mesh.pubsub.subscribe('destroy', () => {
          meshInstance$ = undefined;
          mesh.pubsub.unsubscribe(id);
        });
        return mesh;
      });
  }
  return meshInstance$;
}
export const execute = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args));
export const subscribe = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
