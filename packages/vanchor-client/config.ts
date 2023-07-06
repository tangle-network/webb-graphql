import { getBuiltGraphSDK } from "./.graphclient";

export const SubgaraphNames = ['VAnchorAthenaLocal', 'VAnchorHermesLocal', 'VAnchorDemeterLocal'];

export const getSdk = () => {
    const sdk = getBuiltGraphSDK({
        chainName: SubgaraphNames[0], //Default value, this can be overridden in the context
    })
    return sdk;
}