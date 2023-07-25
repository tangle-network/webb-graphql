// @ts-ignore
import { getBuiltGraphSDK } from "../.graphclient";
import { SubgraphUrl } from "./config";

export const getSdk = () => {
    const sdk = getBuiltGraphSDK({
        subgraphUrl: SubgraphUrl.vAnchorAthenaLocal, //Default value, this can be overridden in the context
    })
    return sdk;
}


export const executeQuery = async (query: Function, options: {
    subgraphUrl: SubgraphUrl,
}) => {
    return query(
        {},
        {
            subgraphUrl: options.subgraphUrl,
        },
    )
}

export const executeQueryOnAllChains = async (query: Function) => {

    const promises = Object.values(SubgraphUrl).map(async (subgraphUrl) => {

        return executeQuery(query, {
            subgraphUrl,
        });
    });

    return await Promise.all(promises);

}


