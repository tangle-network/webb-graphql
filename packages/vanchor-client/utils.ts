import { getBuiltGraphSDK } from "./.graphclient";
import { SubgaraphNames } from "./config";

export const getSdk = () => {
    const sdk = getBuiltGraphSDK({
        chainName: SubgaraphNames[0], //Default value, this can be overridden in the context
    })
    return sdk;
}

export const executeQuery = async (query: Function) => {

    const promises = SubgaraphNames.map(async (chainName) => {

        return query(
            {},
            {
                chainName: chainName,
            },
        )
    });

    return await Promise.all(promises);

}