import { SubgraphUrl } from './config';

export const executeQuery = async (
  query: Function,
  options: {
    subgraphUrl: SubgraphUrl;
  }
) => {
  return query(
    {},
    {
      subgraphUrl: options.subgraphUrl,
    }
  );
};

export const executeQueryOnAllChains = async (query: Function) => {
  const promises = Object.values(SubgraphUrl).map(async (subgraphUrl) => {
    return executeQuery(query, {
      subgraphUrl,
    });
  });

  return await Promise.all(promises);
};
